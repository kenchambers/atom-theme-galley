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
function ThemesComponent({themes}) {

  return (
    <div className="ThemesComponent">
      <Header as='h2' inverted textAlign='center'>
      Stackable (mobile)
      </Header>
      <Grid columns={2} stackable>
        <Grid.Row>
          <Grid.Column>
            <p />
            yo
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <p />
            yo
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <p />
            yo
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <p />
            yo
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <p />
            yo
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <p />
            yo
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default ThemesComponent;