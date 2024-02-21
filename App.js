import React, { useState, useEffect } from "react";
import { AppContainer } from "./js/AppContainer";
import { Provider } from 'react-redux';
import store, { persistor } from './js/redux/store';
import { LogBox, Modal, Text, View } from "react-native"
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
import { PersistGate } from 'redux-persist/integration/react';
import codePush from "react-native-code-push";
import { flex, styles } from "./js/styles/Styles";
import { TextComponent } from "./js/components";
import {Splash} from "./js/screens/auth/splash/Splash";
import PomodoroScreen from "./js/screens/dashboard/PomodoroScreen";
import BottomTabNavigation from "./js/navigation/BottomTabNavigation";
import TimerComponent from "./js/screens/dashboard/Components/TimerComponent";
import { AppNavigationContainer } from "./js/navigation/StackNavigation";
// let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };
const App = () => {
    // const [progress, setProgress] = useState("")

    // useEffect(() => {
    //     codePush.sync({
    //         updateDialog: true,
    //         installMode: codePush.InstallMode.IMMEDIATE
    //         },
    //         codePushStatusDidChange,
    //         codePushDownloadDidProgress
    //     );
    // },[])

    // //code push
    // const codePushStatusDidChange = (syncStatus) => {
    //     switch (syncStatus) {
    //     case codePush.SyncStatus.CHECKING_FOR_UPDATE:
    //         console.log("Checking for update.")
    //         break;
    //     case codePush.SyncStatus.DOWNLOADING_PACKAGE:
    //         console.log("Download packaging....")
    //         showProgressView();
    //         break;
    //     case codePush.SyncStatus.AWAITING_USER_ACTION:
    //         console.log("Awaiting user action....")
    //         break;
    //     case codePush.SyncStatus.INSTALLING_UPDATE:
    //         console.log("Installing update")
    //         setProgress(false)
    //         break;
    //     case codePush.SyncStatus.UP_TO_DATE:
    //         console.log("codepush status up to date")
    //         break;
    //     case codePush.SyncStatus.UPDATE_IGNORED:
    //         console.log("update cancel by user")
    //         setProgress(false)
    //         break;
    //     case codePush.SyncStatus.UPDATE_INSTALLED:
    //         console.log("Update installed and will be applied on restart.")
    //         setProgress(false)
    //         break;
    //     case codePush.SyncStatus.UNKNOWN_ERROR:
    //         console.log("An unknown error occurred")
    //         setProgress(false)
    //         break;
    //     }
    // }
    
    // codePushDownloadDidProgress = (progress) => {
    //     console.log("ghjk", progress)
    //     setProgress(progress)
    // }

    // const showProgressView = () => {
    //     return (
    //       <Modal visible={true} transparent  >
    //         <View style={[flex(1),styles.allCenter, styles.bgdarkOverlayColor]}>
    //           <View style={{ borderRadius: 8,padding: 16 }}>
    //             <View style={[styles.row]}>
    //             <TextComponent title={"Downloading.......   "} style={[styles.black,]} size={20}/>
    //               <TextComponent title={((Number(progress?.receivedBytes) / Number(progress?.totalBytes)) * 100).toFixed(0)+`%`} style={[styles.black]} size={20}/>
    //             </View>
    //           </View>
    //         </View>
    //       </Modal>
    //     )
    //   }

    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppContainer/> 
                {/* <AppNavigationContainer/> */}
            </PersistGate>
        </Provider>
    )
}

export default  codePush(App)