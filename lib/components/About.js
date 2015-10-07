import React from "react";

export default React.createClass({
  componentDidMount() {
    console.log(this.props.params.name);
  },
  render() {
    return (
      <div className="about">
        About....
      </div>
    );
  }
});
