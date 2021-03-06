import React from 'react';
import { clearSessionErrors } from '../../actions/session_actions';

class SessionForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <div>
            <br/>
            <li className="signin-error" key={`error-${i}`}>
              {error}
            </li>
          </div>
        ))}
      </ul>
    );
  }

  demoLogin(){
    return () => this.setState({
      username: "Demo User",
      email: "demo_user@nutube.com",
      password: "youtubesucks"
    });
  }

  render() {
    const usernameInput = (this.props.formType === 'Create your Account') ? (
      <div className="signin-float-label">
        <label>
          <input className="signin-input" 
            type="text" placeholder="Username" 
            value={this.state.username} 
            onChange={this.update('username')} />
        </label>
      </div>
    ) : (
      <br/>
    );

    const demo = (this.props.formType === 'Sign in') ? (
      <div className="signin-demo">
        <input className="signin-btn" 
          type="submit" 
          value="Demo" 
          onClick={this.demoLogin()} />
      </div>
    ) : (
      <div></div>
    );

    return(
      <div className="signin-page">
        <div className="signin-form-container">
          <form onSubmit={this.handleSubmit} className="signin-form">
            <div className="main-logo">
              <img id='logo' src={window.images.logo} width="40" height="28"/>
              &nbsp;
              <h1 className="logo-text">NuTube</h1>
            </div>
            {/* <br/> */}
            <h2>{this.props.formType}</h2>
            <br/>
            <h3>to continue to NuTube</h3>
            {this.renderErrors()}
            <div className="signin-input-container">
              {usernameInput}
              <div className="signin-float-label">
                <label>
                  <input className="signin-input" 
                    type="email" 
                    placeholder="Email" 
                    value={this.state.email} 
                    autoFocus 
                    onChange={this.update('email')} />
                </label>
              </div>
              <div className="signin-float-label">
                <label>
                  <input className="signin-input" 
                    type="password" 
                    placeholder="Password" 
                    value={this.state.password} 
                    onChange={this.update('password')} />
                </label>
              </div>
              <div className="signin-bottom-container">
                <div className="signin-link" onClick={this.props.clearErrors}>
                  {/* navLink here */}
                  {this.props.navLink}
                </div>
                {demo}
                <input className="signin-btn" type="submit" value="Next" />
              </div>
              <br/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;