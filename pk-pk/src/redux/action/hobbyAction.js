

export const addNewHobby = (hobby) => {
    return {
        type:'ADD_HOBBY',
        payload:hobby,
    }
}

export const setActiveHobby = (hobby) => {
    return { 
        typetype:'SET_ACTIVE',
        payload:hobby,
    }
}