import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counter/counterAPI';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, actions) => {
      state.user = actions.payload;
    },
    logout: (state) =>{
      state.user = null;
    },

  },
});

export const { login, logout } = userSlice.actions;

//selectUser will help to get the user from any component. 
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
