import * as formConstants from "../Constants/formConstants";
export const setFormData = (data) => {
    alert(typeof data);
    return {
        type: formConstants.SET_FORM_DATA,
        payload: data
    }
}