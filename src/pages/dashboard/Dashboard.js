import React, {useState, useEffect, useContext} from 'react';
import {View, ToastAndroid, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


// Components
import {AuthContext} from '../../context/context';
import {appStorage} from '../../utils';
import UserHeader from '@components/dashboard/header/userHeader';
import Product from '@components/dashboard/product/product';
import CreateModal from '@components/alert/createModal';
import * as actionProducts from '../../store/action/products';

// Components
import ProductData from '../../data/product';
import {useLocal} from '../../hook';

// Styles & Icons
import styles from './Style';
import Plus from '@assets/icons/plus';

const Dashboard = ({navigation}) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();
  const [currency, setCurrency] = useState();
  const [showHide, setShowHide] = useState(true);
  
  const [show, setShow] = useState(false);
  const {getAuth, userInfo} = useContext(AuthContext);

  const local = useLocal();
  const dispatch = useDispatch();
  const products = useSelector(state => state.productsList.products);

  useEffect(() => {
    dispatch(actionProducts.addProducts(ProductData));
  }, []);

  const productHandler = value => {
    navigation.navigate('ProductDetails', {data: value});
  };

  const logoutHandler = () => {
    appStorage.removeItem('@user.token');
    getAuth(false);
    ToastAndroid.show(local.logoutAlert, ToastAndroid.SHORT);
  };

  const modalHandler = () => {
    setShow(!show);
    setShowHide(showHide);
  }

  const createHandler = () => {
    let data = {
      id: 1,
      quantity: 1,
      name: name,
      currency: currency,
      price: price,
      image: {uri:image},
    };
    setShow(!show)
    dispatch(actionProducts.addProducts(data));
  };

  const deleteHandler = value => {
    dispatch(actionProducts.deleteProduct(value.id));
  };

  return (
    <View style={styles.container}>
      <UserHeader
        data={userInfo}
        buttonTitle={local.logout}
        logoutAction={logoutHandler}
      />
      <Product
        data={products}
        productAction={productHandler}
        price={local.price}
        deleteAction={deleteHandler}
      />
      <TouchableOpacity onPress={modalHandler} style={styles.addBtn}>
        <Plus width={wp(5)} height={hp(5)} />
      </TouchableOpacity>

      {show && (
        <CreateModal
          check={showHide}
          name={name}
          onChangeName={value=> setName(value)}
          price={price}
          onChangePrice={value=> setPrice(value)}
          currency={currency}
          onChangeCurrency={value=> setCurrency(value)}
          image={image}
          onChangeImage={value=> setImage(value)}
          create={createHandler}
        />
      )}
    </View>
  );
};

export default Dashboard;
