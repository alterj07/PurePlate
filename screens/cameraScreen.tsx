import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';

interface PhotoType {
  uri: string;
  width: number;
  height: number;
  base64?: string;
}

export default function App() {
  const cameraRef = useRef<any>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [photo, setPhoto] = useState<PhotoType | null>(null);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === null) {
    return <Text>Requesting permissions...</Text>
  } else if (hasCameraPermission === false) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    if (!cameraRef.current) return;
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };
    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: photo.base64 ? `data:image/jpg;base64,${photo.base64}` : photo.uri }} />
        <Button title="Take Another" onPress={() => setPhoto(null)} />
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef} type={CameraType.back}>
      <View style={styles.buttonContainer}>
        <Button title="Take Pic" onPress={takePic} />
      </View>
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    margin: 20,
    padding: 10,
    borderRadius: 5
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  }
});