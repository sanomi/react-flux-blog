import React from "react";
import Post from "./Post"

export default React.createClass({
  render() {
    return (
      <div className="post-list">
        {this.props.posts.map((post, i) => <Post key={i} {...post} />)}
      </div>
    );
  }
});
