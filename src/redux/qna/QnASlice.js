import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import guidePosts from "../../data/guidePosts.json";
import axios from "axios";
import {env} from "../../_config/Env";


export const asyncFetchQna = createAsyncThunk('qna/asyncFetchQna', (param)=>{
    return axios.get(`${env.api_path}/api/public/qna/${param}`).then(response=> response.data);
});

const QnASlice = createSlice({
    name: 'qna',
    initialState: {data: null},
    reducers: {
        fetchQna: (state, action)=>{

            state.data = guidePosts[action.payload];
        },
        postQna: (state, action) =>{
            console.log("post action :"+ action.payload);
        },
        deleteQnA: (state,action)=>{
            console.log("delete action :"+ action.payload);
        }
    },
    extraReducers: builder => {
        builder.addCase(asyncFetchQna.pending, state=>{
            state.loading= true;
        })
        builder.addCase(asyncFetchQna.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
            state.error = ''
        })
        builder.addCase(asyncFetchQna.rejected, (state, action)=>{
            state.loading = false;
            state.data = {};
            state.error= action.error.message();
        })

    }

});

export default QnASlice.reducer;
export const {fetchQna, postQna} = QnASlice.actions