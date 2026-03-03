import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useTheme } from '../features/theme/useTheme';

interface StoryCircleProps {
    username: string;
    imageUri: string;
    isAddStory?: boolean;
}

export const StoryCircle: React.FC<StoryCircleProps> = ({ username, imageUri }) => {
    const { colorScheme } = useTheme();

    return (
        <View style={styles.container}>
            <View style={styles.borderContainer}>
                <View style={[styles.whiteSpacing, { backgroundColor: colorScheme.background }]}>
                    <Image source={{ uri: imageUri }} style={styles.image} />
                </View>
            </View>
            <Text style={[styles.username, { color: colorScheme.text }]} numberOfLines={1}>
                {username}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginRight: 10,
        width: 72,
    },
    borderContainer: {
        width: 68,
        height: 68,
        borderRadius: 34,
        borderWidth: 2,
        borderColor: '#C13584',
        justifyContent: 'center',
        alignItems: 'center',
    },
    whiteSpacing: {
        width: 62,
        height: 62,
        borderRadius: 31,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 56,
        height: 56,
        borderRadius: 28,
    },
    username: {
        marginTop: 4,
        fontSize: 12,
        color: '#262626',
        textAlign: 'center',
    },
});
