import React, { Component } from 'react';
import './City.css';

class City extends Component{
	constructor(){
		super();
		this.handlecity = this.handlecity.bind(this);
	}
	render(){
		var allcity = this.props.item.cityList.map((elem,index)=> {
			return<li className="lcity" key={index} data-item={elem} onClick={(e)=>{this.handlecity(e)}}>{elem}</li>
		})
		return(
			<div className="cityalllist" style={this.props.onShow?{display:"block"}:{display:"none"}}>
				<div className="obcity">{this.props.item.nameStr}</div>
				<ul className="cityname">
					{allcity}
				</ul>
			</div>
		)
	}
	handlecity(e){
		this.props.onCity(e.target.innerText);
		this.props.listshow();
	}

}
export default City;