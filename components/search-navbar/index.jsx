import React from 'react'
import { Form } from 'reactstrap'
import './search-navbar.scss'

const SearchNavbar = () => (
  <Form inline className="animated-search d-md-none">
    <input
      className=""
      type="text"
      name="search"
      placeholder="&#128269; Search"
      required
    />
  </Form>
)

export default SearchNavbar
