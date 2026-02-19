import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from '../screens/FeedScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Feed"
                component={FeedScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="PostDetails"
                component={PostDetailsScreen}
                options={{ title: 'Post' }}
            />
        </Stack.Navigator>
    );
}
