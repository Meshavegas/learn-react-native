import {
       SafeAreaView,
       ScrollView,
       StatusBar,
       StyleSheet,
       Text,
       View,
     } from 'react-native';
    
import React from 'react'
import TodoItems from '../components/todoItems';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Add} from 'iconsax-react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  AddTask: undefined;
  IndexScreen: undefined;
};

type IndexScreenNavigationProp = StackNavigationProp<RootStackParamList, 'IndexScreen'>;

type Props = {
  navigation: IndexScreenNavigationProp;
};

const IndexScreen: React.FC<Props> = ({navigation}) => {

  const toAddTask = () => {
    navigation.navigate('AddTask');
  };

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

        
                 {/* Floating Action Button */}
        {/* <TouchableOpacity style={styles.fab} onPress={() => console.log('Button Pressed!')}> */}
        <TouchableOpacity style={styles.fab} onPress={toAddTask}>
          {/* <Icon name="add" size={30} color="#fff" /> */}
          <Add size="32" color="#fff" variant="Bold" /> 
        </TouchableOpacity>
       </View>
     </SafeAreaView>
  )
}

export default IndexScreen

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
       fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: '#163C45',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        right: 20,
        bottom: 20,
        elevation: 5, // For shadow effect
      },
     });
     