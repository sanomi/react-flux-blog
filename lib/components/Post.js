import React from "react";

export default React.createClass({
  render() {
    let { title, preview, date } = this.props;
    return (
      <div className="post">
        <h3>{title}</h3>
        <time>{date}</time>
        <p>{preview}</p>
      </div>
    );
  }
});
