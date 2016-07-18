import React, { Component, PropTypes } from 'react';

import LoadingOverlay from './LoadingOverlay';
import MessageArea from './MessageArea';
import MessageForm from './MessageForm';

export default class Group extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    messages: PropTypes.array.isRequired,
  };

  render() {
    const { isLoading, onSubmit, messages } = this.props;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h1>MilkCocoa Client</h1>
              <MessageArea messages={messages} />
              <MessageForm onSubmit={onSubmit} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}