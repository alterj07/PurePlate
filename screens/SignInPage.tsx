import {View, Text, StyleSheet} from 'react-native';
import { Link } from 'expo-router';
export default function SignInPage() {
    return (
        <View style = {styles.signInContainer}>
            <Text>Sign In Page</Text>
            <Link
                href = "/"
                >
                Go Home
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    signInContainer: {
        backgroundColor: 'red',
    }
})