export const odi = (state = {}, action) => {
    switch (action.type) {
        case "ODI_DATA":
            {
                return {
                    ...state,
                    odiValues: action.payload
                }
            }
        case "GET_ODI_DATA_BY_USER_SUCCESS":
            {
                return {

                    ...state,
                    odiValues: action.payload.data,
                    getLoading: false,
                    updateSuccess: true,
                    updateError: false
                }
            }
        case "GET_ODI_DATA_BY_USER_LOADING":
            {
                return {
                    ...state,
                    getLoading: true,
                }
            }
        case "GET_ODI_DATA_BY_USER_FAILURE":
            {
                return {
                    ...state,
                    getLoading: false,
                    getError: true,
                    getSuccess: false
                }
            }
        case "UPDATE_ODI_DATA_LOADING":
            {
                return {
                    ...state,
                    updateLoading: true
                }
            }
        case "UPDATE_ODI_DATA_SUCCESS":
            {
                return {
                    ...state,
                    updateSuccess: true,
                    updateError: false,
                    odiValues: action.payload.data,
                    updateLoading: false
                }
            }
        case "UPDATE_ODI_DATA_FAILURE":
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