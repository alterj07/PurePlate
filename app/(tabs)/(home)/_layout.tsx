import { Tabs } from 'expo-router';
import { Component } from 'react';
import SignInPage from '../../sign-in';
// import { Ionicons } from '@expo/vector-icons';



export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'lightblue', headerShown: false }}>
      <Tabs.Screen
        name="Index"
        options={{
          title: 'Index',
          Component: SignInPage,
          // headerShown: true,
          // tabBarIcon: ({ color, size } : {color: string; size:number}) => (
          //   <Ionicons name="checkmark-circle" size={32} color="green" />
          // )
        }}
      />
      
    </Tabs>
  );
}
