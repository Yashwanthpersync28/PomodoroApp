import React, { useRef } from 'react';
import Swiper from 'react-native-swiper';
import { View, Text , TouchableOpacity} from 'react-native';
import { heightValue, marginPosition, styles , screenHeight,flex,fontSize, widthValue, radius, borderColor, borderWidth} from '../../../../styles/Styles';
import Onboardingcomp from './Onboardingcomp';

const Swipercomp = () => {
  const swiper = useRef();

  // const handleSwipeIndexChange = (index) => {
  //   // Your logic here
  // };

  return (
    <View style={[{height:heightValue(2.2)}]}>
    <View style={[styles.bgsomkewhite,{height:heightValue(2.8)},borderColor('#f7f7f7'),borderWidth(0,0,0,2)]}>
      <Swiper
        ref={swiper}
        loop={false}
        autoplay={false}
        // onIndexChanged={handleSwipeIndexChange}
        buttonWrapperStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-end',
          flexDirection: 'column',
          justifyContent: 'space-around',
          marginRight: '10%',
          marginTop: '0%',
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
            }}
          ></View>
        }
      >
        <Onboardingcomp/>
        <Onboardingcomp/>
        <Onboardingcomp/>

      </Swiper>
      </View>
      <View style={[styles.allCenter,styles.row,marginPosition('3%')]}>
    <TouchableOpacity style={[marginPosition('0%',0,0,'0%')]}>
      <View style={[radius(30),{height:heightValue(15),width:widthValue(3)},styles.bgsmokeOrange,styles.allCenter]}>
        <Text style={[styles.Orange,fontSize(20),{fontfamily:500},]}>Skip</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={[marginPosition('0%',0,0,'15%')]} >
    <View style={[radius(30),{height:heightValue(15),width:widthValue(3)},styles.bgOrange,styles.allCenter]}>
        <Text style={[styles.white,fontSize(20),{fontfamily:500},]}>Continue</Text>
      </View>
    </TouchableOpacity>
    </View>
   
    </View>
  )
};

export default Swipercomp;
