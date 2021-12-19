import React, { Component } from 'react';
import Clarifai  from 'clarifai'
import './App.css';
import Logo from './component/Logo';
import Navigation from './component/Navigation';
import ImageLinkForm from './component/imageLinkForm'
import  Rank  from './component/Rank';
import FaceRecognition from './component/FaceRecognition';

const app = new Clarifai.App( {
  apiKey: '53e1df302c079b3db8a0a36033ed2d15'
});


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value)
  }
  onButtonSubmit = () => {
    console.log('click')
    app.models
    .predict('53e1df302c079b3db8a0a36033ed2d15',
               'https://samples.clarifai.com/face-det.jpg')
    .then(
      function(response) {
        console.log(response)
      },
      function(err) {
  
      }
    )
   
  }
  render() {
  return (
    <div className="App">
    
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition />
    </div>
  );
}
}

export default App;
