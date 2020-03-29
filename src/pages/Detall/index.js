import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, ScrollView, Image, Text, TouchableOpacity, Linking, SafeAreaView } from 'react-native';
import * as MailComposer from 'expo-mail-composer';
import logoImg from '../../assets/logoTeste.png'
import styles from './styles';

export default function Detall() {
  const route = useRoute();

  const incident = route.params.incident

  const message = `Olá ${incident.name} estou entrando em contato pois gostaria de ajuda no caso ${incident.title} com o valor de ${
    Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(incident.value)}
  `;

  const navigation = useNavigation();


  function navigationToDetail() {
    navigation.goBack('Incidents');
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Heroi do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message,
    })
  }
  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigationToDetail}>
          <Feather name="arrow-left" size={28} color='#e02041' />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.incidents}>
          <Text style={[styles.incidentsProperty, { marginTop: 0 }]}>ONG:</Text>
          <Text style={styles.incidentsValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

          <Text style={styles.incidentsProperty}>CASO:</Text>
          <Text style={styles.incidentsValue}>{incident.title}</Text>
          <Text style={styles.incidentsProperty}>DESCRIÇÃO:</Text>
          <Text style={styles.incidentsValue}>{incident.description}</Text>


          <Text style={styles.incidentsProperty}>VALOR:</Text>
          <Text
            style={styles.incidentsValue}
          >
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(incident.value)}
          </Text>
        </View>
        <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Seja o herói desse caso!</Text>

          <Text style={styles.heroDescription}>Entre em contato:</Text>

          <View style={styles.actions}>

            <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
              <Text style={styles.actionText}>Whatsapp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress={sendMail}>
              <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </View>
  )

}
