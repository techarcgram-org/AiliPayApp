import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Actions } from "react-native-router-flux";
import Logo from "../../components/Logo";
import CustomButton from "../../components/CustomButton";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import IconMaterial from "react-native-vector-icons/FontAwesome";
import IconFoundation from "react-native-vector-icons/Foundation";
import IconCommunity from "react-native-vector-icons/MaterialCommunityIcons";

export default function MainActivityScreen({ navigation }) {
  openDrawer = () => {
    return () => {
      Actions.refresh({ key: "drawer", open: true });
    };
  };
  return (
    <View style={styles.container}>
      <Header text="AiliPay Balance" />
      <ScrollView>
        <View style={styles.sumary}>
          <Text style={{ fontSize: 35, fontWeight: 700 }}>XAF 100,000</Text>
          <View style={styles.updateSection}>
            <IconMaterial name="refresh" size={10} color="black" />
            <Text style={{ fontWeight: "bold", fontSize: 12, margin: 5 }}>
              last updated 15 Feb 2023
            </Text>
            <IconFoundation name="info" sie={10} color="black" />
          </View>
          <Text
            style={{
              fontSize: 13,
              color: "#3F5F90",
              fontWeight: 700,
              marginTop: 20,
            }}
            onPress={() => navigation.navigate("BalanceSummary")}
          >
            VIEW BALANCE SUMMARY
            <IconCommunity name="greater-than" size={10} color="#3F5F90" />
          </Text>
        </View>
        <View style={styles.transferSection}>
          <Logo color="#063B87" style={{ alignSelf: "center" }} />
          <Text style={{ color: "black", fontSize: 16, textAlign: "center" }}>
            Choose an amount
          </Text>
          <View style={styles.transacButtons}>
            <View style={styles.row}>
              <CustomButton
                backgroundColor="#979EBA"
                color="black"
                title="  XAF 5000"
                style={{ marginRight: 2, flex: 1 }}
                textStyle={{ fontWeight: 700, fontSize: 18 }}
              />
              <CustomButton
                backgroundColor="#979EBA"
                color="black"
                title="XAF 10000"
                style={{ marginLeft: 2, flex: 1 }}
                textStyle={{ fontWeight: 700, fontSize: 18 }}
              />
            </View>
            <View style={styles.row}>
              <CustomButton
                backgroundColor="#979EBA"
                color="black"
                title="XAF 10000"
                style={{ marginRight: 2, flex: 1 }}
                textStyle={{ fontWeight: 700, fontSize: 18 }}
              />
              <CustomButton
                backgroundColor="#979EBA"
                color="black"
                title="XAF 50000"
                style={{ marginLeft: 2, flex: 1 }}
                textStyle={{ fontWeight: 700, fontSize: 18 }}
              />
            </View>
            <View style={styles.row}>
              <CustomButton
                backgroundColor="#979EBA"
                color="black"
                title="XAF 100000"
                style={{ marginRight: 2, flex: 1 }}
                textStyle={{ fontWeight: 700, fontSize: 18 }}
              />
              <CustomButton
                backgroundColor="#979EBA"
                color="black"
                title="Others"
                style={{ marginLeft: 2, flex: 1 }}
                textStyle={{ fontWeight: 700, fontSize: 18 }}
              />
            </View>
            <CustomButton
              backgroundColor="#979EBA"
              color="black"
              title="Entire Balance"
              textStyle={{ fontWeight: 700, fontSize: 18 }}
            />
            <CustomButton
              backgroundColor="#063B87"
              color="white"
              title="Start Transfer"
              textStyle={{ fontWeight: 700, fontSize: 18 }}
              onPress={() => navigation.navigate("TransferScreen")}
            />
            <CustomButton
              s
              backgroundColor="#063B87"
              color="white"
              title="Save"
              textStyle={{ fontWeight: 700, fontSize: 18 }}
              onPress={() => navigation.navigate("SavingsScreen")}
            />
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    color: "white",
    padding: 40,
    flexDirection: "column",
  },
  header: {},
  sumary: {
    alignItems: "center",
    marginTop: 40,
  },
  updateSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  transferSection: {
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: -5,
  },
  transacButtons: {
    marginTop: 20,
  },
  footer: {},
});
