import React from "react"
import tweetStyles from "./tweets.module.css"
import twitterFetcher from "twitter-fetcher"

export default class Tweets extends React.Component { 
   
 

  render() {


 var config1 = {
	"profile": {"screenName": this.props.username},
	"domId": 'tweets',
	"maxTweets": 2,
	"enableLinks": true,
	"showImages": false,
	"showInteraction": false,
	"showUser": false
};
var html = twitterFetcher.fetch(config1); 

    return (

      <div className={tweetStyles.tweets}>
      
      <div class="handle">
      <a rel="noopener noreferrer" href="https://twitter.com/{this.props.username}" target="_blank">
      <span class="fa fa-twitter" aria-hidden="true"><span class="sr-only">Twitter</span></span><br />
      @{this.props.username}</a></div>
      {html}  
      <div id="tweets"></div>

    </div>
    )
  }
}