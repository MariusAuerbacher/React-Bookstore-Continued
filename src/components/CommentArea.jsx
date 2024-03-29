import { Component } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
  state = {
    comments: []
  }
  async getComments() {
    let res = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzA5OWU3MzczODAwMTUzNzQzNzIiLCJpYXQiOjE2NzUzNDE2MjYsImV4cCI6MTY3NjU1MTIyNn0.bPwPGuwUuH1beV7mOeR0Y1s_UlFQnOtBnktkiW1JB5I",
        },
      }
    );
    let data = await res.json();
    console.log(data);
    this.setState({comments: data})
  }
  componentDidMount() {
    this.getComments();
  }
  render() {
    return (
      <div>
        <AddComment asin={this.props.asin}/>
        <CommentsList comments={this.state.comments}/>
      </div>
    );
  }
}

export default CommentArea;

