import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../features/theme/useTheme';

interface PlaceholderScreenProps {
    title: string;
}

export const PlaceholderScreen: React.FC<PlaceholderScreenProps> = ({ title }) => {
    const { colorScheme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colorScheme.background }]}>
            <Text style={[styles.text, { color: colorScheme.text }]}>{title}</Text>
            <Text style={[styles.subtext, { color: colorScheme.text }]}>Coming Soon</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    subtext: {
        fontSize: 16,
        color: '#666',
    },
});
