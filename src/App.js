import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAuthor: {},
      filteredAuthors: authors,
      authors: authors
    };

    this.selectAuthor = this.selectAuthor.bind(this);
    this.unSelectAuthor = this.unSelectAuthor.bind(this);
    this.filterAuthors = this.filterAuthors.bind(this);
  }

  filterAuthors(query) {
    let search = authors.filter(
      author =>
        author.first_name.toLowerCase().includes(query.toLowerCase()) ||
        author.last_name.toLowerCase().includes(query.toLowerCase())
    );
    this.setState({ filteredAuthors: search });
  }

  selectAuthor(author) {
    const newCurrentAuthor = authors.find(auth => auth === author);
    this.setState({ currentAuthor: newCurrentAuthor });
  }

  unSelectAuthor(author) {
    const newCurrentAuthor = {};
    this.setState({ currentAuthor: newCurrentAuthor });
  }

  exists(currentAuthor) {
    if (currentAuthor.first_name) {
      return <AuthorDetail currentAuthor={this.state.currentAuthor} />;
    } else {
      return (
        <AuthorsList
          authors={this.state.filteredAuthors}
          selectAuthor={this.selectAuthor}
          filterAuthors={this.filterAuthors}
        />
      );
    }
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unSelectAuthor={this.unSelectAuthor} />
          </div>
          <div className="content col-10">
            {this.exists(this.state.currentAuthor)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
