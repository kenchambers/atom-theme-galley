import React, { Component } from 'react'

import MenuComponent from './menu'
import MenuDropdownComponent from './menu-dropdown'
import ThemesComponent from './themes'
import {
  Container,
  Header,
  Segment,
  Visibility,
} from 'semantic-ui-react'

export default class StickyLayout extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  }


  stickTopMenu = () => this.setState({ menuFixed: true })
  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed } = this.state
    const { state , dispatch } = this.props;

    return (
      <div>
        {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}
        <style>
          {`
          html, body {
            background: #fff;
          }
        `}
        </style>

        <Container text style={{ marginTop: '2em' }}>
          <Header as='h1'>Atom Theme Gallery</Header>
          <Segment>
            This example shows how to use lazy loaded images, a sticky menu, and a simple text
            container
          </Segment>
        </Container>

        {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
            gone beyond the scope of visibility
          */}
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <MenuComponent menuFixed={menuFixed} state={state} dispatch={dispatch}/>
        </Visibility>

        {/* NOTE: CONTAINER WITH THE PAGE */}
        <Container text>
          <ThemesComponent state={state} dispatch={dispatch}/>
        </Container>

        <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
          <Container textAlign='center'>
            <MenuDropdownComponent/>
          </Container>
        </Segment>
      </div>
    )
  }
}