import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React,{useState,useRef,useEffect} from 'react'
import { styles,flex, fontSize, widthValue, borderWidth, borderColor, shadow, margin, radius, padding, heightValue, paddingPosition, marginPosition } from '../../../styles/Styles'
import { useMemo } from 'react'
import moment from 'moment'
import Swiper from 'react-native-swiper'
import Icon, { Icons } from '../../../components/Icons'
import { useSelector } from 'react-redux'

export const DateSwiper = ({handleValue}) => {

  const swiper = useRef();
  const date = new Date();
  const Today = date.getDate();
  // console.log('Today date is:', Today);
  const [value, setValue] = useState(new Date());
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
      <View style={[styles.row, styles.centerHorizontal, flex(1), { width: widthValue(1) }]}>
        <Swiper
          index={1}
          loop={false}
          showsPagination={false}
          ref={swiper}
          style={[{ height: 70}]}
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
                  <TouchableOpacity 
                onPress={()=>{setValue(item.date),handleValue(value)}}
                key={dateIndex}>
                    <View style={[{ width: 44, height: 55 }, isActive ? styles.bgtomotoRed : styles.bgWhite, radius(5), isActive ? borderWidth(0) : borderWidth(0.5), styles.allCenter, margin(0, 0, 8)]}>
                      {Today === item.date.getDate() && (
                        <Icon name={'star'} type={Icons.AntDesign} style={[styles.Orange, fontSize(10)]} />
                      )}
                      <Text style={[isActive ? styles.white : styles.black, fontSize(20), { fontWeight: '600' }]}>{item.date.getDate()}</Text>
                      <Text style={[isActive ? styles.white : styles.gray, fontSize(16), { fontWeight: '400' }]}>{item.day}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </Swiper>
      </View>
    </SafeAreaView>
  );
};





