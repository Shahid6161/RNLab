import React, { useCallback } from 'react';
import { View, FlatList, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Heart,
    Send,
    Home,
    Search,
    PlusCircle
} from 'lucide-react-native';
import { PostCard } from './components/PostCard';
import { StoryCircle } from './components/StoryCircle';
import { POSTS, STORIES, Post } from './data/feedData';

export default function InstaFeedScreen() {
    const renderPost = useCallback(({ item }: { item: Post }) => {
        return <PostCard post={item} />;
    }, []);

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

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            <FlatList
                data={POSTS}
                renderItem={renderPost}
                keyExtractor={item => item.id}
                ListHeaderComponent={renderStories}
                showsVerticalScrollIndicator={false}
            />

            <View style={styles.bottomTab}>
                <Home size={28} color="#000" />
                <Search size={28} color="#000" />
                <PlusCircle size={28} color="#000" />
                <Heart size={28} color="#000" />
                <View style={styles.profileTab}>
                    <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: '#ccc' }} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    storiesContainer: {
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5EA',
    },
    storiesContent: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    bottomTab: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#E5E5EA',
        paddingBottom: 5,
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
    profileTab: {
        width: 28,
        height: 28,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
