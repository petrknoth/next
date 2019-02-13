import React from 'react'
import PropTypes from 'prop-types'
import { Nav as BootstrapNav, NavItem, NavLink } from 'reactstrap'
import { Link } from './elements'

const Nav = ({ items, ...restProps }) => (
  <BootstrapNav {...restProps}>
    {items.map(({ text, href }) => (
      <NavItem key={href}>
        <NavLink href={href} tag={Link}>
          {text}
        </NavLink>
      </NavItem>
    ))}
  </BootstrapNav>
)

Nav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Nav
