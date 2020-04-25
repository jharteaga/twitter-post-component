import React, { Component } from 'react';
import TweetContent from './tweetContent';
import Comment from './commons/comment';
import Retweet from './commons/retweet';
import Like from './commons/like';
import Save from './commons/save';

class Tweet extends Component {
  state = {
    retweet: {
      active: false,
      value: 45,
    },
    like: {
      active: false,
      value: 125,
    },
    save: {
      active: false,
    },
  };

  handleRetweet = () => {
    const active = !this.state.retweet.active;
    let value = this.state.retweet.value;
    if (active) value += 1;
    else value -= 1;
    this.setState((prevState) => ({
      retweet: {
        ...prevState.retweet,
        active,
        value,
      },
    }));
  };

  handleLike = () => {
    const active = !this.state.like.active;
    let value = this.state.like.value;
    if (active) value += 1;
    else value -= 1;
    this.setState((prevState) => ({
      like: {
        ...prevState.like,
        active,
        value,
      },
    }));
    this.setState({ value });
  };

  handleSave = () => {
    const active = !this.state.save.active;
    this.setState((prevState) => ({
      save: {
        ...prevState.save,
        active,
      },
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div className="post__content">
          <TweetContent />
        </div>
        <div className="post__actions">
          <Comment />
          <Retweet
            retweet={this.state.retweet.active}
            value={this.state.retweet.value}
            onClick={() => this.handleRetweet()}
          />
          <Like
            like={this.state.like.active}
            value={this.state.like.value}
            onClick={() => this.handleLike()}
          />
          <Save
            save={this.state.save.active}
            onClick={() => this.handleSave()}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Tweet;
