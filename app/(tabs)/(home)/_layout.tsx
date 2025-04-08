// import { Stack } from 'expo-router';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainCamera from "./OpenCamera";
import IndexPage from "./HomeScreen";

const Stack = createNativeStackNavigator();
export default function HomeLayout() {
  
  return (
    <Stack.Navigator>
       <Stack.Screen name="HomeScreen" component = {IndexPage} options={{headerShown:false}}/>
       <Stack.Screen name = "MainCamera" component={MainCamera} />
    </Stack.Navigator>
  );
}
