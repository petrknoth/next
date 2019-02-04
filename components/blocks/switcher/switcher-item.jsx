import React from 'react'

const SwitcherItem = ({
  children,
  active = false,
  className = '',
  tag: Tag = 'div',
  ...restProps
}) => (
  <Tag
    className={`switcher-item ${active ? 'active' : ''} ${className}`}
    {...restProps}
  >
    {children}
  </Tag>
)

export default SwitcherItem
