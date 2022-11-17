import {StyleSheet, Text, View, Pressable, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useState} from 'react/cjs/react.development';
import {useStoreActions, useStoreState} from 'easy-peasy';

const Areas = ({areasData}) => {
  const [selectArea, setSelectArea] = useState([]);
  const area = useStoreState(state => state.area);
  const setArea = useStoreActions(actions => actions.setArea);
  // console.log(area, 'area');

  useEffect(() => {
    alert(JSON.stringify(selectArea));
  }, [selectArea]);

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Areas</Text>

      <ScrollView style={styles.scrollView}>
        {areasData?.map((areas, index) => {
          return (
            <Pressable
              onPress={() => {
                // setSelectArea(oldArea => [...oldArea, areas]);
                // setArea(oldArea => [...oldArea], areas);
                // const newSelectCategory = [...selectArea];
                alert(JSON.stringify(selectArea));
                if (selectArea?.includes(areas?.name)) {
                  let itemIndex = selectArea?.findIndex(
                    tm => tm === areas?.name,
                  );
                  selectArea?.splice(itemIndex, 1);
                } else {
                  // if (areas?.child?.length > 0) {
                  //   areas?.child?.map(tempItem => {
                  //     selectArea?.push(tempItem?.name);
                  //   });
                  //   selectArea?.push(areas?.name);
                  //   alert(JSON.stringify(selectArea));
                  // } else {
                  selectArea?.push(areas?.name);
                }

                // if (
                //   areas?.child?.length > 0 &&
                //   areas?.child?.includes(areas?.name)
                // ) {
                //   areas?.child?.map(tempItem => {
                //     let itemIndex = selectArea?.findIndex(
                //       tm => tm === tempItem?.name,
                //     );
                //     selectArea?.splice(itemIndex, 1);
                //   });
                // }
                // setSelectArea(selectArea);
              }}
              key={index}>
              <View style={styles.checkboxContainer}>
                <View style={styles.checkbox}>
                  <View
                    style={
                      selectArea?.includes(areas.name)
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
