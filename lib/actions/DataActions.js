import AppDispatcher from "../AppDispatcher";
import ActionTypes from "../ActionTypes";

export default {
  receivedPosts(results) {
    console.log("3. Inside receivedPosts", results);
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_POSTS,
      data: results
    });
  },
  addedPost(addedPost) {
  	console.log('in addedPost data actions')
  	AppDispatcher.dispatch({
  		actionType: ActionTypes.ADDED_POST,
  		data: addedPost
  	});
  }
}