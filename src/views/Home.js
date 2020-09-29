import React from 'react';
import {View, Text, StyleSheet, FlatList, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import CityList from '../components/CityList';
import Colors from '../constants/Colors';

import cityData from '../data/cityList';

function Home({navigation}) {
  const renderItem = ({item}) => {
    return (
      <View style={style.cityListContainer}>
        <CityList
          city={item.name}
          func={() => {
            navigation.navigate('WeatherView', {
              city: item.name,
            });
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={Colors.main} />
      <FlatList
        style={style.flatList}
        data={cityData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: Colors.main,
  },

  cityListContainer: {
    marginBottom: 15,
  },

  flatList: {
    padding: 25,
  },
});

export default Home;
