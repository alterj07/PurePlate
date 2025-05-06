import PhotoPreviewSection from '@/components/PhotoPreview';
import { AntDesign } from '@expo/vector-icons';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/*
  Camera component provides functionality for capturing photos using the device's camera.
  It handles camera permissions, toggling between front and back cameras, and photo preview.
*/
export default function Camera() {
  const [facing, setFacing] = useState<CameraType>('back'); // State to track the camera direction
  const [permission, requestPermission] = useCameraPermissions(); // State to manage camera permissions
  const [photo, setPhoto] = useState<any>(null); // State to store the captured photo
  const cameraRef = useRef<CameraView | null>(null); // Reference to the camera view

  /*
    If camera permissions are still loading, render an empty view.
    If permissions are not granted, display a message and a button to request permissions.
  */
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  /*
    Function to toggle the camera between front and back.
  */
  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  /*
    Function to capture a photo using the camera.
    The photo is stored in the state and displayed in the preview section.
  */
  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 1,
        base64: true,
        exif: false,
      };
      const takedPhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(takedPhoto);
    }
  };

  /*
    Function to reset the photo state, allowing the user to retake a photo.
  */
  const handleRetakePhoto = () => setPhoto(null);

  /*
    If a photo is captured, render the photo preview section.
    Otherwise, render the camera view with controls for toggling the camera and taking a photo.
  */
  if (photo) {
    return <PhotoPreviewSection photo={photo} handleRetakePhoto={handleRetakePhoto} />;
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <AntDesign name="retweet" size={44} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
            <AntDesign name="camera" size={44} color="black" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

/*
  Styles for the Camera component.
  Includes styles for the container, camera view, button container, and buttons.
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});