
import DataActions from "../actions/DataActions";

let PostObject = Parse.Object.extend("PostObject");

export default {
  fetchPosts() {
    console.log("2. Inside fetchPosts");
    var query = new Parse.Query(PostObject);
    query.find({
      success: (results) => {
        console.log('results', results)
        DataActions.receivedPosts(results);
      },
      error: (error) => {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }
}