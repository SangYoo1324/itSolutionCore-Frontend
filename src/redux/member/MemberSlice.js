import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {env} from "../../_config/Env";
import {getTokenFromCookie, setAuthCookie} from "../../_globalUtil/CookieControl";



export const asyncUserInfoFetch = createAsyncThunk('member/asyncFetch',async ()=>{
    const token = getTokenFromCookie();
    const data = new FormData();
    if(token){//  have token inside cookie
        data.append("jwtToken", token.Authorization);
        console.log("TOKEN: ", token);
        return await axios.post(`${env.api_path}/api/member`, data, {headers: {'Authorization': `Bearer ${token.Authorization}`}}).then(response => {
           const respAuthHeader = response.headers.authorization;
           if(respAuthHeader){
               console.log("Auth header exists from response. set new Token.. "+respAuthHeader);
               setAuthCookie(respAuthHeader.split(" ")[1]);
           }else{
               console.log("Auth header doesn't exists from response. It's already valid accessToken");
           }

            return response.data;
       }).catch(error => { // if axios fail, set member data null
           throw error;
       });
    }else{ //token doesn't exist
        console.log("Token doesn't exist... cannot update the userInfo");

        throw  "Cookie doesn't exist";
    }

});

export const asyncAuthLogin = createAsyncThunk('member/asyncAuthLogin',     (data) => {
    console.log("param::", data);
    try {

        //change data to FormData
        const form = new FormData();
        Object.keys(data).forEach(key => {
            form.append(key, data[key]);
        });

        for (let pair of form.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
        return axios.post(`${env.api_path}/login`, form).then(response => {
            // get authorization header
            const authHeader = response.headers.get("Authorization");
            console.log("Authorization header= ", authHeader);
            const token = authHeader ? authHeader.replace('Bearer ', '') : null;
            if (!token)
                console.log("no Authorization header found... something wrong in backend side");

            //set token in a cookie named "Authorization"
            else {
                document.cookie = `Authorization=${token}; path=/;`;

            }
        })

    } catch (error) {
        throw  error;
    }
});




const MemberSlice = createSlice({
    name: 'member',
    initialState:
        {   data: null,
            authState: false,
            loading: true,
            loginAttempt: false,
            signUpAction: false
    },
    reducers: {

        loginSuccess: (state,action) =>{
            state.authState = true;
            state.loading= false;

        },
        loginAttempt: (state,action)=>{
          state.loginAttempt = true
        },
        logout:(state, action)=>{
            //clear Authorization cookie
            document.cookie = 'Authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            state.data = null;
            state.authState = false;
        }
    },
    extraReducers: builder =>{

    //Fetching UserInfo
        builder.addCase(asyncUserInfoFetch.pending, (state,action)=>{
            state.loading = true;

        })
        builder.addCase(asyncUserInfoFetch.fulfilled, (state, action)=>{
            state.loading = false;
            state.data = action.payload;
            state.authState = true;
            state.error = null

        })
        builder.addCase(asyncUserInfoFetch.rejected, (state, action)=>{
            state.loading = false;
            state.data = null;
            state.error= action.error.message;
            state.authState= false;
        })




        //Regular AuthLogin
        builder.addCase(asyncAuthLogin.pending, (state,action)=>{
            state.loading = true;
        })
        builder.addCase(asyncAuthLogin.fulfilled, (state, action)=>{
            state.loading = false;
            state.authState = true;
            state.error = null
            state.loginAttempt = false;
        })
        builder.addCase(asyncAuthLogin.rejected, (state, action)=>{
            state.loading = false;
            state.data = null;
            state.error= action.error.message;
            state.loginAttempt = false;
        })






    }
});




export default MemberSlice.reducer;
export const memberActions = MemberSlice.actions;
