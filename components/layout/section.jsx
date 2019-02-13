import React from 'react'
import PropTypes from 'prop-types'
import { Container as BootstrapContainer } from 'reactstrap'
import classNames from 'classnames'
import Heading from '../heading'
import Nav from '../nav'
import { boolToComponent, containerize, renderIfValid } from '../utils'

const getNavItems = childNodes =>
  childNodes
    .filter(child => child && child.props.id && child.props.navTitle)
    .map(({ props }) => ({ href: `#${props.id}`, text: props.navTitle }))

const SectionHeader = ({
  className,
  children,
  container = true,
  tag: Tag = 'header',
  ...restProps
}) => {
  const Container = boolToComponent(container, BootstrapContainer)
  const childrenCount = React.Children.count(children)

  if (childrenCount === 0) return null
  if (childrenCount === 1) return <Container>{children}</Container>

  return (
    <Tag className={classNames('section-header', className)} {...restProps}>
      <Container>{children}</Container>
    </Tag>
  )
}

const Section = ({
  title,
  navTitle,
  htmlTitle,

  heading,
  children,
  className,

  size,
  level,
  nav,
  container,
  tag: Tag,
  ...restProps
}) => {
  const Container = boolToComponent(container, BootstrapContainer)

  const sectionClassNames = classNames(
    'section',
    size && `section-${size}`,
    className
  )

  const childNodes = containerize(React.Children.toArray(children), {
    container: Container,
    level: level || 2,
  })

  const headingNode =
    heading &&
    renderIfValid(
      typeof heading == 'boolean' ? Heading : heading,
      {
        level: level || 2,
        className: 'section-title',
        key: 'heading',
      },
      title
    )

  const navNode =
    nav &&
    renderIfValid(typeof nav == 'boolean' ? Nav : nav, {
      items: getNavItems(childNodes),
    })

  return (
    <Tag className={sectionClassNames} title={htmlTitle} {...restProps}>
      <SectionHeader container={Container}>
        {headingNode}
        {navNode}
      </SectionHeader>
      {childNodes}
    </Tag>
  )
}

// eslint-react-plugin does not resolve 'elementType' prop-type
/* eslint-disable react/no-typos */

Section.propTypes = {
  title: PropTypes.node,
  navTitle: PropTypes.node,
  htmlTitle: PropTypes.string,
  nav: PropTypes.oneOfType([PropTypes.bool, PropTypes.elementType]),
  heading: PropTypes.oneOfType([PropTypes.bool, PropTypes.elementType]),
  container: PropTypes.oneOfType([PropTypes.bool, PropTypes.elementType]),
  tag: PropTypes.elementType,
  size: PropTypes.PropTypes.oneOf(['', 'sm', 'md', 'lg']),
  level: PropTypes.number,
}

Section.defaultProps = {
  title: null,
  navTitle: null,
  htmlTitle: undefined,
  nav: false,
  heading: true,
  container: true,
  tag: 'section',
  size: '',
  level: 0,
}

export default Section
