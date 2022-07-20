import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    width: wp(100),
    height: hp(25),
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  footerContainer: {
    width: wp(100),
    height: hp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: hp(2),
  },
  titleContainer: {
    height: '100%',
    justifyContent: 'space-around',
  },
  productName: {
    fontSize: hp(3),
    fontFamily: 'GentiumBookPlus-Regular',
  },
  productPrice: {
    fontSize: hp(2),
  },
  line: {
    width: wp(90),
    height: 0.5,
    backgroundColor: '#000',
    marginTop: hp(3),
  },
  button: {
    backgroundColor: '#D98D00',
    paddingHorizontal: hp(2),
    paddingVertical: hp(0.8),
    shadowOffset: {width: 0, height: 6},
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: hp(1),
    elevation: 3,
    borderRadius: hp(5),
    marginTop: hp(0.8),
  },
  buyTitle: {
    color: '#fff',
  },
  //Create Modal
  createContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    width: wp(100),
    height: hp(100),
    position: 'absolute',
  },
  header: {
    width: wp(100),
    fontSize: hp(3),
    color: '#ff8800',
    paddingHorizontal: hp(5),
  },
  inputContainer: {
      justifyContent: 'center',
      alignItems: 'center',
  },
  input: {
      width: wp(70),
      height: hp(6),
      paddingHorizontal: hp(2.5),
      backgroundColor: '#fff',
      borderRadius: hp(1),
      borderWidth: 1,
      borderColor: '#c2cee5',
      marginVertical: hp(1.5)
  },
  createBtn: {
      backgroundColor: '#ff8800',
      paddingHorizontal: hp(6),
      paddingVertical: hp(1.5),
      borderRadius: hp(1)
  },
  textWhite: {
      color: '#fff'
  }
});

export default styles;
