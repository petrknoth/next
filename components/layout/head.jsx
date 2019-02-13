import React from 'react'
import PropTypes from 'prop-types'
import NextHead from 'next/head'

const Head = ({ title, description, children }) => (
  <NextHead>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    {children}
  </NextHead>
)

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

Head.defaultProps = {
  description: '',
}

export default Head
