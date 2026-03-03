import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme, setDarkMode } from './themeSlice';
import { RootState } from '../../store/store';

export const useTheme = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

    const handleToggleTheme = () => {
        dispatch(toggleTheme());
    };

    const colorScheme = {
        background: isDarkMode ? '#000000' : '#ffffff',
        text: isDarkMode ? '#ffffff' : '#000000',
        border: isDarkMode ? '#333333' : '#efefef',
        headerBackground: isDarkMode ? '#121212' : '#ffffff',
        cardBackground: isDarkMode ? '#1e1e1e' : '#ffffff',
    };

    return { isDarkMode, toggleTheme: handleToggleTheme, colorScheme };
};
