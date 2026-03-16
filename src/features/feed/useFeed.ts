import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { fetchPosts } from './feedSlice';

export const useFeed = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { posts, loading, error } = useSelector((state: RootState) => state.feed);

    const loadPosts = useCallback(() => {
        if (posts.length === 0) {
            dispatch(fetchPosts());
        }
    }, [dispatch, posts.length]);

    return { posts, loading, error, loadPosts };
};
