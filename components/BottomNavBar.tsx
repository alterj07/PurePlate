import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../app/(tabs)/(home)/HomeScreen';
import FeaturesScreen from '../app/(tabs)/(home)/FeaturesScreen';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={FeaturesScreen} />
    </Tab.Navigator>
  );
}