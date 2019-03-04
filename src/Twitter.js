import React, { Component } from "react";

export default class TweetButton extends Component {
  render() {
    return (
      <a
        ref="tweetButton"
        href="https://twitter.com/share"
        className="twitter-share-button m-3"
        data-text={this.props.text}
        data-show-count="false"
      >
        Tweet
      </a>
    );
  }
}
