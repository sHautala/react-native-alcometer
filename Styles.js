import {StyleSheet, Dimensions} from 'react-native';
import Constants from 'expo-constants';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: screenWidth
    },
    title: {
      textAlign: "center",
      fontSize: 50,
      color: "dodgerblue"
    },
    header: {
      fontWeight: "bold",
      fontSize: 20
    },
    input: {
      width: screenWidth
    },
    picker: {
      width: screenWidth,
      height: 30
    },
    alcLevelLow: {
      textAlign: "center",
      fontSize: 50,
      color: "green"
    },
    alcLevelMedium: {
      textAlign: "center",
      fontSize: 50,
      color: "yellow"
    },
    alcLevelHigh: {
      textAlign: "center",
      fontSize: 50,
      color: "red"
    },
    radioButtonContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: 45
    },
    radioButton: {
      height: 20,
      width: 20,
      backgroundColor: "#F8F8F8",
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#E6E6E6",
      alignItems: "center",
      justifyContent: "center"
    },
    radioButtonIcon: {
      height: 14,
      width: 14,
      borderRadius: 7,
      backgroundColor: "#98CFB6"
    },
    radioButtonText: {
      fontSize: 16,
      marginLeft: 16,
    }
  });
  