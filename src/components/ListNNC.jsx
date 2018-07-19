import React, { Component } from 'react'
import { Link  } from 'react-router-dom';

import NNC from '@/api/NNC.js'
import store from '@/store/store.js'
//import Footer from './Footer.jsx'

class ListNNC extends Component {
	
	componentDidMount(){
		NNC.NNClist()
	  NNC.NNClist_1()
	}
	render () {
		
		return (
     
			<div className='main'>
				<header className="header">
				 <div className='L'>
				   &lt;
				 </div>
				 <div className='C'>
				 	 名品汇-感悟奢享人生
				 </div>
				 <div className='R'>
				  ...
				 </div>
				</header>
				<div className='content'>
				   <div className="imglist">
							 {
								 store.getState().NNClist.map((item,index)=>{
									 return(<img key={index} src={item.imageUrl}/>)
								 })
							 }
					 </div>
					 <div className='ProList'>
					 	<ul className='goodslist'>
					 		{
					 			store.getState().NNClist_1.map( (item, index) => {
					 				return (
					 					<li key={index}>
					 						<Link to='/listnnc'>
					 							<div className='goodspic'>
					 								<img src={item.imageUrl} alt="" />
					 							</div>
					 							<dl className='goodsinfo'>
					 								<dt>{item.goodsName}</dt>
					 								<dd>{'￥'+item.goodsPrice+'.00'}</dd>
					 							</dl>											
					 						</Link>
					 					</li>
					 				)
					 			})									
					 		}
					 	</ul>
					 </div>
				</div>
				
			</div>
		)
	}
}

export default ListNNC