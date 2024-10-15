import React from 'react';
import type {PropsWithChildren} from 'react';
import RootNavigation from './src/navigation/root.navigation';
import {NavigationContainer} from '@react-navigation/native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;
