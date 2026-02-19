import React, { useEffect, useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Text, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Heart, Send, Home, Search, PlusCircle } from 'lucide-react-native';
import { PostCard } from '../components/PostCard';
import { StoryCircle } from '../components/StoryCircle';
import { STORIES, Post as FeedPost } from '../data/feedData';
import { FeedService, UiPost } from '../services/FeedService';

export default function FeedScreen() {
    const [posts, setPosts] = useState<UiPost[]>([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation<any>();

    useEffect(() => {
        FeedService.getPosts()
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
            });
    }, []);

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
        <View style={styles.header}>
            <Text style={styles.logoText}>Instagram</Text>
            <View style={styles.headerRight}>
                <TouchableOpacity style={styles.headerIcon}>
                    <Heart size={26} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerIcon}>
                    <Send size={26} color="#000" />
                    <View style={styles.badge}><Text style={styles.badgeText}>1</Text></View>
                </TouchableOpacity>
            </View>
        </View>
    );

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
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
