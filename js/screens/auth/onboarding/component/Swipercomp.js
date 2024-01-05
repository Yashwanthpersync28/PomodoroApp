import React, { useRef ,useState} from 'react';
import Swiper from 'react-native-swiper';
import { View, Text , TouchableOpacity} from 'react-native';
import { heightValue, marginPosition, styles , screenHeight,flex,fontSize, widthValue, radius, borderColor, borderWidth, padding} from '../../../../styles/Styles';
import Onboardingcomp from './Onboardingcomp';
import { Onboaringdata } from '../../../../constants/Onboardingdata';
import CustomizedButtons from './CustomizedButtons';
import { useNavigation } from '@react-navigation/native';

const Swipercomp = () => {
  const swiper = useRef();
  const navigation=useNavigation()
  const [index, setIndex] = useState(0);
  const [getStarted,setgetStarted]=useState(true);
  
  
  
  let handleSwipeIndexChange=(w)=>{
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
      navigation.navigate('signup')
  }
  
  return (
    <View style={[flex(1)]}>
    <View style={[styles.bgsmokewhite,flex(1),borderColor('#f7f7f7'),borderWidth(0,0,0,2)]}>
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
              backgroundColor: '#eeeeef',
              bottom: 0,
              top:20,
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
              top:20,

            }}
          ></View>
        }
      >
        <Onboardingcomp header={Onboaringdata[0].header} details={Onboaringdata[0].details}/>
        <Onboardingcomp header={Onboaringdata[1].header} details={Onboaringdata[1].details}/>
        <Onboardingcomp header={Onboaringdata[2].header} details={Onboaringdata[2].details}/>

      </Swiper>
      </View>
      <View style={[styles.allCenter,styles.row,styles.spaceBetweenVertical,padding(0,0,20,0,20),styles.bgsmokewhite,{height:heightValue(8)}]}>
       {getStarted? <> 
           
                <CustomizedButtons name={'Skip'} bgcolor={styles.bgsmokeOrange} color={styles.Orange} width={3}/>
                 <CustomizedButtons name={'Continue'} handlecontinue={handlenext} bgcolor={styles.bgOrange} color={styles.white} width={3}/>
          
           </>:
           <CustomizedButtons name={'Get Started'} handlecontinue={handleit} bgcolor={styles.bgOrange} color={styles.white} width={1.1}/>
        }
    </View>
      
    </View>
  )
};

export default Swipercomp;
