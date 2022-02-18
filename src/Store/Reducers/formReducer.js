import * as type from "../Constants/formConstants";

// import formState from '../states/formState';

const formReducer = (state = {}, action) => {
    switch (action.type) {
        case type.SET_FORM_DATA:
            return { ...state, formData: [...state.formData, action.payload] }
        default:
            return state;
    }
}

export default formReducer
