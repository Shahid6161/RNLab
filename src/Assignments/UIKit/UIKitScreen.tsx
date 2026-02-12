import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart } from 'lucide-react-native';
import { CustomInput } from './components/CustomInput';
import { CustomButton } from './components/CustomButton';
import { Checkbox, RadioButton } from './components/SelectionControls';
import { HorizontalTabs } from './components/HorizontalTabs';

const TABS = [
    { id: '1', label: 'selected' },
    { id: '2', label: 'Two' },
    { id: '3', label: 'Three' },
    { id: '4', label: 'Four' },
    { id: '5', label: 'Five' },
    { id: '6', label: 'Six' },
];

export default function UIKitScreen() {
    const [activeTab, setActiveTab] = useState('1');

    const [checkEnable, setCheckEnable] = useState(true);
    const [checkDisable, setCheckDisable] = useState(false);

    const [radioValue, setRadioValue] = useState('enable');

    const [darkMode, setDarkMode] = useState(false);

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.header}>Welcome To My{'\n'}React Native Learning</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Input Fields</Text>
                    <CustomInput
                        placeholder="First Input"
                        value={text1}
                        onChangeText={setText1}
                        showIcon={true}
                    />
                    <CustomInput
                        placeholder="Second Input"
                        variant="rounded"
                        value={text2}
                        onChangeText={setText2}
                        showIcon={true}
                    />
                    <CustomInput
                        placeholder="Error Field"
                        value={text3}
                        onChangeText={setText3}
                        error="error message"
                        showIcon={true}
                    />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Buttons</Text>
                    <View style={styles.buttonRow}>
                        <CustomButton
                            title="First"
                            onPress={() => { }}
                            style={styles.flexBtn}
                        />
                        <View style={{ width: 16 }} />
                        <CustomButton
                            title="Second"
                            variant="secondary"
                            IconComponent={Heart}
                            iconPosition="right"
                            onPress={() => { }}
                            style={styles.flexBtn}
                        />
                    </View>
                    <View style={styles.centerBtn}>
                        <CustomButton
                            title="Button"
                            variant="outline"
                            IconComponent={Heart}
                            iconPosition="right"
                            onPress={() => { }}
                            style={{ minWidth: 150 }}
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Checkbox</Text>
                    <View style={styles.row}>
                        <Checkbox
                            label="Enable"
                            checked={checkEnable}
                            onChange={setCheckEnable}
                        />
                        <Checkbox
                            label="Disable"
                            checked={checkDisable}
                            onChange={setCheckDisable}
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Radio Button</Text>
                    <View style={styles.row}>
                        <RadioButton
                            label="Disable"
                            checked={radioValue === 'disable'}
                            onChange={() => setRadioValue('disable')}
                        />
                        <RadioButton
                            label="Enable"
                            checked={radioValue === 'enable'}
                            onChange={() => setRadioValue('enable')}
                        />
                    </View>
                </View>

                <View style={styles.separator} />

                <View style={styles.darkModeRow}>
                    <Text style={styles.darkModeText}>Enable Dark Mode</Text>
                    <Switch
                        value={darkMode}
                        onValueChange={setDarkMode}
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={darkMode ? '#4A90E2' : '#f4f3f4'}
                    />
                </View>

                <View style={styles.separator} />

                <View style={styles.section}>

                    <HorizontalTabs
                        tabs={TABS}
                        activeTab={activeTab}
                        onTabPress={setActiveTab}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        padding: 20,
        paddingBottom: 40,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#000',
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#000',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    flexBtn: {
        flex: 1,
    },
    centerBtn: {
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    separator: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginVertical: 10,
    },
    darkModeRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    darkModeText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});
