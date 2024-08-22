import { configureStore } from '@reduxjs/toolkit';

import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";
import { persistReducer, persistStore } from "redux-persist";
import AuthReducer from "./reducers/Auth";
import ConnectionReducer from "./reducers/Connection";

const persistConfig = {
	key: "tee-table",
	storage,
	whitelist: ["auth","connection"]
};

const rootReducer = persistCombineReducers(persistConfig, {
	auth: AuthReducer,
	connection: ConnectionReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export const persistor = persistStore(store);
