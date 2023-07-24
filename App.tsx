/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import './src/locale/i18n';
import {RootNavigationProvider} from '@routes';
function App(): JSX.Element {
  return <RootNavigationProvider />;
}

export default App;
