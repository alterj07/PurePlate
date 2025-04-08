import {View, Text, StyleSheet} from 'react-native';

export default function SignInPage() {
    return (
        <View style = {styles.signInContainer}>
            <Text>Sign In Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    signInContainer: {
        backgroundColor: 'red',
    }
})