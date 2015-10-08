import API from "../components/API";

export default {
	startFetchAll(){
		console.log('start')
		API.fetchPosts();
	},
	postToAPI(postToAdd) {
  	console.log('inside post to api');
  	API.postTo(postToAdd);
  }
}