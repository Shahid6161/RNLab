# Instagram Clone with React Native

## Overview
This project is a React Native implementation of an Instagram-like application. It focuses on creating a high-fidelity clone of the core Instagram feed experience, including stories, posts, interaction UI, and profile management.


## Demo Video
See the project in action: [Watch Demo Video](https://drive.google.com/file/d/1ncc13KkOyV6XYFeoYxlZul8d6auYKzWg/view?usp=sharing)

## Features

### 📸 Week 4 Native Camera Integration (New!)
- **Custom Camera View**: Integrated `react-native-vision-camera` for a fully custom, high-performance hardware camera.
- **Seamless Navigation**: Replaced the default center tab with a dynamic iOS-style 'New Post' (plus) button that smoothly launches the camera as a full-screen modal.
- **End-to-End Posting Flow**: Snap a photo, add a cohesive caption, and immediately dispatch the new post to the top of the Redux-managed feed.
- **Native Permissions**: Handled native Android (`AndroidManifest.xml`) and iOS (`Info.plist`) camera and microphone access gracefully.

### 🔄 Week 3 Architecture & State
- **State Management**: Integrated `@reduxjs/toolkit` and `react-redux` for global state.
- **Feature-Based Architecture**: Transitioned to a scalable folder structure (`src/features`, `src/store`).
- **Custom Hooks**:
  - `useFeed`: Manages asynchronous API calls and feed state using `createAsyncThunk`.
  - `useTheme`: Manages a fully dynamic Dark / Light Mode.
- **Dynamic Theming**: All screens and navigators (including Drawers and Bottom Tabs) smoothly transition based on the Redux theme state.

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
-   **Redux Architecture**: `src/features/` handles domain-specific logic, scaling the app for complex feature sets.
-   **TypeScript**: Fully typed codebase for reliability and maintainability.
-   **Safe Area Handling**: Uses `react-native-safe-area-context` for perfect layout on all devices.
-   **Vector Icons**: Uses `lucide-react-native` for crisp, scalable icons.



<table>
  <tr>
    <td align="center">
      <img width="250" alt="Screenshot_1772531299" src="https://github.com/user-attachments/assets/80ba818f-1eed-48b9-b9ce-938ecf2889c4" />
    </td>
    <td align="center">
    <img width="250" alt="Screenshot_1772532004" src="https://github.com/user-attachments/assets/86c8371f-febe-4ce1-97e2-670a40e4c59b" />
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/c70422c2-d19c-4d58-bf3d-7172f9f091bb" width="250" alt="Screenshot_1771491615" />
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/9ffe617d-7045-41f9-85a4-570db581633d" width="250" alt="Screenshot_1771491618" />
    </td>
  </tr>
</table>



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
