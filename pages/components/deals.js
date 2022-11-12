import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import axios from 'react-native-axios';
import {useEffect, useState} from 'react/cjs/react.development';
import dealsData from './dealsData';
import isEmpty from './isempty';
import Loader from './loader';

const Deals = () => {
  const [details, setDetails] = useState([]);
  const [loader, setLoader] = useState(false);
  const fetchDeals = () => {
    setLoader(true);
    axios
      .get(
        'https://staging.admin.haavoo.com/api/deals?city=&area=&query=&page=1&type=&category=&sort=&pageSize=',
      )
      .then(function (response) {
        setDetails(response?.data?.data);
        setLoader(false);
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
        setLoader(false);
      });
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  return (
    <View>
      {/* Deals card details */}
      <Loader showLoader={loader} />
      {loader === false && (
        <View>
          {!isEmpty(details) ? (
            <FlatList
              style={{height: '85%'}}
              data={details}
              renderItem={dealsData}
              keyExtractor={item => item.id}
            />
          ) : (
            <View style={styles.noDeals}>
              <Text style={styles.dealsText}> Sorry, no deals found. </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default Deals;

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
