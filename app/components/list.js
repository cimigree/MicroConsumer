import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default ({tweets=[]}) =>
(
  <ul>
    {
      tweets.map(item =>
        (
          <li key={item.key}>
              <Row>
            <Col xs={1} sm={1} md={1} lg={1}><img src={item.avatar}/></Col>
            <Col xs={4} sm={4} md={4} lg={4}><p id="name">{item.name}</p></Col>
            <Col xs={3} sm={3} md={3} lg={3}><a href={item.useruri} target="_blank">@{item.screenname}</a></Col>
            <Col xs={4} sm={4} md={4} lg={4}><p id="time">{item.timeago}</p></Col>
            </Row>
            <p id="text">{item.text}</p>
            <Row>
            {item.image ? <img src={item.image}/> : null}
            <Col className="toRight" xs={6} sm={6} md={6} lg={6}><p><i className="fa fa-retweet" aria-hidden="true"></i>{item.retweets}</p></Col>
            <Col className="toLeft" xs={5} sm={5} md={5} lg={5} ><p><i className="fa fa-heart" aria-hidden="true"></i>{item.likes}</p></Col>
            </Row>
          </li>
        )
      )
    }
  </ul>
);
