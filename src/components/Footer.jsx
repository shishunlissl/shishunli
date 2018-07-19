import React, {Component} from 'react'
import { Link  } from 'react-router-dom'

class Footer extends Component {
	
	
	render () {
		
		return (
			<div className='footer'>
				<div className='f-top'>
					<ul>
						<li>
							<Link to='/register'>注册</Link>
						</li>
						<li>
							<Link to='/login'>登录</Link>
						</li>
						<li>设置</li>
						<li>返回顶部</li>
					</ul>
				</div>
				<div className='f-cen'>
					<ul>
						<li>
							<Link to='/'>
								<i className='iconfont icon-kehuduan' />
								<p>客户端</p>
							</Link>
						</li>
						<li>
							<Link to='/'>
								<i className='iconfont icon-bangzhushouji' />
								<p>触屏版</p>
							</Link>
						</li>
						<li>
							<Link to='/'>
								<i className='iconfont icon-huihua_fuzhi-copy' />
								<p>电脑版</p>
							</Link>
						</li>
					</ul>
				</div>
				<div className='f-bom'>
					Copyright@2010-2018央广购物cnrmall.com版权所有
				</div>
			</div>
		)
	}
}

export default Footer
