# Layout Master Assignment Report

## Overview
The Layout Master assignment is designed to practice and master Flexbox layouts in React Native. It demonstrates how to build complex, responsive grid structures without relying on hardcoded dimensions or absolute positioning, using a custom layout utility component.

<img width="300" alt="Screenshot_1770887466" src="https://github.com/user-attachments/assets/b867f1d2-fbf7-44c8-a887-4a7f61294309" />


## File Structure
- **Screen**: `src/Assignments/LayoutMaster/LayoutMasterScreen.tsx`
- **Components**: `src/Assignments/LayoutMaster/components/`
  - `FlexBlock.tsx`

## Components Detail

### FlexBlock
`FlexBlock` is a utility component that wraps React Native's `View` to simplify Flexbox props. It likely accepts props such as:
- `direction`: Maps to `flexDirection` (row/column).
- `flex`: Maps to `flex` value (weight).
- `style`: Standard view styles.

This abstraction allows for cleaner, more readable layout code by reducing boilerplate `StyleSheet` definitions for common layout patterns.

## Layout Patterns Implemented
The `LayoutMasterScreen` implements several layout challenges:

1.  **Complex Nested Grids**:
    - Combining rows and columns to create asymmetrical grids.
    - Nesting `FlexBlock` components to achieve specific proportional sizing (e.g., 2:1 ratios).

2.  **Row & Column Allignment**:
    - Demonstrating how `flexDirection` changes the flow of child elements.
    - Using margins and padding to create spacing between grid items (`grayBox`).

3.  **Responsive Sizing**:
    - The layout relies on `flex` weights rather than fixed pixel widths, ensuring the grid adapts to different screen widths.
    - Fixed heights are used only for row containers to define the "shape" of the exercises, while widths are dynamic.

This assignment validates understanding of the React Native layout engine.
