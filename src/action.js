// functions which return objects

const ADD_TEXT = (payload)=>{

    return{
        type:"ADD_TEXT",
        payload,
    }
    
}
const CONCAT_TEXT = (payload)=>{

    return{
        type:"CONCAT_TEXT",
        payload,
    }


}


export {ADD_TEXT,CONCAT_TEXT}