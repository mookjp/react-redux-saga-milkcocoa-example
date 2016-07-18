import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class LoadingOverlay extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };

  render() {
    const { isLoading } = this.props;
    const overlay = (
      <div key="overlay" className="overlay">
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      </div>
    );

    return (
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}
      >
        { isLoading ? overlay : null}
      </ReactCSSTransitionGroup>
    );
  }
}

