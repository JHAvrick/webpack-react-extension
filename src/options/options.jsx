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
                This is the options page.
            </div>)
  }

}

render(<App/>, document.getElementById('app'));