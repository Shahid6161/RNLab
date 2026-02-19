import { Post as ApiPost } from '../types';
import { Post as FeedPost } from '../data/feedData';

export interface UiPost extends FeedPost {
    originalPost: ApiPost;
}

export interface UiComment {
    id: string;
    postId: string;
    user: string;
    text: string;
    time: string;
}

export const FeedService = {
    getPosts: async (): Promise<UiPost[]> => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data: ApiPost[] = await response.json();
            return data.map(post => ({
                id: post.id.toString(),
                username: `user_${post.userId}`,
                userAvatar: `https://i.pravatar.cc/150?u=${post.userId}`,
                imageUrl: `https://picsum.photos/id/${post.id + 20}/600/600`,
                caption: post.title,
                likesString: 'Liked by Neoland and others',
                viewCommentsText: 'View all comments',
                timeAgo: '2 hours ago',
                originalPost: post
            }));
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error;
        }
    },

    getComments: async (postId: string): Promise<UiComment[]> => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            const data: any[] = await response.json();
            return data.map(comment => ({
                id: comment.id.toString(),
                postId: comment.postId.toString(),
                user: comment.email.split('@')[0].toLowerCase(),
                text: comment.body,
                time: '2h'
            }));
        } catch (error) {
            console.error('Error fetching comments:', error);
            return [];
        }
    }
};
