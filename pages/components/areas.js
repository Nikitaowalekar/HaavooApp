import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useState} from 'react/cjs/react.development';
import {useStoreActions, useStoreState} from 'easy-peasy';

const Areas = ({areasData}) => {
  const area = useStoreState(state => state.area);
  const [selectArea, setSelectArea] = useState(area);
  const setArea = useStoreActions(actions => actions.setArea);
  // console.log(area, 'area');

  useEffect(() => {
    setArea(selectArea);
  }, [selectArea]);

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Areas</Text>

      <ScrollView style={styles.scrollView}>
        {areasData?.map((areas, index) => {
          return (
            <Pressable
              onPress={() => {
                console.log(JSON.stringify(selectArea));
                if (selectArea?.includes(areas?.name)) {
                  let itemIndex = selectArea?.findIndex(
                    tm => tm === areas?.name,
                  );
                  selectArea?.splice(itemIndex, 1);
                } else {
                  selectArea?.push(areas?.name);
                }
              }}
              key={index}>
              <View style={styles.checkboxContainer}>
                <View style={styles.checkbox}>
                  <View
                    style={
                      selectArea?.includes(areas?.name)
                        ? styles.checkboxInside
                        : ''
                    }></View>
                </View>
                <Text style={styles.areaText}> {areas.name}</Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Areas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainText: {
    fontSize: 20,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    backgroundColor: 'white',
    borderRadius: 5,
    width: 20,
    height: 20,
    marginBottom: 15,
    marginTop: 10,
  },
  checkboxInside: {
    backgroundColor: 'yellow',
    width: 14,
    height: 14,
    margin: 3,
  },
  areaText: {
    paddingLeft: 10,
  },
});
