import React, { Component } from 'react';
import {connect} from 'react-redux';
import {ADD_TEXT,CONCAT_TEXT} from "./action"

class ChildOne extends Component {

    constructor(){
        super();
        this.inputRef=React.createRef();
    }
    render() {
        return (
            <div >

                <header className="Child-header">

                    <p>ChildOne Component</p>
                    <span>value: {this.props.real_name} </span>
                    <input ref={this.inputRef}/>
                    <button onClick={()=>this.props.addingValue(this.inputRef.current.value)}>
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

    const addValue = (newval) =>{
        let val=newval;
        console.log(val)
        dispatch(ADD_TEXT(val));
    }

    return{
        addingValue:addValue,
    }




}

export default connect(mapStateToProps,mapDispatchToProps)(ChildOne);