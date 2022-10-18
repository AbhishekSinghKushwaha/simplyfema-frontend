export const others = (state = {}, action) => {
    switch (action.type) {
        case "OTHERS_DATA":
            {
                return {
                    ...state,
                    othersValues: action.payload
                }
            }
        case "GET_OTHERS_DATA_BY_USER_SUCCESS":
            {
                return {

                    ...state,
                    othersValues: action.payload.data,
                    getLoading: false,
                    updateSuccess: true,
                    updateError: false
                }
            }
        case "GET_OTHERS_DATA_BY_USER_LOADING":
            {
                return {
                    ...state,
                    getLoading: true,
                }
            }
        case "GET_OTHERS_DATA_BY_USER_FAILURE":
            {
                return {
                    ...state,
                    getLoading: false,
                    getError: true,
                    getSuccess: false
                }
            }
        case "UPDATE_OTHERS_DATA_LOADING":
            {
                return {
                    ...state,
                    updateLoading: true
                }
            }
        case "UPDATE_OTHERS_DATA_SUCCESS":
            {
                return {
                    ...state,
                    updateSuccess: true,
                    updateError: false,
                    othersValues: action.payload.data,
                    updateLoading: false
                }
            }
        case "UPDATE_OTHERS_DATA_FAILURE":
            {
                return {
                    ...state,
                    updateError: true,
                    updateSuccess: false,
                    updateLoading: false
                }
            }


        case "CHANGE_ROLE":
            {
                return {
                    ...state,
                    userRole: action.userRole
                }
            }
        default:
            return {
                ...state
            }
    }
}