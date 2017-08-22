var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Example = require('Example');
var Login = require('Login');

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!applicationStyles');

function requireLogin(nextState, replace) {
	var user = localStorage.getItem('user');
	if (user == undefined) {
		replace({
	  		pathname: '/login'
	  	});
	}
	
}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/login" component={Login}/>
		<Route path="/" component={Main} onEnter={requireLogin}>
			<Route path="about" component={About}/>
			<Route path="example" component={Example}/>
			<IndexRoute component={Weather}/>
		</Route>
	</Router>,
	document.getElementById('app')
);