import React, { Component } from 'react';
import './history.css'
class History extends Component{
	constructor(){
		super();
	}
	render(){
		return(
			<div onClick={(e)=>this.handlechangehis(e)} className="historybox" style={this.props.hisShow?{display:"block"}:{display:"none"}}>{this.props.item}<span onClick={(e)=>this.handlemove(e)}></span></div>
		)
	}
	handlemove(e){

		console.log(this.props.item)
		var string = this.props.item
		var storage = JSON.parse(localStorage.history);
		var result = [];
		storage.forEach(function(elem,index){
			if(elem!=string){
				result.push(elem)
			}
		})
		localStorage.history = JSON.stringify(result);
		this.props.onhis();
	}
	handlechangehis(e){
		this.props.onChhis(e.target.innerText);
	}
}

export default History;