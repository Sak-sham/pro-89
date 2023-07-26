import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TabNavigator from './TabNavigator'
import PostScreen from '../screens/PostScreen'

const Stack=createStackNavigator();

const StackNavigator=()=>{
    return(
        <Stack.Navigator initializeRouteName="Home" screenOptions={{headerShown:false}}>

        <Stack.screen name="Home" component={TabNavigator}></Stack.screen>
        <Stack.screen name="PostScreen" component={PostScreen}></Stack.screen>
        </Stack.Navigator>
    )
}
export default StackNavigator;