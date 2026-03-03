import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import {
    MoreHorizontal,
    Heart,
    MessageCircle,
    Send,
    Bookmark,
    PlusCircle
} from 'lucide-react-native';
import { Post, CURRENT_USER } from '../data/feedData';
import { useTheme } from '../features/theme/useTheme';

interface PostCardProps {
    post: Post;
}

const { width } = Dimensions.get('window');

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const { colorScheme } = useTheme();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <Image source={{ uri: post.userAvatar }} style={styles.avatar} />
                    <Text style={[styles.username, { color: colorScheme.text }]}>{post.username}</Text>
                </View>
                <TouchableOpacity>
                    <MoreHorizontal size={20} color={colorScheme.text} />
                </TouchableOpacity>
            </View>

            {/* Image */}
            <Image source={{ uri: post.imageUrl }} style={styles.postImage} />

            {/* Action Bar */}
            <View style={styles.actionBar}>
                <View style={styles.leftActions}>
                    <TouchableOpacity style={styles.actionIcon}>
                        <Heart size={28} color={colorScheme.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionIcon}>
                        <MessageCircle size={26} color={colorScheme.text} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionIcon}>
                        <Send size={26} color={colorScheme.text} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Bookmark size={26} color={colorScheme.text} />
                </TouchableOpacity>
            </View>

            {/* Likes */}
            <View style={styles.padding}>
                <Text style={[styles.likesText, { color: colorScheme.text }]}>
                    Les gusta a <Text style={styles.bold}>Neoland</Text> y <Text style={styles.bold}>más personas</Text>
                </Text>
            </View>

            {/* Caption */}
            <View style={styles.padding}>
                <Text style={[styles.caption, { color: colorScheme.text }]}>
                    <Text style={styles.bold}>{post.username}</Text> {post.caption}
                </Text>
            </View>

            {/* Comments Link */}
            <TouchableOpacity style={styles.padding}>
                <Text style={styles.commentLink}>{post.viewCommentsText}</Text>
            </TouchableOpacity>

            {/* Add Comment */}
            <View style={[styles.padding, styles.addCommentContainer]}>
                <Image source={{ uri: CURRENT_USER.avatar }} style={styles.smallAvatar} />
                <Text style={styles.addCommentText}>Añade un comentario...</Text>

                <View style={{ flex: 1 }} />
                <Text style={styles.emoji}>🔥</Text>
                <Text style={styles.emoji}>🤩</Text>
                <PlusCircle size={16} color="#ccc" style={{ marginLeft: 8 }} />
            </View>

            {/* Time Ago */}
            <View style={styles.padding}>
                <Text style={styles.timeAgo}>{post.timeAgo}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 10,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#262626',
    },
    postImage: {
        width: width,
        height: width * 1.25,
        resizeMode: 'cover',
    },
    actionBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    leftActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionIcon: {
        marginRight: 15,
    },
    padding: {
        paddingHorizontal: 12,
        marginBottom: 4,
    },
    likesText: {
        fontSize: 14,
        color: '#262626',
    },
    bold: {
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        color: '#262626',
    },
    commentLink: {
        fontSize: 14,
        color: '#8E8E93',
        marginTop: 2,
    },
    addCommentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    smallAvatar: {
        width: 24,
        height: 24,
        borderRadius: 12,
        marginRight: 10,
    },
    addCommentText: {
        fontSize: 14,
        color: '#8E8E93',
    },
    emoji: {
        fontSize: 12,
        marginLeft: 8,
    },
    timeAgo: {
        fontSize: 10,
        color: '#8E8E93',
        marginTop: 2,
        marginBottom: 5,
    }
});
