import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome5';

function CityList(props) {
  return (
    <TouchableOpacity style={style.container} onPress={props.func}>
      <View style={style.cityName}>
        <Text style={style.textCityName}>{props.city}</Text>
      </View>
      <View style={style.btnContainer}>
        <Icon style={style.btnText} name={'location-arrow'} />
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: Colors.mainLight,
    height: 75,
    flexDirection: 'row',
    borderRadius: 5,
  },
  cityName: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 15,
  },

  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textCityName: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
    textTransform: 'capitalize',
  },

  btnText: {
    fontSize: 25,
    color: '#fff',
  },
});

export default CityList;
