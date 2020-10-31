import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps165969Navigator from '../features/Maps165969/navigator';
import Add-Item165968Navigator from '../features/Add-Item165968/navigator';
import Maps165964Navigator from '../features/Maps165964/navigator';
import UserProfile165960Navigator from '../features/UserProfile165960/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps165969: { screen: Maps165969Navigator },
Add-Item165968: { screen: Add-Item165968Navigator },
Maps165964: { screen: Maps165964Navigator },
UserProfile165960: { screen: UserProfile165960Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
