import _ from 'lodash';
import axios from 'axios';

const SERVICE_URL = 'https://microservicetwitter.herokuapp.com/tweets/';

export const SEARCH_FOR_TWEETS = 'SEARCH_FOR_TWEETS';

export const searchForTweets = string =>
  axios.get(`https://${SERVICE_URL}&q=${string}`)
  .then(response => {
    const tweets = response.data.tweets.map((t, index) =>
      ({
        key: index,
        name: r.title,
        url: r.source_url,
      })
    );

    return {
      type: SEARCH_FOR_TWEETS,
      payload: _.sortBy(tweets, t => t.name),
    };
  });