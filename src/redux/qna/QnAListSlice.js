import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import guidePosts from "../../data/guidePosts.json";
import qnASlice, {postQna} from "./QnASlice"
import axios from "axios";
import {env} from "../../_config/Env";
const initialState = { data: null };

export const asyncFetchQnaList = createAsyncThunk('qnaList/asyncFetchQnaList', ()=>{
    return axios.get(`${env.api_path}/api/public/qna`)
        .then(response=> {

            return response.data});
})

const QnAListSlice = createSlice(
    {
        name: 'qnaList',
        initialState: initialState,
        reducers: {
            fetchQnaList: (state)=>{
            state.data = guidePosts;

        }

        },
        extraReducers: builder => {
            builder.addCase(postQna, (state,action)=>{
                console.log("qnaList extra reducer to update the whole list after post ", action.payload);
            },)

            builder.addCase(asyncFetchQnaList.pending, state => {
                state.loading = true;
            })
            builder.addCase(asyncFetchQnaList.fulfilled, (state, action)=>{
                state.loading= false;
                state.data = action.payload;
                state.error = '';
            })
            builder.addCase(asyncFetchQnaList.rejected, (state, action)=>{
                state.loading = false;
                state.data = [];
                state.error = action.error.message
;            })

        }

    }
)

export default QnAListSlice.reducer;
export const {fetchQnaList} = QnAListSlice.actions;