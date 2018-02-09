import React, { Component } from 'react';
import Jobitem from "./Jobitem";
import './Joblist.css'
class Joblist extends Component{
	constructor(){
		super();
		this.state={
			number:7
		}
	}
	render(){
		var _this =this;
		var items = this.props.list.map(function(elem,id){
			return<Jobitem item={elem} key={elem.positionId} /> 
		})
		var addlist = [];
		for(let i=0 ;i < this.state.number;i++){
			addlist.push(items[i])
		}
		return(
			<ul className="list">
				{addlist}
				<div className="addmore" onClick={(e)=>{this.handlemore(e)}} style={addlist.length >= items.length?{display:"none"}:{display:"block"}}>加载更多</div>
			</ul>
		)
	}
	handlemore(e){
		this.setState({
			number:this.state.number+7
		})
	}
}
export default Joblist;