import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';

/*
  loadHotDogModel function initializes TensorFlow.js, sets the backend, validates the model JSON,
  loads the model weights, and returns the loaded model. It includes error handling for each step.
*/
export async function loadHotDogModel() {
  try {
    // Ensure TensorFlow.js is fully initialized and log the backend being used.
    await tf.ready();
    console.log('TensorFlow.js ready, using backend:', tf.getBackend());

    // Attempt to set the backend explicitly in order of preference.
    const backends = ['rn-webgl', 'webgl', 'cpu'];
    let backendSet = false;

    for (const backend of backends) {
      try {
        await tf.setBackend(backend);
        backendSet = true;
        console.log(`Successfully set backend to ${backend}`);
        break;
      } catch (err) {
        console.warn(`Failed to set backend to ${backend}:`, err);
      }
    }

    if (!backendSet) {
      console.log('Using default backend:', tf.getBackend());
    }

    // Validate the model JSON file to ensure it contains the required fields.
    let modelJson;
    try {
      modelJson = require('./model.json');
      console.log('Model JSON structure overview:');
      console.log('- Keys:', Object.keys(modelJson).join(', '));

      if (!modelJson.modelTopology) {
        console.error('Invalid model.json: missing modelTopology');
        throw new Error('Invalid model format: missing modelTopology');
      }

      if (!modelJson.weightsManifest || !modelJson.weightsManifest.length) {
        console.error('Invalid model.json: missing weightsManifest');
        throw new Error('Invalid model format: missing weightsManifest');
      }

      console.log('Model validation successful');
    } catch (err) {
      console.error('Error validating model.json:', err);
      throw new Error(`Model validation failed: ${err}`);
    }

    // Load the model weights and ensure they are referenced correctly.
    const modelWeights = [
      require('./group1-shard1of11.bin'),
      require('./group1-shard2of11.bin'),
      require('./group1-shard3of11.bin'),
      require('./group1-shard4of11.bin'),
      require('./group1-shard5of11.bin'),
      require('./group1-shard6of11.bin'),
      require('./group1-shard7of11.bin'),
      require('./group1-shard8of11.bin'),
      require('./group1-shard9of11.bin'),
      require('./group1-shard10of11.bin'),
      require('./group1-shard11of11.bin'),
    ];

    try {
      console.log('Loading model weights...');
      console.log('Weight files referenced successfully');
    } catch (err) {
      console.error('Error loading model weights:', err);
      throw new Error(`Failed to load model weights: ${err}`);
    }

    // Load the model using TensorFlow.js and return it.
    try {
      const model = await tf.loadLayersModel(bundleResourceIO(modelJson, modelWeights));
      console.log('Model loaded successfully!');
      return model;
    } catch (err) {
      console.error('Error during model loading or first prediction:', err);
      throw err;
    }
  } catch (error) {
    console.error('Failed to initialize model or backend:', error);
    throw error;
  }
}

/*
  HDCmodelPromise is a top-level promise that loads the HotDog model.
  It includes error handling to catch and log any issues during the loading process.
*/
export const HDCmodelPromise = loadHotDogModel().catch(err => {
  console.error('Top-level model loading error:', err);
  throw err;
});