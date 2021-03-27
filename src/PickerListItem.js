import React from 'react';
import { View, Text } from 'react-native';

export default function PickerListItem({
  label,
  style,
  itemColor,
  allItemsColor,
  fontSize,
  selected,
  fontFamily = 'SFUIDisplay-Bold',
}) {
  // console.log("sel", selected)
  return (
    <View style={style}>
      <Text
        style={{
          fontSize: selected ? fontSize : fontSize - 17,
          fontWeight: selected ? 'bold' : '100',
          color: selected ? 'green' : itemColor ? itemColor : allItemsColor,

          fontFamily: selected ? 'SFUIDisplay-Bold' : 'SFUIDisplay-Regular',
        }}>
        {label}
      </Text>
    </View>
  );
}
