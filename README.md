# Instagram Clone with React Native

## Overview
This project is a React Native implementation of an Instagram-like application. It focuses on creating a high-fidelity clone of the core Instagram feed experience, including stories, posts, interaction UI, and profile management.

## Demo Video
See the project in action: [Watch Demo Video](https://drive.google.com/file/d/1odPW8kdRQCb31g7WZdZUmZrsXYfA9Wt-/view?usp=sharing)

## Features

### 🏠 Feed & Home Screen
-   **Infinite Scroll Feed**: Smooth vertical scrolling for posts.
-   **Stories Rail**: Horizontal scrolling list for user stories at the top.
-   **Post Interactions**:
    -   Like, Comment, Share, and Save buttons.
    -   Double-tap to like animation.
-   **Custom Header**: Instagram-styled header with logo and activity icons.

### 📝 Post Details
-   **Detailed View**: Tap on any post to see it in detail.
-   **Comments Section**:
    -   Fetches real comments from an API (`jsonplaceholder`).
    -   Displays user avatars, names, and timestamps.
-   **Dynamic Header**: Transparent/padded header respecting safe area insets.

### 👤 Profile
-   **User Data**: Fetches and displays user profile information (Name, Bio, Company, etc.) from an API.
-   **Drawer Integration**: Access the profile via the bottom tab or the side drawer.

### 🧭 Navigation
-   **Hybrid Navigation**: Combines **Bottom Tab Navigation** (Home, Search, Reels, Activity, Profile) with **Drawer Navigation**.
-   **Seamless Transitions**: Smooth transitions between Feed and Post Details.

## Technical Highlights
-   **Service Layer**: API calls are encapsulated in `FeedService.ts` and `UserService.ts` for clean architecture.
-   **TypeScript**: Fully typed codebase for reliability and maintainability.
-   **Safe Area Handling**: Uses `react-native-safe-area-context` for perfect layout on all devices.
-   **Vector Icons**: Uses `lucide-react-native` for crisp, scalable icons.

## Getting Started

To run this project, you need to have the React Native development environment set up.

👉 [**React Native Environment Setup Guide**](https://reactnative.dev/docs/environment-setup)

Once your environment is ready:

1.  **Install Dependencies**:
    ```sh
    npm install
    ```

2.  **Start Metro Bundler**:
    ```sh
    npm start
    ```

3.  **Run on Simulator/Device**:
    -   **Android**: `npm run android`
    -   **iOS**: `npm run ios`
