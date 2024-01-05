import React, { useEffect, useState } from 'react';
import {View} from 'react-native'
import {Splash} from '../splash/Splash';
import { Onboarding } from '../onboarding/Onboarding';


export const mainapp = ({navigation}) => {
    const [showSplash,setSplash]=useState(true)
    useEffect(() => {
        setTimeout(() => {
            setSplash(false)
        }, 1000)
    }, [])
  return (
   <View>
    {
        showSplash ? <Splash/>:<Onboarding/>
    }
   </View>
  )
}


