
import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import socketIOClient from "socket.io-client";
export const Twit = require('twit')

const { createProxyMiddleware } = require("http-proxy-middleware");

let T = new Twit({
  consumer_key:         'Ks0a4XuXJBFH6EO2TEPIlyJcd',
  consumer_secret:      'ywDpWuAQgKHwfAi1S4rv8Dnsj1nBlhCemXzY66iOW4j7ZOuhQu',
  access_token:         '1448003172971253762-2C1REwRRFIahA0SJkP5jp9gvuq4EpH',
  access_token_secret:  'oe3JrgVP8HBnxE8P3ovr9Ak5iBGqCaefDOC0nFnQAo2U5',
 
})
 
T.post('statuses/update', { status: 'hello  soixante circuits!' }, function(err, data, response) {
  console.log(data)
})
 

//  search twitter for all tweets containing the word 'dog' since July 11, 2011
//
T.get('search/tweets', { q: 'dog', count: 100 }, function(err, data, response) {
  console.log(data)

})
 
T.get('account/verify_credentials', { skip_status: true })
  .catch(function (err) {
    console.log('caught error', err.stack)
  })
  .then(function (result) {
    // `result` is an Object with keys "data" and "resp".
    // `data` and `resp` are the same objects as the ones passed
    // to the callback.
    // See https://github.com/ttezel/twit#tgetpath-params-callback
    // for details.
 
    console.log('data', result.data);
  })

 
//
//  destroy a tweet with id '343360866131001345'
//
T.post('statuses/destroy/:id', { id: '343360866131001345' }, function (err, data, response) {
  console.log(data)
})
 


export default Twit;