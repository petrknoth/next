import React from 'react'
import { Form, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap'
import './search-navbar.scss'

const SearchNavbar = () => (
  <div>
    <Form inline className="animated-search d-md-none">
      <input
        className=""
        type="text"
        name="search"
        placeholder="&#128269; Search"
        required
      />
    </Form>

    <Form inline className="search-field d-none d-md-block ml-lg-5 ml-md-3">
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="primary">Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </Form>
  </div>
)

export default SearchNavbar
