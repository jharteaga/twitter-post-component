import React, { Component } from 'react';

class Like extends Component {
  state = {
    like: false,
    value: 125,
  };

  handleLike = () => {
    const like = !this.state.like;
    let value = this.state.value;
    if (like) value += 1;
    else value -= 1;
    this.setState({ like });
    this.setState({ value });
  };

  render() {
    let iconClasses = 'like fa fa-heart';
    if (!this.state.like) {
      iconClasses += '-o';
    } else {
      iconClasses += ' active';
    }
    return (
      <i
        className={iconClasses}
        aria-hidden="true"
        onClick={this.handleLike}
        style={{ cursor: 'pointer' }}
      >
        <span>{this.state.value}</span>
      </i>
    );
  }
}

// const Like = () => {
//   return <i class="like fa fa-heart-o" aria-hidden="true"></i>;
// };

export default Like;
