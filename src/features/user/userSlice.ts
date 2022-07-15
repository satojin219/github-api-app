import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchByName } from "./userAPI";

export interface userState {
  user: { [index: string]: string };
  status: "idle" | "loading" | "failed";

}
const initialState: userState = {
  user: {},
  status: "idle"
};

export const getUser = createAsyncThunk(
  "user/fetchUser",
  async (userName?: string) => {
    const res = await fetchByName(userName!)
    console.log(res)
    return res;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.status = "failed";
       
      });
  },
});

export const selectUser = (state: userState) => state.user;
export default userSlice.reducer;
