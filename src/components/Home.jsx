import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';
import { Link  } from 'react-router-dom';

import ApiHome from '@/api/ApiHome.js'
import store from '@/store/store.js'
import Footer from './Footer.jsx'

class Home extends Component {
	constructor (props) {
		super (props)
		this.state = {
			data: ['1', '2', '3'],
      		imgHeight: 199,
      		NNCProBd:[]
		}
	}
	
	componentDidMount () {
		ApiHome.HomeBanner( (res) => {
			setTimeout(() => {
			    this.setState({
			        data: res
			    })
			}, 100)
		})	
		ApiHome.HomeText()
		ApiHome.HomeNav()
		ApiHome.HomeNNC()
		ApiHome.HomeNNCList()
		ApiHome.HomeBrandSale()
		ApiHome.HomeBSList()
		ApiHome.HomeBdPic()
		ApiHome.HomeHotTop10()
		ApiHome.HomeHT10List()
	}
	
	render () {
		
		return (
			<div className='main'>
				<header className="header">
					<div className='left'>
						<img src='https://pic3.cnrmall.com/image/df/e5/dfe5c0db500c119e8d570142f184ee2d.png' alt="" />
					</div>
					<div className='center'>
						<input tpye='text'  placeholder='请输入关键词'/>
					</div>
					<div className='right'>
						<i className='iconfont icon-xiaoxi' />
					</div>
				</header>
				<div className='content'>
					<Carousel autoplay={true} infinite>
						{this.state.data.map((val,index) => (
							<a key={index} href="http://www.alipay.com" style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }} >
							<img
								src={val.BannerUrl}
								alt=""
								style={{ width: '100%', verticalAlign: 'top' }}
								onLoad={() => {
								// fire window resize event to change height
								window.dispatchEvent(new Event('resize'));
								this.setState({ imgHeight: 'auto' });
								}}
							/>
							</a>
						))}
					</Carousel>
					<div className='TypeText'>
						<p>快报</p>
						<ul>
							{
								store.getState().HomeText.map( (item, index) => {
									return (
										<li key={index}>
											{item.Text}
										</li>
									)
								})								
							}														
						</ul>
					</div>
					
					<div className='HomeNav'>
						<ul>
							{
								store.getState().HomeNav.map( (item, index) => {
									return (
										<li key={index}>
											<img src={item.NavUrl} alt="" />
										</li>
									)
								})								
							}
						</ul>
					</div>
					
					<div className='NNC'>						
						<div className='SmBd'>
							<Link to='/listnnc'>
								<img src={store.getState().HomeNNC.SmallBd} alt=""/>
							</Link>
						</div>
						<div className='BigBd'>
							<Link to='/listnnc'>
								<img src={store.getState().HomeNNC.BigBd} alt=""/>
							</Link>
						</div>
						<div className='ProList'>
							<ul className='goodslist'>
								{
									store.getState().HomeNNCList.map( (item, index) => {
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
					
					<div className='BrandSale'>
						<div className='SmBd'>
							<Link to='/brandsale'>
								<img src={store.getState().HomeBrandSale.SmallBd} alt=""/>
							</Link>
						</div>	
						<div className='ProList'>
							<ul className='goodslist'>
								{
									store.getState().HomeBSList.map( (item, index) => {
										return (
											<li key={index}>
												<Link to='/brandsale'>
													<div className='goodspic'>
														<img src={item.imageUrl} alt=""/>
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
					
					<div className='BdPic'>
						<div>
							<Link to='/home'>
								<img src={store.getState().HomeBdPic.JZ} alt=""/>
							</Link>
						</div>	
						<div>
							<Link to='/home'>
								<img src={store.getState().HomeBdPic.ZB} alt=""/>
							</Link>
						</div>
					</div>
					
					<div className='HotTop10'>
						<div className='SmBd'>
							<Link to='/hottop10'>
								<img src={store.getState().HomeHotTop10.SmallBd} alt=""/>
							</Link>
						</div>	
						<div className='BigBd'>
							<Link to='/hottop10'>
								<img src={store.getState().HomeHotTop10.BigBd} alt=""/>
							</Link>
						</div>
						<div className='ProList'>
							<ul className='goodslist'>
								{
									store.getState().HomeHT10List.map( (item, index) => {
										return (
											<li key={index}>
												<Link to='/hottop10'>
													<div className='goodspic'>
														<img src={item.imageUrl} alt=""/>
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
					
					<Footer></Footer>
				</div>				
				
			</div>			
		)
	}
}

export default Home