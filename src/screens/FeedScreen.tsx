import React, { useEffect, useCallback } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Text, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Heart, Send, Moon, Sun } from 'lucide-react-native';
import { PostCard } from '../components/PostCard';
import { StoryCircle } from '../components/StoryCircle';
import { STORIES } from '../data/feedData';
import { UiPost } from '../services/FeedService';
import { useFeed } from '../features/feed/useFeed';
import { useTheme } from '../features/theme/useTheme';

export default function FeedScreen() {
    const navigation = useNavigation<any>();
    const { posts, loading, loadPosts } = useFeed();
    const { isDarkMode, toggleTheme, colorScheme } = useTheme();

    useEffect(() => {
        loadPosts();
    }, [loadPosts]);

    const renderPost = useCallback(({ item }: { item: UiPost }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate('PostDetails', { post: item })}
            >
                <PostCard post={item} />
            </TouchableOpacity>
        );
    }, [navigation]);

    const renderStories = () => (
        <View style={styles.storiesContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.storiesContent}>
                {STORIES.map(story => (
                    <StoryCircle
                        key={story.id}
                        username={story.username}
                        imageUri={story.avatar}
                    />
                ))}
            </ScrollView>
        </View>
    );

    const renderHeader = () => (
        <View style={[styles.header, { backgroundColor: colorScheme.headerBackground, borderBottomColor: colorScheme.border }]}>
            <Text style={[styles.logoText, { color: colorScheme.text }]}>Instagram</Text>
            <View style={styles.headerRight}>
                <TouchableOpacity onPress={toggleTheme} style={styles.headerIcon}>
                    {isDarkMode ? <Sun size={26} color={colorScheme.text} /> : <Moon size={26} color={colorScheme.text} />}
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerIcon}>
                    <Heart size={26} color={colorScheme.text} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerIcon}>
                    <Send size={26} color={colorScheme.text} />
                    <View style={styles.badge}><Text style={styles.badgeText}>1</Text></View>
                </TouchableOpacity>
            </View>
        </View>
    );

    if (loading && posts.length === 0) {
        return (
            <View style={[styles.center, { backgroundColor: colorScheme.background }]}>
                <ActivityIndicator size="large" color={colorScheme.text} />
            </View>
        );
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colorScheme.background }]}>
            {renderHeader()}
            <FlatList
                data={posts}
                renderItem={renderPost}
                keyExtractor={item => item.id}
                ListHeaderComponent={renderStories}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#efefef',
    },
    logoText: {
        fontSize: 28,
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontFamily: 'serif',
        color: '#000',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerIcon: {
        marginLeft: 20,
    },
    badge: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        borderRadius: 8,
        width: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
    },
    storiesContainer: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5EA',
    },
    storiesContent: {
        paddingLeft: 10,
        paddingRight: 10,
    },
});
