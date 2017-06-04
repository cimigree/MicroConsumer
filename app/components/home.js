import _ from 'lodash';
import React, {Component} from 'react';
import axios from 'axios';
import autobind from 'class-autobind';
import moment from 'moment';
import Search from './search';
import List from './list';

const SERVICE_URL = 'microservicetwitter.herokuapp.com/tweets/';

export default class Home extends Component {
  constructor(props) {
    super(props);
    autobind(this);

    this.state = {
      tweets: [],
    };
  }

convertTime (time) {
    let tweetTime = moment(time);
    let now = moment.utc();
    let totalseconds = now.diff(tweetTime, 'seconds');
    let sec = totalseconds % 60
    let min = Math.floor(totalseconds/60)
    return `${min} min ${sec} sec ago`
 }
  // actions
  search(string) {
    axios.get(`https://${SERVICE_URL}${string}`)
    .then(response => {
      const tweets = response.data.map((t, index) =>
        ({
            key: index,
            avatar: t.profileimage,
            name: t.username,
            screenname: t.userscreenname,
            useruri: t.userusri,
            timeago: this.convertTime(t.createdat),
            text: t.fulltext,
            image: t.mediaimage,
            retweets: t.retweetct, 
            likes: t.favoritecount 
        })
      );

      this.setState({
        tweets: _.sortBy(tweets, t => t.createdat),
      });
    });
  }

  // render
  render() {
    return (
      <div id="home">
        <h1>Find a Tweet <i className="fa fa-twitter" aria-hidden="true"></i></h1>

        <Search search={this.search} />
        <List tweets={this.state.tweets} />
      </div>
    );
  }
}