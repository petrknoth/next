import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Heading = ({ level = 1, children, className, tag, ...restProps }) => {
  if (level < 1 || level > 6 || tag === null) return null

  const Tag = typeof tag != 'undefined' ? tag : `h${level}`
  const classList = classNames(
    { [`h${level}`]: typeof tag != 'undefined' },
    className
  )

  return (
    <Tag className={classList} {...restProps}>
      {children}
    </Tag>
  )
}

Heading.propTypes = {
  level: PropTypes.number.isRequired,
}

export default Heading
