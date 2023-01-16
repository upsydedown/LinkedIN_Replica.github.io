import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    Login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
    },
  });

  export const { login, logout } = userSlice.actions;
  //selectors
  export const selectUser = (state) => state.user.user;
  export default userSlice.reducer;
