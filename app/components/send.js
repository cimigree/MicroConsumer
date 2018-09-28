import React, {Component} from 'react';
import {Button} from 'react-bootstrap'
import autobind from 'class-autobind';

export default class Send extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  

  this.state= {sendText: ""};
  }

  handleSendTextChange(e) {
    this.setState({sendText: e.target.value});
  }

  handleSendText() {
    this.props.send(this.state.sendText);
    this.setState({sendText: ''});
  }
  //uses the search from the home folder and passes the prop of the choice as to which search text to use


  // render
  render() {
    return (
        <div className="send">
        <label id="sendtweet">
          Type a Tweet to post to my Twitter Account! 
        </label>
        <input value={this.state.sendText} onChange={this.handleSendTextChange}/>
        &nbsp;
       <Button bsStyle="primary" bsSize="large" type="submit" onClick="this.handleSendText">Send</Button>
       {this.props.successtext ? <h3>Your Tweet was Posted!</h3> : <h3>Oops! Something went Wrong</h3>}
       </div>
    );
  }
}