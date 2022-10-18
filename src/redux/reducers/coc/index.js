import { combineReducers } from "redux"
import { fdi } from './fdiReducer'
import { odi } from './odiReducer'
import { ecb } from './ecbReducer'
import { bo } from './boReducer'
import { po } from './poReducer'
import { lo } from './loReducer'
import { others } from './othersReducer'

const cocReducers = combineReducers({
    fdi,
    odi,
    ecb,
    bo,
    po,
    lo,
    others
})

export default cocReducers
