import ActionTypes from '../ActionTypes';
import AppDispatcher from '../AppDispatcher';
import {EventEmitter} from 'events';

let _posts = [];

let preparePost = (attributes) => {
  let post = Object.assign({}, attributes);
  post.preview = post.body.slice(0, 140);
  return post;
};

const CHANGE_EVENT = 'CHANGE';

class PostEmitter extends EventEmitter {
	getAll(){
		console.log(_posts);
    return _posts.reverse().map(po => preparePost(po.attributes));
	}
	emitChange(){
		this.emit(CHANGE_EVENT)
	}
	addChangeListener(cb){
		this.on(CHANGE_EVENT, cb)
	}
	removeChangeListener(cb){
		this.removeListener(CHANGE_EVENT, cb)
	}
}

let PostStore = new PostEmitter();

AppDispatcher.register( action =>{
	switch(action.actionType){
		case ActionTypes.RECEIVED_POSTS:
		console.log('4 inside store register case method');
		console.log(action.data)
		_posts = action.data;
		PostStore.emitChange();
		break;
		case ActionTypes.ADDED_POST:
    console.log('inside the store register case method for added post');
    console.log(action.data)
    console.log(_posts);
      _posts = _posts.concat(action.data)
      PostStore.emitChange();
      console.log(_posts)
    break;
		default:
		//do nothing
	}

});


export default PostStore;