import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator,
    ViewStyle,
    TextStyle,
    StyleProp,
    GestureResponderEvent,
} from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface CustomButtonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    variant?: ButtonVariant;
    IconComponent?: React.ElementType;
    iconPosition?: 'left' | 'right';
    loading?: boolean;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    IconComponent,
    iconPosition = 'right',
    loading = false,
    disabled = false,
    style,
    textStyle,
}) => {
    const getBackgroundColor = () => {
        if (disabled) return '#E5E5EA';
        switch (variant) {
            case 'primary':
            case 'secondary':
                return '#4A90E2';
            case 'outline':
                return 'transparent';
            default:
                return '#4A90E2';
        }
    };

    const getTextColor = () => {
        if (disabled) return '#8E8E93';
        switch (variant) {
            case 'outline':
                return '#4A90E2';
            default:
                return '#FFFFFF';
        }
    };

    const containerStyles = [
        styles.container,
        { backgroundColor: getBackgroundColor() },
        variant === 'outline' && styles.outlineContainer,
        variant === 'primary' && styles.shadow,
        style,
    ];

    const iconColor = getTextColor();

    return (
        <TouchableOpacity
            style={containerStyles}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.7}>
            {loading ? (
                <ActivityIndicator color={getTextColor()} />
            ) : (
                <>
                    {IconComponent && iconPosition === 'left' && (
                        <IconComponent
                            size={20}
                            color={iconColor}
                            style={[styles.icon, { marginRight: 8 }]}
                        />
                    )}
                    <Text style={[styles.text, { color: getTextColor() }, textStyle]}>
                        {title}
                    </Text>
                    {IconComponent && iconPosition === 'right' && (
                        <IconComponent
                            size={20}
                            color={iconColor}
                            style={[styles.icon, { marginLeft: 8 }]}
                        />
                    )}
                </>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        minHeight: 48,
        minWidth: 120,
    },
    outlineContainer: {
        borderWidth: 1,
        borderColor: '#4A90E2',
    },
    shadow: {
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    icon: {
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
