import { Stack } from "expo-router";
import { Component } from 'react';
import SignInPage from "./sign-in";
// import WelcomePage from "./welcome";
// import {DarkTheme, DefaultTheme, ThemeProvider} from '@react-navigation/native'
// import {useColorScheme} from 'react-native'
export default function RootLayout() {
  return (
      // <ThemeProvider value ={useColorScheme()==='dark' ? DarkTheme: DefaultTheme}>
      //   <Stack>
      //     <Welcome />
      //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      //   {/* <Stack.Screen name="(home)" options={{ headerShown: false }} /> */}
      //   </Stack>
      // </ThemeProvider>
      <Stack>
          <Stack.Screen name = "(tabs)" options={{ headerShown: false }} />
          {/* <Stack.Screen name = "SignInPage" component={SignInPage} options={{ headerShown: false }} /> */}
      </Stack>
  );
}
