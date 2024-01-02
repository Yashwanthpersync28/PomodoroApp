import { createAsyncThunk } from '@reduxjs/toolkit';
import { otpEndPoint, userVerifyEndPoint } from '../../constants';
import { ApiManager } from '../ApiManager';

// - - - - - Verify User API - - - - - //
export const userVerifyApi = createAsyncThunk(userVerifyEndPoint,
    async (data, {rejectWithValue}) => {
        const params = {
            ...data
        }
        const request = {
            method: "post",
            url: userVerifyEndPoint,
            body: {...data},
        };
        try{
            const res = await ApiManager({}, request)
            return res
        } catch  (error){
            const data = {
                status : error.status,
                code: error.data.Code,
                message: error.data.Msg
            }
            return await rejectWithValue(data)
        }   
})
// - - - - - Login User API - - - - - //
export const otpVerifyApi = createAsyncThunk(otpEndPoint,
    async (data, {rejectWithValue}) => {
        const params = {
            ...data
        }
        const request = {
            method: "post",
            url: otpEndPoint,
            body: {...data},
        };
        try{
            const res = await ApiManager({}, request)
            return res
        } catch(error){
            const data = {
                status : error.status,
                code: error.data.Code,
                message: error.data.Msg
            }
            return rejectWithValue(data)
        }   
})