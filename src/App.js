import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from'./BestBooks';
import axios from "axios";
import BookForm from './BookForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      title:"",
      description:"",
      status:"",
      email:"",

    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }
  tiltleHandle=(e)=>{
    this.setState({
      title:e.target.value,
    })
  }
  descriptionHandle=(e)=>{
    this.setState({
      description:e.target.value,
    })
  }
  statusHandle=(e)=>{
    this.setState({
      status:e.target.value,
    })
  }
  emailHandle=(e)=>{
    this.setState({
      email:e.target.value,
    })
  }
  submitHandle=(e)=>{
    e.preventDefault();
    let config={
      method:"POST",
      baseurl:`${process.env.REACT_APP_BACKEND_URL}`,
      url:"/create-books",
      data:{
        title:this.state.title,
        description:this.state.description,
        status:this.state.state,
        email:this.state.email

      }
     
    };
    axios(config).then((res)=>{
      this.setState({
        data:res.data,
      });
    }
    )
    console.log(`${process.env.REACT_APP_BACKEND_URL}/create-books`)
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>
          <BestBooks/>
          <BookForm tiltleHandle={this.tiltleHandle}
          statusHandle={this.statusHandle}
          emailHandle={this.emailHandle}
          descriptionHandle={this.descriptionHandle} 
          submitHandle={this.submitHandle}/>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
