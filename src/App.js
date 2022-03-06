import React, { Component } from 'react';
import './App.css';
import ChildOne from "./ChildOne"
import ChildTwo from "./ChildTwo"
import {connect} from 'react-redux'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Parent Component <span> value: {this.props.real_name} </span></h2>
            <ChildOne />
            <ChildTwo />
              
          
        </header>
         
        
      </div>
    );
  }
}
const mapStateToProps = (state,ownProps)=>{

  let real_name=state.name;

  return{
      real_name
  }

  
}

const mapDispatchToProps = (dispatch, ownProps)=>{

  return{}

}


export default connect(mapStateToProps,mapDispatchToProps)(App);