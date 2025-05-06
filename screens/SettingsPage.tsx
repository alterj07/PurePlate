import { useTheme } from '@/theme/ThemeProvider';
import React from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';

/*
  Settings component provides a user interface for managing app settings.
  It includes a toggle for enabling or disabling dark mode.
  The component dynamically adjusts styles based on the current theme (dark or light mode).
*/
const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === 'dark';

  /*
    The main return block renders the settings screen.
    It includes a scrollable view with a container for the settings.
    The dark mode toggle is displayed as a switch, and styles are applied dynamically based on the theme.
  */
  return (
    <ScrollView style={[styles.background, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
      <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
        <Text style={[styles.title, isDarkMode ? styles.darkTitle : styles.lightTitle]}>Settings</Text>
        <View style={styles.settingItem}>
          <Text style={[styles.settingLabel, isDarkMode ? styles.darkSettingLabel : styles.lightSettingLabel]}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            trackColor={{ false: '#b5f973', true: '#108617' }}
            thumbColor={isDarkMode ? '#f8fdce' : '#0e4c28'}
            ios_backgroundColor={'#b5f973'}
          />
        </View>
      </View>
    </ScrollView>
  );
};

/*
  Styles for the Settings component.
  Includes styles for the background, container, title, and individual settings items.
  Styles are dynamically adjusted for dark and light themes.
*/
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f8fdce',
  },
  darkBackground: {
    backgroundColor: '#0e4c28',
  },
  lightBackground: {
    backgroundColor: '#f8fdce',
  },
  container: {
    flex: 1,
    padding: 20,
    marginTop: '10%',
    backgroundColor: '#f8fdce',
  },
  lightContainer: {
    flex: 1,
    padding: 20,
    marginTop: '10%',
    backgroundColor: '#f8fdce',
  },
  darkContainer: {
    flex: 1,
    padding: 20,
    marginTop: '10%',
    backgroundColor: '#0e4c28',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  darkTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#f8fdce',
  },
  lightTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#0e4c28',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  settingLabel: {
    fontSize: 16,
  },
  darkSettingLabel: {
    fontSize: 16,
    color: '#f8fdce',
  },
  lightSettingLabel: {
    fontSize: 16,
    color: '#0e4c28',
  },
});

export default Settings;