import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Menu, Home, Search, Clapperboard, Heart, User } from 'lucide-react-native';
import { TouchableOpacity } from 'react-native';
import HomeStackNavigator from './HomeStackNavigator';
import { PlaceholderScreen } from '../screens/PlaceholderScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { useTheme } from '../features/theme/useTheme';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation }: any) {
    const { colorScheme } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: colorScheme.text,
                tabBarInactiveTintColor: '#666',
                tabBarStyle: {
                    backgroundColor: colorScheme.background,
                    borderTopColor: colorScheme.border,
                },
            }}>
            <Tab.Screen
                name="HomeTab"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Search"
                children={() => <PlaceholderScreen title="Search" />}
                options={{
                    tabBarIcon: ({ color, size }) => <Search color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Reels"
                children={() => <PlaceholderScreen title="Reels" />}
                options={{
                    tabBarIcon: ({ color, size }) => <Clapperboard color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Activity"
                children={() => <PlaceholderScreen title="Activity" />}
                options={{
                    tabBarIcon: ({ color, size }) => <Heart color={color} size={size} />,
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerShown: true,
                    title: 'Profile',
                    headerStyle: { backgroundColor: colorScheme.headerBackground },
                    headerTintColor: colorScheme.text,
                    tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginRight: 15 }}>
                            <Menu color={colorScheme.text} size={24} />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
