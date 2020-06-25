import React from "react";

const withLogin = (WrappedComponent) => {
  return class WithLogin extends React.Component {
    constructor(props) {
      super(props);

      this.state = { loggued: false };
      this.verifyUserLogin = this.verifyUserLogin.bind(this);
    }

    verifyUserLogin() {
      setTimeout(() => {
        const loggued = Math.round(Math.random());
        this.setState({ loggued: loggued === 1 });
      });
    }

    componentDidMount() {
      this.verifyUserLogin();
    }

    render() {
      return <WrappedComponent {...this.props} loggued={this.state.loggued} />;
    }
  };
};

export default withLogin;
