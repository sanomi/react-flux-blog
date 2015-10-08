import React from "react";

export default React.createClass({
  getInitialState (){
    return {expanded:false}
  },
  toggleExpanded() {
    this.setState({expanded: !this.state.expanded})
  },
  render() {
    let { title, preview, date, body } = this.props;
    var expanded = this.state.expanded;
    let content = expanded ? body : preview;
    let text= expanded ? 'Read Less' : "Read More";
    return (
      <div className="post">
        <h3>{title}</h3>
        <time>{date}</time>
        <p>{content}</p>
        <button  
        onClick={this.toggleExpanded}>{text}</button>
      </div>
    );
  }
});
