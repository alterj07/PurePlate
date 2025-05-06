import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

/*
  This component represents a "Not Found" screen for the application.
  It informs users when they’ve reached an invalid route and provides a navigation link back to the home screen.
*/
export default function NotFoundScreen() {
    return (
        <>
            {/*
              Sets up the screen's title to inform users they have hit a nonexistent page.
              This title will be displayed in the app's header or navigation bar.
            */}
            <Stack.Screen options={{ title: "Oops! This screen doesn't exist." }} />

            {/*
              The container provides a simple layout with a navigation link.
              It centers the content and includes a link for the user to return to the home screen.
            */}
            <View style={styles.container}>
                <Link href="/">
                    Go Home!
                </Link>
            </View>
        </>
    );
}

/*
  Defines styles for the "Not Found" screen.
  The container style centers the content both vertically and horizontally.
*/
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});