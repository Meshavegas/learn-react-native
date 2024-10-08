import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TodoItems from './src/components/todoItems';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#163C45'} barStyle="light-content" />
      <View style={{flex: 1, backgroundColor: '#554F41'}}>
        <View style={styles.headerContainer}>
          <Text style={styles.textStyle}>TODO APP</Text>
          <Text style={styles.textStyle}>C</Text>
        </View>
        <ScrollView style={{flex: 1, paddingHorizontal: 12}}>
          {Array.from({length: 10}).map((_, i) => (
            <TodoItems
              title={`Title ${i}`}
              subTitle={`Subtitle ${i}`}
              key={i}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default App;
const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 100,
    backgroundColor: '#163C45',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  textStyle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
