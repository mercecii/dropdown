import { configureStore } from "@reduxjs/toolkit";
import {
  CounterSliceInitialState,
  counterReducer,
} from "./slices/counterSlice";
import { createLogger } from "redux-logger";
import { GetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

const logger = createLogger();
export default configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (
    getDefaultMiddleWare: GetDefaultMiddleware<{
      counter: CounterSliceInitialState;
    }>
  ) => getDefaultMiddleWare().concat(logger),
});
