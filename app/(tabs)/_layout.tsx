import {Tabs, Stack} from 'expo-router';
import {ScrollView} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function TabLayout(){
    return (
        <Stack>
            <Stack.Screen name = "(home)" options={{headerShown: false}}/>
        </Stack>
    );
}