import React, {ReactNode} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Footer from '../components/Footer';

export default function MainLayout({children}: {children: ReactNode}) {
  return (
    <SafeAreaView style={{height: '100%', justifyContent: 'space-between'}}>
      {children}
      <Footer />
    </SafeAreaView>
  );
}
