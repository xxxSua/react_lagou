import React, { Component } from 'react';
import axios from 'axios';
import Joblist from './Joblist.js';
class Job extends Component{
	constructor(){
		super();
		this.state = {
			list:[],
			cookie:null
		};
		//异步请求
		axios.post("/api/jobload",{
			mx:"123"
		}).then((res)=>{
			if(!res.code){
				this.setState({list:res.data.list})
			}
		})
	}
	render(){
		return(
			<div className="jobbox">
				<div className="info">
					<span className="banner">10秒钟定制职位</span>
					<a className="go" href="javascript:void(0)" target="_self">
						<em className="icon"></em>
						<em className="text">{this.state.cookie == null || this.state.cookie == "null"?<span onClick={(e)=>{this.handlego(e)}}>去登录</span>:<span>编辑</span>}</em>
					</a>
				</div>
				<Joblist list={this.state.list} />
			</div>
		)		
	}
	handlego(e){
		window.location="/login";
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
	};
}	
export default Job;