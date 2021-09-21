import React from 'react';
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login.css'

// const MONGO_SERVER=process.env.MONGO_SERVER;


class BestBooks extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // books: []
  //     // showData:false
  //   }
  // }

  
  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  render() {
    // console.log(this.state.books);

    console.log(this.props.books)


    /* TODO: render user's books in a Carousel */
    return (
      <>
      {this.props.books.length ? (
        <Carousel>
          {
            this.props.books.map((i) => {
              return (
                <>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://lh3.googleusercontent.com/bXB6ueK2wyb44f8A5Vxgf0_JmmTThXr7cqhUY9vr133RZkGguV2WGKV-Q4LTimmijCgO2zD3p3FxpfXcT3MALfLP3UQo8q2VpvzRLkj0Gg=s626"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h1>{i.title}</h1>
                      <h3>{i.description}</h3>
                      <h3>{i.status}</h3>
                      <h3>{i.email}</h3>
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