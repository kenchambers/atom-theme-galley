import React  from 'react'
import {
  Grid,
} from 'semantic-ui-react'
import { Image,  Label, Icon, Container, Button } from 'semantic-ui-react'
import {useStoreContext} from './store-hook';
import { useHistory, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

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
  const {state: {pageNumbers, results, currentPage, queryParams}} = useStoreContext()
  let history = useHistory();
  let arrayOfNumbers = []

  if (pageNumbers){
    for (var i = 0; i < pageNumbers; i++) {
      arrayOfNumbers.push(i + 1)
    }
  }

  const pageClick = (page) => {
      history.replace(`/?q=${queryParams}` + `&p=${page}`)
  }

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
            {
              arrayOfNumbers.length &&
              arrayOfNumbers.map((page,i)=>{
                if (currentPage == page) {
                  return(
                    <button key={i} onClick={() => pageClick(page)} style={{backgroundColor: '#ffffff', color: '#333333'}}  class="compact ui button">
                      {page}
                    </button>

                  )
                } else {
                  return(
                    <button key={i} onClick={() => pageClick(page)} style={{backgroundColor: '#b5cc18', color: '#333333'}}  class="compact ui button olive">
                      {page}
                    </button>
                  )
                }

              })
            }
          </div>
        </Container>
      </div>
    );
  }else{
    return(
      <Container style={{marginTop: '-6em'}} fluid={true}>
        <span  className="epsilon ls-medium">Scanning popular themes...</span><br/>
        <div className='lds-ripple'>
          <div>

          </div>
          <div>

          </div>
        </div>
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

