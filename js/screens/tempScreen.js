import React, { useEffect, useState } from "react";
import { View, TouchableOpacity } from "react-native";
// - - - - - COMPONENTS - - - - - //
import { ScreenViewComponent } from "../components";
// - - - - - CONSTANTS - - - - - //

// - - - - - HELPERS - - - - - //

// - - - - - LIBRARY - - - - - //
    import { useDispatch, useSelector } from "react-redux";
// - - - - - REDUX, ACTIONS & API CALLS - - - - - //

// - - - - - STYLES & COLORS - - - - - //
    import { flex, styles } from "../../styles/Styles";


export const ChatScreen = ({ navigation }) => {

    // - - - - - * * DECLARATIONS * * - - - - - //
    const dispatch = useDispatch()
    // Route Params

    // Selectors
    const { data } = useSelector(state => state.user)
    // Re-Selectors

    // States
    const [state, setState] = useState("")
    // - - - - - * * FUNCTIONS * *  - - - - - //

    // - - - - - * * API CALLS * *  - - - - - //

    // - - - - - * * USE EFFECT * *  - - - - - //
    useEffect(() => {

    },[])

    return(
        <ScreenViewComponent>
            {/* Design */}
        </ScreenViewComponent>
    )
}