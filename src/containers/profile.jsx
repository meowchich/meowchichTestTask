import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions';

const mapStateToProps = (state) => ({
  username: state.login.username,
  logged: state.login.logged,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(Actions.Login.loginUnser()),
})

class Profile extends React.Component {
  componentDidMount() {
    const { logged, history } = this.props;

    if (!logged) history.replace('/login');
  }

  componentDidUpdate(prevProps) {
    const { logged, history } = this.props;

    if (prevProps.logged && !logged) history.replace('/login');
  }

  render() {
    const { username, logout } = this.props;

    return (
      <div>
        <h1>Profile page</h1>
        <p>Hello, {username}</p>
        <button onClick={logout}>Log out</button>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
