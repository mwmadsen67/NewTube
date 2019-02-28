import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';

const mapStateToProps = state => {

  return({
    errors: state.errors.session,
    formType: 'Sign up',
    navLink: <Link to='/signin'>Sign in instead</Link>
  });
};

const mapDispatchToProps = dispatch => {
  return({
    processForm: (user) => dispatch(signup(user))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);