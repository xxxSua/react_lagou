import React, { Component } from 'react';
import axios from 'axios';
import './regist.css'
class Regist extends Component{
	constructor(){
		super();
		this.state={
			phone:"",
			num:"",
			code:"",
			contrynum:"0086"
		}
	}
	render(){
		return(
			<div>
				<div className='registpage'>
					<div className="registheader">
						<h2>注册拉勾</h2>
						<a href="./login" className="logintbtn">登录</a>
					</div>
					<div className="contry">
						<input type="text" value={this.state.contrynum} onChange={(e)=>{this.handlecontry(e)}} className="countrynum" />
						<input type="text" value={this.state.phone} onChange={(e)=>{this.handlephone(e)}} placeholder="请输入常用手机号" className="registphone" />
					</div>
					<div className="code">
						<input type="text" value={this.state.num} onChange={(e)=>{this.handlenum(e)}} placeholder="请证明你不是机器人" className="registnum" />
						<div className="codeimg"><img src="https://passport.lagou.com/vcode/create?from=register&refresh=1517905512858" /></div>
					</div>
					<div className='codenum'>
						<input type="text" value={this.state.code} onChange={(e)=>{this.handlecode(e)}} placeholder="请输入收到的验证码" className="registcode" />
						<a className="codenumbtn" href="javascript:void(0)">获取验证码</a>
					</div>
					<button onClick={(e)=>this.submit(e)} className="bigregistbtn">注册</button>
					<div className="registtxt">注册拉勾代表你已同意<span>《拉勾用户协议》</span></div>
				</div>
			</div>
		)
	}
	handlephone(e){
		this.setState({
			phone:e.target.value
		})
	}
	handlenum(e){
		this.setState({
			num:e.target.value
		})
	}
	handlecode(e){
		this.setState({
			code:e.target.value
		})
	}
	submit(e){
		let{phone,num,code} = this.state
		if(!phone || !num || !code){
			alert("注册信息不能为空！")
			return
		}
		//异步请求
		axios.post("/api/regist",{
			phone,
			num,
			code
		}).then((res)=>{
			if(!res.code){
				alert("注册成功！")
				window.location = "/login"
			}
		})
	}
}

export default Regist;