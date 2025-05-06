// Importing the custom ThemeProvider for consistent theming across the app
import ThemeProvider from "@/theme/ThemeProvider";

// Importing TensorFlow.js library for machine learning functionalities
import * as tf from '@tensorflow/tfjs';

// Importing Stack component from expo-router for navigation
import { Stack } from "expo-router";

// Importing React and useEffect for component lifecycle management
import React, { useEffect } from 'react';

// Importing Platform to detect the platform (iOS, Android, etc.)
import { Platform } from 'react-native';

/*
  RootLayout component serves as the main layout for the app.
  It initializes TensorFlow.js when the component mounts and wraps the app
  in a ThemeProvider for consistent theming.
*/
export default function RootLayout() {
  /*
    useEffect hook is used to initialize TensorFlow.js when the component mounts.
    It ensures TensorFlow.js is ready and sets the backend to 'rn-native' for React Native
    on Android and iOS platforms.
  */
  useEffect(() => {
    async function initializeTensorFlow() {
      await tf.ready();

      if (Platform.OS === 'android' || Platform.OS === 'ios') {
        await tf.setBackend('rn-native');
      }

      console.log('TensorFlow.js and native backend initialized!');
    }

    initializeTensorFlow();
  }, []);

  /*
    The return statement wraps the app in a ThemeProvider to apply consistent theming.
    It also defines a Stack navigator with the header hidden and a screen named "(tabs)".
  */
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ThemeProvider>
  );
}