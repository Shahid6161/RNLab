import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import UIKitScreen from './UIKit/UIKitScreen';
import LayoutMasterScreen from './LayoutMaster/LayoutMasterScreen';
import InstaFeedScreen from './InstaFeed/InstaFeedScreen';

export type RootStackParamList = {
    Home: undefined;
    UIKit: undefined;
    LayoutMaster: undefined;
    InstaFeed: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: { navigation: any }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>RNLab Assignments</Text>
            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('UIKit')}
            >
                <Text style={styles.cardText}>Assignment 1: UIKit</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('LayoutMaster')}
            >
                <Text style={styles.cardText}>Assignment 2: Layout Master</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('InstaFeed')}
            >
                <Text style={styles.cardText}>Assignment 3: InstaFeed</Text>
            </TouchableOpacity>
        </View>
    );
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'RNLab Assignments' }}
                />
                <Stack.Screen
                    name="UIKit"
                    component={UIKitScreen}
                    options={{ title: 'Assignment 1: UIKit' }}
                />
                <Stack.Screen
                    name="LayoutMaster"
                    component={LayoutMasterScreen}
                    options={{ title: 'Assignment 2: Layout Master' }}
                />
                <Stack.Screen
                    name="InstaFeed"
                    component={InstaFeedScreen}
                    options={{ title: 'Assignment 3: InstaFeed' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
        justifyContent: 'flex-start',
        paddingTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333',
    },
    card: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 12,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
    },
});
