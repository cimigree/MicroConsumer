import React, {Component} from 'react';
import {FormControl, Button} from 'react-bootstrap';
import autobind from 'class-autobind';

export default class Search extends Component {
  constructor(props) {
    super(props);
    autobind(this);
  

  this.state= {searchText: "NASA"};
  }

  handleSearchTextChange(e) {
    this.setState({searchText: e.target.value});
  }

  //uses the search from the home folder and passes the prop of the choice as to which search text to use


  // render
  render() {
    return (
        <div className="search">
        <form >
          <label id="tweetsearch">
          Choose a topic to get Tweets About: 
        </label>
        &nbsp;
        <FormControl componentClass="select" placeholder="Open Source" value={this.state.searchText} onChange={this.handleSearchTextChange}>
        <option value="NASA">NASA</option>
        <option value="opensource">OPEN SOURCE</option>
        <option value="healthcare">HEALTH CARE</option>
        </FormControl>
       <Button bsStyle="primary" bsSize="large" onClick={() => this.props.search(this.state.searchtext)} >Search</Button>
       </form>
       </div>
    );
  }

}

 