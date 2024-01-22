import { View, Text, Button, Linking } from 'react-native'
import React, { useEffect } from 'react'
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';


const Permissions = () => {

    // useEffect(()=>{
    //     requestPermissions();
    // },[])

    // const requestPermissions = async ()=>{
    //     try {
            

    //         const result = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
    //         if(result === RESULTS.BLOCKED || result === RESULTS.DENIED){
    //             console.log('permissions denied')
    //             alert('permission denied')
    //         } else{
    //             console.log('Notification permissions granted')
    //         }
    //     } catch (error) {
    //         console.log('error requesting permission')
    //     }
    // }
    const blockNotification = ()=>{
        Linking.openSettings();
    }
  return (
    <View>
      <Text>Permissions</Text>
      <Button title='Notification Permission' onPress={blockNotification} />
    </View>
  )
}

export default Permissions