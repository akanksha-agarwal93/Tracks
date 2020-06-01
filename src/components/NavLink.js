import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Spacer from "../components/Spacer";

const NavLink = ({text, routeName}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routeName)}
    >
      <Spacer>
        <Text style={styles.link}>
        {text}
        </Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    link: {
        color: "blue",
      },
});

export default NavLink;
