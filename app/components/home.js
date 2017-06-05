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
    return `${min} m ${sec} s ago`
 }

 getMediaImage (mediaarray) {
     let mediastring = _.toString(mediaarray)
     if (mediastring) {
    let startindex = mediastring.indexOf('http');
    if (startindex != -1){
    let endindex = mediastring.indexOf("jpg", startindex);
    let imageurl =  mediastring.slice(startindex, endindex+3);
    // console.log(imageurl)
    return imageurl;
     }
     }
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
            useruri: t.useruri,
            timeago: this.convertTime(t.createdat),
            text: t.fulltext,
            image: this.getMediaImage(t.mediaimage),
            retweets: t.retweetct, 
            likes: t.favoritecount 
        }),
      );
      let tenTweets = tweets.slice(0,10)
      this.setState({
        tweets: _.sortBy(tenTweets, t => t.createdat)
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