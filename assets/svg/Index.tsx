import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Circle, Rect, Path } from "react-native-svg";
export function Bell() {
  return (
    <Svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      //  xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 18.375V12.5417C21 8.96 19.0983 5.96167 15.75 5.16833V4.375C15.75 3.40667 14.9683 2.625 14 2.625C13.0316 2.625 12.25 3.40667 12.25 4.375V5.16833C8.91329 5.96167 6.99996 8.94833 6.99996 12.5417V18.375L4.66663 20.7083V21.875H23.3333V20.7083L21 18.375ZM14 25.375C15.2833 25.375 16.3333 24.325 16.3333 23.0417H11.6666C11.6666 24.325 12.7166 25.375 14 25.375ZM9.33329 19.5417H18.6666V12.5417C18.6666 9.64833 16.905 7.29167 14 7.29167C11.095 7.29167 9.33329 9.64833 9.33329 12.5417V19.5417Z"
        fill="#181A1F"
      />
    </Svg>
  );
}

export function SearchIcon() {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      // xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.965 14.255H15.755L20.745 19.255L19.255 20.745L14.255 15.755V14.965L13.985 14.685C12.845 15.665 11.365 16.255 9.755 16.255C6.165 16.255 3.255 13.345 3.255 9.755C3.255 6.165 6.165 3.255 9.755 3.255C13.345 3.255 16.255 6.165 16.255 9.755C16.255 11.365 15.665 12.845 14.685 13.985L14.965 14.255ZM5.255 9.755C5.255 12.245 7.26501 14.255 9.755 14.255C12.245 14.255 14.255 12.245 14.255 9.755C14.255 7.26501 12.245 5.255 9.755 5.255C7.26501 5.255 5.255 7.26501 5.255 9.755Z"
        fill="white"
      />
    </Svg>
  );
}

export function FilterIcon() {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      // xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 6V8H21V6H3ZM10 18H14V16H10V18ZM18 13H6V11H18V13Z"
        fill="white"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({});
