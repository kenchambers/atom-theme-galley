  import React, { useState } from 'react'

import MenuComponent from './menu'
import MenuDropdownComponent from './menu-dropdown'
import ThemesComponent from './themes'



import {
  Container,
  Segment,
} from 'semantic-ui-react'

export default function StickyLayout (props){


  // const [menuFixed, changeMenuFixed] = useState(false)

  // const [overlayFixed, changeOverlayFixed] = useState(false)

  // const stickTopMenu = () => changeMenuFixed({ menuFixed: true })
  // const unStickTopMenu = () => changeMenuFixed({ menuFixed: false })


  return (
    <div>


      <Container text style={{ paddingTop: '6em', display: 'block', marginBottom: '3em' }}>
        <div className="main-header">Atom Theme Gallery</div>
          <div className="secondary-header">Because it's so much easier this way.</div>
      </Container>

      {/* Attaching the top menu is a simple operation, we only switch `fixed` prop and add another style if it has
          gone beyond the scope of visibility
        */}
      {/* <Visibility
        onBottomPassed={stickTopMenu}
        onBottomVisible={unStickTopMenu}
        once={false}
      > */}
        <MenuComponent menuFixed={true}/>
      {/* </Visibility> */}

      {/* NOTE: CONTAINER WITH THE PAGE */}
      <Container style={{width: '80vw'}}>
        <ThemesComponent/>
      </Container>

      <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
        <Container textAlign='center'>
          <MenuDropdownComponent/>
        </Container>
      </Segment>
    </div>
  )

}