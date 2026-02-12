import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Lock, AlertCircle } from 'lucide-react-native';

interface CustomInputProps extends TextInputProps {
  label?: string;
  error?: string;
  showIcon?: boolean;
  variant?: 'normal' | 'rounded';
  containerStyle?: StyleProp<ViewStyle>;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  error,
  showIcon,
  variant = 'normal',
  containerStyle,
  style,
  ...props
}) => {
  const isRounded = variant === 'rounded';
  const hasError = !!error;

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.inputContainer,
          isRounded ? styles.roundedInput : styles.normalInput,
          hasError && styles.errorInput,
        ]}>
        {showIcon && (
          <Lock size={20} color="#999" style={styles.icon} />
        )}
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor="#C7C7CC"
          {...props}
        />
      </View>
      {hasError && (
        <View style={styles.errorContainer}>
          <AlertCircle size={14} color="red" />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5EA',
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    height: 50,
  },
  normalInput: {
    borderRadius: 8,
  },
  roundedInput: {
    borderRadius: 25,
  },
  errorInput: {
    borderColor: '#FF3B30',
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    height: '100%',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginLeft: 4,
  },
});
