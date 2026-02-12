# UIKit Assignment Report

## Overview
The UIKit assignment focuses on building a library of reusable UI components and demonstrating their usage in a screen. This module showcases how to create flexible, customizable components in React Native and manage their state within a parent component.

<img width="300" alt="Screenshot_1770887462" src="https://github.com/user-attachments/assets/5d9d880b-b691-4961-ae9d-cdbf53d9f9dc" />


## File Structure
- **Screen**: `src/Assignments/UIKit/UIKitScreen.tsx`
- **Components**: `src/Assignments/UIKit/components/`
  - `CustomInput.tsx`
  - `CustomButton.tsx`
  - `SelectionControls.tsx` (Checkbox, RadioButton)
  - `HorizontalTabs.tsx`

## Components Detail

### 1. CustomInput
A detailed text input component that supports:
- **Placeholder text**: Customizable placeholder.
- **Icons**: Optional leading or trailing icons (using `lucide-react-native`).
- **Error State**: Displays validation error messages in red.
- **Variants**: Supports different styling variants (e.g., standard, rounded).

### 2. CustomButton
A versatile button component supporting multiple styles:
- **Variants**: Primary, Secondary, Outline.
- **Icons**: Support for icons with position control (left/right).
- **Styling**: Customizable container and text styles.

### 3. SelectionControls
Includes two related components:
- **Checkbox**: A boolean selection control with a label.
- **RadioButton**: A mutually exclusive selection control with a label.
Both components are controlled components, receiving their state from the parent.

### 4. HorizontalTabs
A scrollable or fixed tab bar component:
- **Tabs**: Accepts an array of tab objects (id, label).
- **Selection**: Highlights the active tab and handles tab press events.

## Screen Implementation (UIKitScreen)
The `UIKitScreen` serves as a playground for these components. It manages the local state for:
- Form input values (`text1`, `text2`, etc.).
- Checkbox and Radio Button states (`checkEnable`, `radioValue`).
- Dark Mode toggle (using React Native `Switch`).
- Active Tab selection.

This screen demonstrates how to compose complex UIs using small, focused components.
