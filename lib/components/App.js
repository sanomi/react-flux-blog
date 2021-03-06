import React from "react";
import PostList from "./PostList";
import Form from "./Form";
import PostActions from "../actions/PostActions";

import PostStore from "../stores/PostStore";

let readState = () => {
  console.log("?. Reading the state now");
  return { posts: PostStore.getAll() };
};

export default React.createClass({
  getInitialState() {
    return readState();
  },
  addNewPost(postToAdd) {
    PostActions.postToAPI(postToAdd);
  },
  onChange() {
    console.log("5. State has changed");
    this.setState(readState());
  },
  componentDidMount() {
    PostActions.startFetchAll();
    PostStore.addChangeListener(this.onChange);
  },
  componentWillUnmount() {
    PostStore.removeChangeListener(this.onChange);
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
