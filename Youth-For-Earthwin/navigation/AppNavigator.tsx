import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/Auth'; 
import HomeScreen from '../screens/HomeScreen';
import ParentProfileScreen from '../screens/ParentProfile';
import ProjectPitch from '../screens/ProjectPitch';
import ProjectApprovalScreen from '../screens/ProjectApprovalScreen';
import StudentProfile from '../screens/StudentProfile';
import Idling1Screen from '../screens/IdlingProj/Idling1Screen';
import Idling2Screen from '../screens/IdlingProj/Idling2Screen';
import GatherGroup from '../screens/createproj/GatherGroup';
import Funding from '../screens/createproj/Funding';
import FinalStep from '../screens/createproj/FinalStep';
import FormConfirmation from '../components/FormConfirmation';
import ProjectOverview from '../components/ProjectOverview';
import { View, Image } from 'react-native';

const Stack = createStackNavigator();

function NavLogo() {
  return (
    <Image
          source={require('../assets/earthwin_logo.jpeg')}
          style={{ width: 225, height: 52, marginBottom: 1, marginTop: 10, alignSelf: 'center', }}
        />
  );
}

const AppNavigator = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerTitle: (props:any) => <NavLogo {...props} />, headerTitleAlign: 'center' }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: (props:any) => <NavLogo {...props} />, headerTitleAlign: 'center' }} />
          <Stack.Screen name="Project Pitch" component={ProjectPitch} />
          <Stack.Screen name="Project Approval" component={ProjectApprovalScreen} />
          <Stack.Screen name='Student Profile' component={StudentProfile} />
          <Stack.Screen name='Idling1' component={Idling1Screen} />
          <Stack.Screen name='Idling2' component={Idling2Screen} />
          <Stack.Screen name='Gather Group' component={GatherGroup} />
          <Stack.Screen name='Funding' component={Funding} />
          <Stack.Screen name='Final Step' component={FinalStep} />
          <Stack.Screen name='Confirmation' component={FormConfirmation} />
          <Stack.Screen name='ProjectOverview' component={ProjectOverview} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default AppNavigator;
