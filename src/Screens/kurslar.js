import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
export default function CoursesScren() {
    const courses = [
        { name: 'css', id: 1 },
        { name: 'c#', id: 2 },
        { name: 'javaScript', id: 3 },
        { name: 'javaa', id: 4 },
        { name: 'c++', id: 5 }
    ];
    return (
      
        <FlatList
            data={courses}
            horizontal
            showsHorizontalScrollIndicator={true}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
                return <Text style={styles.content}>{item.name}</Text>;
            }
            }
        />
    
    )
}

const styles = StyleSheet.create({   content: {
        fontSize: 29,
        backgroundColor:'blue',
        marginVertical:13,
        padding: 18,
    } })
