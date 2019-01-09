import React from 'react'
import { Form, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'
import './search-nav.scss'

const SearchNav = () => (
  <Form
    inline
    className="search-field d-none d-md-block pr-lg-5 mr-lg-5 mr-sm-3"
  >
    <InputGroup>
      <Input />
      <InputGroupAddon addonType="append">
        <Button color="primary">Search</Button>
      </InputGroupAddon>
    </InputGroup>
  </Form>
)

export default SearchNav
