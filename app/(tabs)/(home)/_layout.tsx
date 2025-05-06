// Importing necessary components and libraries for the tab-based navigation layout
import TabBarIcon from '@/components/navigation/TabBarIcon';
import { useTheme } from '@/theme/ThemeProvider';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router';

/*
  TabLayout component defines the tab-based navigation structure for the app.
  It uses the current theme to style the tab bar and icons dynamically.
*/
export default function TabLayout() {
  // Access the current theme using the useTheme hook
  const { theme } = useTheme();

  // Determine if the current theme is dark mode
  const isDarkMode = theme === 'dark';

  return (
    /*
      Tabs component is used to define the tab navigation structure.
      It includes configuration for active/inactive tab colors, tab bar position,
      and other styling options based on the current theme.
    */
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: isDarkMode ? '#b5f973' : 'green', // Active tab color
        headerShown: false, // Hide the header for all tabs
        tabBarPosition: 'bottom', // Position the tab bar at the bottom
        tabBarInactiveTintColor: isDarkMode ? '#f8fdce' : 'black', // Inactive tab color
        tabBarShowLabel: false, // Hide tab labels
        tabBarIconStyle: { marginTop: 'auto' }, // Style for tab icons
        tabBarStyle: { backgroundColor: isDarkMode ? 'black' : '#b5f973' }, // Tab bar background color
      }}
    >
      {/*
        Define the "Home" tab with a custom TabBarIcon component.
        The icon changes based on whether the tab is focused.
      */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />

      {/*
        Define the "Camera" tab with a custom TabBarIcon component.
        The icon changes based on whether the tab is focused.
      */}
      <Tabs.Screen
        name="mainCamera"
        options={{
          title: 'Camera',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'camera' : 'camera-outline'} color={color} />
          ),
        }}
      />

      {/*
        Define the "Settings" tab with a custom TabBarIcon component.
        The icon changes based on whether the tab is focused.
      */}
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
          ),
        }}
      />

      {/*
        Define the "About" tab using AntDesign icons.
        The icon changes based on whether the tab is focused.
      */}
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name={focused ? 'infocirlce' : 'infocirlceo'} size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}