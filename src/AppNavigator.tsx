
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from './navigation/DrawerNavigator';
import PostDetailsScreen from './screens/PostDetailsScreen';
import { UiPost } from './services/FeedService';

export type RootStackParamList = {
    Drawer: undefined;
    PostDetails: { post: UiPost };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Drawer" component={DrawerNavigator} />
                <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
