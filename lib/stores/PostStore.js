import ActionTypes from '../ActionTypes';
import AppDispatcher from '../AppDispatcher';

class PostEmitter {

}

let PostStore = new PostEmitter();

AppDispatcher.register( action =>{

	switch(action.actionType){
		case ActionTypes.RECEIVED_POSTS:
		console.log('4 inside store register case method');
		//do something with it
		break;
		default:
		//do nothing
	}

});


export default PostStore;