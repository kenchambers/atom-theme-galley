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
              <Icon name='cloud download' /> {theme.downloads}
            </Label>
        </Grid.Column>
        {
          theme.images.length > 0 &&
          <Grid.Column>
            <div className='result-image-container'>
               <Image className="shadow" src={theme.images[0]} size='huge' />
            </div>
          </Grid.Column>
        }

      </Grid.Row>
      <Grid.Row>
        {
          theme.images.length > 1 &&
          <Grid.Column>
            <div className='result-image-container'>
               <Image className="shadow" src={theme.images[1]} size='huge' />
            </div>
          </Grid.Column>
        }
        {
          theme.images.length > 2 &&
          <Grid.Column>
            <div className='result-image-container'>
               <Image className="shadow" src={theme.images[2]} size='huge' />
            </div>
          </Grid.Column>
        }

      </Grid.Row>
      <Grid.Row>
        <div className="theme-divider">

        </div>
      </Grid.Row>
    </>
  )

}

function PlaceHolder () {
  return (
    <div className="ui placeholder" style={{margin: 10}}>
      <div className="image header">
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="paragraph">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  )
}

function ThemesComponent() {
  const {state: {pageNumbsers, results}} = useStoreContext()




  if (results.length){
    return (
      <div className="ThemesComponent">
        <Container fluid={true}>
          <Grid verticalAlign={'middle'} columns={2} stackable>
            {
              results.map((theme,i)=>{
                return(
                  <ThemeRow key={i} theme={theme}/>
                )
              })
            }
          </Grid>
          <div className="page-button-container">
              <a class="ui blue circular label">1</a>
              <a class="ui blue circular label">2</a>
              <a class="ui blue circular label">3</a>
          </div>
        </Container>
      </div>
    );
  }else{
    return(
      <Container fluid={true}>
        <Grid verticalAlign={'middle'} columns={2} stackable>
          <Grid.Row>
            <Grid.Column>
              <PlaceHolder/>
            </Grid.Column>
            <Grid.Column>
              <PlaceHolder/>
            </Grid.Column>
            <Grid.Column>
              <PlaceHolder/>
            </Grid.Column>
            <Grid.Column>
              <PlaceHolder/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }

}

export default ThemesComponent;

