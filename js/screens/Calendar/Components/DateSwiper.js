import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React,{useState,useRef,useEffect} from 'react'
import { styles,flex, fontSize, widthValue, borderWidth, borderColor, shadow, margin, radius, padding, heightValue, paddingPosition, marginPosition } from '../../../styles/Styles'
import { useMemo } from 'react'
import moment from 'moment'
import Swiper from 'react-native-swiper'
import Icon, { Icons } from '../../../components/Icons'
import { useSelector } from 'react-redux'
import { TouchableWithoutFeedback } from 'react-native'

export const DateSwiper = ({value,setValue}) => {
  const darkMode = useSelector(state=>state.system.darkMode)


  const swiper = useRef();
  const date = new Date();
  const Today = date.getDate();
  // console.log('Today date is:', Today);
  // const [value, setValue] = useState(new Date());
  console.log('value',value)
  // const selecteddate = value;
  const [week, setWeek] = useState(0);
  const weeks = useMemo(() => {
    const start = moment().add(week, 'weeks').startOf('isoWeek'); // Use 'isoWeek'
    return [-1, 0, 1].map((adj) => {
      return Array.from({ length: 7 }).map((_, index) => {
        const date = moment(start).add(adj, 'week').add(index, 'day');

        return {
          day: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, [week]);

  return (
    <SafeAreaView style={[flex(1)]}>
      <View style={[styles.row, styles.centerHorizontal, flex(1), { width: widthValue(1.05)}]}>
        <Swiper
          index={1}
          loop={false}
          showsPagination={false}
          ref={swiper}
          style={[{ height: 70},styles.centerVertical]}
          onIndexChanged={(ind) => {
            if (ind === 1) {
              return;
            }
            setTimeout(() => {
              const newIndex = ind - 1;
              const newWeek = week + newIndex;
              setWeek(newWeek);
              setValue(moment(value).add(newIndex, 'week').toDate());
              swiper.current.scrollTo(1, false);
            }, 100);
          }}
        >
          {weeks.map((dates, index) => (
            <View style={[styles.row]} key={index}>
              {dates.map((item, dateIndex) => {
                const isActive = value.toDateString() === item.date.toDateString();
                console.log(isActive, 'isactive');
                console.log(value);
                // handleValue(value)
  console.log('Selected date in DateSwiper:', item.date);

                return (
                  <TouchableWithoutFeedback 
                onPress={()=>{setValue(item.date)}}
                key={dateIndex}>
                    <View style={[{height:55,width:47}, isActive ? styles.bgtomotoRed :(darkMode?styles.bgtaskCardDblack: styles.bgWhite), radius(5),darkMode?styles.borderDarkmode:styles.borderGray,margin(0,0,4.3), styles.allCenter,padding(0,6,10),shadow(2)]}>
                      {Today === item.date.getDate() && (
                        <Icon name={'star'} type={Icons.AntDesign} style={[styles.Orange, fontSize(10)]} />
                      )}
                      <Text style={[isActive ? styles.white :(darkMode?styles.lightWhite: styles.black), fontSize(18), { fontWeight: '600' }]}>{item.date.getDate()}</Text>
                      <Text style={[isActive ? styles.white :(darkMode?styles.lightishGray: styles.gray), fontSize(14), { fontWeight: '300' }]}>{item.day}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                );
              })}
            </View>
          ))}
        </Swiper>
      </View>
    </SafeAreaView>
  );
};



