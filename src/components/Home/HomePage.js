import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  TouchableHighlight,
  Linking,
  StatusBar,
  Button,
  Image,
  ScrollView
} from "react-native";

class HomePage extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
        <ScrollView
          horizontal
          scrollEventThrottle={10}
          pagingEnabled
          style={{ marginBottom: 10 }}
        >
          <Image
            source={{
              uri:
                "https://madlenashop.ru/wp-content/uploads/2019/03/Kick-Off-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-2.png"
            }}
            style={styles.sliderImage}
          />
          <Image
            source={{
              uri:
                "https://madlenashop.ru/wp-content/uploads/2019/01/A-Night-on-the-Red-Carpet-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.png"
            }}
            style={styles.sliderImage}
          />
          <Image
            source={{
              uri:
                "https://madlenashop.ru/wp-content/uploads/2019/01/Backstage-Drifters-%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F.png"
            }}
            style={styles.sliderImage}
          />
        </ScrollView>
        <Text
          style={styles.transparentButton}
          onPress={() => navigate("Products")}
        >
          Каталог{" "}
        </Text>
        <Text
          style={styles.transparentButton}
          onPress={() => navigate("CartPage")}
        >
          Корзина{" "}
        </Text>
        <Text style={styles.communication}>Связаться с нами</Text>
        <TouchableHighlight
          onPress={() => Linking.openURL("http://whatsap.me/madlenashop")}
        >
          <View>
            <Image
              source={{ uri: "http://www.picshare.ru/view/9982249/" }}
              style={styles.sliderImage}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    padding: 10
  },
  sliderImage: {
    height: 188,
    width: 360
  },
  transparentButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4C3E54",
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: "#4C3E54",
    borderWidth: 1,
    textAlign: "center"
  },
  communication: {
    fontSize: 20,
    textAlign: "center",
    borderRadius: 2,
    borderColor: "#4C3E54",
    borderWidth: 1,
    padding: 10,
    margin: 5
  }
});

export default HomePage;
