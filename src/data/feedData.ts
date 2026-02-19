export interface Story {
    id: string;
    username: string;
    avatar: string;
    isSeen?: boolean;
}

export interface Post {
    id: string;
    username: string;
    userAvatar: string;
    imageUrl: string;
    caption: string;
    likesString: string;
    viewCommentsText: string;
    timeAgo: string;
}

export const STORIES: Story[] = [
    { id: '0', username: 'Tu historia', avatar: 'https://i.pravatar.cc/150?u=me' },
    { id: '1', username: 'belart', avatar: 'https://i.pravatar.cc/150?u=belart' },
    { id: '2', username: 'sunflower', avatar: 'https://i.pravatar.cc/150?u=sunflower' },
    { id: '3', username: 'anais', avatar: 'https://i.pravatar.cc/150?u=anais' },
    { id: '4', username: 'flower', avatar: 'https://i.pravatar.cc/150?u=flower' },
    { id: '5', username: 'art', avatar: 'https://i.pravatar.cc/150?u=art' },
];

export const POSTS: Post[] = [
    {
        id: '1',
        username: 'raul_marin',
        userAvatar: 'https://i.pravatar.cc/150?u=raul',
        imageUrl: 'https://picsum.photos/600/800?random=1',
        caption: '.',
        likesString: 'Les gusta a Neoland y más personas',
        viewCommentsText: 'Ver los 3 comentarios',
        timeAgo: 'Hace 2 días',
    },
    {
        id: '2',
        username: 'raul_marin',
        userAvatar: 'https://i.pravatar.cc/150?u=raul',
        imageUrl: 'https://picsum.photos/600/800?random=2',
        caption: 'Another great shot!',
        likesString: 'Les gusta a Neoland y más personas',
        viewCommentsText: 'Ver los 10 comentarios',
        timeAgo: 'Hace 5 días',
    },
];

export const CURRENT_USER = {
    avatar: 'https://i.pravatar.cc/150?u=me',
};
