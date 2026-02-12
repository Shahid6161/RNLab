import React from 'react';
import { View, ViewStyle, StyleProp, StyleSheet } from 'react-native';

interface FlexBlockProps {
    flex?: number;
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}

export const FlexBlock: React.FC<FlexBlockProps> = ({
    flex,
    direction = 'column',
    style,
    children,
}) => {
    return (
        <View style={[
            styles.default,
            flex !== undefined && { flex },
            { flexDirection: direction },
            style
        ]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    default: {
    },
});
