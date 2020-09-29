import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';

import {View, Text, StyleSheet} from 'react-native';

function WeatherDetail(props){
    return(
        <View style={style.container}>
            <Icon 
            name={props.iconType}
            size={props.size}
            color={props.color}
            style={style.iconStyle}
          />
          <View style={style.innerContainer}>
              <Text style={style.textTitle}>{props.title}</Text>
              <Text style={style.textData}>{props.data}</Text>
          </View>
        </View>
    );
}

WeatherDetail.defaultProps = {
    size: 50,
    color: 'white',
}

const style = StyleSheet.create({
    container:{
        padding:35,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },

    innerContainer:{
        flexDirection:'column',
        paddingHorizontal:10,
        justifyContent:'space-between',
    },

    textTitle:{
        paddingTop:10,
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center',
        color:'#fff'
    },

    textData:{
        fontSize:16,
        textAlign:'center',
        color:'#eee'
    }
});

export default WeatherDetail;