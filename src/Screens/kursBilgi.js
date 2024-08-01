import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import KursComponent from '../Components/KursComponent'

export default function KursBilgi() {
    return (
        <ScrollView>
            <KursComponent
                title={"Angular Eğitimi"}
                imgs={require('../../assets/angular.jpg')}
                aciklama={"kapsamli angular eğitimi"}

            />
            <KursComponent title={"BootStrap 5 egitimi"} imgs={require('../../assets/bootstrap5.png')} aciklama={"Kapsamlı boostrap 5 egitimi"} />
            <KursComponent title={"C Proglama eğitimi"} imgs={require('../../assets/c.png')} aciklama={"Kapsamlı c programlama  egitimi"} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({})