import { HDCmodelPromise } from '@/assets/models/hotdog/HotDogModel';
import { Fontisto } from '@expo/vector-icons';
import * as tf from '@tensorflow/tfjs';
import * as tfReactNative from '@tensorflow/tfjs-react-native';
import { decode as atob } from 'base-64';
import { CameraCapturedPicture } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/*
  preprocessPhoto function prepares the captured photo for model prediction.
  It decodes the base64 image, resizes it to match the model's input requirements,
  normalizes pixel values, and adds a batch dimension.
*/
const preprocessPhoto = async (photo: CameraCapturedPicture) => {
  await tf.ready();

  const base64 = photo.base64!;
  const rawImageBytes = Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));

  let imageTensor = tfReactNative.decodeJpeg(rawImageBytes);
  imageTensor = tf.image.resizeBilinear(imageTensor, [224, 224]);
  imageTensor = imageTensor.div(255.0).expandDims(0);

  return imageTensor;
};

/*
  PhotoPreviewSection component displays the captured photo and provides functionality
  to analyze the photo using a machine learning model. It also allows the user to retake the photo.
*/
const PhotoPreviewSection = ({
  photo,
  handleRetakePhoto,
}: {
  photo: CameraCapturedPicture;
  handleRetakePhoto: () => void;
}) => {
  const [model, setModel] = useState<tf.GraphModel | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modelLoading, setModelLoading] = useState(true);

  /*
    useEffect hook loads the machine learning model when the component mounts.
    It ensures the model is loaded only once and handles cleanup when the component unmounts.
  */
  useEffect(() => {
    let isMounted = true;

    const loadModel = async () => {
      try {
        setModelLoading(true);
        const loadedModel = await HDCmodelPromise;
        if (isMounted) {
          setModel(loadedModel);
          console.log('Model loaded successfully');
        }
      } catch (err) {
        console.error('Failed to load model:', err);
        if (isMounted) {
          setResult('Failed to load model');
        }
      } finally {
        if (isMounted) {
          setModelLoading(false);
        }
      }
    };

    loadModel();

    return () => {
      isMounted = false;
    };
  }, []);

  /*
    handleCheck function processes the captured photo and uses the loaded model
    to make a prediction. It displays the result with confidence levels.
  */
  const handleCheck = async () => {
    if (!model) {
      setResult('Model not loaded yet');
      return;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const inputTensor = await preprocessPhoto(photo);
      const prediction = model.predict(inputTensor) as tf.Tensor;
      const resultArray = prediction.dataSync();

      inputTensor.dispose();
      prediction.dispose();

      const isHotdog = resultArray[0] > 0.90;
      const confidence = resultArray[0] * 100;
      const label = isHotdog ? 'Hotdog! 🌭' : 'Not Hotdog! ❌';
      setResult(`${label} (Confidence: ${confidence.toFixed(1)}%)`);
    } catch (err) {
      console.error('Prediction error:', err);
      setResult('Error during prediction');
    } finally {
      setIsLoading(false);
    }
  };

  /*
    The main return block renders the photo preview, buttons for retaking the photo
    and analyzing it, and displays the result or loading indicators.
  */
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Image
            style={styles.previewContainer}
            source={{ uri: 'data:image/jpg;base64,' + photo.base64 }}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.trashButton} onPress={handleRetakePhoto}>
            <Fontisto name="trash" size={36} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.checkButton,
              (isLoading || modelLoading) && styles.checkButtonDisabled,
            ]}
            onPress={handleCheck}
            disabled={isLoading || modelLoading}
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="black" />
            ) : (
              <Fontisto name="check" size={30} color="black" />
            )}
          </TouchableOpacity>
        </View>

        {modelLoading && <Text style={styles.resultText}>Loading model...</Text>}

        {result && !isLoading && !modelLoading && (
          <Text
            style={[
              styles.resultText,
              result.includes('Hotdog') ? styles.hotdogText : styles.notHotdogText,
            ]}
          >
            {result}
          </Text>
        )}
      </View>

      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.loadingText}>Analyzing...</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

/*
  Styles for the PhotoPreviewSection component.
  Includes styles for the container, buttons, result text, and loading indicators.
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  box: {
    borderRadius: 15,
    width: '95%',
    height: '87%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewContainer: {
    width: '95%',
    height: '85%',
    borderRadius: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  trashButton: {
    backgroundColor: '#FF474C',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkButton: {
    backgroundColor: '#b5f973',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '4%',
    width: 56,
    height: 56,
  },
  checkButtonDisabled: {
    backgroundColor: '#cccccc',
  },
  resultText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '5%',
    textAlign: 'center',
  },
  hotdogText: {
    color: '#b5f973',
  },
  notHotdogText: {
    color: '#FF474C',
  },
  loadingOverlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  loadingText: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
});

export default PhotoPreviewSection;