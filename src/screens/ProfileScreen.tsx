import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

import { UserService, User } from '../services/UserService';

export default function ProfileScreen() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

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
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }

    if (!user) {
        return (
            <View style={styles.center}>
                <Text>Failed to load profile</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatarPlaceholder}>
                    <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
                </View>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.company}>{user.company.name}</Text>
                <Text style={styles.bio}>{user.company.catchPhrase}</Text>
            </View>

            <View style={styles.infoSection}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>{user.email}</Text>

                <Text style={styles.label}>Website</Text>
                <Text style={styles.value}>{user.website}</Text>
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
