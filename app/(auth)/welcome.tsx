import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';

export default function Welcome() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      
      {/* Header com menu (hamburger) */}
      <View className="px-6 pt-12 pb-4 flex-row justify-between items-center">
        <Text className="text-2xl font-bold text-gray-800">Espaço Fortalecer</Text>
        <TouchableOpacity className="p-2">
          <View className="space-y-1">
            <View className="w-6 h-0.5 bg-gray-800" />
            <View className="w-6 h-0.5 bg-gray-800" />
            <View className="w-6 h-0.5 bg-gray-800" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Conteúdo Principal */}
      <View className="flex-1 justify-center items-center px-8">
        {/* Container da Logo - Pronto para inserir imagem */}
        <View className="w-40 h-40 rounded-full bg-gray-200 justify-center items-center mb-6 border-4 border-gray-300">
          {/* Aqui você pode inserir sua logo */}
          {/* <Image source={require('../assets/images/logo.png')} className="w-32 h-32" resizeMode="contain" /> */}
          <Text className="text-gray-400 text-lg font-semibold">Logo</Text>
        </View>

        {/* Título */}
        <Text className="text-3xl font-bold text-gray-800 mb-2">
          Espaço Fortalecer
        </Text>

        {/* Subtítulo */}
        <Text className="text-gray-500 text-center mb-12">
          Aprenda de forma divertida
        </Text>

        {/* Botões */}
        <View className="w-full space-y-4">
          {/* Botão Entrar */}
          <TouchableOpacity
            onPress={() => router.push('/(auth)/login')}
            className="bg-gray-900 py-4 rounded-xl active:opacity-80"
          >
            <Text className="text-white text-center text-lg font-semibold">
              Entrar
            </Text>
          </TouchableOpacity>

          {/* Botão Cadastre-se */}
          <TouchableOpacity
            onPress={() => router.push('/(auth)/register')}
            className="bg-white py-4 rounded-xl border-2 border-gray-900 active:opacity-80"
          >
            <Text className="text-gray-900 text-center text-lg font-semibold">
              Cadastre-se
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
