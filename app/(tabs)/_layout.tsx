import SignInPage from '@/screens/SignInPage';
import {Tabs, Stack} from 'expo-router';

export default function TabLayout(){
    return (
        <Stack>
            <Stack.Screen name = "(home)" options={{headerShown: false}}/>
        </Stack>
    );
}