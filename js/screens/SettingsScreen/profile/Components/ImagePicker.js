import { View, Text ,TouchableWithoutFeedback,Image} from 'react-native'
import React from 'react'

const ImagePicker = () => {
  return (
    <View>
      <TouchableWithoutFeedback style={[styles.black, fontSize(50), borderWidth(1), { width: widthValue(3.2), height: widthValue(3.2) }, radius(widthValue(1.75)), styles.allCenter]} onPress={handleImage} >
        <View style={[styles.positionRelative]}>
        {showProfilePic ? <Image source={{ uri: profilePic }} style={[{ width: widthValue(3.2), height: widthValue(3.2) }, radius(widthValue(1.75))]} /> :
                        <Image source={profile} style={[{ width: widthValue(3.2), height: widthValue(3.2) }, radius(widthValue(1.75))]} />}
                <Icon name={'pencil-box'} type={Icons.MaterialCommunityIcons} style={[fontSize(30), styles.Orange, styles.positionAbsolute, { bottom: 5, right: 8 }]} />
                </View>

                </TouchableWithoutFeedback>
    </View>
  )
}

export default ImagePicker