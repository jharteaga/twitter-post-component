import React, { Component } from 'react';
import Profile from './commons/profile';
import Tweet from './tweet';

class Post extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="post__profile">
          <Profile />
        </div>
        <div className="post__tweet">
          <Tweet />
        </div>
      </React.Fragment>
    );
  }
}

export default Post;
