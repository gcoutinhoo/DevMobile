import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Modal,
  ScrollView,
} from 'react-native';
import appStyles from './src/styles/AppStyles'; 

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleGitHubLink = () => {
    Linking.openURL('https://github.com/gcoutinhoo');
  };
  const handleCvLink = () => {
    Linking.openURL('https://www.canva.com/design/DAFwyJPnWMw/PZN3ah8lXMpqlaVBDJb6Qg/view?utm_content=DAFwyJPnWMw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdd1a70067b');
  };
  const handleInstagramLink = () => {
    Linking.openURL('https://www.instagram.com/g_coutinhoo?igsh=ZnJ4Z28xa3RyanBo');
  };
  const handleContatoLink = () => {
    Linking.openURL('https://wa.me/5511941918152');
  };

  const handleMenu = () => {
    setModalVisible(true);
  };

  return (
    <View style={appStyles.container}>
      <View style={appStyles.header}>
        <Text style={appStyles.headerText}>PORTFÓLIO</Text>
        <TouchableOpacity style={appStyles.menuButton} onPress={handleMenu}>
          <View style={appStyles.menuBar} />
          <View style={appStyles.menuBar} />
          <View style={appStyles.menuBar} />
        </TouchableOpacity>
      </View>

      <Image
        style={appStyles.profileImage}
        source={{
          uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/443f011f5b2fdc3dd0dbfcc21e5057ac',
        }}
      />

      <Text style={appStyles.name}>Gabriel Coutinho de Souza</Text>
      <Text style={appStyles.profession}>Desenvolvedor FullStack</Text>
      <Text style={appStyles.description}>
        Olá, sou o Gabriel, tenho 20 anos e curso Analise e Desevolvimento de Sistema na Estácio.
      </Text>

      <TouchableOpacity style={appStyles.githubButton} onPress={handleGitHubLink}>
        <Text style={appStyles.githubButtonText}>Ver meu GitHub</Text>
      </TouchableOpacity>

      <TouchableOpacity style={appStyles.githubButton} onPress={handleCvLink}>
        <Text style={appStyles.githubButtonText}>Ver meu Currículo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={appStyles.githubButton} onPress={handleInstagramLink}>
        <Text style={appStyles.githubButtonText}>Ver meu Instagram</Text>
      </TouchableOpacity>

      <TouchableOpacity style={appStyles.githubButton} onPress={handleContatoLink}>
        <Text style={appStyles.githubButtonText}>Entrar em contato</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={appStyles.centeredView}>
          <View style={appStyles.modalView}>
            <ScrollView>
              <Text style={appStyles.modalText}>Opção 1</Text>
              <Text style={appStyles.modalText}>Opção 2</Text>
              <Text style={appStyles.modalText}>Opção 3</Text>
              <Text style={appStyles.modalText}>Opção 4</Text>
              <Text style={appStyles.modalText}>Opção 5</Text>
              <Text style={appStyles.modalText}>Opção 6</Text>
              <Text style={appStyles.modalText}>Opção 7</Text>
            </ScrollView>
            <TouchableOpacity
              style={[appStyles.button, appStyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={appStyles.textStyle}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}