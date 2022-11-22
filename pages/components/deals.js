import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import axios from 'react-native-axios';
import {useEffect, useState} from 'react/cjs/react.development';
import dealsData from './dealsData';
import isEmpty from './utils/isempty';
import Loader from './common/loader';
import {useStoreActions, useStoreState} from 'easy-peasy';
import NoDataFound from './common/nodatafound';

const Deals = () => {
  const [details, setDetails] = useState([]);
  const [loader, setLoader] = useState(false);
  const city = useStoreState(state => state.city);
  const setCity = useStoreActions(actions => actions.setCity);
  const area = useStoreState(state => state.area);
  const fetchDeals = () => {
    setLoader(true);
    axios
      .get(
        `https://staging.admin.haavoo.com/api/deals?city=${city.toLowerCase()}&area=${area}&query=&page=1&type=&category=&sort=&pageSize=`,
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
  }, [city, area]);

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
            <NoDataFound text={'Sorry, no deals found.'} />
          )}
        </View>
      )}
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({});
