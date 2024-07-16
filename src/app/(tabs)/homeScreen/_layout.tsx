import { Tabs } from "expo-router";
import React from "react";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />
        }} />
      <Tabs.Screen
        name="myHealth"
        options={{
          title: 'My Health',
          tabBarIcon: () => <MaterialIcons name="health-and-safety" size={24} color="black" />
        }} />
      <Tabs.Screen
        name="getCare"
        options={{
          title: 'Get Care',
          tabBarIcon: () => <FontAwesome5 name="hand-holding-medical" size={24} color="black" />
        }} />
    </Tabs>
  );
}