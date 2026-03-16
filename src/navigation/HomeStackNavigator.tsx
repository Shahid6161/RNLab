import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeedScreen from '../screens/FeedScreen';


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
                name="Camera"
                component={require('../screens/CameraScreen').default}
                options={{
                    headerShown: false,
                    presentation: 'fullScreenModal'
                }}
            />
            <Stack.Screen
                name="CreatePost"
                component={require('../screens/CreatePostScreen').default}
                options={{
                    headerShown: false,
                    presentation: 'modal'
                }}
            />
        </Stack.Navigator>
    );
}
