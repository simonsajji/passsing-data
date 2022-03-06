import React, { Component } from 'react';
import {connect} from 'react-redux';
import {ADD_TEXT,CONCAT_TEXT} from "./action"

class ChildTwo extends Component {
    constructor(){
        super();
        this.inputRef=React.createRef();
    }
    render() {
        return (
            <div >

            <header className="Child-header">

                <p>ChildTwo Component</p>
                <span>value: {this.props.real_name} </span>
                <input  ref={this.inputRef}/>
                <button onClick={()=>this.props.concatingValue(this.inputRef.current.value)}>
                    submit
                </button>
                
                
                
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

    const addValue = (newVal) =>{
        let val= newVal;
        console.log(val)
        dispatch(ADD_TEXT(val));
    }
    const concatValue = (newVal) =>{
        let val= newVal;
        console.log(val)
        dispatch(CONCAT_TEXT(val));
    }

    return{
        addingValue:addValue,
        concatingValue:concatValue,
    }




}

export default connect(mapStateToProps,mapDispatchToProps)(ChildTwo);