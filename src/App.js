import _ from 'lodash'
import React, { Component } from 'react'
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import MenuComponent from './menu'
import MenuDropdownComponent from './menu-dropdown'
import ThemesComponent from './themes'


const themes = [
  {
    id: 1,
    title: 'dark synntax',
    description: 'adescription'
  },
  {
    id: 2,
    title: 'dark synntax',
    description: 'adescription'
  },
  {
    id: 3,
    title: 'dark synntax',
    description: 'adescription'
  },
  {
    id: 4,
    title: 'dark synntax',
    description: 'adescription'
  },
  {
    id: 5,
    title: 'dark synntax',
    description: 'adescription'
  },
  {
    id: 6,
    title: 'dark synntax',
    description: 'adescription'
  },
  {
    id: 7,
    title: 'dark synntax',
    description: 'adescription'
  },

]

function App() {

  return (
    <div className="App">
      <StickyLayout/>
    </div>
  );
}

export default App;


class StickyLayout extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  }

  stickTopMenu = () => this.setState({ menuFixed: true })
  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed } = this.state

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
          <MenuComponent menuFixed={menuFixed} />
        </Visibility>

        {/* NOTE: CONTAINER WITH THE PAGE */}
        <Container text>
          <ThemesComponent themes={themes}/>
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







