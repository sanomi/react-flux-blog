import DataActions from '../actions/DataActions';

let PostObject = Parse.Object.extend("PostObject");

export default {
	fetchPosts(){
    console.log('2')
	 var query = new Parse.Query(PostObject);
    query.find({
      success: (results) => {
        DataActions.receivedPosts();

        // this.setState({
        //   posts: results.map(po => this.preparePost(po.attributes))
        // });
      },
      error: (error) => {
        alert("Error: " + error.code + " " + error.message);
      }
    });
	}
}