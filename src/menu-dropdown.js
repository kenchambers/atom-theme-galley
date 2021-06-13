import React from 'react'


import {
  Icon,
  Divider,
  Grid,
  Header,
  Image,
  List,
} from 'semantic-ui-react'

function openSocialLink(url){
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const credits = {
  kristi: {
    links: {
      instagram: 'https://',
      linkedin: 'https://',
      github: 'https://'
    }
  },
  ken: {
    links: {
      instagram: 'https://',
      linkedin: 'https://',
      github: 'https://'
    }
  }
}

function DonateButton(){

  return(
    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="business" value="BB3GPC52PRTLL" />
      <input type="hidden" name="item_name" value="To code" />
      <input type="hidden" name="currency_code" value="USD" />
      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
      <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>

  )

}

function SocialComponent(links){
  return (

    <div>
      <Icon name='instagram' size='large' color='olive' onClick={() => openSocialLink(links.instagram)} /><Icon name='linkedin' size='large' color='olive' onClick={() => openSocialLink(links.linkedin)}  /><Icon name='github' size='large' color='olive' onClick={() => openSocialLink(links.github)}  />
    </div>
  )
}

function MenuDropdownComponent(){
  return (
    <>
      <Grid columns={4} divided stackable inverted>
        <Grid.Row>
          <Grid.Column>
            <Header inverted as='h4' content='Created By' />
            <List link inverted>
              <List.Item as='a' style={{lineHeight: '19px'}}>@kfoxz</List.Item>
              <List.Item as='a' style={{lineHeight: '19px'}}>@chowderhead</List.Item>

            </List>
          </Grid.Column>
          <Grid.Column>
            <Header inverted as='h4' content='Social' />
            <List link inverted>
              <List.Item as='a'>{SocialComponent(credits.kristi.links)}</List.Item>
              <List.Item as='a'>{SocialComponent(credits.ken.links)}</List.Item>

            </List>
          </Grid.Column>
          <Grid.Column>
            <Header inverted as='h4' content='Tech stack' />
            <List link inverted>
              <List.Item as='a'>React</List.Item>
              <List.Item as='a'>Redux</List.Item>
              <List.Item as='a'>Django</List.Item>
              <List.Item as='a'>LXML</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header inverted as='h4' content='Fund us' />
            <p>
              Just the cutest coding couple ever, writing code for funsies.
            </p>
            <DonateButton/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider inverted section />
      <Image src='/spaceship.svg' centered size='mini' />
      <List horizontal inverted divided link size='small'>
        <List.Item as='a' href='#'>
          Site Map
        </List.Item>
        <List.Item as='a' href='#'>
          Contact Us
        </List.Item>
        <List.Item as='a' href='#'>
          Terms and Conditions
        </List.Item>
        <List.Item as='a' href='#'>
          Privacy Policy
        </List.Item>
      </List>
  </>
  )
}

export default MenuDropdownComponent