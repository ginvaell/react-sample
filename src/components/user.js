import React from 'react';
import { connect } from 'react-redux';

export function User({user}) {
  return !user.isAuthorized ? null : (
    <div>
      <p>First name: {user.name}</p>
      <p>Last name: {user.lastName}</p>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(User);