import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity ,FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { borderColor, borderWidth, flex, fontSize, heightValue, marginPosition, paddingPosition, radius, styles, widthValue } from '../../../../styles/Styles';
import Icon, { Icons } from '../../../../components/Icons';
import { Header } from '../Header';
import { ToggleButtons } from '../../../../components/view/ToggleButtons';
import { Inneritem } from './components/InnerItem';
import { ManageItemslist } from './components/ManageItemslist';
import { useSelector } from 'react-redux';


export const ManageProjectandTags = ({ navigation }) => {
  const [showProjects, setshowProjects] = useState(true);
  //selectors
  const Projects=useSelector((state)=>state.user.userProjectList.UserProjects);
  const Tags=useSelector((state)=>state.user.userTaglist.UserTags);

  console.log('Projects',Projects);
  console.log('Tags',Tags);
   
  
  return (
    <SafeAreaView style={[flex(1), paddingPosition(0, 10, 0, 10), styles.bgWhite]}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      {/* header */}
      <View style={[flex(0.2)]}>
        <Header
          headername={'Manage Project & Tags'}
          IconfamilyRight={Icons.Entypo}
          IconNameRight={'dots-three-vertical'}
          onPress={() => navigation.navigate('task')}
          bgcolor={styles.white}
          color={styles.black}
          goBack={() => navigation.goBack()}
          showLeftIocn={true}
          IconNameLeft={'arrowleft'}
          IconfamilyLeft={Icons.AntDesign}
        />
      </View>
      {/* header end */}
      {/* toggle buttons */}
      <View style={[flex(0.2)]}>
        <ToggleButtons onPressProject={() => setshowProjects(true)} showProjects={showProjects} onPressTags={() => setshowProjects(false)} />
      </View>
      <View style={[flex(0.2),styles.centerVertical]}>
        <TouchableOpacity onPress={()=>console.log('hjbkn')} style={[styles.row, styles.centerHorizontal]}>
        <Icon name={'plus'} type={Icons.Feather} style={[styles.black, fontSize(25), marginPosition(0, 10)]} />
        <Text style={[styles.Orange, fontSize(20)]}>{showProjects?'Add Project':'Add Tags'}</Text>
        </TouchableOpacity>
      </View>
      {/* toggle buttons end */}
      {/* items */}
      <View style={[flex(2)]}>
       <ManageItemslist data={showProjects?Projects:Tags} showProjects={showProjects}/>
    </View>
      {/* footer */}
      <View style={[flex(0.2),borderColor('#f2f0f0'),borderWidth(0,1)]}>
        <TouchableOpacity onPress={()=>navigation.navigate('archived',{name:showProjects?'Archived Projects':'Archived Tags',data:showProjects?Projects:Tags})} style={[flex(1)]}>
        <View style={[styles.row, flex(1)]}>
          <View style={[flex(0.2), styles.centerVertical]}>
              <Icon name={'archive-outline'} type={Icons.Ionicons} style={[styles.black, fontSize(25)]} />
          </View>
          <View style={[flex(1), styles.allCenter]}>
            <Text style={[fontSize(20), styles.black]}>{showProjects?'Archived Projects':'Archived Tags'}</Text>
          </View>
          <View style={[flex(0.2), { justifyContent: 'center', alignItems: 'flex-end' }]}>
              <Icon name={'right'} type={Icons.AntDesign} style={[styles.black, fontSize(25)]} />
          </View>
        </View>
        </TouchableOpacity>
      </View>
      {/* footer end */}
    </SafeAreaView>
  );
};



