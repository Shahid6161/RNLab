import React from 'react';
import {
    ScrollView,
    TouchableOpacity,
    Text,
    StyleSheet,
    View,
} from 'react-native';

interface TabItem {
    id: string;
    label: string;
}

interface HorizontalTabsProps {
    tabs: TabItem[];
    activeTab: string;
    onTabPress: (tabId: string) => void;
}

export const HorizontalTabs: React.FC<HorizontalTabsProps> = ({
    tabs,
    activeTab,
    onTabPress,
}) => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}>
                {tabs.map(tab => {
                    const isActive = activeTab === tab.id;
                    return (
                        <TouchableOpacity
                            key={tab.id}
                            style={[styles.tab, isActive && styles.activeTab]}
                            onPress={() => onTabPress(tab.id)}>
                            <Text style={[styles.tabText, isActive && styles.activeTabText]}>
                                {tab.label}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#fff',
    },
    scrollContent: {
        paddingHorizontal: 0,
        alignItems: 'center',
    },
    tab: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginRight: 8,
        backgroundColor: 'transparent',
    },
    activeTab: {
        backgroundColor: '#E8F0FE',
        borderRadius: 20,
    },
    tabText: {
        fontSize: 16,
        color: '#8E8E93',
        fontWeight: '500',
    },
    activeTabText: {
        color: '#4A90E2',
        fontWeight: 'bold',
    },
});
