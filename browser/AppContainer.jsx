import React, { Component } from 'react'
import { AudioContextComponent } from 'react-audio'
import { AudioSource } from './components/AudioSource'

var Context = window.AudioContext || window.webkitAudioContext
var context = new Context();

function loadDogSound(url) {
  var request = new XMLHttpRequest();
  request.open('GET', '/sound-file.wav', true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      dogBarkingBuffer = buffer;
    }, onError);
  }
  request.send();
}

// function playSound(buffer) {
//   var source = context.createBufferSource(); 
//   source.buffer = buffer;                 
//   source.connect(context.destination);
//   source.start(0);                          
// }

export default class AppContainer extends Component {
	componentDidMount () {
		playSound()
	}
	render(){
		<AudioContextComponent audioContext={context} >
			<AudioSource />
		</AudioContextComponent>	
	}
}



