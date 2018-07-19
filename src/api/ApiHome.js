import {HOME_BANNER_URL, HOME_TEXT_URL, HOME_NAV_URL, HOME_BOARD_URL} from '@/server/index.js'

import store from '@/store/store.js'

export default {
	HomeBanner (cb) {
		fetch(HOME_BANNER_URL)
			.then( res => res.json() )
          	.then( (data) => { cb(data) })
         	.catch( (err) => { console.log(err) })
	},
	
	HomeText () {
		fetch(HOME_TEXT_URL)
			.then( res => res.json() )
          	.then( (data) => {
          		store.dispatch({
          			type: 'HOME_GET_TEXT',
          			data
          		})
          	})
         	.catch( (err) => { console.log(err) })
	},
	
	HomeNav () {
		fetch(HOME_NAV_URL)
			.then( res => res.json() )
          	.then( (data) => {
          		store.dispatch({
          			type: 'HOME_GET_NAV',
          			data
          		})
          	})
         	.catch( (err) => { console.log(err) })
	},
	
	HomeNNC () {
		fetch(HOME_BOARD_URL)
			.then( res => res.json() )
          	.then( (res) => {
          		store.dispatch({
          			type: 'HOME_GET_BOARD_NNC',
          			data: res[0].NNC
          		})
          	})
         	.catch( (err) => { console.log(err) })
	},
	
	HomeNNCList () {
		fetch(HOME_BOARD_URL)
			.then( res => res.json() )
          	.then( (res) => {
          		store.dispatch({
          			type: 'HOME_GET_BOARD_NNC_LIST',
          			data: res[0].NNC.ProBd
          		})
          	})
         	.catch( (err) => { console.log(err) })
	},
	
	HomeBrandSale () {
		fetch(HOME_BOARD_URL)
			.then( res => res.json() )
          	.then( (res) => {
          		store.dispatch({
          			type: 'HOME_GET_BOARD_BRANDSALE',
          			data: res[0].BrandSale
          		})
          	})
         	.catch( (err) => { console.log(err) })
	},
	
	HomeBSList () {
		fetch(HOME_BOARD_URL)
			.then( res => res.json() )
          	.then( (res) => {
          		store.dispatch({
          			type: 'HOME_GET_BOARD_BRANDSALE_LIST',
          			data: res[0].BrandSale.ProBd
          		})
          	})
         	.catch( (err) => { console.log(err) })
	},
	
	HomeBdPic () {
		fetch(HOME_BOARD_URL)
			.then( res => res.json() )
          	.then( (res) => {
          		store.dispatch({
          			type: 'HOME_GET_BOARD_BDPIC',
          			data: res[0].BdPic
          		})
          	})
         	.catch( (err) => { console.log(err) })
	},
	
	HomeHotTop10 () {
		fetch(HOME_BOARD_URL)
			.then( res => res.json() )
          	.then( (res) => {
          		store.dispatch({
          			type: 'HOME_GET_BOARD_HOTTOP10',
          			data: res[0].HotTop10
          		})
          	})
         	.catch( (err) => { console.log(err) })
	},
	
	HomeHT10List () {
		fetch(HOME_BOARD_URL)
			.then( res => res.json() )
          	.then( (res) => {
          		store.dispatch({
          			type: 'HOME_GET_BOARD_HOTTOP10_LIST',
          			data: res[0].HotTop10.ProBd
          		})
          	})
         	.catch( (err) => { console.log(err) })
	}
}

