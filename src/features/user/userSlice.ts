import { selectCount } from './../counter/counterSlice';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchByName } from "./userAPI";

export interface userState {
  value?: { [index: string]: string };
  status: "idle" | "loading" | "failed";
}

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (userName: string) => {
    const res = await fetchByName(userName);
    return res;
  }
);


export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {},
    status: "idle",
  },
  reducers: {
    changeUser: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectUser = (state: userState) => state.value;
export const { changeUser } = userSlice.actions;
export default userSlice.reducer;
