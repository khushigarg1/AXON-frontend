import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../theme';

const SplashScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center bg-offWhite">
      <ActivityIndicator size="large" color={theme.colors.darkGreen} />
      <Text className="text-2xl font-bold mt-4 text-darkGreen">Loading...</Text>
    </View>
  );
};

export default SplashScreen;
