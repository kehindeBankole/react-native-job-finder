import { Dimensions } from "react-native";

const colors: { [key: string]: string } = {
  primaryBlue: "#1C58F2",
  white: "#FFFFFF",
  bg:"#F5F7FC",
  black:"#000000",
  textColor:"#181A1F",
  badgeBg:"#F5F7FC"
};
const { height, width } = Dimensions.get("window");
export { colors , height , width};
