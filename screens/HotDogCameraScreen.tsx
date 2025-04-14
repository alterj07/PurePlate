import { CameraView, CameraType, useCameraPermissions, Camera } from 'expo-camera';
import React, { useState, useRef, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

function OpenCamera() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [photo, setPhoto] = useState(null);


  const cameraRef = useRef();
  const toggleCameraFacing = () => {
    setFacing((current: string) => (current === 'back' ? 'front' : 'back'));
  };


  useEffect(() => {
    (async () => {
        const cameraPermission = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraPermission.status === "granted");
    })();
  }, []);

  if(hasCameraPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
      </View>
    );
  }
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.flipButton} onPress={toggleCameraFacing}>
            <Image source={require('../assets/images/flipCameraIcon.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.takePictureButton} onPress={() => {}}>
                {/* <Image source={require('@expo/vector-icons/build/Picture.png')} /> */}
                <Text>Take Picture</Text>
            </TouchableOpacity>
        </View>
      </CameraView>
    </View>

  );
}

export default OpenCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginLeft: '70%',
    marginBottom: '5%',
  },
  flipButton: {
    aspectRatio: '1',
    alignSelf: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  takePictureButton: {
    aspectRatio: '1',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1,

  }
});


