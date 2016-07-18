import React, { Component, PropTypes } from 'react';

export default class Message extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
  };

  render() {
    const { message } = this.props;
    return (
        <div className="message-set">
          <p className="message">
            {`${message.name} : ${message.message}`}
          </p>
          <p className="message-timestamp">
            {new Date(message.timestamp).toString()}
          </p>
        </div>
    )
  }
}