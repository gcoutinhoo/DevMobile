import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffbed',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 10,
  },
  menuBar: {
    width: 25,
    height: 3,
    backgroundColor: '#333',
    marginVertical: 3,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    // Sombra para iOS
    //shadowColor: '#000',               // Cor da sombra
    //shadowOffset: { width: 0, height: 10 },  // Distância da sombra
    //shadowOpacity: 1,               // Transparência da sombra
    //shadowRadius: 4,                   // Raio da sombra (quão difusa ela é)

    // Sombra para Android
    elevation: 10,                      // Elevação para sombra no Android
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    elevation: 15,
  },
  profession: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 15,
  },
  description: {
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  githubButton: {
    backgroundColor: '#007bff',
    height: 50,
    width: 200,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginTop: 10,
  },
  githubButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
    maxHeight: '80%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 15,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default appStyles;