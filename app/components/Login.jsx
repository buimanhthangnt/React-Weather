var React = require('react');
var ErrorModal = require('ErrorModal');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');

var Login = React.createClass({
    onLogin: function (e) {
        e.preventDefault();
        var u = this.refs.username.value;
        var p = this.refs.password.value;
        if (u == "thangbm" && p == "1212") {
            this.setState({
                error: ''
            });
            localStorage.setItem('user', u);
            hashHistory.push('/');
        } else {
            this.setState({
                error: 'Username or password incorrect!'
            });
        }
    },
    getInitialState: function () {
        return {
            error: ''
        }
    },
    
    render: function () {
        return (
            <div className="columns medium-6 large-6 small-centered" style={{marginTop: 72 + 'px'}}>
                <h1 className="text-center page-title">Login to use our service</h1>
                <form onSubmit={this.onLogin}>
                    <input type="text" ref="username" placeholder="User name"/>
                    <input type="password" ref="password" placeholder="Password"/>
                    <button type="submit" className="button expanded hollow">Login</button>
                </form>
                <h4 className="text-center">{this.state.error}</h4>
            </div>
        )
    }
});

module.exports = Login;