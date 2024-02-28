import React from 'react';
import { StyleSheet, Dimensions, Platform, PixelRatio, StatusBar } from 'react-native';
import { Colors } from './Colors';

// - - - - - CUSTOMISED BUTTON - - - - - - //
export const buttonColor = (darkMode) => {
    return [darkMode ? styles. bgdarkOrange : styles.bgOrange]
}

export const bgColor = (darkMode) => {
    return darkMode ? styles.bgBlack : styles.bgWhite
}

export const textColor = (darkMode) => {
    return darkMode ? styles.white : styles.black
}
export const brdColor = (Mode) => {
    return Mode ? borderColor(styles.Orange): borderColor(styles.lgWhite)
}

export const shadow = (value) => {
    return StyleSheet.create({
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: value
        },
        shadowOpacity: value/8,
        shadowRadius: value*2,

        elevation: value*2.5,
    })
}



// - - - - - DYNAMIC FONT SIZE - - - - - - //

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

    // based on iphone 5s's scale
    //   const scale = SCREEN_WIDTH  / 360;
    const scale = SCREEN_HEIGHT / 880;

export function fontSize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return StyleSheet.create({ fontSize: Math.round(PixelRatio.roundToNearestPixel(newSize)) })
    } else {
        return StyleSheet.create({ fontSize: Math.round(PixelRatio.roundToNearestPixel(newSize)) -2 })
    }
}
export const fontWeight=(value)=>{
    return StyleSheet.create({
        fontWeight:value,
    })
  }

// - - - - - CUSTOM SPACING AND BORDER - - - - - - //

    // - - - - - PADDING - - - - - - //
    export const padding = (padding, paddingVertical, paddingHorizontal) => {
        return StyleSheet.create({ padding, paddingVertical, paddingHorizontal })
    }
    // - - - - - PADDING POSITION- - - - - - //
    export const paddingPosition = (paddingTop, paddingRight, paddingBottom, paddingLeft) => {
        return StyleSheet.create({ paddingTop, paddingRight, paddingBottom, paddingLeft })
    }

    // - - - - - MARGIN - - - - - - //
    export const margin = (margin, marginVertical, marginHorizontal) => {
        return StyleSheet.create({ margin, marginVertical, marginHorizontal })
    }
    // - - - - - MARGIN POSITION- - - - - - //
    export const marginPosition = (marginTop, marginRight, marginBottom, marginLeft) => {
        return StyleSheet.create({ marginTop, marginRight, marginBottom, marginLeft })
    }

    // - - - - - POSITION - - - - - - //
    export const position = (top, right, bottom, left) => {
        return StyleSheet.create({ top, right, bottom, left })
    }

    // - - - - - Z-INDEX - - - - - - //
    export const zIndex = (value) => {
        return StyleSheet.create({ zindex: value })
    }
   
    // - - - - - BORDER WIDTH - - - - - - //
    export const borderWidth = (borderWidth, borderTopWidth, borderLeftWidth, borderBottomWidth, borderRightWidth) => {
        return StyleSheet.create({ borderWidth, borderTopWidth, borderLeftWidth, borderBottomWidth, borderRightWidth })
    }

    // - - - - - BORDER RADIUS - - - - - - //
    export const radius = (borderRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius, borderTopLeftRadius) => {
        return StyleSheet.create({ borderRadius, borderTopRightRadius, borderBottomRightRadius, borderBottomLeftRadius, borderTopLeftRadius })
    }

    // - - - - - BORDER COLOR - - - - - - //
    export const borderColor = (borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor) => {
        return StyleSheet.create({ borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor })
    }

    // - - - - - FLEX - - - - - - //
    export const flex = (value) => {
        return StyleSheet.create({ flex: value })
    }

    // - - - - - FONT STYLES - - - - - //
    export const lineHeight = (value) => {
        return StyleSheet.create({ lineHeight: value })
    }
    export const opacity = (value) => {
        return StyleSheet.create({ opacity: value })
    }

    // - - - - - SCALE - - - - - //
    export const screenHeight = (value) => {
        return StyleSheet.create({ height: SCREEN_HEIGHT/value })     
    }
    export const screenWidth = (value) => {
        return StyleSheet.create({ height: SCREEN_WIDTH/value })     
    }
    export const heightValue = (value) => {
        return SCREEN_HEIGHT/value;
    }
    export const widthValue = (value) => {
        return SCREEN_WIDTH/value;
    }

