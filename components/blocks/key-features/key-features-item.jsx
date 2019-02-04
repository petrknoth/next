import React from 'react'

const KeyFeaturesItem = ({
  title,
  children,
  icon,
  className = '',
  tag: Tag = 'div',
  ...args
} = {}) => (
  <Tag className={`key-features-item ${className}`} {...args}>
    <img className="key-features-icon" src={icon} alt={title} />
    <div className="key-features-text">{children}</div>
  </Tag>
)

export default KeyFeaturesItem
