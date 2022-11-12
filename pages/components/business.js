import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import BusinessData from './businessData';
import axios from 'react-native-axios';
import {useEffect, useState} from 'react/cjs/react.development';
import isEmpty from './utils/isempty';
import Loader from './common/loader';
import {useStoreActions, useStoreState} from 'easy-peasy';

const Business = () => {
  const [details, setDetails] = useState([]);
  const [loader, setLoader] = useState(false);
  const city = useStoreState(state => state.city);
  const sort = useStoreState(state => state.sort);
  const setCity = useStoreActions(actions => actions.setCity);
  const fetchBusiness = () => {
    setLoader(true);
    axios
      .get(
        `https://admin.haavoo.com/api/business?city=${city}&area=${city}&search_query=&page=1&type=&category=&sort=${sort}`,
      )
      .then(function (response) {
        setDetails(response?.data?.data?.data);
        setLoader(false);
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
        setLoader(false);
      });
  };

  useEffect(() => {
    fetchBusiness();
  }, [city, sort]);

  return (
    <View>
      <Loader showLoader={loader} />
      {loader === false && (
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
      )}
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
