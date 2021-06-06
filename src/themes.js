import React  from 'react'
import {
  Grid,
} from 'semantic-ui-react'
import { Image, Card, Label, Icon, Container, Button } from 'semantic-ui-react'
import {useStoreContext, useStoreReducer} from './store-hook';
// import * as blobs2 from "blobs/v2";
// import * as blobs2Animate from "blobs/v2/animate";
// const svgPath = blobs2.svgPath({
//     seed: Math.random(),
//     extraPoints: 13,
//     randomness: 4,
//     size: 2000,
// });

    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
    //   <path d={svgPath}></path>
    // </svg>

// console.log(svgPath)
function ThemeRow({theme}){
  return (
    <>
      <Grid.Row>
        <Grid.Column>
          <div className="open-sans" style={{ lineHeight: 1,fontSize: '2em', padding: '1em'}}>{theme.title}</div>
          <Label size="large">
            <Icon name='star' /> {parseInt(theme.stars)}
          </Label>
          <Button content='github' icon='github' labelPosition='left' />
            <Label size="large">
              <Icon name='cloud download' /> {parseInt(theme.downloads)}
            </Label>
        </Grid.Column>
        <Grid.Column>
          <div className='result-image-container'>
             <Image className="shadow" src={theme.images[0]} size='huge' />
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <div className='result-image-container'>
             <Image className="shadow" src={theme.images[1]} size='huge' />
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className='result-image-container'>
             <Image className="shadow" src={theme.images[2]} size='huge' />
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <div className="theme-divider">

        </div>
      </Grid.Row>
    </>
  )

}

function ThemesComponent() {
  // const dispatch = useContext(DispatchContext);
  // const state = useContext(StateContext);
  // const {state} = useStoreContext()
  const {state} = useStoreContext()
  // const {state} = useStoreReducer()
  //
  // const dispatch = useContext(DispatchContext);
  // const state = useContext(StateContext)

  // const { dispatch, state } =

  console.log("===============");
  console.log(state);
  console.log("===============");



  if (state.results){
    return (
      <div className="ThemesComponent">
        <Container fluid={true}>
          <Grid verticalAlign={'middle'} columns={2} stackable>
            {
              state.results.map((theme,i)=>{
                return(
                  <ThemeRow key={i} theme={theme}/>
                )
              })
            }
          </Grid>

        </Container>
      </div>
    );
  }else{
    return(
      <h1>Loading</h1>
    )
  }

}

export default ThemesComponent;