const initialState ={
    // user info
    list:[],
    activeId:null,
}

const hobbyReducer = (state=initialState,action) => {
    switch(action.type){
        case 'ADD_HOBBY':{
            const newList =[...state.list]
            return state;
        }
        case 'SET_ACTIVE_HOBBY' :{
            return state;
        }
        default: 
            return state;
    }
}

export default hobbyReducer;