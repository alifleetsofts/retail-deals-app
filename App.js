import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { AppProvider, useApp } from './src/data/AppContext';
import AuthScreen    from './src/screens/AuthScreen';
import CountryScreen from './src/screens/CountryScreen';
import AppNavigator  from './src/navigation/AppNavigator';
import { COLORS } from './src/data/data';

function RootFlow() {
  const { user } = useApp();
  const [step, setStep] = useState('auth'); // auth | country | app

  // Auto-send a new deal notification after 10 seconds
  const { notifs } = useApp ? useApp() : { notifs: [] };

  if (step === 'auth')    return <AuthScreen    onAuth={() => setStep('country')} />;
  if (step === 'country') return <CountryScreen onContinue={() => setStep('app')} />;
  return <AppNavigator onLogout={() => setStep('auth')} />;
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <StatusBar style="auto" />
        <RootFlow />
      </AppProvider>
    </SafeAreaProvider>
  );
}
