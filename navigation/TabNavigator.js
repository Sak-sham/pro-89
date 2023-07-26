import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from './screens/Feed'
import CreatePost from '../screens/CreatePost'

const Tab=createBottomTabNavigator()
const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Feed") {
                iconName = focused?"book":'book-outline';
              } else if (route.name === "CreatePost") {
                iconName = focused?"create":'create-outline';
              }

              // You can return any component that you like here!
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
          })}

          tabBarOptions={{
            activeTintColor:'tomato',
            inactiveTintColor:'grey',
          }}
        >
            <Tab.screen
            name="Feed" component={Feed} options={{headerShown:false}}>
            </Tab.screen>

            <Tab.screen
            name="CreatePost" component={CreatePost} options={{headerShown:false}}>
            </Tab.screen>

        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

export default BottomTabNavigator;

