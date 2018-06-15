import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  constructor(props){
  	super(props);

    this.state = {
    }

  }

  render() {
    return (<div className="app">
                This is the extension's popup. It appears when the user left-clicks the extension.
            </div>)
  }

}

render(<App/>, document.getElementById('app'));