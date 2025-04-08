import { Link } from 'expo-router';
import {StyleSheet} from 'react-native';
export default function CameraButton() {
    return (
        <Link 
            href = "/(tabs)/(home)/OpenCamera" 
            style = {styles.cameraButton}>
            Take a Picture!
        </Link>
    );
}

const styles = StyleSheet.create({
    cameraButton: {
        // justifyContent: 'center',
        alignSelf: 'flex-end',
        textAlign:'center',
        padding:'3%',
        color:'white',
        backgroundColor:'black',
        borderRadius:'10%',
        marginBottom:0,
        zIndex:10,
      }
})