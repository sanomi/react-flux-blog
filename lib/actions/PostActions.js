import API from "../components/API";

export default {
	startFetchAll(){
		console.log('start')
		API.fetchPosts();
	}
}