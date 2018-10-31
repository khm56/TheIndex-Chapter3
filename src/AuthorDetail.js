import React, { Component } from "react";
import BookRow from "./BookRow";

class AuthorDetail extends Component {
  render() {
    console.log("BOOKS: ", this.props.currentAuthor.first_name);
    let books = this.props.currentAuthor.books.map(book => (
      <BookRow book={book} key={book.title} />
    ));
    return (
      <div className="author col-xs-10">
        <div>
          <h3>
            {this.props.currentAuthor.first_name}{" "}
            {this.props.currentAuthor.last_name}
          </h3>
          <img
            src={this.props.currentAuthor.imageUrl}
            className="img-thumbnail"
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{books}</tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
