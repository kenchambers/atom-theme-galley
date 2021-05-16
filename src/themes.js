import React from 'react'
import {
  Grid,
  Header,
} from 'semantic-ui-react'
import { Image, Card, Label, Icon, Container, Button } from 'semantic-ui-react'


function ThemeRow({theme}){

  return (
    <>
    <Grid.Row >
      <Card style={{width: '80vw'}}>
        <Card.Content>
          <div style={{fontFamily: 'Comfortaa', fontSize: '3em'}}>{theme.title}</div>
        </Card.Content>
        <Card.Content extra>
          <Label size="large">
            <Icon name='star' /> 23
          </Label>
          <Button content='github' icon='github' labelPosition='left' />
          <Label size="large">
            <Icon name='cloud download' /> 23
          </Label>
        </Card.Content>
      </Card>
    </Grid.Row>
    <Grid.Row style={{height: '80vh'}}>
      <Grid.Column>
        <div className='result-image-container'>
           <Image src={theme.images[0]} size='huge' />
        </div>
      </Grid.Column>
      <Grid.Column>
        <div className='result-image-container'>
           <Image src={theme.images[1]} size='huge' />
        </div>
      </Grid.Column>
      <Grid.Column>
        <div className='result-image-container'>
           <Image src={theme.images[2]} size='huge' />
        </div>
      </Grid.Column>
    </Grid.Row>
    </>

  )
}

function ThemesComponent({state,dispatch}) {

  if (state.results.length){
    return (
      <div className="ThemesComponent">
        <Header as='h2' inverted textAlign='center'>
        Stackable (mobile)
        </Header>
        <Container fluid={true}>
          <Grid verticalAlign={'middle'} columns={3} stackable>
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