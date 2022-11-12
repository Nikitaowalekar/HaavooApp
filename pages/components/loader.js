import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Loader = ({showLoader}) => {
  return (
    <View style={styles.logoContainer}>
      {showLoader && (
        <View>
          <Image
            style={styles.image}
            source={require('../../styles/icons/logogif.gif')}
          />
        </View>
      )}
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  logoContainer: {
    width: '100%',
    position: 'absolute',
    zIndex: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
