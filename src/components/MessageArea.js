import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Message from './Message';

export default class MessageArea extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className="message-area">
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.props.messages.map((message) =>
            <Message key={message.timestamp} message={message} />
          )}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}