const INITIAL_STATE = {
    description: 'To study',
    list: [{
        _id: 1,
        description: 'Read new books',
        done: true
    },{
        _id: 2,
        description: 'Meeting with the team',
        done: false
    },{
        _id: 3,
        description: 'Make new notes',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload }
    case 'TODO_SEARCHED':
      return { ...state, list: action.payload.data }    
    default:
      return state    
  }
}