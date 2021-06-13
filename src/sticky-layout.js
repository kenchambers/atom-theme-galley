  import React from 'react'

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


      <Container text style={{ paddingTop: '15em', display: 'block', marginBottom: '1em' }}>
        <div className="wrapper">
        	 <h1 className="gamma lato thin uppercase ls-xlarge">
        		 ATOM THEME<br/>
        		 <span className="middle-header open-sans tera ls-xlarge bold">GALLERY</span><br/>
        		 <span className="epsilon ls-medium">Becase it's easier this way.</span>
           </h1>
        	 </div>
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