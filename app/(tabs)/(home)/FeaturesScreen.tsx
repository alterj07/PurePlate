import {Text, View, StyleSheet} from 'react-native';
import {Link} from 'expo-router';


export default function FeaturesScreen() {
    return (
        <View style = {styles.container}>
            <Text>Features</Text>
            <Link href = "/HomeScreen">Test to index</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
})