export const styles = StyleSheet.create({
// - - - - - TEXT COLORS - - - - - //
    white: { color: Colors.white },
    black: { color: Colors.black },
    green: { color: Colors.green },
    blue: { color: Colors.blue },
    Orange: { color: Colors.Orange },
    gray: { color: Colors.gray },
    lightBlue: { color: Colors.lightBlue },
    Orange:{color:Colors.Orange},
    dark:{color:Colors.dark},
    lightGray: { color: Colors.lightGray },
    smokewhite:{color: Colors.smokewhite},
    gray:{color:Colors.gray},
    lightBlue: { color: Colors.lightBlue },
    dark:{color:Colors.dark},
    lightGray: { color: Colors.lightGray },
    timerBlue:{color:Colors.timerBlue},
    toggleGray:{color:Colors.toggleGray},
    tomotoRed:{color:Colors.tomotoRed},
    lightWhite:{color:Colors.lgWhite},
    lightishGray:{color:Colors.lightishGray},
    brown:{color:Colors.brown},
    purple:{color:Colors.purple},
    timerBlue:{color:Colors.timerBlue},
    borderGray:{color:Colors.borderGray},
    textGray:{color:Colors.textGray},
    iconGray:{color:Colors.iconGray},
    TextBlack:{color:Colors.TextBlack},
    MilkyWhite:{color:Colors.MilkyWhite},
    darkmodeBlack:{color:Colors.darkmodeBlack},
    DarkmodeText:{color:Colors.DarkmodeText},
    taskCardDblack:{color:Colors.taskCardDblack},
    inputColor:{color:Colors.inputColor},
    smokeGray:{color:Colors.smokeGray},
    sky:{color:Colors.sky},
// - - - - - BACKGROUND COLORS - - - - - //
    bgWhite: { backgroundColor: Colors.white },
    bgBlack: { backgroundColor: Colors.black },
    bgGreen: { backgroundColor: Colors.green },
    bgBlue: { backgroundColor: Colors.blue },
    bgLightBlue: { backgroundColor: Colors.lightBlue },
    bgGray: { backgroundColor: Colors.gray },
    bgOrange: { backgroundColor: Colors.Orange },
    bgOrange: { backgroundColor: Colors.Orange },
    bgdarkOrange: { backgroundColor: Colors.darkOrange },
    bglightPink:{ backgroundColor: Colors.lightPink },
    bglightGray:{ backgroundColor: Colors.lightGray },
    bglightBlue:{ backgroundColor: Colors.lightBlue },
    bgsmokewhite:{backgroundColor:Colors.smokewhite},
    bgsmokeOrange:{backgroundColor:Colors.smokeOrange},
    bgdark:{backgroundColor:Colors.dark},
    bglgWhite:{backgroundColor:Colors.lgWhite},
    bgdarkOrange:{backgroundColor:Colors.darkOrange},
    bgLightWhite:{backgroundColor:Colors.lightWhite},
    bgdarkOrange:{backgroundColor:Colors.darkOrange},
    bgtomotoRed:{backgroundColor:Colors.tomotoRed},
    bgpurple:{backgroundColor:Colors.purple},
    bgbrown:{backgroundColor:Colors.Brown},
    bgyellow:{backgroundColor:Colors.yellow},
    bgSmokeRed:{backgroundColor:Colors.SmokeRed},
    bgSmokePink:{backgroundColor:Colors.SmokePink},
    bgSmokePurple:{backgroundColor:Colors.SmokePurple},
    bgSmokeDarkBlue:{backgroundColor:Colors.SmokeDarkBlue},
    bgSmokeNavy:{backgroundColor:Colors.SmokeNavy},
    bgSkyblue:{backgroundColor:Colors.Skyblue},
    bgSmokeBlue:{backgroundColor:Colors.SmokeBlue},
    bggold:{backgroundColor:Colors.gold},
    bglightGreen:{backgroundColor:Colors.lightGreen},
    bgLeafGreen:{backgroundColor:Colors.LeafGreen},
    bggreenish:{backgroundColor:Colors.greenish},
    bgdarkblue:{backgroundColor:Colors.darkblue},
    bgdarkGreen:{backgroundColor:Colors.darkGreen},
    bgLightGold:{backgroundColor:Colors.LightGold},
    bgborderGray:{backgroundColor:Colors.borderGray},
    bgWhiteSmoke:{backgroundColor:Colors.WhiteSmoke},
    bgtoggleWhite:{backgroundColor:Colors.toggleWhite},
    bgiconGray :{backgroundColor:Colors.iconGray},
    bgMilkyWhite :{backgroundColor:Colors.MilkyWhite},
    bgdarkmodeBlack:{backgroundColor:Colors.darkmodeBlack},
    bgtaskCardDblack:{backgroundColor:Colors.taskCardDblack},
    bgDarkmodebutton:{backgroundColor:Colors.Darkmodebutton},
    bgmodalColor:{backgroundColor:Colors.modalColor},
    bgoptionsColor:{backgroundColor:Colors.optionsColor},
    bgbuttondarkcolor:{backgroundColor:Colors.buttondarkcolor},
    bgsky:{backgroundColor:Colors.sky},
// - - - - - BORDER COLORS - - - - - //
    borderWhite: { borderColor: Colors.white },
    borderOrange: { borderColor: Colors.Orange },
    borderBlack: { borderColor: Colors.black },
    borderGreen: { borderColor: Colors.green },
    borderGray: { borderColor: Colors.gray },
    borderBlue: { borderColor: Colors.blue },
    borderLightBlue: { borderColor: Colors.lightBlue },
    borderLightWhite: { borderColor: Colors.lightWhite },
    borderLightblack:{borderColor:Colors.taskCardDblack},
    borderDarkmode:{borderColor:Colors.darkmodeBorderColor},
    borderWhitemode:{borderColor:Colors.borderGray},
    borderbuttondarkcolor:{borderColor:Colors.buttondarkcolor},
// - - - - - FLEX PROPERTIES - - - - - // 
    // - - -  Flex Align - - -  // 
    allCenter: { justifyContent: 'center', alignItems: 'center' },
    centerHorizontal: { alignItems: 'center' },
    centerVertical: { justifyContent: 'center' },
    selfCenter: { alignSelf: 'center' },
    selfStart: { alignSelf: 'flex-start' },
    selfEnd: { alignSelf: 'flex-end' },
    flexEnd: { alignItems: 'flex-end' },
    spaceBetween: { justifyContent: 'space-between', alignItems: 'center' },
    spaceBetweenVertical: { justifyContent: 'space-between', },
    spaceAroundVertical: { justifyContent: 'space-around' },
    spaceEvenly: { justifyContent: "space-evenly" },
    // - Text Align - //
    textCenter: { textAlign: 'center' },
    textAlignVertical: { textAlignVertical: 'center' },
    textRight: { textAlign: 'right' },
    textLeft: { textAlign: 'left' },
    // - - -  Flex Direction - - -  // 
    row: { flexDirection: 'row' },
    rowReverse: { flexDirection: 'row-reverse' },
    rowWrap: { flexDirection: 'row', flexWrap: 'wrap' },
// - - - - - OTHER CSS - - - - - // 
    overflowHide: { overflow: "hidden" },
    positionAbsolute: {position: 'absolute'},
    positionRelative: {position: 'relative'},
    // - - - FlatList - - - //
    flatlistContainer: [
        {flexDirection: 'row'},
        padding(0, 6, 10), borderWidth(0, 1,0,0,0), borderColor(Colors.blue), radius(0, 0, 10, 10)
    ],
    flatlistHeader: [
        {flexDirection: 'row', backgroundColor: Colors.blue },
        padding(0, 8, 10), radius(0,10, 0, 0, 10)    
    ]
})