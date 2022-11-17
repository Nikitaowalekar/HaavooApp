import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CategoryData from './categoryData';
import {useState} from 'react/cjs/react.development';
import {useStoreActions} from 'easy-peasy';

const Categories = () => {
  const [selectCategory, setSelectCategory] = useState([]);
  const [subpartShow, setSubpartShow] = useState(null);
  const [selectSubpart, setSelectSubpart] = useState([]);
  const setCategory = useStoreActions(actions => actions.setCategory);
  const categories = [
    {
      category: 'Consulting',
      subpart: [
        'Accountants',
        'Architects',
        'Astrologists',
        'Civil',
        'Contractors',
      ],
    },
    {
      category: 'Entertainment',
      subpart: ['Event Organaizers'],
    },
    {
      category: 'Hotel/Resorts',
      subpart: ['Hotel', 'Lodge'],
    },
    {
      category: 'Electricians',
      subpart: ['Electrician'],
    },
    {
      category: 'Plumbers',
      subpart: ['Plumber'],
    },
    {
      category: 'Tours & Travels',
      subpart: ['Tours/Travels'],
    },
    {
      category: 'Veterinary',
      subpart: [
        'Cattle',
        'Pet Shops',
        'Pig',
        'Poultry Farm',
        'Veterinary Clinics',
      ],
    },
    {
      category: 'Agriculture',
      subpart: ['Nursery', 'Plants & Seeds'],
    },
    {
      category: 'Fashion & Apparels',
      subpart: ['Fancy', 'Jewellery', 'Perfumes', 'Watches & Clocks'],
    },
    {
      category: 'PhotoGraphy',
      subpart: ['Photographers'],
    },
    {
      category: 'Supermarket',
      subpart: ['Supermarkets'],
    },
    {
      category: 'Shops',
      subpart: [
        'DTP/Printing',
        'Electrical',
        'Financial Services',
        'Furniture',
        'Graphics & Flex Printing',
        'Grocery',
        'Hardware',
        'Home Appliances',
        'Logistics & Courier Services',
        'Opticals',
        'Ornamental Fish & Aquarium Accessories',
        'Pest Control',
        'Vegetable',
        'Water Suppliers',
      ],
    },
    {
      category: 'Medical',
      subpart: [
        'Doctors',
        'Eye Care',
        'Hospitals & Clinics',
        'Laboratories / Medical Accessories',
      ],
    },
    {
      category: 'Fish & Meat',
      subpart: ['Chicken', 'Fish', 'Other meat items'],
    },
    {
      category: 'Domestic Services',
      subpart: [
        'Carpenter',
        'Child Care',
        'Delivery Jobs',
        'Dry Cleaning',
        'Ironing',
        'Laundry',
        'Maid',
        'Others',
        'Painter',
      ],
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Category</Text>
      {/* <View style={styles.main}> */}
      {/* <FlatList
          style={{flex: 1}}
          data={categories}
          renderItem={CategoryData}
          keyExtractor={item => item.id}
        /> */}
      <ScrollView style={styles.scrollView}>
        {categories?.map((item, index) => {
          return (
            <Pressable
              onPress={() => {
                setSelectCategory(item?.category);
                setCategory(item?.category);
              }}
              key={index}>
              <View style={styles.checkboxMainContainer}>
                <View style={styles.checkboxContainer}>
                  <View style={styles.checkbox}>
                    <View
                      style={
                        selectCategory === item?.category
                          ? styles.checkboxInside
                          : ''
                      }></View>
                  </View>
                  <Text style={styles.areaText}> {item?.category}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    if (subpartShow === index) {
                      setSubpartShow(null);
                    } else {
                      setSubpartShow(index);
                    }
                  }}>
                  <Image
                    style={styles.downArrow}
                    source={require('../../styles/icons/downArrow.png')}
                  />
                </TouchableOpacity>
              </View>
              {subpartShow === index && (
                <View style={styles.subpartMargin}>
                  {item?.subpart?.map((item, index) => {
                    return (
                      <View
                        key={index}
                        style={styles.checkboxSubpartContainer}
                        onPress={() => setSelectSubpart(index)}>
                        <View style={styles.checkbox}>
                          <View style={styles.checkboxInside}></View>
                        </View>
                        <Text style={styles.areaText}> {item}</Text>
                      </View>
                    );
                  })}
                </View>
              )}
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {flex: 1},
  mainText: {
    fontSize: 20,
    fontWeight: '600',
    padding: 15,
    backgroundColor: '#440000',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxSubpartContainer: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
  },
  checkboxMainContainer: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
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
  subpartMargin: {
    margin: 10,
    marginTop: 0,
  },
  main: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginTop: 10,
  },
  downArrow: {
    width: 20,
    height: 20,
  },
});
