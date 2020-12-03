import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    marginTop: 60
  },


  listItem: {
    margin: 12,
    padding: 12,
    backgroundColor: "#00D65F",
    width: "80%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 15
  }

});

const itemTurma = (turma) => {
  const { informacoes } = turma;

  return (
    <View style={styles.listItem}>
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={{ fontWeight: "bold" }}>{informacoes}</Text>
      </View>
    </View>
  )
  
}

export default itemTurma;
