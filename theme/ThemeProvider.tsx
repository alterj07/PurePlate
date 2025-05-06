import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';

/*
  Theme type defines the possible values for the app's theme: "light" or "dark".
  ThemeContextType interface specifies the structure of the theme context,
  including the current theme and a function to toggle the theme.
*/
type Theme = "light" | "dark";
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

/*
  ThemeContext is a React context that provides the current theme and a toggle function.
  It is initialized with undefined to ensure it is used within a ThemeProvider.
*/
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/*
  ThemeProvider component manages the app's theme state and provides it to child components.
  It initializes the theme based on saved preferences or the system's color scheme.
  The component also provides a function to toggle between light and dark themes.
*/
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("light");

    /*
      useEffect hook loads the saved theme from AsyncStorage when the component mounts.
      If no saved theme is found, it defaults to the system's color scheme.
    */
    useEffect(() => {
        const loadTheme = async () => {
            const savedTheme = await AsyncStorage.getItem("theme");
            if (savedTheme === "light" || savedTheme === "dark") {
                setTheme(savedTheme);
            } else {
                const systemTheme = Appearance.getColorScheme();
                setTheme(systemTheme === "dark" ? "dark" : "light");
            }
        };
        loadTheme();
    }, []);

    /*
      toggleTheme function switches the theme between light and dark.
      It updates the theme state and saves the new theme to AsyncStorage.
    */
    const toggleTheme = async () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        AsyncStorage.setItem("theme", newTheme);
    };

    /*
      The main return block provides the theme and toggle function to child components
      through the ThemeContext.Provider.
    */
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;

/*
  useTheme hook provides access to the theme context.
  It ensures the hook is used within a ThemeProvider and throws an error otherwise.
*/
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};