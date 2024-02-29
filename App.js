import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './screens/LogIn/LogIn';
import Dashboard from './screens/Dashboard/Dashboard';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
        <Stack.Screen name="LogInScreen" component={LogIn} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

