import React, { Component } from "react";
// import Clarifai from 'clarifai';
import "./App.css";
import Logo from "./component/Logo";
import Navigation from "./component/Navigation";
import ImageLinkForm from "./component/imageLinkForm";
import Rank from "./component/Rank";
import FaceRecognition from "./component/FaceRecognition";
import SignIn from "./component/SignIn/SignIn";
import Register from "./component/Register/Register";

// const app = new Clarifai.App({
//   apiKey: '09dc22fa866347d59eb19c49c15900af'
//  });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      route: "signin",
      isSignedIn: false,
    };
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  };
  onButtonSubmit = () => {
    console.log("click");
    // app.models
    // .predict('09dc22fa866347d59eb19c49c15900af',
    //            this.state.input)
    // .then(
    //   function(response) {
    //     console.log(response)
    //   },
    //   function(err) {

    //   }
    // )
  };
  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState({isSignedIn: false})
    }else if (route === 'home'){
        this.setState({isSignedIn:true})
    }
    this.setState({route: route});
  }
  render() {
    const {isSignedIn, route} = this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        {
        route === "home" ? 
          <div>
          <Logo />
          <Rank />
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition />
        </div>
         : (
          this.state.route === 'signin' ? (
            <SignIn onRouteChange={this.onRouteChange}/>
          ):(
            <Register onRouteChange={this.onRouteChange}/>
          )
        )}
      </div>
    );
  }
}

export default App;
