import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import IndexScreen from '../screen/IndexScreen';
import ScreenCompletedTask from '../screen/ScreenCompletedTask';

type Props = {};
const Stack = createStackNavigator();

const RootNavigation = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={IndexScreen} />
      <Stack.Screen name="Complete" component={ScreenCompletedTask} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
