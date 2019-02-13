import React from 'react'
import classNames from 'classnames'
import Section from './section'

const Main = ({ className, ...restProps }) => (
  <Section
    className={classNames('main', className)}
    size="lg"
    tag="main"
    {...restProps}
  />
)

export default Main
