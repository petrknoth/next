import React from 'react'
import { Form } from 'reactstrap'
import './search-navbar.scss'

const SearchNavbar = () => (
  <Form inline className="d-md-none">
    <input
      className="animated-search"
      type="text"
      name="search"
      placeholder="&#128269; Search"
    />
  </Form>
)

export default SearchNavbar
