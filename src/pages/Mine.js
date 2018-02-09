import React, { Component } from 'react';
import './Mine.css';

class Mine extends Component{
	constructor(){
		super();
		this.state={
			cookie:null
		}
		this.handlelogin = this.handlelogin.bind(this);
	}
	render(){
		return(
			<div className="content">			
				<div className="logininfo">
					<div className="nologin center">
						<a className="loginbut" href="javascript:void(0)" target="_self" >{this.state.cookie==null || this.state.cookie == "null"?<span onClick={this.handlelogin}>登录 / 注册</span>:"欢迎："+this.state.cookie}</a>
					</div>
				</div>
				<div className="buttons">
					<a className="button deliver" href="javascript:void(0)"><span>投递</span></a>
					<a className="button interview" href="javascript:void(0)">面试</a>
					<a className="button invitation" href="javascript:void(0)"><span>邀约</span></a>
					<a className="button collect" href="javascript:void(0)">收藏</a>
				</div>
				<div className="outlogin" onClick={(e)=>{this.handleoutlogin(e)}} style={this.state.cookie==null || this.state.cookie=="null"?{display:"none"}:{display:"block"}}><span>退出登录</span></div>
			</div>
		)
	}
	handlelogin(e){
		window.location='/login';
	}
	handleoutlogin(e){
		document.cookie="name="+null;
		window.location.reload();
	}
	componentWillMount(){
		var cookie,arr,reg=new RegExp("(^| )name=([^;]*)(;|$)");
		if(arr=document.cookie.match(reg)){
			cookie = unescape(arr[2]);
		}
		else{
			cookie =  null;
		}
		this.setState({
			cookie:cookie
		})
	}
}

export default Mine;