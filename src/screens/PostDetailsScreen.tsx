import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, ArrowLeft } from 'lucide-react-native';
import { UiPost, FeedService, UiComment } from '../services/FeedService';
import { useTheme } from '../features/theme/useTheme';

type RootStackParamList = {
    PostDetails: { post: UiPost };
};

type PostDetailsRouteProp = RouteProp<RootStackParamList, 'PostDetails'>;

export default function PostDetailsScreen() {
    const route = useRoute<PostDetailsRouteProp>();
    const navigation = useNavigation();
    const { post } = route.params;
    const insets = useSafeAreaInsets();
    const { colorScheme } = useTheme();

    const [comments, setComments] = useState<UiComment[]>([]);
    const [loadingComments, setLoadingComments] = useState(true);

    useEffect(() => {
        FeedService.getComments(post.id)
            .then(data => {
                setComments(data);
                setLoadingComments(false);
            })
            .catch(() => setLoadingComments(false));
    }, [post.id]);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    return (
        <View style={[styles.container, { backgroundColor: colorScheme.background }]}>
            <View style={[styles.header, { paddingTop: insets.top + 10, borderBottomColor: colorScheme.border }]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft color={colorScheme.text} size={24} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: colorScheme.text }]}>Post</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.userInfo}>
                    <View style={styles.userRow}>
                        <Image source={{ uri: post.userAvatar }} style={styles.avatar} />
                        <Text style={[styles.username, { color: colorScheme.text }]}>{post.username}</Text>
                    </View>
                    <MoreHorizontal color={colorScheme.text} size={24} />
                </View>

                <Image
                    source={{ uri: `https://picsum.photos/id/${post.originalPost.id + 20}/600/600` }}
                    style={styles.postImage}
                    resizeMode="cover"
                />

                <View style={styles.actions}>
                    <View style={styles.leftActions}>
                        <TouchableOpacity style={styles.actionIcon}>
                            <Heart color={colorScheme.text} size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionIcon}>
                            <MessageCircle color={colorScheme.text} size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionIcon}>
                            <Send color={colorScheme.text} size={24} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Bookmark color={colorScheme.text} size={24} />
                    </TouchableOpacity>
                </View>

                <View style={styles.likesSection}>
                    <Text style={[styles.likesText, { color: colorScheme.text }]}>{post.likesString}</Text>
                </View>

                <View style={styles.captionSection}>
                    <Text style={[styles.captionText, { color: colorScheme.text }]}>
                        <Text style={styles.captionUsername}>{post.username}</Text> {post.caption}
                    </Text>
                    <Text style={styles.timeAgo}>{post.timeAgo}</Text>
                </View>

                <View style={[styles.commentsSection, { borderTopColor: colorScheme.border }]}>
                    <Text style={[styles.commentsHeader, { color: colorScheme.text }]}>Comments</Text>
                    {loadingComments ? (
                        <ActivityIndicator size="small" color={colorScheme.text} style={{ marginTop: 20 }} />
                    ) : (
                        comments.map(comment => (
                            <View key={comment.id} style={styles.commentRow}>
                                <View style={styles.commentContent}>
                                    <Text style={[styles.commentText, { color: colorScheme.text }]}>
                                        <Text style={styles.commentUser}>{comment.user}</Text> {comment.text}
                                    </Text>
                                    <Text style={styles.commentTime}>{comment.time}</Text>
                                </View>
                                <TouchableOpacity>
                                    <Heart size={12} color="#666" />
                                </TouchableOpacity>
                            </View>
                        ))
                    )}
                </View>
            </ScrollView>

            <View style={[styles.commentInputContainer, { backgroundColor: colorScheme.background, borderTopColor: colorScheme.border }]}>
                <Image source={{ uri: 'https://i.pravatar.cc/150?u=me' }} style={styles.inputAvatar} />
                <TextInput
                    placeholder="Add a comment..."
                    placeholderTextColor="#666"
                    style={[styles.input, { color: colorScheme.text }]}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 0.5,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    scrollContent: {
        paddingBottom: 80,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    userRow: {
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
    },
    postImage: {
        width: '100%',
        height: 400,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
    },
    leftActions: {
        flexDirection: 'row',
    },
    actionIcon: {
        marginRight: 15,
    },
    likesSection: {
        paddingHorizontal: 10,
    },
    likesText: {
        fontWeight: 'bold',
    },
    captionSection: {
        paddingHorizontal: 10,
        marginTop: 5,
    },
    captionText: {
        lineHeight: 18,
    },
    captionUsername: {
        fontWeight: 'bold',
    },
    timeAgo: {
        color: '#666',
        fontSize: 12,
        marginTop: 5,
        marginBottom: 10,
    },
    commentsSection: {
        paddingHorizontal: 10,
        marginTop: 10,
        borderTopWidth: 0.5,
        paddingTop: 10,
    },
    commentsHeader: {
        fontWeight: 'bold',
        marginBottom: 10,
    },
    commentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 15,
    },
    commentContent: {
        flex: 1,
        marginRight: 10,
    },
    commentText: {
        lineHeight: 18,
    },
    commentUser: {
        fontWeight: 'bold',
    },
    commentTime: {
        color: '#666',
        fontSize: 12,
        marginTop: 2,
    },
    commentInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 0.5,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 20,
    },
    inputAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 40,
    },
});
