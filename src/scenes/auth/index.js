import React, {Component} from 'react';
import { connect } from 'react-redux'
import {authUser} from '../../modules/user'
import ErrorMessage from '../../components/error-message'

class Auth extends Component {
  onLoginChange = (e) => {
    this.setState({login: e.target.value});
  };

  onPasswordChange = (e) => {
    this.setState({password: e.target.value});
  };

  onSubmit = () => {
    this.props.authUser(this.state.login, this.state.password);
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Login</label>
            <input type="text" name="login" value={this.login} onChange={this.onLoginChange}/>
          </div>
          <div>
            <label>Password</label>
            <input type="text" name="login" value={this.password} onChange={this.onPasswordChange}/>
          </div>
          <button type="button" onClick={this.onSubmit}>Login</button>
        </form>
        <ErrorMessage show={this.props.error}>Login or email are incorrect</ErrorMessage>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuthorized: state.user.isAuthorized,
    error: state.user.error,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    authUser: (login, password) => dispatch(authUser(login, password))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)