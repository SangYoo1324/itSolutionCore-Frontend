import {configureStore} from "@reduxjs/toolkit";
import QnAListSlice from "./qna/QnAListSlice";
import {createLogger} from "redux-logger/src";
import QnASlice from "./qna/QnASlice";
import MemberSlice from "./member/MemberSlice";
import AuthVerificationSlice from "./member/AuthVerificationSlice";


const logger = createLogger();

const store = configureStore({
    reducer: {
        qnaList: QnAListSlice,
        qna: QnASlice,
        member: MemberSlice,
        authVerification: AuthVerificationSlice
    },
    // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
});

export default store;