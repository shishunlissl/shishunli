import {LIST_NNC_URL} from '@/server/index.js'
import {LIST_NNCA_URL} from '@/server/index.js'
import store from '@/store/store.js'

export default{
	NNClist() {
		fetch(LIST_NNC_URL)
			.then( res => res.json() )
			.then( (res) => {
				//console.log(res[0])
				store.dispatch({
					type: 'LIST_NNC_URL',
					data:res[0].SecBd

				})
			})
			.catch( (err) => { console.log(err) })
	},
	NNClist_1() {
			fetch(LIST_NNCA_URL)
				.then( res => res.json() )
				.then( (res) => {
					console.log(res[0].ThrBd.ProBd)
					store.dispatch({
						type: 'LIST_NNCA_URL',
						data:res[0].ThrBd.ProBd
					})
				})
				.catch( (err) => { console.log(err) })
		}
}