import { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";


class SingleBook extends Component {
  state = {
    selected: false,
    showComment: false
  }
  render() {
    return (
      <>
      <Card onClick={()=>this.setState({showComment:true})}>
      <Card.Img variant="top" src={this.props.singleBook.img} />
      <Card.Body>
        <Card.Title>
          {this.props.singleBook.title}
        </Card.Title>
        ${this.props.singleBook.price}
      </Card.Body>
      {this.state.showComment ? <CommentArea asin={this.props.singleBook.asin}/> : null}
      </Card>
   
    </>
    );
  }

}

export default SingleBook;
