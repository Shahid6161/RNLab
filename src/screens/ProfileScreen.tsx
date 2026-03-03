import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useTheme } from '../features/theme/useTheme';

import { UserService, User } from '../services/UserService';

export default function ProfileScreen() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const { colorScheme } = useTheme();

    useEffect(() => {
        UserService.getUser('1')
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    if (loading) {
        return (
            <View style={[styles.center, { backgroundColor: colorScheme.background }]}>
                <ActivityIndicator size="large" color={colorScheme.text} />
            </View>
        );
    }

    if (!user) {
        return (
            <View style={[styles.center, { backgroundColor: colorScheme.background }]}>
                <Text style={{ color: colorScheme.text }}>Failed to load profile</Text>
            </View>
        );
    }

    return (
        <View style={[styles.container, { backgroundColor: colorScheme.background }]}>
            <View style={styles.header}>
                <View style={[styles.avatarPlaceholder, { backgroundColor: colorScheme.border }]}>
                    <Text style={[styles.avatarText, { color: colorScheme.text }]}>{user.name.charAt(0)}</Text>
                </View>
                <Text style={[styles.name, { color: colorScheme.text }]}>{user.name}</Text>
                <Text style={[styles.company, { color: colorScheme.text }]}>{user.company.name}</Text>
                <Text style={[styles.bio, { color: colorScheme.text }]}>{user.company.catchPhrase}</Text>
            </View>

            <View style={styles.infoSection}>
                <Text style={[styles.label, { color: colorScheme.text }]}>Email</Text>
                <Text style={[styles.value, { color: colorScheme.text }]}>{user.email}</Text>

                <Text style={[styles.label, { color: colorScheme.text }]}>Website</Text>
                <Text style={[styles.value, { color: colorScheme.text }]}>{user.website}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    avatarPlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    avatarText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#555',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    company: {
        fontSize: 16,
        color: '#666',
        marginTop: 4,
    },
    bio: {
        fontSize: 14,
        color: '#888',
        marginTop: 8,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    infoSection: {
        marginTop: 20,
    },
    label: {
        fontSize: 14,
        color: '#888',
        marginBottom: 4,
    },
    value: {
        fontSize: 16,
        color: '#000',
        marginBottom: 16,
    },
});
