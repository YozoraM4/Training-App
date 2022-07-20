import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


// Style
import styles from './style';

//Icon
import Delete from '../../../../assets/icons/delete';

const product = props => {
  // Flatlist Render
  const renderComponent = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.productContainer}
        activeOpacity={0.9}
        onPress={() => props.productAction(item)}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.productImage} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.productTitle}>{item.name}</Text>
          <Text style={styles.productPrice}>
            {props.price} {item.price} {item.currency}
          </Text>
        </View>
        <TouchableOpacity onPress={() => props.deleteAction(item)} style={styles.deleteBtn}>
          <Delete width={hp(2.5)} height={hp(2.5)} />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={{flexWrap: 'wrap'}}
      data={props.data}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderComponent}
    />
  );
};

export default product;
