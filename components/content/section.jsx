import React, { Fragment, Component } from 'react'
import { Container as BootstrapContainer } from 'reactstrap'
import classNames from 'classnames'
import Heading from '../heading'

class Section extends Component {
  static isInheritedSection(TestComponent) {
    if (typeof TestComponent != 'function') return false

    if (TestComponent === Section) return true

    for (
      let prototype = Object.getPrototypeOf(TestComponent);
      prototype;
      prototype = Object.getPrototypeOf(prototype)
    )
      if (prototype === Section) return true

    return false
  }

  static isSectionLike(component) {
    if (!React.isValidElement(component)) return false
    if (typeof component.type != 'function') return false

    if (Section.isInheritedSection(component.type)) return true

    if (React.isValidElement(component.props.children))
      return Section.isSectionLike(component.props.children)

    let child
    try {
      child = component.type(component.props)
    } catch (ignored) {
      // eslint-disable-next-line new-cap
      child = new component.type(component.props)
    }

    return Section.isSectionLike(child)
  }

  static isSection(component) {
    if (typeof component == 'function')
      return Section.isInheritedSection(component)
    if (typeof component == 'object') return Section.isSectionLike(component)
    return false
  }

  static getContainerComponent(containerProp) {
    if (typeof containerProp == 'boolean')
      return containerProp ? BootstrapContainer : Fragment

    return containerProp
  }

  static containerize(children, { container, level }) {
    const Container = Section.getContainerComponent(container)

    let containerPull = []
    const containered = children.reduce((resultPull, child, i) => {
      if (child == null) return resultPull

      const childKey =
        child.key ||
        child.props.id ||
        `${child.type.name || child.type.toString()}-${i}`

      if (Section.isSectionLike(child)) {
        if (containerPull.length > 0) {
          // eslint-disable-next-line react/no-array-index-key
          resultPull.push(
            <Container key={containerPull.map(({ type }) => type).join(',')}>
              {containerPull}
            </Container>
          )
          containerPull = []
        }

        resultPull.push(
          React.cloneElement(child, {
            key: childKey,
            container: Container,
            level: child.props.level || level + 1,
          })
        )
      } else containerPull.push(React.cloneElement(child, { key: childKey }))

      return resultPull
    }, [])

    if (containerPull.length) {
      containered.push(
        <Container key={containerPull.map(({ type }) => type).join(',')}>
          {containerPull}
        </Container>
      )
    }

    return containered
  }

  renderHeading(level = this.props.level) {
    const { heading, title } = this.props
    const headingText = typeof heading == 'undefined' ? title : heading

    return typeof headingText == 'string' ? (
      <Heading level={level} className="section-title">
        {headingText}
      </Heading>
    ) : (
      headingText
    )
  }

  render() {
    const {
      children,
      className,
      size,
      level = 2,
      container = true,
      tag: Tag = 'section',
      ...restProps
    } = this.props

    const sectionClassNames = classNames(
      'section',
      size && `section-${size}`,
      className
    )

    const heading = this.renderHeading(level)

    const childList = [heading, ...React.Children.toArray(children)]

    return (
      <Tag className={sectionClassNames} {...restProps}>
        {Section.containerize(childList, { container, level })}
      </Tag>
    )
  }
}

export default Section
