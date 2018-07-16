import React, { Component } from 'react';
import VotesLayout from '../components/votes-layout'
import Like from '../../icons/components/like'
import Dislike from '../../icons/components/dislike'
import { Button, ProgressBar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../votes-style.scss"

class Votes extends Component {

  state ={
    activeUp:this.props.activeUp,
    activeDown:this.props.activeDown,
    buttonState:this.props.buttonState,
    description:this.props.description,
    votesUp: isNaN(localStorage.getItem("votesUp"+this.props.id)) ? 0 : Number(localStorage.getItem("votesUp"+this.props.id)),
    votesDown: isNaN(localStorage.getItem("votesDown"+this.props.id)) ? 0 : Number(localStorage.getItem("votesDown"+this.props.id))
  }

  toogleVoteUp = (event) =>{
    this.setState({
      activeUp:!this.state.active,
      activeDown:this.props.activeDown,
    })
  }
  //
  toogleVoteDown = (event) =>{
    this.setState({
      activeDown:!this.state.active,
      activeUp:this.props.activeUp,
    })
  }

  handleClick = (event) => {
    this.setState({
      buttonState:!this.state.buttonState,
      activeUp:this.props.activeUp,
      activeDown:this.props.activeDown
    })

    if(this.state.buttonState) {
			if(this.state.activeUp) {
				let votesUp = Number(localStorage.getItem('votesUp'+this.props.id)) + 1;
				localStorage.setItem('votesUp'+this.props.id, votesUp);
				this.setState(prevState => ({
					votesUp: Number(localStorage.getItem('votesUp'+this.props.id)),
				}))

			} else{
				let votesDown = Number(localStorage.getItem('votesDown'+this.props.id)) + 1;
				localStorage.setItem('votesDown'+this.props.id, votesDown);

				this.setState(prevState => ({
					votesDown: Number(localStorage.getItem('votesDown'+this.props.id)),
				}))
			}
		}
  }


  render(){
    let classNameUp = "btn-vote ";
    let classNameDown = "btn-vote ";
    let classVotesHiden = "activeVote ";
    if(this.state.activeUp){
      classNameUp += "active";
      classNameDown = "btn-vote ";
    }
    if (this.state.activeDown) {
      classNameUp="btn-vote ";
      classNameDown += "active"
    }
    let textStateButton = "Vote now";
    let textDescription = this.state.description;

    if (this.state.buttonState) {
      textStateButton = "Vote now";
      textDescription = this.state.description;
      classVotesHiden = "activeVote ";
    }
    else{
      textStateButton = "Vote again";
      textDescription = "Thanks for voting!";
      classVotesHiden += "hidden"
    }
    let totalVotesUp   = Math.round(this.state.votesUp / (this.state.votesUp + this.state.votesDown)*100);
		let totalVotesDown = Math.round(this.state.votesDown / (this.state.votesUp + this.state.votesDown)*100);
    let style = {
            backgroundImage: 'url('+ this.props.image +')',
            backgroundRepeat: 'no-repeat',
            backgroundPositionX:this.props.imagex,
            backgroundPositionY:this.props.imagey,
            };
    return(
      <VotesLayout style={style}>
        <div className="container-image-box">
          <div className="description-container">
            <h2>{this.props.name}</h2>
            <p>{this.props.workTime} in {this.props.work}</p>
            <p>{textDescription}</p>
            <div className={classVotesHiden}>
              <Button className={classNameUp} bsStyle="info" onClick={this.toogleVoteUp}>
                <FontAwesomeIcon icon="thumbs-up" />
              </Button>
              <Button className={classNameDown} bsStyle="warning" onClick={this.toogleVoteDown}>
                <FontAwesomeIcon icon="thumbs-down" />
              </Button>
            </div>
            <Button className="button-vote" onClick={this.handleClick}>{textStateButton}</Button>
          </div>

          <div className='progress-container'>
            <ProgressBar>
              <ProgressBar striped bsStyle="success" label={`${totalVotesUp}%`} now={totalVotesUp} key={1}/>
              <ProgressBar bsStyle="warning" now={totalVotesDown} key={2}/>
            </ProgressBar>
          </div>
        </div>
      </VotesLayout>
    )
  }
}

export default Votes;
