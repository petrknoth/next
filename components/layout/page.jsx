import React from 'react'
import Head from './head'
import Main from './main'

const Page = ({ title, description, headline = title, ...restProps }) => [
  <Head key="head" title={title} description={description} />,
  <Main key="main" title={headline} className="page-main" {...restProps} />,
]

export default Page
