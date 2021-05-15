import React from 'react'
import {
  Grid,
  Header,
} from 'semantic-ui-react'
import { Image, Card, Icon, Container } from 'semantic-ui-react'


function ThemeRow({theme}){
  return (
    <Grid.Row>
      <Grid.Column>
        <Card>
          <Card.Content header={theme.title} />
          <Card.Content description={theme.description} />
          <Card.Content extra>
            <Icon name='user' />4 Friends
          </Card.Content>
        </Card>
      </Grid.Column>
      <Grid.Column>
        <div className='result-image-container'>
           <Image src={theme.images[0]} size='medium' />
        </div>
      </Grid.Column>
      <Grid.Column>
        <div className='result-image-container'>
           <Image src={theme.images[1]} size='medium' />
        </div>
      </Grid.Column>
    </Grid.Row>
  )
}

function ThemesComponent({state,dispatch}) {

  if (state.results.length){
    return (
      <div className="ThemesComponent">
        <Header as='h2' inverted textAlign='center'>
        Stackable (mobile)
        </Header>
        <Container>
          <Grid columns={3} stackable>
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