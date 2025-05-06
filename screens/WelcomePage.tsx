import { StyleSheet, Text, View } from 'react-native';

/*
  WelcomePage component serves as the introductory screen of the app.
  It displays a simple "Welcome Page" message centered on the screen.
*/
export default function WelcomePage() {
  /*
    The main return block renders the welcome screen.
    It includes a container styled to center the content and display a welcome message.
  */
  return (
    <View style={styles.container}>
      <Text>Welcome Page</Text>
    </View>
  );
}

/*
  Styles for the WelcomePage component.
  Includes styles for the container to center the content and apply padding, background color, and rounded corners.
*/
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    textAlign: 'center',
    padding: '15%',
    backgroundColor: 'grey',
    borderRadius: '10%',
  },
});