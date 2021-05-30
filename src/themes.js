import React  from 'react'
import {
  Grid,
} from 'semantic-ui-react'
import { Image, Card, Label, Icon, Container, Button } from 'semantic-ui-react'
import {useStoreContext} from './store-hook';


function ThemeRow({theme}){


  return (
    <>
      <Grid.Row>
        <Grid.Column>
          <div style={{ lineHeight: 1,fontFamily: 'Comfortaa', fontSize: '2em', color: '#61c0bf', padding: '1em'}}>{theme.title}</div>
          <Label size="large">
            <Icon name='star' /> 23
          </Label>
          <Button content='github' icon='github' labelPosition='left' />
            <Label size="large">
              <Icon name='cloud download' /> 23
            </Label>
        </Grid.Column>
        <Grid.Column>
          <div className='result-image-container'>
             <Image src={theme.images[0]} size='huge' />
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <div className='result-image-container'>
             <Image src={theme.images[0]} size='huge' />
          </div>
        </Grid.Column>
        <Grid.Column>
          <div className='result-image-container'>
             <Image src={theme.images[0]} size='huge' />
          </div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Card centered fluid>
          <Card.Content>

          </Card.Content>
        </Card>
      </Grid.Row>
    </>
  )

}

function ThemesComponent() {
  // const dispatch = useContext(DispatchContext);
  // const state = useContext(StateContext);
  // const {state} = useStoreContext()
  const {state} = useStoreContext()
  console.log("-------------");
  console.log(state);
  console.log("--------------");
  // const dispatch = useContext(DispatchContext);
  // const state = useContext(StateContext)

  // const { dispatch, state } =

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