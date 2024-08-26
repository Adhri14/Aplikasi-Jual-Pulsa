import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import Home from "../pages/Home";
import Printer from "../pages/Printer";

type RootStackParamList = {
    MainApp: undefined;
};

export type MainAppParamList = {
    Home: undefined;
    Printer: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainAppParamList>();

function MainApp() {
    return (
        <Tab.Navigator screenOptions={{
            header: () => null
        }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Printer" component={Printer} />
        </Tab.Navigator>
    );
}

export default function Router() {
    return (
        <Stack.Navigator screenOptions={{
            header: () => null,
        }}>
            <Stack.Screen name="MainApp" component={MainApp} />
        </Stack.Navigator>
    );
}