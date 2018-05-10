import React from 'react';

const withAuthentication = (Component) => {
  class WithAuthentication extends React.Component {
    render() {
      return (
        <Component />
      );
    }
  }

  return WithAuthentication;
}

export default withAuthentication;