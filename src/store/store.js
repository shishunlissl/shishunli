import {createStore, combineReducers} from 'redux'

const HomeText = (state = [], action) => {
	const {type, data} = action
	if (type === 'HOME_GET_TEXT') {
		state = data
	}
	return state
}

const HomeNav = (state = [], action) => {
	const {type, data} = action
	if (type === 'HOME_GET_NAV') {
		state = data
	}
	return state
}

const HomeNNC = (state = [], action) => {
	const {type, data} = action
	if (type ==='HOME_GET_BOARD_NNC') {
		state = data
	}
	return state
}
const HomeNNCList = (state = [], action) => {
	const {type, data} = action
	if (type === 'HOME_GET_BOARD_NNC_LIST') {
		state = data
	}
	return state
}

const HomeBrandSale = (state = [], action) => {
	const {type, data} = action
	if (type === 'HOME_GET_BOARD_BRANDSALE') {
		state = data
	}
	return state
}

const HomeBSList = (state = [], action) => {
	const {type, data} = action
	if (type === 'HOME_GET_BOARD_BRANDSALE_LIST') {
		state = data
	}
	return state
}

const HomeBdPic = (state = [], action) => {
	const {type, data} = action
	if (type === 'HOME_GET_BOARD_BDPIC') {
		state = data
	}
	return state
}

const HomeHotTop10 = (state = [], action) => {
	const {type, data} = action
	if (type === 'HOME_GET_BOARD_HOTTOP10') {
		state = data
	}
	return state
}

const HomeHT10List = (state = [], action) => {
	const {type, data} = action
	if (type === 'HOME_GET_BOARD_HOTTOP10_LIST') {
		state = data
	}
	return state
}
const NNClist=(state=[],action)=>{
	const {type,data}=action
	if(type === 'LIST_NNC_URL'){
		state = data
	}
	return state
}
const NNClist_1=(state=[],action)=>{
	const {type,data}=action
	if(type === 'LIST_NNCA_URL'){
		state = data
	}
	return state
}
const reducer = combineReducers({
	HomeText,
	HomeNav,
	HomeNNC,
	HomeNNCList,
	HomeBrandSale,
	HomeBSList,
	HomeBdPic,
	HomeHotTop10,
	HomeHT10List,
	NNClist,
	NNClist_1
})

const store = createStore(reducer)

export default store