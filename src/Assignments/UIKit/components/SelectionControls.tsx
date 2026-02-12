import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ViewStyle,
    StyleProp,
} from 'react-native';
import { Square, CheckSquare, Circle, CircleDot } from 'lucide-react-native';

interface BaseProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
}

export const Checkbox: React.FC<BaseProps> = ({
    label,
    checked,
    onChange,
    disabled = false,
    style,
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={() => !disabled && onChange(!checked)}
            disabled={disabled}
            activeOpacity={0.7}>
            {checked ? (
                <CheckSquare size={24} color="#4A90E2" />
            ) : (
                <Square size={24} color="#000" />
            )}
            <Text style={[styles.label, disabled && styles.disabledText]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export const RadioButton: React.FC<BaseProps> = ({
    label,
    checked,
    onChange,
    disabled = false,
    style,
}) => {
    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={() => !disabled && onChange(true)}
            disabled={disabled}
            activeOpacity={0.7}>
            {checked ? (
                <CircleDot size={24} color="#4A90E2" />
            ) : (
                <Circle size={24} color="#000" />
            )}
            <Text style={[styles.label, disabled && styles.disabledText]}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 24,
    },
    label: {
        marginLeft: 8,
        fontSize: 16,
        color: '#000',
        fontWeight: '600',
    },
    disabledText: {
        color: '#8E8E93',
    },
});
