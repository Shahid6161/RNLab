import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlexBlock } from './components/FlexBlock';

export default function LayoutMasterScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Alignment Assignment</Text>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.gridContainer}>

                    <FlexBlock direction="row" style={styles.rowHeightHuge}>
                        <FlexBlock flex={2} style={styles.grayBox} />
                        <FlexBlock flex={1} direction="column" style={{ marginLeft: 10 }}>
                            <FlexBlock flex={1} style={styles.grayBox} />
                            <FlexBlock flex={1} style={[styles.grayBox, { marginTop: 10 }]} />
                            <FlexBlock flex={1} style={[styles.grayBox, { marginTop: 10 }]} />
                            <FlexBlock flex={1} style={[styles.grayBox, { marginTop: 10 }]} />
                        </FlexBlock>
                    </FlexBlock>

                    <FlexBlock direction="row" style={[styles.rowHeightLarge, styles.marginTop]}>
                        <FlexBlock flex={1} style={styles.grayBox} />
                        <FlexBlock flex={2} direction="column" style={{ marginHorizontal: 10 }}>
                            <FlexBlock flex={1} style={styles.grayBox} />
                            <FlexBlock flex={1} style={[styles.grayBox, { marginTop: 10 }]} />
                        </FlexBlock>
                        <FlexBlock flex={1} style={styles.grayBox} />
                    </FlexBlock>

                    <FlexBlock style={[styles.rowHeightMedium, styles.marginTop]}>
                        <FlexBlock flex={1} style={styles.grayBox} />
                    </FlexBlock>

                    <FlexBlock direction="row" style={[styles.rowHeightMedium, styles.marginTop]}>
                        <FlexBlock flex={1} style={[styles.grayBox, { marginRight: 5 }]} />
                        <FlexBlock flex={1} style={[styles.grayBox, { marginLeft: 5 }]} />
                    </FlexBlock>

                    <FlexBlock direction="row" style={[styles.rowHeightSquarish, styles.marginTop]}>
                        <FlexBlock flex={1} style={styles.grayBox} />
                        <FlexBlock flex={2} />
                        <FlexBlock flex={1} style={styles.grayBox} />
                    </FlexBlock>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#000',
    },
    scrollContent: {
        padding: 20,
    },
    gridContainer: {
        flex: 1,
    },
    grayBox: {
        backgroundColor: '#E0E0E0',
    },
    marginTop: {
        marginTop: 10,
    },

    rowHeightHuge: {
        height: 200,
    },
    rowHeightLarge: {
        height: 150,
    },
    rowHeightMedium: {
        height: 80,
    },
    rowHeightSquarish: {
        height: 100,
    },
});
