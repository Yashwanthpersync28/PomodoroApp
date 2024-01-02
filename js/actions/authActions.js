import { otpVerifyApi } from "../api/authApi/loginApi"
import { chatListApi, contactListApi } from "../api/userApi"

export const performLoginActions = (data) => {
    return async (dispatch) => {
        await dispatch(otpVerifyApi(data))
        // await dispatch(chatListApi())
        // await dispatch(contactListApi())
        return "success"
    }  
}