import { StyleSheet, Text, View,Button} from 'react-native'
import React ,{useState} from 'react'


export default function CounterScreen() {
  const [ counter,setCounter] = useState(0) // durum tutmak için kulanırız başlangıç değeri veririm bi durumu tutan bide durumu değiştiren olur herşeyi tutar 
 
//  RenkDegistir()
function functionIsmi(){
console.log("funciton 1 çalıştı")
}
const functionIsmi2 = function(){
console.log("function iki çalıştı")
functionIsmi()
}

const functionIsmi3 = () => {
console.log("funtion üç çalıştı")
}
  return (
    <View style={styles.artirButon}>
        <View style={styles.buttonView}> 
        <Button title='Arttir' onPress={()=>setCounter(counter +1)} />
        <Button title='Azalt' onPress={()=>setCounter(counter -1)} />
        <Button  title='renkDeğiştiren' onPress={()=> functionIsmi3() } />
        </View>
      <Text style={styles.textDesign}>sayi:{counter} </Text>
      
    </View>
 

  )

}

const styles = StyleSheet.create({
    artirButon:{
     backgroundColor: 'White',
     flex:1,
     alignItems:'center',
     justifyContent:"space-evenly",
     backgroundColor:"red",
    },
    buttonView: {
        backgroundColor: "blue",
        width: "100%",
    },
    textDesign:{
        fontSize:30,
        
    }
})