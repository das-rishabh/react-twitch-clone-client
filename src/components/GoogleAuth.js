import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "741795403848-4muestsqapn3a86e55q8dp3cq5vf2ffc.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}
export default GoogleAuth;
