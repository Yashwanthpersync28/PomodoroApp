import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { borderColor, borderWidth, fontSize, fontWeight, paddingPosition, position, radius, styles, widthValue } from '../../../styles/Styles';
import { Colors } from '../../../styles/Colors';
import Icon, { Icons } from '../../../components/Icons';

export const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [options,setoption]=useState('Weekly')
  const toggleOption = (option) => {
    setSelectedOption(selectedOption === option ? null : option);
    setoption(option)
  };

  const renderOption = (option) => (
    <TouchableOpacity key={option} onPress={() => toggleOption(option)}>
      <View style={[styles.row, borderColor(Colors.borderGray), borderWidth(0, 1), paddingPosition(5, 0, 5)]}>
        <Text style={[styles.black, fontSize(15), fontWeight('bold'), { width: widthValue(7) }]}>{option}</Text>
        <Icon name={'chevron-small-down'} type={Icons.Entypo} style={[styles.black, fontSize(20)]} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.column, borderColor(Colors.borderGray), borderWidth(1), paddingPosition(10, 10, 0, 10), radius(20), styles.bgsmokewhite]}>
      {renderOption(options)}
      {selectedOption === options &&
        <>
          {renderOption('Monthly')}
          {renderOption('BiWeekly')}
        </>
      }
    </View>
  );
};


// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { borderColor, borderWidth, fontSize, fontWeight, paddingPosition, position, radius, styles, widthValue } from '../../../styles/Styles';
// import { Colors } from '../../../styles/Colors';
// import Icon, { Icons } from '../../../components/Icons';

// export const DropDown = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [data,setData]=useState(['Weekly'])
//   const toggleOption = (option) => {
//     setSelectedOption(selectedOption === option ? null : option);
//   };

//   const renderOption = (option) => (
//     <TouchableOpacity key={option} onPress={() => toggleOption(option)}>
//       <View style={[styles.row, borderColor(Colors.borderGray), borderWidth(0, 1), paddingPosition(5, 0, 5)]}>
//         <Text style={[styles.black, fontSize(15), fontWeight('bold'), { width: widthValue(7) }]}>{option}</Text>
//         <Icon name={'chevron-small-down'} type={Icons.Entypo} style={[styles.black, fontSize(20)]} />
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={[styles.column, borderColor(Colors.borderGray), borderWidth(1), paddingPosition(10, 10, 0, 10), radius(20), styles.bgsmokewhite]}>
//       {['Weekly', 'Monthly', 'BiWeekly'].map((option) => (
//         <React.Fragment key={option}>
//           {renderOption(option)}
//         </React.Fragment>
//       ))}
//     </View>
//   );
// };

