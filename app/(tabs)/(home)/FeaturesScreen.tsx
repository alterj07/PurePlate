import {Text, View, StyleSheet} from 'react-native';
import {Link} from 'expo-router';
import CameraButton from "../../../components/cameraButton";


export default function FeaturesScreen() {
    return (
        <View style = {{flex:1}}>
            <View style = {styles.container}>
                <Text>Features</Text>
                <Link href = "/">Test to index</Link>
            </View>
            <CameraButton />
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