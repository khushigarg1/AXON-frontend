import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { theme } from '../theme';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleSignup = () => {
    console.log('Navigate to Signup');
  };

  const handleForgotPassword = () => {
    console.log('Navigate to Forgot Password');
  };

  return (
    <View className="flex-1 justify-center items-center bg-offWhite px-6">
      <Text className="text-3xl font-bold mb-8 text-darkGreen">Login</Text>

      {/* Email Input */}
      <TextInput
        className="border border-gray-300 rounded-lg w-full px-4 py-2 mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* Password Input */}
      <TextInput
        className="border border-gray-300 rounded-lg w-full px-4 py-2 mb-6"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      {/* Login Button */}
      <TouchableOpacity
        onPress={handleLogin}
        className="bg-mediumGreen w-full py-3 rounded-lg"
      >
        <Text className="text-white text-center font-semibold text-lg">Login</Text>
      </TouchableOpacity>

      {/* Signup Button */}
      <TouchableOpacity onPress={handleSignup} className="mt-4">
        <Text className="text-mediumGreen font-semibold">Don't have an account? Sign Up</Text>
      </TouchableOpacity>

      {/* Forgot Password Button */}
      <TouchableOpacity onPress={handleForgotPassword} className="mt-4">
        <Text className="text-gray-500">Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
