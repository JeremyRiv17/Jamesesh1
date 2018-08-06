import React from 'react';
import './frame.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';








class Frame extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <header id="masterhead">
          <a href="/" id="jamlogo" className="hvr-back-pulse">J</a>
          <a href="/loginsignup">HEY</a>
        </header>
        {this.props.children}
        <footer id="masterfoot"><div id="footertext">© 2018 JAMSESH | ALL RIGHTS RESERVED</div></footer>
      </div>
    );
  }
}
export default Frame
