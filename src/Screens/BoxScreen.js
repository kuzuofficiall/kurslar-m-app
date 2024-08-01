import { StyleSheet, Text, View, Button ,FlatList} from 'react-native'
import React, { useState } from 'react'

export default function BoxScreen() {
    const [renkler, setRenkler] = useState([]);

    const randomColor = () => {
        //rgb 0-256 arasında üç tane rengin birleştimidir bunlar rgb(red,green,blue) şeklinde
        //Math.Random() 0-1 arasında bir değer döndürür 
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)
        const rgb = `rgb(${red},${green},${blue})`
        return rgb;
    }


    function ab(isim="Fatih",soyisim="Tan"){
        console.log(isim+" "+soyisim)
    }
    ab("Abdullah","Kuzuj")
    ab()
    const Kutu = ({item,height}) => {
        return(
            <View 
            style={{
                height:height,
                width:"25%",
                // marginVertical:10,
                backgroundColor: item,
            }}
            ></View>
        ) 
    }
    console.log(renkler)
    return (
        <View>
            {/* 
            data 
            renderItem 
            */}
             <Button title='RenkSeçiçi'  onPress={()=>setRenkler([randomColor(),...renkler])}/>
            <FlatList 
            // horizontal
            numColumns={4}
            data={renkler}
            renderItem={({item})=> <Kutu height={150} item={item}/>}
            />

           
        </View>

    )
}

const styles = StyleSheet.create({})