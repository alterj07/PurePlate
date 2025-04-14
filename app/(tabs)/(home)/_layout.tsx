import { Tabs } from 'expo-router';
import React from 'react';

import TabBarIcon from '@/components/navigation/TabBarIcon';




export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'lightblue', 
        headerShown: false 
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="OpenCamera"
        options={{
          title: 'Camera',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'camera' : 'camera-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="LocationScreen"
        options={{
          title: 'Location',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'location' : 'location-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="HotDogCamera"
        options={{
          title: "HotDog",
          tabBarIcon: ({ color, focused}) => (
            <TabBarIcon name={focused ? 'camera' : 'camera-outline'} color={color} />
          )
        }} />
    </Tabs>
  );
}
