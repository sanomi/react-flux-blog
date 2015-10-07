import React from "react";
import PostList from "./PostList";
import Form from "./Form";
import PostActions from "../actions/PostActions"
import PostStore from "../stores/PostStore"

let readState = () {
  {posts: PostStore.getAll()}
};

export default React.createClass({
  getInitialState() {
    return readState();
  },
  addNewPost(postToAdd) {
    // let currentPosts = this.state.posts;
    // currentPosts.unshift(this.preparePost(postToAdd));
    // var newPostObject = new PostObject();
    // newPostObject.save(postToAdd);
    // this.setState({posts: currentPosts});
  },
  // preparePost(attributes) {
  //   let post = Object.assign({}, attributes);
  //   post.preview = post.body.slice(0, 140);
  //   return post;
  // },
  componentDidMount() {
    PostActions.startFetchAll();
  },
  render() {
    return (
      <div>
        <PostList posts={this.state.posts}>
        </PostList>
        <Form addPost={this.addNewPost} />
      </div>
    );
  }
});
