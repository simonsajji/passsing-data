const reducer = (state, action)=>{
    if(state==undefined){
        return{
            name:"",
        }

    }

    switch(action.type){

        case "ADD_TEXT":
            // console.log(action.payload);
            state.name=action.payload;
            break;
        case "CONCAT_TEXT":
            state.name=state.name.concat(action.payload);

            // console.log(action.payload);
            break;


        default:
            break;
    }


    console.log(state.name)



    return {...state}
}

export default reducer;