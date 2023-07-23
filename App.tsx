/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';

function App(): JSX.Element {
  const {t} = useTranslation();
  return (
    <NavigationContainer>
      {<Text>{t('dummyNamespace.medium')}</Text>}
    </NavigationContainer>
  );
}

export default App;
