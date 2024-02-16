import { View, Text } from 'react-native'
import React from 'react'
import { PreferenceComponent } from '../Components/PreferenceComponent'
import { styles, widthValue,flex, padding, heightValue } from '../../../styles/Styles'

import { useNavigation } from '@react-navigation/native'
import { Header } from '../../Manage/components/Header'
import { Icons } from '../../../components/Icons'
import { useDispatch, useSelector } from 'react-redux'
import { setNotificationsPreference } from '../../../redux/userReducer/NotifricationsReducer'

export const Notification = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const userNotifications = useSelector(state=>state.user.notifications)
    console.log(userNotifications,'userNotifications')
    const PomodoroAlerts = userNotifications.PomodoroAlerts;
    const SecurityAlerts = userNotifications.SecurityAlerts;
    const TaskReminders = userNotifications.TaskReminders;
    const TaskUpdates = userNotifications.TaskUpdates;
    const ProductivityInsights = userNotifications.ProductivityInsights;
    const TaskNotifications = userNotifications.TaskNotifications;
    const WeeklySummary = userNotifications.WeeklySummary;
    const GoalProgress = userNotifications.GoalProgress;
    const FeedBacksandUpdates = userNotifications.FeedBacksandUpdates;

    const PreviousScreen = ()=>{
      navigation.goBack();
    }
  
    const switchPomoAlerts = ()=>{
      dispatch(setNotificationsPreference({...userNotifications,PomodoroAlerts:!PomodoroAlerts}))
    }
    const switchSecurity = ()=>{
      dispatch(setNotificationsPreference({...userNotifications,SecurityAlerts:!SecurityAlerts}))
    }
    const switchTaskReminder = ()=>{
      dispatch(setNotificationsPreference({...userNotifications,TaskReminders:!TaskReminders}))
    }
    const switchtaskUpdates = ()=>{
      dispatch(setNotificationsPreference({...userNotifications,TaskUpdates:!TaskUpdates}))
    }
    const switchProductivityInsights = ()=>{
      dispatch(setNotificationsPreference({...userNotifications,ProductivityInsights:!ProductivityInsights}))
    }
    const switchTaskNotifications = ()=>{
      dispatch(setNotificationsPreference({...userNotifications,TaskNotifications:!TaskNotifications}))
    }
    const switchWeeklySummary = ()=>{
      dispatch(setNotificationsPreference({...userNotifications,WeeklySummary:!WeeklySummary}))
    }
    const GoalProgressSwitch = ()=>{
      dispatch(setNotificationsPreference({...userNotifications,GoalProgress:!GoalProgress}))
    }
    const FeedBacksandUpdatesSwitch = ()=>{
      dispatch(setNotificationsPreference({...userNotifications,FeedBacksandUpdates:!FeedBacksandUpdates}))
    }
  return (
    <View style={[styles.bgWhite,flex(1),padding(0,0,10)]}>  
    <View style={[{width:widthValue(1),height:heightValue(10)}]}>
      <Header  color={styles.black} IconNameLeft={'arrowleft'} IconfamilyLeft={Icons.AntDesign} showLeftIocn={true} headername={'Notification'} goBack={PreviousScreen}/>
      </View> 
      <View  showsVerticalScrollIndicator={false} style={[{height:heightValue(1)}]}>
        <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={ 'white'}    PreferanceName={'Pomodoro Alerts'} isEnabled={PomodoroAlerts}  switchFunction={switchPomoAlerts}/>
        <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={'white'}     PreferanceName={'Security Alerts'} isEnabled={SecurityAlerts} switchFunction={switchSecurity}/>
        <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={'white'}    PreferanceName={'Task Reminders'} isEnabled={TaskReminders} switchFunction={switchTaskReminder}/>
        <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={'white'}    PreferanceName={'Task Updates'} isEnabled={TaskUpdates} switchFunction={switchtaskUpdates}/>
        <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={'white'}    PreferanceName={'Productivity Insights'} isEnabled={ProductivityInsights} switchFunction={switchProductivityInsights}/>
        <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={'white'}    PreferanceName={'Task Notifications'} isEnabled={TaskNotifications} switchFunction={switchTaskNotifications}/>
        <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={'white'}    PreferanceName={'Weekly Summary'} isEnabled={WeeklySummary} switchFunction={switchWeeklySummary}/>
        <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={'white'}    PreferanceName={'Goal Progress'} isEnabled={GoalProgress} switchFunction={GoalProgressSwitch}/>
        <PreferenceComponent  showIcon={false} showDetail={false} thumbColor={'white'}    PreferanceName={'FeedBacks and Updates'} isEnabled={FeedBacksandUpdates} switchFunction={FeedBacksandUpdatesSwitch}/>
        </View>  
    </View>
  )
}
