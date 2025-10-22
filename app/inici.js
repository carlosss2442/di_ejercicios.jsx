import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider, TextInput } from 'react-native-paper';

const estil = "upv";
const isAdmin = true;

const Nom = ({ textoAmostrar, estilo }) => {
  return (
    <View style={{ margin: 20, alignItems: "center", justifyContent: "center" }}>
      <Text style={estilo}>
        {textoAmostrar}
      </Text>
    </View>
  );
};

const color = () => {
  return estil === "florida" ? "white" : "orange";
  
}

const Dades = ({ array }) => {

  return (
    array.map((elem, index) => {
      return (
        <View key={index} style={styles[estil]} >
        <TextInput
        placeholder='Escribe...'
        placeholderTextColor={color()} 
        key={index} 
        mode='flat' 
        label={elem}></TextInput>
        </View>
      )
    })

  );
};



const Inici = () => {
  return (
    <PaperProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#f8f8f8",
          alignContent: 'center',
        }}
      >
        <Nom textoAmostrar="Carlos Teran" estilo={{ fontSize: 18, margin: 10 }} />
        <View style={{
          justifyContent: "center",
          backgroundColor: "#f8f8f8",
          alignContent: 'center',
        }}>
          <Dades array={['Email', 'Nombre']}></Dades>
        </View>
      </View>
    </PaperProvider>
  );
};


const styles = StyleSheet.create({
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',

  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
export default Inici;
