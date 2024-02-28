import React, { useRef ,useState} from 'react';
import Swiper from 'react-native-swiper';
import { View, Text , TouchableOpacity , Dimensions} from 'react-native';
import { heightValue, marginPosition, styles , screenHeight,flex,fontSize, widthValue, radius, borderColor, borderWidth, padding, paddingPosition} from '../../../../styles/Styles';
import { Onboardingcomponent } from './Onboardingcomponent';
import { Onboaringdata } from '../../../../constants/Onboardingdata';
import CustomizedButtons from './CustomizedButtons';
import { useNavigation } from '@react-navigation/native';
import { ButtonComponent } from '../../../../components';
import { Colors } from '../../../../styles/Colors';
import { setOnboarding } from '../../../../redux/ShowComponentReducer/ShowOnboardingReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Svg , Path } from 'react-native-svg';


export const Swipercomponent = ({handleIndex}) => {
  const swiper = useRef();
  const navigation=useNavigation()
  const { width, height } = Dimensions.get('window');
  const controlX=width/2
  const [index, setIndex] = useState(0);
  const [getStarted,setgetStarted]=useState(true);
  
  //selector
  const dispatch=useDispatch()
  const Darkmode=useSelector((state)=>state.system.darkMode);

  
  let handleSwipeIndexChange=(w)=>{
    console.log('w',w);
    handleIndex(w)
    setIndex(w)
    if(w===2){
      setgetStarted(false);
    }
    else{
      setgetStarted(true)
    }
  }
  
  let handlenext = () => {
    swiper.current.scrollBy(1);
  };
  const handleit=()=>{
    dispatch(setOnboarding(true))
      navigation.navigate('signup')
  }
  
  return (
    <View style={[flex(1)]}>
    <View style={[flex(1)]}>
      
           {/* <Svg style={{position:'absolute',bottom:210}} width={widthValue(1)} height={100}>
                         <Path 
                            d={`M 0 20 Q ${controlX} 130 ${width}
                             20 L ${width} 100 L 0 100 Z
                                `}
                           fill={Colors.Brown}/>
                      </Svg> */}
                 
      <Swiper
        ref={swiper}
        loop={false}
        autoplay={false}
        onIndexChanged={handleSwipeIndexChange}
        buttonWrapperStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
          flexDirection: 'column',
          justifyContent: 'space-around',
          marginRight: '10%',
          marginLeft: '16%',
          marginRight: '-71%',
        }}
        // style={styles.wrapper}
        showsButtons={false}
        dot={
          <View
            style={{
              width: 8,
              height: 9,
              borderRadius: 4,
              margin: 3,
              backgroundColor: Darkmode?Colors.Darkmodebutton:'#eeeeef',
              bottom: 0,
              top:10,
              position: 'relative',
            }}
          ></View>
        }
        activeDot={
          <View
            style={{
              width: 25,
              height: 8,
              borderRadius: 7,
              margin: 5,
              backgroundColor: '#ff6347',
              bottom: 0,
              top:10,

            }}
          ></View>
        }
      >
        
        <Onboardingcomponent header={Onboaringdata[0].header} details={Onboaringdata[0].details} index={0} />
        <Onboardingcomponent header={Onboaringdata[1].header} details={Onboaringdata[1].details} index={1} />
        <Onboardingcomponent header={Onboaringdata[2].header} details={Onboaringdata[2].details} index={2} />

      </Swiper>
      </View>
      <View style={[paddingPosition(0,20,0,20),Darkmode?styles.bgdarkmodeBlack:styles.bgWhite,flex(0.2)]}>
       <View style={[Platform.OS==='android' && styles.allCenter,styles.row,styles.spaceBetweenVertical,Darkmode?styles.bgdarkmodeBlack:styles.bgWhite,marginPosition(10),borderColor(Darkmode?Colors.darkmodeBorderColor:Colors.borderGray),borderWidth(0,2),{height:heightValue(7)}]}>
       {getStarted? <> 
                <CustomizedButtons name={'Skip'} bgcolor={Darkmode?styles.bgDarkmodebutton:styles.bgsmokeOrange} color={Darkmode?styles.white:styles.Orange} style={[{width:widthValue(2.4)},Platform.OS==='ios' && marginPosition(16)]} handlecontinue={handleit}/>
                 <CustomizedButtons name={'Continue'} handlecontinue={handlenext} bgcolor={styles.bgOrange} color={styles.white}style={[{width:widthValue(2.4)},Platform.OS==='ios' && marginPosition(16)]}/>
          
           </>:
           <CustomizedButtons name={'Get Started'} handlecontinue={handleit} bgcolor={styles.bgOrange} color={styles.white} style={[{width:widthValue(1.1)},Platform.OS==='ios' && marginPosition(16)]}/>
        }
        </View>
    </View>
     
      
    </View>
  )
};

// height:heightValue(7)