# RN Lab - React Native Assignments

## Overview
RN Lab is a React Native project designed to demonstrate various implementation patterns and UI components through specific assignments. It serves as a playground for learning and mastering React Native concepts, including component design, layout systems, and list rendering.

## Demo Video
See the project in action: [Watch Demo Video](https://drive.google.com/file/d/1odPW8kdRQCb31g7WZdZUmZrsXYfA9Wt-/view?usp=sharing)


## Getting Started

To run this project locally, follow these steps:

### 1. Install Dependencies
Navigate to the project root and install the required packages:

```sh
npm install
```

### 2. Start Metro
Start the Metro bundler:

```sh
npm start
```

### 3. Run the App
Open a new terminal and run the app on your desired simulator/emulator:

**Android:**
```sh
npm run android
```

**iOS:**
```sh
npm run ios
```

*(Note: For iOS, ensure you have run `bundle install` and `bundle exec pod install` inside the `ios` directory if native dependencies have changed.)*

## Modules & Assignments

The project is structured into independent assignments, accessible via the main navigation screen.

<img width="300" alt="Screenshot_1770887458" src="https://github.com/user-attachments/assets/b37eb600-3e36-4a53-977e-9d82e044cab0" />


### 1. [UIKit Assignment](./reports/UIKit_Report.md)
A comprehensive collection of reusable UI components.
- **Key Features**: Custom Inputs with validation, variable Button styles, Checkboxes, Radio Buttons, and Tabs.
- **Learnings**: Component reusability, prop interfaces, and local state management.

### 2. [Layout Master Assignment](./reports/LayoutMaster_Report.md)
A deep dive into Flexbox layouts using a utility-first approach.
- **Key Features**: Complex grid layouts, nested flex containers, and responsive design patterns using a custom `FlexBlock` component.
- **Learnings**: Mastering `flexDirection`, `justifyContent`, and `alignItems`.

### 3. [InstaFeed Assignment](./reports/InstaFeed_Report.md)
A functioning clone of a social media feed.
- **Key Features**: Scrollable feed with Stories rail, Post items with interactions, and simulated bottom navigation.
- **Learnings**: Efficient `FlatList` usage, `ListHeaderComponent`, and handling heterogeneous lists.

## Learn More
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/)
- [Lucide React Native Icons](https://lucide.dev/guide/packages/lucide-react-native)
