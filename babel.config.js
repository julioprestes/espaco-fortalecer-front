module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'nativewind/babel' 
    ],
    plugins: [
      // Se o expo-router não estiver sendo pego automaticamente,
      // adicione-o aqui, mas geralmente não é necessário.
      // 'expo-router/babel' 
    ],
  };
};