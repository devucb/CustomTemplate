/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './src/locale/i18n';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';

function App(): JSX.Element {
  const {t} = useTranslation();
  return <Text style={{marginTop: 50}}>{t('common:username')}</Text>;
}

export default App;
