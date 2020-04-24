import React, { Component } from 'react';

class Retweet extends Component {
  state = {
    retweet: false,
    value: 45,
  };

  handleRetweet = () => {
    const retweet = !this.state.retweet;
    let value = this.state.value;
    if (retweet) value += 1;
    else value -= 1;
    this.setState({ retweet });
    this.setState({ value });
  };

  render() {
    let iconClasses = 'retweet fa fa-retweet ';
    if (this.state.retweet) iconClasses += 'active';
    return (
      <i
        className={iconClasses}
        aria-hidden="true"
        onClick={this.handleRetweet}
        style={{ cursor: 'pointer' }}
      >
        <span>{this.state.value}</span>
      </i>
    );
  }
}

// const Retweet = () => {
//   return <i className="retweet fa fa-retweet" aria-hidden="true"></i>;
// };

export default Retweet;
