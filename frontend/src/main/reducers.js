import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
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
    })
})

export default rootReducer