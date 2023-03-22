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
          <FontAwesome
            name={
              props.paymentType === "VISA"
                ? "cc-visa"
                : props.paymentType === "MASTERCARD"
                ? "cc-mastercard"
                : "bank"
            }
            size={40}
            color="#063B87"
          />
        )}
      </View>
      <View style={styles.typeAlign}>
              {/* Payment type(master/visa/momo) with last digits and validation status conatainer */}
        <View>
        <Text style={styles.cardText}>
          {props.paymentType} ....{props.lastDigits}
        </Text>
        <Text>{props.primaryStatus}</Text>
        <View style={styles.validationContainer}>
          <FontAwesome
            name={
              props.validationStatus === "Valid"
                ? "check-circle"
                : "times-circle"
            }
            size={20}
            color={props.validationStatus === "Valid" ? "green" : "#FF0000"}
          />
          {/* <Image
            source={validationImages[props.validationStatus]}
            style={{ width: 20, height: 20 }}
          /> */}
          <Text style={{ marginLeft: 5 }}>{props.validationStatus}</Text>
        </View>
      </View>

              <View style={styles.moreOptionsDotIcon}>
        <TouchableOpacity>
          <FontAwesome name="ellipsis-v" size={20} color="black" />
        </TouchableOpacity>
      </View>
      </View>


    </View>
  );
}

const styles = {
  debitCardBox: {
    backgroundColor: "#D9D9D9",
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "stretch",
    // alignItems: "center",
    // justifyContent: "space-between",
    margin: 10,
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "stretch",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "stretch",
    // alignItems: "center",
    // justifyContent: "space-between",
    margin: 10,
  },
  typeAlign: { /* provide alignment of text items to left */
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between", 
    marginLeft: 20,
    flex: 1,
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
