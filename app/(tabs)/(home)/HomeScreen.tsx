import {Link} from 'expo-router';
import { Text, View, StyleSheet } from "react-native";
import BottomNavBar from "../../../components/BottomNavBar";

export default function HomeScreen() {
  return (
    <View style = {{flex:1}}>
      <View style = {styles.container}>
        <Text>Home</Text>
        <Link 
          href = "/FeaturesScreen" 
          style = {styles.featuresLink}>
            View Features
        </Link>
        <Link href="/details/1" style = {styles.details}>View first user details</Link>
        <Link href="/details/2" style = {styles.details}>View second user details</Link>
        <Link
          href={{
            pathname: '/details/[id]',
            params: { id: 'bacon' },
          }}>
          View user details
        </Link>
      </View>
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
