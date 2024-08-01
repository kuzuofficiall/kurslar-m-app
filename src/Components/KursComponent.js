import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function KursComponent({ title, imgs, aciklama }) {
  return (
    <View>
      <Image style={styles.img} source={imgs} />

      <View
        style={{ justifyContent: "center", alignItems: "center" }}
      ><Text style={styles.tesxt}>{title} </Text>
        <Text style={styles.metin}>{aciklama}</Text>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  tesxt: {
    fontSize: 40
  },
  img: {
    width: '100%'
  },
  metin: {
    fontSize: 20
  }
})