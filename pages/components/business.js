import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import React from 'react';
import BusinessData from './businessData';
import axios from 'react-native-axios';
import {useEffect, useState} from 'react/cjs/react.development';
import isEmpty from './utils/isempty';
import Loader from './common/loader';
import {useStoreActions, useStoreState} from 'easy-peasy';
import NoDataFound from './common/nodatafound';

const Business = () => {
  const [details, setDetails] = useState([]);
  const [loader, setLoader] = useState(false);
  const city = useStoreState(state => state.city);
  const sort = useStoreState(state => state.sort);
  const selectQuery = useStoreState(state => state.selectQuery);
  const category = useStoreState(state => state.category);
  const businessType = useStoreState(state => state.businessType);
  const area = useStoreState(state => state.area);
  const setCity = useStoreActions(actions => actions.setCity);
  const fetchBusiness = () => {
    setLoader(true);
    axios
      .get(
        `https://admin.haavoo.com/api/business?city=${city.toLowerCase()}&area=${area}&search_query=${selectQuery.toLowerCase()}&page=1&type=${businessType}&category=${category}&sort=${sort}`,
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
    console.log(category, 'category');
  }, [city, sort, selectQuery, area, businessType, category]);

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
              onEndReachedThreshold={0.5}
            />
          ) : (
            <NoDataFound text={'Sorry, no business found.'} />
          )}
        </View>
      )}
    </View>
  );
};

export default Business;
