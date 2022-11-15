import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import CategoryData from './categoryData';

const Categories = () => {
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
      <View>
        <FlatList
          style={{height: '500px'}}
          data={categories}
          renderItem={CategoryData}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {},
  mainText: {
    fontSize: 20,
    fontWeight: '600',
    padding: 15,
    backgroundColor: 'gray',
  },
  checkboxContainer: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
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
  subpartMargin: {
    margin: 10,
    marginTop: 0,
  },
});
