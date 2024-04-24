import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Forgot from './Pages/Forgot';
import Home from './Pages/Home';
import Settings from './Pages/Settings';
import Account from './Pages/Account';



const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function HomeDrawerNav () {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={Home} />
      <Drawer.Screen name='Settings' component={Settings} />
    </Drawer.Navigator>
  )
}

function HomeTabNav () {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeDrawerNav} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Forgot' component={Forgot} />
        <Tab.Screen name='Home' component={HomeTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
