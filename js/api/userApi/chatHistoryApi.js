import { createAsyncThunk } from '@reduxjs/toolkit';
import { chatHistoryEndPoint, deleteMessageEndPoint } from '../../constants';
import { ApiManager } from '../ApiManager';

export const chatHistoryApi = createAsyncThunk(chatHistoryEndPoint,
    async (data, {getState, rejectWithValue}) => {
        const request = {
            method: "get",
            url: chatHistoryEndPoint+`?id=${data.id}&mid=${data.mid}`,
            body: {},
        };
        try{
            const res = await ApiManager(getState().auth.user.at, request)
            return res
        } catch(error){
            const data = {
                data: error,
                status : error.status,
                code: error.data.Code,
                message: error.data.Msg
            }
            return rejectWithValue(data)
        }   
})

export const deleteMessageApi = createAsyncThunk(deleteMessageEndPoint,
    async (data, {getState, rejectWithValue}) => {
        const request = {
            method: "post",
            url: deleteMessageEndPoint+`?id=${data.id}&mid=${data.mid}`,
            body: {...data},
        };
        try{
            const res = await ApiManager(getState().auth.user.at, request)
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