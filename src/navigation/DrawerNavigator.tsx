import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import { useTheme } from '../features/theme/useTheme';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    const { colorScheme } = useTheme();

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: colorScheme.background,
                },
                drawerActiveTintColor: colorScheme.text,
                drawerInactiveTintColor: '#666',
                drawerLabelStyle: {
                    color: colorScheme.text,
                }
            }}>
            <Drawer.Screen
                name="Main"
                component={BottomTabNavigator}
                options={{
                    title: 'Home',
                    drawerIcon: ({ color, size }) => (
                        // create a dummy icon or import one if needed, but for now just text or default is fine
                        // utilizing the existing lucide-react-native imports in project if needed, 
                        // but to keep it simple I will just rely on text or default.
                        // Actually, let's just keep simple options.
                        null
                    )
                }}
                listeners={({ navigation }) => ({
                    drawerItemPress: (e) => {
                        e.preventDefault();
                        navigation.navigate('Main', { screen: 'HomeTab' });
                        navigation.closeDrawer();
                    },
                })}
            />
            <Drawer.Screen
                name="UserProfile"
                component={ProfileScreen}
                options={{ title: 'Profile' }}
                listeners={({ navigation }) => ({
                    drawerItemPress: (e) => {
                        e.preventDefault();
                        navigation.navigate('Main', { screen: 'Profile' });
                        navigation.closeDrawer();
                    },
                })}
            />
        </Drawer.Navigator>
    );
}
