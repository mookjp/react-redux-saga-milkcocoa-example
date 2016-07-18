import { connect } from 'react-redux';

import Home from '../components/Home';

import { postMessage } from '../reducers/message';

const mapStateToProps = (state) => {
  return {
    isLoading: state.loading.isLoading,
    messages: state.message.messages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (name, message) => {
      dispatch(postMessage({ name, message }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
