import React, { Fragment } from 'react'

import Head from './head'

import Header from '../header'
import Footer from '../footer'

import './layout.scss'

const Layout = ({ title, description, navigation, footer, children }) => (
  <Fragment>
    <Head title={title} description={description} />
    <Header className="page-header" siteMap={navigation} />
    {children}
    <Footer className="page-footer" {...footer} />
  </Fragment>
)

export default Layout
