import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screen/home/HomeScreen';
import {DetailsScreen} from '../screen/details/DetailsScreen';
export type RootStackParams = {
  Home: undefined;
  Details: {expositoresId: number};
};
const MyStack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <MyStack.Navigator>
      <MyStack.Screen name="Home" component={HomeScreen} />
      <MyStack.Screen name="Details" component={DetailsScreen} />
    </MyStack.Navigator>
  );
};
