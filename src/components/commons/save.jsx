import React, { Component } from 'react';

class Save extends Component {
  state = {
    save: false,
  };

  handleSave = () => {
    const save = !this.state.save;
    this.setState({ save });
  };

  render() {
    let iconClasses = 'save fa fa-bookmark';
    if (!this.state.save) iconClasses += '-o';

    return (
      <i
        className={iconClasses}
        aria-hidden="true"
        onClick={this.handleSave}
        style={{ cursor: 'pointer' }}
      ></i>
    );
  }
}

// const Save = () => {
//   return <i className="save fa fa-bookmark-o" aria-hidden="true"></i>;
// };

export default Save;
