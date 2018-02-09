import React, { Component } from 'react';
import axios from 'axios';
import './login.css'
class Login extends Component{
	constructor(){
		super();
		this.state={
			username:"",
			pwd:""
		};
		this.submit=this.submit.bind(this);
	}
	render(){
		return(
			<div className='loginpage'>
				<div className="loginheader">
					<h2>登录拉勾</h2>
					<a href="./regist" className="registbtn">注册</a>
				</div>
				<form className="loginform">
					<input type="text" value={this.state.username} onChange={(e)=>{this.handleusername(e)}} placeholder="请输入已验证的手机号和邮箱" className="loginuser" />
					<input type="password" value={this.state.pwd} onChange={(e)=>{this.handlepwd(e)}} placeholder="请输入密码" className="loginpwd" />
				</form>
				<button onClick={this.submit} className="bigloginbtn">登录</button>
				<footer className="loginfooter">
					<span>手机号登录</span>
				</footer>
			</div>
		)
	}
	handleusername(e){
		this.setState({
			username:e.target.value
		})
	};
	handlepwd(e){
		this.setState({
			pwd:e.target.value
		})
	};
	submit(e){
		let{username,pwd} = this.state;
		if(!username || !pwd){
			alert("账户密码不能为空！")
			return;
		}
		//异步请求后台
		axios.post('/api/login',{
			username,
			pwd
		}).then((res)=>{
			if(!res.code){
				window.location='/job';
				document.cookie="name="+username;
			}
		})

	}
}

export default Login;