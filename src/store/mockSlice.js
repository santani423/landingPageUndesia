import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getDemos,
  getTestimonials,
  getThemes,
  getThemeVideos,
  getThemeCategories,
} from "../services/mockService";

// Async thunk untuk fetch data
export const fetchDemos = createAsyncThunk("demo/fetchDemos", async () => {
  const data = await getDemos();
  return data;
});

export const fetchTestimonials = createAsyncThunk(
  "demo/getTestimonials",
  async () => {
    const data = await getTestimonials();
    return data;
  }
);

export const fetchThemes = createAsyncThunk("demo/getThemes", async (page = 1, perPage = 10) => {
  const data = await getThemes(page, perPage);
  return data;
});

export const fetchThemeVideos = createAsyncThunk(
  "demo/getThemeVideos",
  async (page = 1, perPage = 10) => {
    const data = await getThemeVideos(page, perPage);
    return data;
  }
);

export const fetchThemeCategories = createAsyncThunk(
  "demo/getThemeCategories",
  async () => {
    const data = await getThemeCategories();
    return data;
  }
);

const mockSlice = createSlice({
  name: "mock",
  initialState: {
    data: null,
    baseUrl: "https://undesia.com/",
    testimonials: null,
    themes: null,
    themeVideos: [],
    themeCategories: [],
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
      })
      // getThemes
      .addCase(fetchThemes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchThemes.fulfilled, (state, action) => {
        state.loading = false;
        state.themes = action.payload;
      })
      .addCase(fetchThemes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // getThemeVideos
      .addCase(fetchThemeVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchThemeVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.themeVideos = action.payload;
      })
      .addCase(fetchThemeVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // getThemeCategories
      .addCase(fetchThemeCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchThemeCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.themeCategories = action.payload;
      })
      .addCase(fetchThemeCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default mockSlice.reducer;
