import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { fontSize, margin, padding, radius, styles, textColor } from "../../styles/Styles";

export const AlertModalComponent = ({actionTitle, isVisible, title, context, submit}) => {

    const [ visible, setVisible ] = useState(true)
    useEffect(()=> {
        
    },[])

    const Button = () => {
        return(
            <View>
                <Text>Rizwan</Text>
            </View>
        )
    }

    const close = () => {
        setVisible(false)
    }

    return(
        <Modal
            isVisible={visible}
        >
            <View style={[{marginTop: 20,  marginBottom: "auto", marginTop: "auto"}, styles.bgWhite, radius(10), styles.overflowHide ]}>
                    <View style={[ styles.bgBlue, padding(12), styles.row, styles.spaceBetween]}>
                        <Text style={[fontSize(20), styles.white ]}>{title}</Text>
                        <TouchableOpacity onPress={close}>
                            <Text>X</Text>
                            {/* <AIcon name={"closecircleo"} size={26} color={Colors.white}/> */}
                        </TouchableOpacity>
                    </View>
                    <View style={[margin(0,12), styles.allCenter]}>
                        <Text style={[ fontSize(15), styles.black]}>{context}</Text>
                    </View>
                    <View style={[styles.row, styles.spaceEvenly, {marginBottom: 20} ]}>
                        {actionTitle &&
                            <TouchableOpacity onPress={close} style={[styles.bgBlue, padding(20, 10), radius(8)]}>
                                <Text style={[styles.white, fontSize(15) ]}>Cancel</Text>
                            </TouchableOpacity> 
                        }
                        <TouchableOpacity onPress={() => actionTitle ? submit() : close()} style={[styles.bgBlue, padding(20,10), radius(8)]}>
                            <Text style={[styles.white , fontSize(16)]}>{actionTitle ? actionTitle : "Okay"}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
           
        </Modal>
    )
}