import React from 'react'
import classNames from 'classnames'

import Head from './head'

import Header from '../header'
import Footer from '../footer'

import './layout.scss'

const Layout = ({
  title,
  description,
  navigation,
  footer,
  children,
  className,
  tag: Tag = 'div',
  ...restProps
}) => (
  <Tag className={classNames('page', className)} {...restProps}>
    <Head title={title} description={description} />
    <Header className="page-header" siteMap={navigation} />
    {children}
    <Footer className="page-footer" {...footer} />
  </Tag>
)

export default Layout
