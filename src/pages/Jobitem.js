import React, { Component } from 'react';

class Jobitem extends Component{
	constructor(){
		super();
	}
	render(){
		let{item} = this.props;
		return(
			<li className="activeable list-item" onClick={(e)=>{this.handleId(e)}} data-positionid="{item.positionId}" data-companyid="{item.companyId}">
	            <img src={'https://static.lagou.com/'+item.companyLogo} className="item-logo" />
	            <div className="item-desc">
	                <h2 className="item-title">{item.companyName}</h2>
	                <p className="item-info">
	                    <span className="item-pos">
	                        {item.positionName}
	                    </span>
	                    <span className="item-salary">{item.salary}</span>
	                </p>
	                <p className="item-time">{item.createTime}</p>
	            </div>
	        </li>
		)
	}
	handleId(e){
		var _this = this
		var goodsId = _this.props.item.positionId 
		console.log(goodsId)
		window.location='/detail?'+goodsId;
	}
}

export default Jobitem;