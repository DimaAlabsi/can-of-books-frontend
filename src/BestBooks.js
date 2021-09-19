import React from 'react';
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  componentDidMount = () => {
    axios.get(`${process.env.MONGO_SERVER}/books`)
      .then((res) => {
        this.setState({
          books: res.data
        });
      })
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {
    console.log(this.state.books);

    /* TODO: render user's books in a Carousel */
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (
          <Carousel>
            {
              this.state.books.map((i) => {
                return (
                  <>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>i.title</h3>
                        <h3>i.description</h3>
                        <h3>i.status</h3>
                        <h3>i.email</h3>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </>
                )

              })
            }

          </Carousel>

        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )

  }
}

export default BestBooks;
