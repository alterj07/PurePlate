const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Add bin extension to assetExts array
defaultConfig.resolver.assetExts.push('bin');

module.exports = defaultConfig;