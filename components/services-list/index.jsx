import React from 'react'

import './services-list.scss'

const ServicesFeature = ({
  title,
  children,
  icon,
  className = '',
  tag: Tag = 'div',
  ...args
} = {}) => (
  <Tag className={`key-feature ${className || ''}`} {...args}>
    <img className="key-feature-icon" src={icon} alt={title} />
    <div className="key-feature-text">{children}</div>
  </Tag>
)

const ServicesFeatureList = ({ children, className = '' } = {}) => {
  const items = React.Children.map(children, child => {
    if (child.type !== ServicesFeature) return null

    return React.cloneElement(child, {
      tag: 'li',
      key: child.props.title,
    })
  })

  return <ul className={`key-feature-list ${className}`}>{items}</ul>
}

ServicesFeatureList.Item = ServicesFeature

export default ServicesFeature
export { ServicesFeature, ServicesFeatureList }
