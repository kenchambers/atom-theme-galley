import React from 'react';
import {
  Container,
  Menu,
} from 'semantic-ui-react'

import SearchComponent from './search-component'

function MenuComponent({menuFixed}) {
  const menuStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginTop: '4em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease'
  }
  const fixedMenuStyle = {
    backgroundColor: '#435058',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'
  }


  return (
    <Menu
      borderless
      fixed={menuFixed ? 'top' : undefined}
      style={menuFixed ? fixedMenuStyle : menuStyle}
      fluid widths={1}
    >
      <Container text>
        <Menu.Item>
          <SearchComponent fluid size="large"/>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default MenuComponent