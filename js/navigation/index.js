import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from "./StackNavigation";
// Navigation Types

export const AppNavigationContainer = () => {
    return(
        <NavigationContainer>
            <StackNavigation/>
        </NavigationContainer>
    )
}