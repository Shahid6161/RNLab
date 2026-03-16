import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../features/theme/useTheme';
import { ArrowLeft } from 'lucide-react-native';
import { useDispatch } from 'react-redux';
import { addPost } from '../features/feed/feedSlice';
import { UiPost, FeedService } from '../services/FeedService';

type RootStackParamList = {
    CreatePost: { photoPath: string };
};

type CreatePostRouteProp = RouteProp<RootStackParamList, 'CreatePost'>;

export default function CreatePostScreen() {
    const route = useRoute<CreatePostRouteProp>();
    const { photoPath } = route.params;
    const navigation = useNavigation<any>();
    const insets = useSafeAreaInsets();
    const { colorScheme } = useTheme();
    const dispatch = useDispatch();

    const [caption, setCaption] = useState('');

    const handleShare = () => {
        const newPost: UiPost = {
            id: Date.now().toString(),
            username: 'Tu historia',
            userAvatar: 'https://i.pravatar.cc/150?u=me',
            imageUrl: photoPath,
            caption: caption,
            likesString: '0 likes',
            viewCommentsText: 'View all comments',
            timeAgo: 'Just now',
            originalPost: {
                userId: 0,
                id: Date.now(),
                title: caption,
                body: caption,
            }
        };

        dispatch(addPost(newPost));

        navigation.navigate('HomeTab', { screen: 'Feed' });
    };

    return (
        <KeyboardAvoidingView
            style={[styles.container, { backgroundColor: colorScheme.background }]}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={[styles.header, { paddingTop: insets.top + 10, borderBottomColor: colorScheme.border }]}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowLeft color={colorScheme.text} size={24} />
                    </TouchableOpacity>
                    <Text style={[styles.headerTitle, { color: colorScheme.text }]}>New Post</Text>
                </View>
                <TouchableOpacity onPress={handleShare}>
                    <Text style={styles.shareText}>Share</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.inputSection}>
                    <Image source={{ uri: photoPath }} style={styles.previewImage} />
                    <TextInput
                        style={[styles.input, { color: colorScheme.text }]}
                        placeholder="Write a caption..."
                        placeholderTextColor="#666"
                        multiline
                        value={caption}
                        onChangeText={setCaption}
                        autoFocus
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
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
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    shareText: {
        color: '#0095f6',
        fontWeight: 'bold',
        fontSize: 16,
    },
    scrollContent: {
        padding: 15,
    },
    inputSection: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    previewImage: {
        width: 60,
        height: 60,
        marginRight: 15,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingTop: 0,
        minHeight: 60,
    },
});
