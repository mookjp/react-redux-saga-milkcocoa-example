import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class MessageForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  render() {
    const { onSubmit, isLoading } = this.props;
    const submitWrapper = (e) => {
      e.preventDefault();
      onSubmit(this.refs.name.value, this.refs.message.value);
    }

    return (
      <div className="message-form">
        <form onSubmit={submitWrapper}>
          <fieldset className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" ref="name" placeholder="mookjp" />
          </fieldset>
          <fieldset className="form-group">
            <label htmlFor="message">Message</label>
            <input type="text" className="form-control" id="message" ref="message" placeholder="Type your message here." />
          </fieldset>
          <button type="submit" className="btn btn-primary">Post!</button>
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            { isLoading ? <i className="loading fa fa-spinner fa-pulse fa-1x fa-fw"></i> : null }
          </ReactCSSTransitionGroup>
        </form>
      </div>
    )
  }
}