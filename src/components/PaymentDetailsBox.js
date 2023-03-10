import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";

export default function PaymentDetailsBox(props) {
  const paymentImages = {
    visaCard:require('../../assets/ScreenIcons/visa.png'),
    masterCard:require('../../assets/ScreenIcons/master.png'),
    mtnMomo:require('../../assets/ScreenIcons/mtn-momo.png'),
  }
  const validationImages = {
    Valid: require('../../assets/ScreenIcons/valid-icon.png'),
    Invalid: require('../../assets/ScreenIcons/invalid-icon.png')
  }
  
  return (
    <View style={styles.debitCardBox}>

      {/* visa/master card or momo image container */}
      <View style={styles.imageContainer}>
        <Image
          source={paymentImages[props.imageType]}
          style={{ width: 55, height: 30 }}
        />
      </View>

      {/* Payment type(master/visa/momo) with last digits and validation status conatainer */}
      <View>
        <Text style={styles.cardText}>
          {props.paymentType} ....{props.lastDigits}
        </Text>
        <Text>{props.primaryStatus}</Text>
        <View style={styles.validationContainer}>
          <Image
            source={validationImages[props.validationStatus]}
            style={{ width: 20, height: 20 }}
          />
          <Text style={{marginLeft: 5}}>{props.validationStatus}</Text>
        </View>
      </View>

      {/* three dots icon with options to remove, update or set payment method as primary */}
      <View style={styles.moreOptionsDotIcon}>
        <TouchableOpacity>
          <Image
            source={require("../../assets/ScreenIcons/payment-details-dots-icon.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

styles = {
  debitCardBox: {
    backgroundColor: "#D9D9D9",
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10
  },
  cardText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginRight: 10,
  },
  moreOptionsDotIcon: {
    marginLeft: 10,
  },
  validationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
};
