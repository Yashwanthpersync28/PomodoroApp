import React from 'react'
import { flex, fontSize, heightValue, marginPosition, radius, styles, widthValue } from '../../../styles/Styles'
import {View,Text,ScrollView} from 'react-native'

export const PomodoroRecords = () => {
    const timer = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00', '02:00', '04:00', '06:00'];
    const date = ['Today', 'Yester...', 'Feb12', 'Feb11', 'Feb10', 'Feb09', 'Feb08'];
  
    return (
      <View style={[styles.row]}>
        <View style={[styles.column, styles.bgsmokeWhite, { width: widthValue(6), height: heightValue(2) }]}>
          <View style={[{ height: heightValue(12) }, styles.bgsmokeWhite]}></View>
          <View style={[flex(1), styles.bgGray]}></View>
        </View>
        
        {/* header timer */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={[styles.bgsmokeWhite, styles.column]}>
            <View style={[styles.bgsmokeWhite, { height: heightValue(12) }, styles.row]}>
              {timer.map((time, index) => {
                return (
                  <View key={index} style={[styles.allCenter]}>
                    <Text style={[styles.borderGray, fontSize(20), marginPosition(0, 15)]}>{time}</Text>
                  </View>
                )
              })}
            </View>
            
            <View style={[flex(1), styles.bgGreen, styles.row]}>
              {timer.map((time, index) => {
                return (
                  <View key={index} style={[styles.selfStart, { flex: 1 },]}>
                    {(time === '12:00'  || time === '08:00') &&
                      <View style={{ height: 50, width: 10, backgroundColor: 'orange', borderRadius: 2 }}></View>
                    }
                    {time === '14:00' &&
                      <View style={[styles.row]}>
                        <View style={{ height: 50, width: 10, backgroundColor: 'orange', borderRadius: 2, marginRight:5}}></View>
                        <View style={{ height: 50, width: 10, backgroundColor: 'orange', borderRadius: 2, marginRight:5 }}></View>
                        <View style={{ height: 50, width: 10, backgroundColor: 'orange', borderRadius: 2, marginRight:5}}></View>
                        <View style={{ height: 50, width: 10, backgroundColor: 'orange', borderRadius: 2, marginRight:5}}></View>
                        <View style={{ height: 50, width: 10, backgroundColor: 'orange', borderRadius: 2, marginRight:5}}></View>

                        </View>
                    }
                    {time === '16:00' &&
                      <View style={[styles.row]}>
                        <View style={{ height: 50, width: 10, backgroundColor: 'orange', borderRadius: 2, marginRight:5}}></View>
                        <View style={{ height: 50, width: 10, backgroundColor: 'orange', borderRadius: 2, marginRight:5 }}></View>
                        <View style={{ height: 50, width: 10, backgroundColor: 'orange', borderRadius: 2, marginRight:5}}></View>
                        <View style={{ height: 50, width: 10, backgroundColor: 'orange', borderRadius: 2, marginRight:5}}></View>
                        <View style={{ height: 50, width: 10, backgroundColor: 'orange', borderRadius: 2, marginRight:5}}></View>

                        </View>
                    }
                  </View>
                )
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }




