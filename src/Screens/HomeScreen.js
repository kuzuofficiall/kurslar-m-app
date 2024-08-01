// rnfs dediğimde react native  function kompanentini hazır olrak direk kurabiliyorum
import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <Button title='kursalrim' color='red' onPress={()=>navigation.navigate("kursbilgi")} />

      <Button title='counterScreen' color='red' onPress={()=>navigation.navigate("SayacSayfa")} />
      <Button title='RENKSEÇ' color='red' onPress={()=>navigation.navigate("KutuSayfasi")} />

    </View>
  )
}

const styles = StyleSheet.create({

  
})
 