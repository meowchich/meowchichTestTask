import React from 'react';
import { connect } from 'react-redux';
import Actions from '../actions';

const mapDispatchToProps = (dispatch) => ({
  login: (username) => dispatch(Actions.Login.loginSet(username)),
})

class Login extends React.Component {


  constructor(props) {
    super(props);

    this.username = React.createRef();
    this.password = React.createRef();
  }
  onSubmit = (e) => {
    e.preventDefault();

    const { login, history } = this.props;
    const { username, password } = this;

    if ((username.current.value && username.current.value === 'Admin') && (password.current.value && password.current.value === '12345')) {
      login(username.current.value);
      history.push('/profile');
    } else {
      alert('Invalid');
    }
  }

  render() {
    return (
      <div>
        <h1>Login page</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="username" placeholder="Enter username" ref={this.username}/>
          <input type="password" name="password" placeholder="Enter password" ref={this.password}/>
          <button>Log in</button>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Login);
