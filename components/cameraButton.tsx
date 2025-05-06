import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

/*
  CameraButton component provides a button that navigates to the CameraScreen.
  The button is styled to appear visually distinct and user-friendly.
*/
export default function CameraButton() {
  /*
    The main return block renders a Link component styled as a button.
    Clicking the button navigates the user to the CameraScreen.
  */
  return (
    <Link 
      href="../../screens/CameraScreen" 
      style={styles.cameraButton}>
      Take a Picture!
    </Link>
  );
}

/*
  Styles for the CameraButton component.
  Includes styles for alignment, padding, text color, background color, and border radius.
*/
const styles = StyleSheet.create({
  cameraButton: {
    alignSelf: 'flex-end',
    textAlign: 'center',
    padding: '3%',
    color: 'white',
    backgroundColor: 'black',
    borderRadius: '10%',
    marginBottom: 0,
    zIndex: 10,
  },
});