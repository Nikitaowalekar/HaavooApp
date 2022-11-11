import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import BusinessData from './businessData';
import axios from 'react-native-axios';
import {useEffect, useState} from 'react/cjs/react.development';
import isEmpty from './isempty';

const Business = () => {
  const [details, setDetails] = useState([]);
  const fetchBusiness = () => {
    axios
      .get(
        'https://admin.haavoo.com/api/business?city=&area=&search_query=&page=1&type=&category=&sort=',
      )
      .then(function (response) {
        setDetails(response?.data?.data?.data);
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };

  useEffect(() => {
    fetchBusiness();
  }, []);

  return (
    <View>
      <View>
        {!isEmpty(details) ? (
          <FlatList
            style={{height: '85%'}}
            data={details}
            renderItem={BusinessData}
            keyExtractor={item => item.id}
          />
        ) : (
          <View style={styles.noDeals}>
            <Text style={styles.dealsText}> Sorry, no business found. </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default Business;

const styles = StyleSheet.create({
  noDeals: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dealsText: {
    fontSize: 14,
    color: '#fff',
  },
});
