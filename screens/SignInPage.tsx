import { Link } from 'expo-router';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

/*
  Separator component provides a visual divider between sections of the UI.
*/
const Separator = () => <View style={styles.separator} />;

/*
  SignInPage component provides a user interface for signing into the app.
  It includes input fields for username and password, a toggle for showing/hiding the password,
  and navigation links for signing up or returning to the home screen.
*/
export default function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hideText, setHideText] = useState(true);

  /*
    The main return block renders the sign-in screen.
    It includes a scrollable view with input fields, buttons, and navigation links.
    Styles are applied to ensure a visually appealing and user-friendly layout.
  */
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Sign In</Text>
          <View>
            <TextInput
              autoCapitalize="none"
              placeholder="Username"
              placeholderTextColor="black"
              style={styles.inputs}
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              secureTextEntry={hideText}
              placeholder="Password"
              placeholderTextColor="black"
              style={styles.inputs}
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
            />
            <TouchableOpacity 
              style={styles.showHideButton} 
              onPress={() => setHideText(!hideText)}
            >
              <Text style={styles.linkText}>{hideText ? "Show" : "Hide"} Password</Text>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {}}
            >
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <Separator />
            <Link href="/" asChild>
              <TouchableOpacity style={styles.link}>
                <Text>Go Home</Text>
              </TouchableOpacity>
            </Link>
            <Text style={styles.loginPageText}>
              Don't have an account? 
              <Link href="/signup" asChild>
                <Text style={styles.loginPageLink}> Sign Up</Text>
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/*
  Styles for the SignInPage component.
  Includes styles for the background, container, input fields, buttons, and text elements.
  Styles are designed to create a visually appealing and user-friendly interface.
*/
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#b5f973',
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#0e4c28',
    borderRadius: 30,
    marginTop: 50,
    width: '80%',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    marginVertical: 20,
    color: "white",
    fontSize: 50,
    fontWeight: 'bold',
  },
  inputs: {
    backgroundColor: '#f8fdce',
    marginVertical: 10,
    borderRadius: 10,
    height: 50,
    width: 250,
    paddingHorizontal: 10,
  },
  showHideButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  linkText: {
    color: 'white',
  },
  loginButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    width: 250,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    width: 250,
    alignItems: 'center',
  },
  loginPageLink: {
    marginTop: 20,
    color: 'lightblue',
  },
  loginPageText: {
    marginTop: 20,
    color: 'white',
  },
  separator: {
    marginVertical: 8,
  },
});