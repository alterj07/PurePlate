import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';


interface SettingsProps {}


const Settings: React.FC<SettingsProps> = () => {
 const [darkMode, setDarkMode] = useState(false);
 const [notificationsEnabled, setNotificationsEnabled] = useState(true);


 const toggleDarkMode = () => {
 setDarkMode(!darkMode);
 // Implement dark mode logic here (e.g., using Context or Redux)
 };


 const toggleNotifications = () => {
 setNotificationsEnabled(!notificationsEnabled);
 // Implement notification toggling logic here (e.g., using AsyncStorage)
 };


 return (
 <View style={styles.container}>
 <Text style={styles.title}>Settings</Text>


 <View style={styles.settingItem}>
 <Text style={styles.settingLabel}>Dark Mode</Text>
 <Switch value={darkMode} onValueChange={toggleDarkMode} />
 </View>


 <View style={styles.settingItem}>
 <Text style={styles.settingLabel}>Notifications</Text>
 <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
 </View>


 {/* Add more settings items as needed */}
 </View>
 );
};


const styles = StyleSheet.create({
 container: {
 flex: 1,
 padding: 20,
 },
 title: {
 fontSize: 24,
 fontWeight: 'bold',
 marginBottom: 20,
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
});


export default Settings;
//Gemini