import {Link} from 'expo-router';
import { View, StyleSheet } from "react-native";
import {createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavBar from "../app/(tabs)/(home)/_layout";
import CameraButton from "@/components/cameraButton";

export default function HomeScreen() {
  return (
    <View style = {{flex:1}}>
      <View style = {styles.container}>
        <Link 
          href = "/FeaturesScreen" 
          style = {styles.featuresLink}>
            View Features
        </Link>
        <Link 
          href = "/sign-in" 
          style = {styles.featuresLink}>
            Sign In!
        </Link>
      </View>
      <CameraButton />
      <BottomNavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:'2%',
    marginTop:'auto',
    marginBottom:'auto',
  },
  featuresLink: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    padding:'3%',
    color:'grey',
    backgroundColor:'black',
    borderRadius:'10%',
  },
  details: {
    // flex:1,
    alignItems: 'center',
    backgroundColor:'blue',
    padding:'2%',
    borderRadius: '10%',
    color:'white',
  },

})
