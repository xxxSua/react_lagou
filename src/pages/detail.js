import React, { Component } from 'react';
import axios from 'axios';
import './detail.css'
class Detail extends Component{
	constructor(){
		super();
		this.state={
			dateilword:[],
			index:""
		}
		var id = window.location.search.slice(1)
		axios.post('/api/jobload',{
			positionId:id
		}).then((res)=>{
			var _this =this
			if(!res.code){
				var listitem = res.data.list
				console.log(listitem)
				 listitem.map(function(elem,index){
				 	if(elem.positionId == id){
				 		_this.setState({
				 			dateilword:elem,
				 			index:index
				 		})
				 	}
				})
			
			}
		})
	};
	render(){
		var work = this.state.dateilword
		console.log(work)
		return(
			<div className="detailmode">
				<header>
				职位详情
					<div className="left" onClick={(e)=>this.handlepage(e)}></div>
					<div className="right" onClick={(e)=>this.handlepage(e)}></div>
				</header>
				<div className="postitle">
					<h2 className="title">{work.positionName}</h2>
					<div className="activeable">
						<span className="icon"></span>
						<span className="text">未收藏</span>
					</div>
				</div>
				<div className="term">
					<div className="terms">
						<span className="termsalary termall">
							<em className="icon"></em>
							<span className="text">{work.salary}</span>
						</span>
						<span className="termaddress termall">
							<em className="icon"></em>
							<span className="text">{work.city}</span>
						</span>
						<span className="termnature termall">
							<em className="icon"></em>
							<span className="text">全职</span>
						</span>
						<span className="termyear termall">
							<em className="icon"></em>
							<span className="text">不限</span>
						</span>
						<span className="termeduction termall">
							<em className="icon"></em>
							<span className="text">不限</span>
						</span>
					</div>
					<div className="temtation">
                		职位诱惑：职位晋升 福利待遇好
					</div>
				</div>
				<div className="company">
					<img src={'https://static.lagou.com/'+work.companyLogo} />
					<div className="desc">
						<div className="dleft">
							<h2 className="title">
							{work.companyName}
							</h2>
							<p>{work.companyFullName}</p>
						</div>
						<span className="dright"></span>
					</div>
				</div>
				<div className="positiondesc">
					<div className="header">
						职位描述
					</div>
					<div className="content">
						<p>工作职责</p>
						<p>1、负责创新消费金融产品的市场调研、设计开发以及上市推广，收集客户反馈，通过数据分析，提出产品优化合理性建议； </p>
						<p>2、负责已上线消费金融产品的全程运营支持，建立产品分析和策略模型，并根据执行效果，进行策略调整，持续优化产品； </p>
						<p>3、负责掌上生活、微信服务号等线上平台的营销策划和运营，通过大数据分析、客户模型搭建，实施精准营销； </p>
					</div>
				</div>
				<div className="eval">
					<div className="header">
						面试评价(0)
					</div>
					<div className="content">
						<p>暂无评价</p>
					</div>
				</div>
				<div className="fixbtn">
					<div className="btn">
						投递简历
					</div>	
				</div>
			</div>
		)
	}
	handlepage(e){
		window.location = "/job"
	}
}

export default Detail;