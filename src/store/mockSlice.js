import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDemos } from "../services/mockService";

// Async thunk untuk fetch data
export const fetchDemos = createAsyncThunk("demo/fetchDemos", async () => {
  const data = await getDemos();
  return data;
});

export const getTestimonials = createAsyncThunk("demo/getTestimonials", async () => {
  const data = await getTestimonials();
  return data;
});

const demoSlice = createSlice({
  name: "demo",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDemos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDemos.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDemos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default demoSlice.reducer;
