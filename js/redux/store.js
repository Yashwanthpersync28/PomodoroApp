import { configureStore, createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from "redux-persist"

// import messageReducer from "./userReducer/profileReducer"
import logger from "redux-logger"
import { reducer } from './index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user', 'auth','system']
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer, middleware: (getDefaultMiddleware) => {
        let middleware = getDefaultMiddleware({
            serializableCheck: false

        });
    
        if (process.env.NODE_ENV == "development") {
            middleware = middleware.concat(logger);
        }
        return middleware;
    }
});

export const persistor = persistStore(store)
export default store
