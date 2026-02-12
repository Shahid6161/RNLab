# InstaFeed Assignment Report

## Overview
The InstaFeed assignment is a mini-clone of the Instagram main feed. It demonstrates the implementation of a scrollable list with heterogenous content types (Stories, Posts) and simulates a real-world social media feed UI.

<img width="1080" height="2400" alt="Screenshot_1770887469" src="https://github.com/user-attachments/assets/99900745-8bcd-444f-9c6d-8e91910ea042" />


## File Structure
- **Screen**: `src/Assignments/InstaFeed/InstaFeedScreen.tsx`
- **Components**: `src/Assignments/InstaFeed/components/`
  - `PostCard.tsx`: Displays a single feed post.
  - `StoryCircle.tsx`: Displays a user story bubble.
- **Data**: `src/Assignments/InstaFeed/data/`
  - `feedData.ts`: Mock data for posts and stories.

## Components Detail

### 1. PostCard
A complex component representing a single post item:
- **Header**: User avatar and username.
- **Content**: The post image (or video placeholder).
- **Actions**: Like, Comment, Share, and Save buttons (using `lucide-react-native` icons).
- **Footer**: Likes count, caption, and timestamp.

### 2. StoryCircle
A circular avatar component representing a user story:
- **Styling**: Includes a gradient-like border (simulated via standard borders) to indicate an active story.
- **Layout**: Designed to be placed within a horizontal scroll container.

## Screen Implementation (InstaFeedScreen)
The screen uses `FlatList` as the core container for performance optimization with large lists.

### Key Features:
- **Header**: A custom header with the Instagram logo text and direct message/activity icons.
- **Stories Rail**: Implemented as a `ListHeaderComponent` of the main `FlatList`. This allows the stories to scroll away with the feed. It contains a horizontal `ScrollView`.
- **Feed List**:
    - Uses `FlatList` to render `PostCard` components.
    - `renderItem`: Efficiently renders each post.
    - `keyExtractor`: Ensures unique keys for list optimization.
- **Bottom Navigation**: A simulated bottom tab bar fixed at the bottom of the `SafeAreaView`.

This module demonstrates best practices for building list-based applications in React Native.
