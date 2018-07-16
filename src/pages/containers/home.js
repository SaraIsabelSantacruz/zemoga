import React, { Component } from 'react';
import HomeLayout from '../components/home-layout'
import Header from '../../header/containers/header'
import CandidateList from '../../votes/components/candidate-list'
import BoxUp from './box-up'
import BoxDown from './box-down'
import Footer from '../../footer/containers/footer'
import '../../styles/index.scss'

class Home extends Component{

  render(){
    return(
      <div>
        <Header/>
        <HomeLayout>
          <BoxUp/>
          <CandidateList votes={this.props.data.votes}/>
          <BoxDown/>
        </HomeLayout>
        <Footer/>
      </div>
    )
  }
}

export default Home;
