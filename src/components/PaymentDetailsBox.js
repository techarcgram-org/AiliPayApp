import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";
import { FontAwesome } from "@expo/vector-icons";

export default function PaymentDetailsBox(props) {
  const paymentImages = {
    // visaCard: require("../../assets/ScreenIcons/visa.png"),
    // masterCard: require("../../assets/ScreenIcons/master.png"),
    mtnMomo: require("../../assets/ScreenIcons/mtn-momo.png"),
    // bankAccount: require("../../assets/ScreenIcons/bank.png"),
  };

  return (
    <View style={styles.debitCardBox}>
      {/* visa/master card or momo image container */}
      <View style={styles.imageContainer}>
        {props.paymentType === "MTN MoMo" ? (
          <Image
            source={require("../../assets/ScreenIcons/mtn-momo.png")}
            style={{ width: 40, height: 40 }}
          />
        ) : (
          <FontAwesome name={props.imageName} size={40} color="#063B87" />
        )}
      </View>

      {/* Payment type(master/visa/momo) with last digits and validation status conatainer */}
      <View>
        <Text style={styles.cardText}>
          {props.paymentType} ....{props.lastDigits}
        </Text>
        <Text>{props.primaryStatus}</Text>
        <View style={styles.validationContainer}>
          <FontAwesome
            name={props.validationImage}
            size={20}
            color={props.validationStatus === "Valid" ? "#063B87" : "#FF0000"}
          />
          {/* <Image
            source={validationImages[props.validationStatus]}
            style={{ width: 20, height: 20 }}
          /> */}
          <Text style={{ marginLeft: 5 }}>{props.validationStatus}</Text>
        </View>
      </View>

      {/* three dots icon with options to remove, update or set payment method as primary */}
      <View style={styles.moreOptionsDotIcon}>
        <TouchableOpacity>
          <FontAwesome name="ellipsis-v" size={20} color="#063B87" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  debitCardBox: {
    backgroundColor: "#D9D9D9",
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  cardText: {
    fontSize: 15,
    fontWeight: "bold",
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
