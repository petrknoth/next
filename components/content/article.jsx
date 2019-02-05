import React from 'react'
import PropTypes from 'prop-types'
import { Nav, NavItem, NavLink } from 'reactstrap'

import Section from './section'

const ArticleNav = ({ items }) => {
  if (items == null || items.length === 0) return null

  return (
    <Nav className="article-nav">
      {items.map(({ text, href }) => (
        <NavItem key={href}>
          <NavLink href={href}>{text}</NavLink>
        </NavItem>
      ))}
    </Nav>
  )
}

class Article extends Section {
  static propTypes = {
    title: PropTypes.node.isRequired,
    tag: PropTypes.node,
    nav: PropTypes.bool,
    container: PropTypes.bool,
  }

  static defaultProps = {
    tag: 'article',
    nav: false,
    container: true,
  }

  state = {
    navItems: [],
  }

  static getDerivedStateFromProps({ children }, state) {
    const navItems = React.Children.map(children, child => {
      if (child == null || !Section.isSection(child.type)) return null

      const { title, id } = child.props
      return title && id ? { text: title, href: `#${id}` } : null
    })

    return {
      ...state,
      navItems,
    }
  }

  renderNav() {
    return <ArticleNav items={this.state.navItems} />
  }

  renderHeader() {
    const { container, level = 1 } = this.props

    const heading = this.renderHeading(level)
    const navigation = this.renderNav()

    if (!heading && !navigation) return null

    const Container = Section.getContainerComponent(container)

    return (
      <Container>
        {heading}
        {navigation}
      </Container>
    )
  }

  renderContent() {
    const { children, container } = this.props
    return Section.containerize(React.Children.toArray(children), { container })
  }

  render() {
    const { className, tag: Tag, container, ...restProps } = this.props

    return (
      <Tag className={`article ${className || ''}`} {...restProps}>
        {this.renderHeader()}
        {this.renderContent()}
      </Tag>
    )
  }
}

export default Article
