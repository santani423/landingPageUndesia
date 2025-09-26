import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDemos,getTestimonials } from "../services/mockService";

// Async thunk untuk fetch data
export const fetchDemos = createAsyncThunk("demo/fetchDemos", async () => {
  const data = await getDemos();
  return data;
});

export const fetchTestimonials = createAsyncThunk("demo/getTestimonials", async () => {
  const data = await getTestimonials();
  return data;
});

const mockSlice = createSlice({
  name: "mock",
  initialState: {
    data: null,
    testimonials: null,
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
      })
      // getTestimonials
      .addCase(fetchTestimonials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }); 
  },
});

export default mockSlice.reducer;
