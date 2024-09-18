import React from 'react';

const Login: React.FC = () => {
    return (
        <div className="main-wrapper">
            <div className="bg-pattern-style">
                <div className="content">
                <div className="account-content">
                    <div className="account-box">
                    <div className="login-right">
                        <div className="login-header">
                        <h3>
                            Login <span>Mentoring</span>
                        </h3>
                        <p className="text-muted">Access to our dashboard</p>
                        </div>
                        <form action="index.html">
                        <div className="form-group">
                            <label className="form-control-label">Email Address</label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">Password</label>
                            <div className="pass-group">
                            <input type="password" className="form-control pass-input" />
                            <span className="fas fa-eye toggle-password" />
                            </div>
                        </div>
                        <div className="text-end">
                            <a className="forgot-link" href="forgot-password.html">
                            Forgot Password ?
                            </a>
                        </div>
                        <button className="btn btn-primary login-btn" type="submit">
                            Login
                        </button>
                        <div className="text-center dont-have">
                            Don’t have an account? <a href="register.html">Register</a>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    );
};

export default Login;