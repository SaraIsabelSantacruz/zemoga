import React, { Component } from 'react';
import Candidate from './candidate';
import Votes from '../containers/votes';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function CandidateList (props){
  const list = props.votes;
  return(
    <Grid>
      <Row>
        {
          list.map((item) => {
            return(
              <Col key={item.id} xs={12} sm={6}>
                <Candidate>
                  <Votes {...item}/>
                </Candidate>
              </Col>
            )
          })
        }
      </Row>
    </Grid>
  )
}

export default CandidateList;
