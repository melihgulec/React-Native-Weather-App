import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Axios from 'axios';

import WeatherDetail from '../components/WeatherDetail';
import Colors from '../constants/Colors';
import APIProps from '../constants/APIProps';

function App({route}) {
  const initialState = {
    main: {
      temp:0,
      humidity:0,
      pressure: 0
    },
    weather: [{
      main: "Main",
      description:"Description"
    }],
    sys: {
      country: "Country"
    },
    clouds: {
      all: 0
    },
    wind: {
      speed: 0,
      deg: 0
    },
    visibility: 0,
    name: "City"
  };

  const [result, setResult] = useState(initialState);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await Axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${route.params.city}&units=${APIProps.units}&lang=${APIProps.lang}&${your-api-key-is-here}`,
    )
      .then((res) => {
        setResult(res.data);
      })
      .catch((err) => alert(err));
  };

  return (
    <View style={style.container}>
      <View style={style.weatherView}>
        <Icon
          name={'cloud'}
          size={100}
          color={'white'}
          style={style.iconStyle}
        />
        <Text style={style.degreeFont}>
          {' '}
          {(result.main.temp).toFixed(0)}°
        </Text>
        <Text style={[style.weatherInfoFont, style.weatherDescription]}>
          {result.weather[0].description}
        </Text>
        <Text style={style.weatherInfoFont}>
          {result.name}, {result.sys.country}
        </Text>
      </View>
      <View style={style.weatherContent}>
        <View style={style.weatherDetailContainer}>
          <WeatherDetail
            title={'Humidity'}
            data={result.main.humidity + '%'}
            iconType={'tint'}
            iconColor={'white'}
          />
          <WeatherDetail
            title={'Clouds'}
            data={result.clouds.all + '%'}
            iconType={'cloud'}
            iconColor={'white'}
          />
          <WeatherDetail
            title={'Visibility'}
            data={result.visibility * 0.001 + ' km'}
            iconType={'eye'}
            iconColor={'white'}
          />
        </View>
        <View style={style.weatherDetailContainer}>
          <WeatherDetail
            title={'Wind'}
            data={result.wind.speed + ' m/s'}
            iconType={'wind'}
            iconColor={'white'}
          />
          <WeatherDetail
            title={'Wind Direction'}
            data={result.wind.deg + ' degree'}
            iconType={'compass'}
            iconColor={'white'}
          />
          <WeatherDetail
            title={'Pressure'}
            data={(result.main.pressure * 0.001).toFixed(3) + ' hPa'}
            iconType={'tachometer-alt'}
            iconColor={'white'}
          />
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main,
  },

  weatherView: {
    backgroundColor: Colors.main,
    flexDirection: 'column',
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.palePurple,
  },

  iconStyle: {
    fontSize: 55,
    color: 'white',
  },

  degreeFont: {
    fontSize: 75,
    textAlign: 'center',
    paddingVertical: 15,
    fontWeight: 'bold',
    color: 'white',
  },

  weatherInfoFont: {
    fontSize: 18,
    color: 'white',
  },

  weatherDescription: {
    textTransform: 'capitalize',
  },

  weatherContent: {
    padding: 15,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  weatherDetailContainer: {
    justifyContent: 'space-evenly',
    backgroundColor: Colors.mainLight,
    flexDirection: 'row',
    borderRadius: 15,
  },
});

export default App;