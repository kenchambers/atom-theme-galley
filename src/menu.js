import React from 'react';
import {
  Container,
  Dropdown,
  Image,
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
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'
  }

  return (
    <Menu
      borderless
      fixed={menuFixed ? 'top' : undefined}
      style={menuFixed ? fixedMenuStyle : menuStyle}
    >
      <Container text>
        <Menu.Item>
          <Image size='mini' src='/camera.svg' />
        </Menu.Item>
        <Menu.Item header>Atom Theme Gallery</Menu.Item>
        <SearchComponent/>

        <Menu.Menu position='right'>
          <Dropdown text='Dropdown' pointing className='link item'>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default MenuComponent