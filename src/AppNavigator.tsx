
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

// Screens
import UIKitScreen from './Assignments/UIKit/UIKitScreen';
import LayoutMasterScreen from './Assignments/LayoutMaster/LayoutMasterScreen';
import InstaFeedScreen from './Assignments/InstaFeed/InstaFeedScreen';

const Stack = createNativeStackNavigator();

const ASSIGNMENTS = [
    { id: '1', title: 'Assignment 1: UIKit', screen: 'UIKit' },
    { id: '2', title: 'Assignment 2: Layout Master', screen: 'LayoutMaster' },
    { id: '3', title: 'Assignment 3: InstaFeed', screen: 'InstaFeed' },
];

function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <FlatList
                data={ASSIGNMENTS}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate(item.screen)}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'RNLab Assignments' }} />
                <Stack.Screen name="UIKit" component={UIKitScreen} options={{ title: 'UIKit' }} />
                <Stack.Screen name="LayoutMaster" component={LayoutMasterScreen} options={{ title: 'Layout Master' }} />
                <Stack.Screen name="InstaFeed" component={InstaFeedScreen} options={{ title: 'Insta Feed' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F7',
    },
    listContent: {
        padding: 16,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 12,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
});
