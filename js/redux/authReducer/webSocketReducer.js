import { createSlice } from "@reduxjs/toolkit";

const webSocketConnection = createSlice({
    name: "webSocketConnectionReducer",
    initialState: {
        websocket: ""
    },
    reducers: {
        webSocketSetup(state, action) {
            state.websocket = action.payload
        }
    }
})
export const { webSocketSetup } = webSocketConnection.actions
export const webSocketConnectionReducer =  webSocketConnection.reducer