import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  
  background: {
    marginTop: hp(10),
    width: hp(18),
    height: hp(18),
    borderRadius: hp(20),
    position: 'absolute',
  },
  
  logoutContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: 'green',
    paddingHorizontal: hp(1),
    marginTop: hp(10),
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtn: {
    backgroundColor: '#fed837',
    paddingVertical: hp(1),
    paddingHorizontal: hp(2),
    borderRadius: hp(5),
    position: 'absolute',
    bottom: hp(3),
    right: hp(3),
  }
});

export default styles;
