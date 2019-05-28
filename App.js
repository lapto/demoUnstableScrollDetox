/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

type Props = {};

class LongPressScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>I should not be here</Text>
      </View>
    );
  }
}

const LongPressCard = props => {
  const { width, height, keyValue } = props;

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      testID={keyValue}
      onLongPress={() => props.navigation.navigate("Details")}
    >
      <View
        style={{
          backgroundColor: "skyblue",
          flex: 1,
          marginVertical: 10,
          marginHorizontal: 5,
          height: height,
          width: width
        }}
      >
        <Text>{keyValue}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

class HomeScreen extends React.Component {
  renderHorizontalScrollWithChildren = () => {
    const content = [];

    for (i = 0; i < 10; i++) {
      const keyValue = "hori_" + i;

      content.push(
        <LongPressCard
          key={keyValue}
          width={100}
          height={100}
          keyValue={keyValue}
          navigation={this.props.navigation}
        />
      );
    }

    return (
      <ScrollView testID="horiScrollView" horizontal={true}>
        {content}
      </ScrollView>
    );
  };

  renderVerticalScrollWithChildren = () => {
    const content = [];

    for (i = 0; i < 20; i++) {
      const keyValue = "verti_" + i;

      content.push(
        <LongPressCard
          key={keyValue}
          width="100%"
          height={150}
          keyValue={keyValue}
          navigation={this.props.navigation}
        />
      );
    }

    return (
      <ScrollView testID="vertiScrollView" style={{ marginTop: 20 }}>
        {content}
      </ScrollView>
    );
  };

  render() {
    return (
      <View style={styles.container} testID="welcome">
        {this.renderHorizontalScrollWithChildren()}
        {this.renderVerticalScrollWithChildren()}
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: LongPressScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
