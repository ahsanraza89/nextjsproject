import { createSlice } from "@reduxjs/toolkit";

export let userWalaSlice = createSlice({
    name: 'user-slice',
    initialState : {

      city:'fsd',
      currentUser:null,
  
      users : [{
        email : 'ahsan',
        password : 12323
       }
    
       ]
    },
    reducers : {

      loginHogya : (state , action) =>{
           state.currentUser = action.payload;
      },
      logoutHogya :(state, action)=>{
            
        state.currentUser = null;


    },

        createUser : (puranaData, nayaData)=>{
          puranaData.users.push(nayaData.payload)
        },
        removeuser : (state,action)=>{
          state.users.splice(action.payload,1)
        },
        updateUser : (state, action ) =>{
          state.users[action.payload.i] = action.payload.user;
        },
        // addKaro : (state,action)=>{
        //   state.users.push(action.payload)
        // }

    }

});

export let {createUser,removeuser , updateUser ,  loginHogya , logoutHogya} = userWalaSlice.actions;