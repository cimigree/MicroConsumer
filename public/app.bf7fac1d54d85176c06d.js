webpackJsonp([1],{145:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=babelHelpers.interopRequireDefault(l),n=(a(7),function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"render",value:function(){return r.default.createElement("div",null,this.props.children)}}]),t}(l.Component));t.default=n},354:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=babelHelpers.interopRequireDefault(l),n=a(89),u=a(145),s=babelHelpers.interopRequireDefault(u),i=a(374),o=babelHelpers.interopRequireDefault(i),c=a(376),f=babelHelpers.interopRequireDefault(c);t.default=r.default.createElement(n.Route,{path:"/",component:s.default},r.default.createElement(n.IndexRoute,{component:o.default}),r.default.createElement(n.Route,{path:"*",component:f.default}))},355:function(e,t){},374:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(467),r=babelHelpers.interopRequireDefault(l),n=a(1),u=babelHelpers.interopRequireDefault(n),s=a(356),i=babelHelpers.interopRequireDefault(s),o=a(153),c=babelHelpers.interopRequireDefault(o),f=a(0),d=babelHelpers.interopRequireDefault(f),p=a(377),m=babelHelpers.interopRequireDefault(p),b=a(375),h=babelHelpers.interopRequireDefault(b),E=function(e){function t(e){babelHelpers.classCallCheck(this,t);var a=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return(0,c.default)(a),a.state={tweets:[],resulttext:!0},a}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"convertTime",value:function(e){var t=(0,d.default)(e),a=d.default.utc(),l=a.diff(t,"seconds"),r=l%60;return Math.floor(l/60)+" m "+r+" s ago"}},{key:"getMediaImage",value:function(e){var t=r.default.toString(e);if(t){var a=t.indexOf("http");if(-1!=a){var l=t.indexOf("jpg",a);return t.slice(a,l+3)}}}},{key:"search",value:function(e){var t=this;i.default.get("https://microservicetwitter.herokuapp.com/tweets/"+e).then(function(e){var a=e.data.map(function(e,a){return{key:a,avatar:e.profileimage,name:e.username,screenname:e.userscreenname,useruri:e.useruri,timeago:t.convertTime(e.createdat),text:e.fulltext,image:t.getMediaImage(e.mediaimage),retweets:e.retweetct,likes:e.favoritecount}}),l=a.slice(0,10);t.setState({tweets:r.default.sortBy(l,function(e){return e.createdat})})})}},{key:"render",value:function(){return u.default.createElement("div",{id:"home"},u.default.createElement("h1",null,"Find a Tweet ",u.default.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"})),u.default.createElement(m.default,{search:this.search}),u.default.createElement(h.default,{tweets:this.state.tweets}))}}]),t}(n.Component);t.default=E},375:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=babelHelpers.interopRequireDefault(l),n=a(314);t.default=function(e){var t=e.tweets,a=void 0===t?[]:t;return r.default.createElement("ul",null,a.map(function(e){return r.default.createElement("li",{key:e.key},r.default.createElement(n.Row,null,r.default.createElement(n.Col,{xs:1,sm:1,md:1,lg:1},r.default.createElement("img",{src:e.avatar})),r.default.createElement(n.Col,{xs:4,sm:4,md:4,lg:4},r.default.createElement("p",{id:"name"},e.name)),r.default.createElement(n.Col,{xs:3,sm:3,md:3,lg:3},r.default.createElement("a",{href:e.useruri,target:"_blank"},"@",e.screenname)),r.default.createElement(n.Col,{xs:4,sm:4,md:4,lg:4},r.default.createElement("p",{id:"time"},e.timeago))),r.default.createElement("p",{id:"text"},e.text),r.default.createElement(n.Row,null,e.image?r.default.createElement("img",{src:e.image,id:"image"}):null,r.default.createElement(n.Col,{className:"toRight",xs:6,sm:6,md:6,lg:6},r.default.createElement("p",null,r.default.createElement("i",{className:"fa fa-retweet","aria-hidden":"true"}),e.retweets)),r.default.createElement(n.Col,{className:"toLeft",xs:5,sm:5,md:5,lg:5},r.default.createElement("p",null,r.default.createElement("i",{className:"fa fa-heart","aria-hidden":"true"}),e.likes))))}))}},376:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=babelHelpers.interopRequireDefault(l),n=a(89),u=function(){return r.default.createElement("div",null,r.default.createElement("h4",null,"404 Page Not Found"),r.default.createElement(n.Link,{to:"/"}," Go back to homepage "))};t.default=u},377:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),r=babelHelpers.interopRequireDefault(l),n=a(314),u=a(153),s=babelHelpers.interopRequireDefault(u),i=function(e){function t(e){babelHelpers.classCallCheck(this,t);var a=babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return(0,s.default)(a),a.state={searchText:"NASA"},a}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"handleSearchTextChange",value:function(e){this.setState({searchText:e.target.value})}},{key:"render",value:function(){var e=this;return r.default.createElement("div",{className:"search"},r.default.createElement("form",null,r.default.createElement("label",{id:"tweetsearch"},"Choose a topic to get Tweets About:")," ",r.default.createElement(n.FormControl,{componentClass:"select",placeholder:"Open Source",value:this.state.searchText,onChange:this.handleSearchTextChange},r.default.createElement("option",{value:"NASA"},"NASA"),r.default.createElement("option",{value:"opensource"},"OPEN SOURCE"),r.default.createElement("option",{value:"healthcare"},"HEALTH CARE")),r.default.createElement(n.Button,{bsStyle:"primary",bsSize:"large",onClick:function(){return e.props.search(e.state.searchtext)}},"Search")))}}]),t}(l.Component);t.default=i},378:function(e,t,a){"use strict";a(355),a(353);var l=a(1),r=babelHelpers.interopRequireDefault(l),n=a(21),u=a(89),s=a(354),i=babelHelpers.interopRequireDefault(s),o=a(145),c=babelHelpers.interopRequireDefault(o);(0,n.render)(r.default.createElement(c.default,null,r.default.createElement(u.Router,{history:u.browserHistory,routes:i.default})),document.getElementById("app"))}},[378]);