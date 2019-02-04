import React from 'react'
import KeyFeaturesItem from './key-features-item'

const KeyFeatureList = ({ children, className = '' } = {}) => {
  const items = React.Children.map(children, child => {
    if (child.type !== KeyFeaturesItem) return null

    return React.cloneElement(child, {
      tag: 'li',
      key: child.key || child.props.title,
    })
  })

  return <ul className={`key-features ${className}`}>{items}</ul>
}

KeyFeatureList.Item = KeyFeaturesItem

export default KeyFeatureList
