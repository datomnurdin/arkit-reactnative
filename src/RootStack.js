import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './HomeScreen'
import ARScreen from './ARScreen';

export const RootStackkNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    ARScreen: {
      screen: ARScreen,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export const RootStack = createAppContainer(RootStackkNavigator);