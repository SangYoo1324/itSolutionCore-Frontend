import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {env} from "../../_config/Env";
import {getTokenFromCookie} from "../../_globalUtil/CookieControl";
import {memberActions} from "./MemberSlice";


export const asyncUserAuthVerify = createAsyncThunk('member/user_auth_verify', ()=>{

    const token = getTokenFromCookie();
    const data = new FormData();

    if(token){//  have token inside cookie
        data.append("jwtToken", token.Authorization);
        return axios.get(`${env.api_path}/api/auth/user/test`,{headers: {'Authorization': `Bearer ${token.Authorization}`}}).then(response=>{
            return response.data;
        }).catch(error=>{ // if axios fail, set state data null
           throw error;
        });
    }else{ //token doesn't exist
        console.log("Token doesn't exist... cannot update the userInfo");

        throw  "Cookie doesn't exist";
    }

});


const AuthVerificationSlice = createSlice({
    name: 'authVerification',
    initialState:{
        data: null,
        loading: true,
        user: false,
        admin: false
    },
     reducers: {

     },
     extraReducers: builder => {
        // logOut Action triggered
         builder.addCase(memberActions.logout, (state)=>{
             state.user = false;
             state.admin= false;
             state.loading= false;
         })


         //ROLE_USER Auth Verification Request
    builder.addCase(asyncUserAuthVerify.pending, (state,action)=>{
    state.loading = true;
})
    builder.addCase(asyncUserAuthVerify.fulfilled, (state, action)=>{
    state.loading = false;
    state.user = true;
    state.admin = false;
    state.error = null;
})
    builder.addCase(asyncUserAuthVerify.rejected, (state, action)=>{
    state.loading = false;
    state.data = null;
    state.error= action.error.message;
    state.user = false;
    state.admin = false;
})
     }
});


export default AuthVerificationSlice.reducer;

export const authVerificationActions = AuthVerificationSlice.actions;

