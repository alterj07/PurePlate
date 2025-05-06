import { useTheme } from '@/theme/ThemeProvider';
import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

/*
  AboutScreen component provides information about the app and includes navigation links.
  It dynamically adjusts styles based on the current theme (dark or light mode).
*/
export default function AboutScreen() {
    const { theme, toggleTheme } = useTheme();
    const isDarkMode = theme === 'dark';

    /*
      The ScrollView wraps the content and applies background styles based on the theme.
      The View contains the title and navigation links.
    */
    return (
        <ScrollView style={[styles.background, isDarkMode ? styles.darkBackground : styles.lightBackground]}>
            <View>
                <Text style={[styles.title, isDarkMode ? styles.darkTitle : styles.lightTitle]}>
                    About Screen
                </Text>
                <View style={styles.container}>
                    <Link 
                        href="/(tabs)/features" 
                        style={[styles.featuresLink, isDarkMode ? styles.darkFeaturesLink : styles.lightFeaturesLink]}>
                        <Text>View Features</Text>
                    </Link>
                    <Link 
                        href="/signin" 
                        style={[styles.featuresLink, isDarkMode ? styles.darkFeaturesLink : styles.lightFeaturesLink]}>
                        Sign In!
                    </Link>
                </View> 
            </View>
        </ScrollView>
    );
}

/*
  Styles for the AboutScreen component.
  Includes styles for the background, title, container, and navigation links.
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: "20%",
        textAlign: 'center',
    },
    darkTitle: {
        color: '#f8fdce',
    },
    lightTitle: {
        color: 'black',
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2%',
        marginTop: '20%',
        marginBottom: '20%',
    },
    featuresLink: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '3%',
        color: 'grey',
        backgroundColor: 'black',
        borderRadius: '10%',
    },
    darkFeaturesLink: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '3%',
        color: '#0e4c28',
        backgroundColor: '#f8fdce',
        borderRadius: '10%',
    },
    lightFeaturesLink: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '3%',
        color: 'white',
        backgroundColor: 'black',
        borderRadius: '10%',
    },
    details: {
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: '2%',
        borderRadius: '10%',
        color: 'white',
    },
});