import { View, Text, TextInput, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Register() {
  const router = useRouter();
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleRegister = () => {
    // Aqui você implementará a lógica de cadastro
    console.log('Cadastro:', { nomeCompleto, email, senha, telefone });
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
      <View className="items-center mb-6">
        <Text className="text-2xl font-bold text-gray-800">Espaço Fortalecer</Text>
      </View>

      {/* Título da Página */}
      <View className="px-8 mb-6">
        <Text className="text-2xl font-bold text-gray-800 mb-2">
          Criar Conta de Responsável
        </Text>
        <Text className="text-gray-500">
          Preencha os campos abaixo para se cadastrar
        </Text>
      </View>

      {/* Formulário */}
      <View className="px-8 space-y-4">
        {/* Campo Nome Completo */}
        <View>
          <Text className="text-gray-700 mb-2 font-medium">Nome Completo</Text>
          <TextInput
            value={nomeCompleto}
            onChangeText={setNomeCompleto}
            placeholder="Seu nome completo"
            className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-4 text-base"
            placeholderTextColor="#9ca3af"
          />
        </View>

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
            placeholder="Crie uma senha"
            secureTextEntry
            className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-4 text-base"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Campo Confirmar Senha */}
        <View>
          <Text className="text-gray-700 mb-2 font-medium">Confirmar Senha</Text>
          <TextInput
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            placeholder="Repita a senha"
            secureTextEntry
            className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-4 text-base"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Campo Telefone */}
        <View>
          <Text className="text-gray-700 mb-2 font-medium">Telefone</Text>
          <TextInput
            value={telefone}
            onChangeText={setTelefone}
            placeholder="(xx) xxxxx-xxxx"
            keyboardType="phone-pad"
            className="bg-gray-50 border border-gray-300 rounded-xl px-4 py-4 text-base"
            placeholderTextColor="#9ca3af"
          />
        </View>

        {/* Botão Cadastrar */}
        <TouchableOpacity
          onPress={handleRegister}
          className="bg-gray-900 py-4 rounded-xl mt-6 active:opacity-80"
        >
          <Text className="text-white text-center text-lg font-semibold">
            Cadastrar
          </Text>
        </TouchableOpacity>

        {/* Link para Login */}
        <View className="flex-row justify-center items-center mt-6 mb-8">
          <Text className="text-gray-600">Já tenho uma conta? </Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
            <Text className="text-gray-900 font-semibold">Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
