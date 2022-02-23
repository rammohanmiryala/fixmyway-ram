
import React from "react";

import { Icon, Step, Grid, Card } from 'semantic-ui-react';

import PincodeForm from '../components/PincodeForm';
import ThoughtLists from '../components/ThoughtLists';
import { useQuery } from '@apollo/client';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  const thoughts = data?.thoughts || [];
  return (
    <main >
      <>
        <div className=" Container flex-row justify-center">
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{
              border: '0px dotted #1a1a1a'
            }}>
            <PincodeForm />
          </div>
        </div>
        <Grid divided='vertically' textAlign="center" >
          <Grid.Row>
            <Grid.Column textAlign="center" width={4} style={{ borderRight: '1px dotted #1a1a1a' }}>
              <h4 className="searchbar" style={{ borderBottom: '3px solid Tomato', padding: '10px' }}>How it works </h4>
              <Step.Group vertical style={{ backgroundColor: '#fff' }} >
                <Step completed>
                  <Icon name='truck' />
                  <Step.Content style={{ backgroundColor: '#fff' }}>
                    <Step.Title style={{ backgroundColor: '#fff', color: '#000', marginBottom: '5px' }}>Find Postoffice manda</Step.Title>
                    <Step.Description style={{ backgroundColor: '#fff' }}>Enter a nearby postoffice mandal</Step.Description>
                  </Step.Content>
                </Step>
                <Step completed>
                  <Icon name='truck' />
                  <Step.Content style={{ backgroundColor: '#fff' }} >
                    <Step.Title style={{ backgroundColor: '#fff', color: '#000', marginBottom: '5px' }}>Post the Project</Step.Title>
                    <Step.Description style={{ backgroundColor: '#fff' }}>Fill the form post a project </Step.Description>
                  </Step.Content >
                </Step>
                <Step completed>
                  <Icon name='truck' />
                  <Step.Content style={{ backgroundColor: '#fff' }}>
                    <Step.Title style={{ backgroundColor: '#fff', color: '#000', marginBottom: '5px' }}> Start Discussion </Step.Title>
                    <Step.Description style={{ backgroundColor: '#fff' }}>Start Discussion to the project</Step.Description>
                  </Step.Content>
                </Step>

              </Step.Group>
            </Grid.Column>
            {/* <Grid.Column width={4} textAlign="center" style={{ borderRight: '1px dotted #1a1a1a' }}  >
                <h1>rammohan</h1>
              </Grid.Column> */}
            <Grid.Column width={4} textAlign="center">
              <h4 className="searchbar" style={{ borderBottom: '3px solid Tomato', padding: '10px' }}>Resent Posted Projects </h4>

              <Card.Group>
                <ThoughtLists
                  thoughts={thoughts}
                  showTitle={false}
                  showUsername={false}
                />
              </Card.Group>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    </main>
  );
};

export default Home;
