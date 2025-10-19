import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Aqui você implementará a lógica de login
    console.log('Login:', { email, senha });
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
      
      {/* Botão Voltar */}
      <TouchableOpacity 
        onPress={() => router.back()}
        className="px-6 pt-12 pb-4"
      >
        <Text className="text-2xl text-gray-800">←</Text>
      </TouchableOpacity>

      {/* Header */}
      <View className="items-center mb-8">
        <Text className="text-2xl font-bold text-gray-800">Espaço Fortalecer</Text>
      </View>

      {/* Container da Logo */}
      <View className="items-center mb-6">
        <View className="w-32 h-32 rounded-3xl bg-gray-200 justify-center items-center border-4 border-gray-300">
          {/* <Image source={require('../assets/images/logo.png')} className="w-24 h-24" resizeMode="contain" /> */}
          <Text className="text-gray-400 text-base font-semibold">Logo</Text>
        </View>
      </View>

      {/* Título da Página */}
      <View className="items-center mb-8">
        <Text className="text-2xl font-bold text-gray-800 mb-2">
          Login do Responsável
        </Text>
        <Text className="text-gray-500 text-center px-8">
          Acesse sua conta para continuar
        </Text>
      </View>

      {/* Formulário */}
      <View className="px-8 space-y-4">
        {/* Campo Email */}
        <View>
          <Text className="text-gray-700 mb-2 font-medium">Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="seu@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-4 text-base"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Campo Senha */}
        <View>
          <Text className="text-gray-700 mb-2 font-medium">Senha</Text>
          <TextInput
            value={senha}
            onChangeText={setSenha}
            placeholder="Digite sua senha"
            secureTextEntry
            className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-4 text-base"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Link Esqueci minha senha */}
        <TouchableOpacity className="items-end">
          <Text className="text-gray-500 text-sm">Esqueci minha senha</Text>
        </TouchableOpacity>

        {/* Botão Entrar */}
        <TouchableOpacity
          onPress={handleLogin}
          className="bg-gray-900 py-4 rounded-xl mt-6 active:opacity-80"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Entrar
          </Text>
        </TouchableOpacity>

        {/* Link para Cadastro */}
        <View className="flex-row justify-center items-center mt-6 mb-8">
          <Text className="text-gray-600">Não tem uma conta? </Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
            <Text className="text-gray-900 font-semibold">Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
