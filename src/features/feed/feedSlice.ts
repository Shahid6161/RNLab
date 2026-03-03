import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { FeedService, UiPost } from '../../services/FeedService';

interface FeedState {
    posts: UiPost[];
    loading: boolean;
    error: string | null;
}

const initialState: FeedState = {
    posts: [],
    loading: false,
    error: null,
};

// Async thunk to fetch posts using the existing FeedService
export const fetchPosts = createAsyncThunk(
    'feed/fetchPosts',
    async (_, { rejectWithValue }) => {
        try {
            const posts = await FeedService.getPosts();
            return posts;
        } catch (error: any) {
            return rejectWithValue(error.message || 'Failed to fetch posts');
        }
    }
);

export const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default feedSlice.reducer;
