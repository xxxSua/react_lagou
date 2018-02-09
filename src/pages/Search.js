import React, { Component } from 'react';
import './Search.css';
import City from './City';
import History from './history.js'
import Joblist from './Joblist.js'
import axios from 'axios';
class Search extends Component{
	constructor(){
		super();
		this.state={
			list:[],
			str:localStorage.getItem('history')?JSON.parse(localStorage.getItem('history')):[],
			value:"",
			historyshow:"",
			cityshow:false,
			choosecity:"全国",
			citys:[{"cityList":["北京","上海","广州","深圳","成都","杭州"],"name":"热门城市","nameStr":"热门城市"},{"cityList":["保定","北海","北京","包头","长春","成都","常德","承德","重庆","长沙","常州","沧州","滁州","郴州","东莞","大连","东营","德阳","德州","达州","佛山","阜阳","福州"],"name":"","nameStr":"ABCDEF"},{"cityList":["桂林","贵阳","广州","赣州","淮安","邯郸","哈尔滨","合肥","黄冈","呼和浩特","海口","衡阳","河源","杭州","惠州","湖州","菏泽","金华","江门","荆门","济南","济宁","嘉兴","荆州"],"name":"","nameStr":"GHIJ"},{"cityList":["昆明","廊坊","丽水","洛阳","临沂","连云港","兰州","柳州","泸州","马鞍山","绵阳","梅州","宁波","南昌","南充","南京","南宁","南通","南阳"],"name":"","nameStr":"KLMN"},{"cityList":["莆田","青岛","黔东南","秦皇岛","清远","泉州","日照"],"name":"","nameStr":"OPQR"},{"cityList":["韶关","上海","石家庄","遂宁","汕头","绍兴","沈阳","三亚","深圳","苏州","泰安","天津","唐山","太原","台州","泰州"],"name":"","nameStr":"STUV"},{"cityList":["潍坊","武汉","芜湖","威海","乌鲁木齐","无锡","温州","西安","香港特别行政区","厦门","西宁","邢台","新乡","信阳","襄阳","咸阳","徐州","银川","盐城","宜昌","营口","烟台","岳阳","扬州","淄博","珠海","镇江","湛江","肇庆","中山","遵义","郑州","漳州","株洲"],"name":"","nameStr":"WXYZ"}]
		}
		this.handlecityname = this.handlecityname.bind(this);
		this.handleshow = this.handleshow.bind(this);
		this.handlebtn = this.handlebtn.bind(this);
		this.handlest = this.handlest.bind(this);
		this.handlesearchhis = this.handlesearchhis.bind(this);
	}
	render(){
		var citylist = this.state.citys.map((elem,index)=> {
			return <City item={elem} key={index} onCity={this.handlecityname} listshow={this.handleshow} onShow={this.state.cityshow}/>;
		})
		// console.log(localStorage.getItem("history"))
		var his = this.state.str.map((elem, index)=> {
			return <History item={elem} key={index} onChhis={this.handlesearchhis} hisShow={this.state.historyshow} onhis={this.handlest}/>
		})
		return(
			<div className="searchcontent">
				<div className="linputer">
					<div className="lbutton" onClick={(e)=>{this.handleshow(e)}}>
						<span className="city">{this.state.choosecity}</span>
						<span className="cityicon"></span>
					</div>
					<div className="rinput">
						<input className="inputer" value={this.state.value}  onChange={(e)=>this.handlesearch(e)} onFocus={(e)=>this.handlehisshow(e)}  type="text" placeholder="搜索职位或公司" />
						<span className="search" onClick={(e)=>this.handlebtn(e)}>
							<em className="searchicon"></em>
						</span>
					</div>
				</div>
				<div className="citylist">
					{citylist}
				</div>
				<div className="history">{his}</div>
				<Joblist list={this.state.list} />		
			</div>
		)
	}
	handlecityname(name){
		this.setState({
			choosecity:name
		})
	}
	handleshow(e){
		this.setState({
			cityshow:!this.state.cityshow
		})	
	}
	handlesearch(e){
		this.setState({
			value:e.target.value
		})
	}
	//存localstoage
	handlebtn(e){
		if(!this.state.value){
			return
		}
		if(this.state.str.indexOf(this.state.value)==-1){
			this.state.str.unshift(this.state.value)
		}
		
		localStorage.setItem('history',JSON.stringify(this.state.str))
		this.setState({
			str:JSON.parse(localStorage.getItem('history')),
			historyshow:false
		})
		//异步请求
		var cityname = this.state.choosecity;
		var searchword = this.state.value;
		var arr=[];
		var arry = [];
		axios.post("/api/jobload",{
			cityname:"cityname",
			searchword:"searchword"
		}).then((res)=>{
			if(!res.code){
				//模拟搜索
				res.data.list.map((elem, index)=>{
					if(cityname == elem.city || cityname== "全国"){
						arr.push(elem)
					}	
				})
				arr.map((elem, index)=> {
					if(searchword == elem.positionName){
						arry.push(elem)
					}
				})
				console.log(arr)
				console.log(arry)
				this.setState({list:arry})
			}
		})
		
	}
	handlest(){
		this.setState({
			str:JSON.parse(localStorage.getItem('history'))
		})
	}
	handlehisshow(e){
		this.setState({
			historyshow:true
		})
	}
	handlesearchhis(val){
		console.log(val)
		this.setState({
			value:val,
			historyshow:false
		})
	}
}
export default Search;