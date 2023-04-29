import styles from "../assets/StyleSheet/Header";
import { Avatar } from "react-native-paper";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../assets/StyleSheet/Colors";
import { useNavigation } from "@react-navigation/native";

const Header = ({ navigation, Opened, setOpened }) => {
  return (
    <SafeAreaView edges={["top", "left", "right"]}>
      <View style={styles.container}>
        <View style={{ flex: 1 }} >
          <Text style={styles.title}  onPress={() => setOpened(!Opened)}>Flinder</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Icon name="bars" style={styles.burgerNav} size={30} color={colors.black} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
