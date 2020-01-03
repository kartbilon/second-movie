import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView } from "react-native";

export default ({ navigation }) => (
  
  <ScrollView>
    <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
      <Text>
        go home
  </Text>
    </TouchableOpacity>
    {/* <Text style={styles.container}>
      {admins[0].youtube_title}
    </Text> */}

    <Image
      style={{ width: 110, height: 110, borderColor: 'red', borderWidth:5  }}
      source={{ uri: admins[0].youtube_thumbnail }}
    />
    <Text style={styles.container}>
      {admins[0].youtube_title}
    </Text>

    <Image
      style={{ width: 110, height: 110, borderColor: 'green', borderWidth:5 }}
      source={{ uri: admins[1].youtube_thumbnail }}
    />
    <Text style={styles.container}>
      {admins[1].youtube_title}
    </Text>

    <Image
      style={{ width: 110, height: 110, borderColor: 'pink', borderWidth:5 }}
      source={{ uri: admins[2].youtube_thumbnail }}
    />
    <Text style={styles.container}>
      {admins[2].youtube_title}
    </Text>

    <Image
      style={{ width: 110, height: 110, borderColor: 'yellow', borderWidth:5 }}
      source={{ uri: admins[3].youtube_thumbnail }}
    />
    <Text style={styles.container}>
      {admins[3].youtube_title}
    </Text>
    
    <Image
      style={{ width: 110, height: 110, borderColor: 'black', borderWidth:5 }}
      source={{ uri: admins[4].youtube_thumbnail }}
    />
    <Text style={styles.container}>
      {admins[4].youtube_title}
    </Text>

    <Image
      style={{ width: 110, height: 110, borderColor: 'black', borderWidth:5 }}
      source={{ uri: admins[5].youtube_thumbnail }}
    />
    <Text style={styles.container}>
      {admins[5].youtube_title}
    </Text>

    <Image
      style={{ width: 110, height: 110, borderColor: 'black', borderWidth:5 }}
      source={{ uri: admins[6].youtube_thumbnail }}
    />
    <Text style={styles.container}>
      {admins[6].youtube_title}
    </Text>
  </ScrollView>
);

let admins = require('./bk.json');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

