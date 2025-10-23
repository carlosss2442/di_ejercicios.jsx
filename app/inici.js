import { StyleSheet, Text, View } from 'react-native';
import { Button, Provider as PaperProvider, TextInput } from 'react-native-paper';

const estil = "upv";
const isAdmin = true;
const moduls2Dam = [
{ nom: 'DIN', professor: 'Manel', hores: 120 },
{ nom: 'ADA', professor: 'Roberto', hores: 120 },
{ nom: 'PMDM', professor: 'Paco', hores: 100 },
{ nom: 'PSP', professor: 'Roberto', hores: 60 },
{ nom: 'SGE', professor: 'Belén', hores: 100 },
{ nom: 'Anglés', professor: 'Caterina', hores: 40 },
{ nom: 'EIE', professor: 'Ana', hores: 60 },
];

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

const MostrarInforme = () => {
  
  return (
    moduls2Dam.map((elem, index) => {
      return (
      <View key={index} style={{backgroundColor:(index % 2 === 0 ?'#F48FB1' : '#F8BBD0')}}>
        <Text>{index + 1}</Text>
        <Text>{elem.nom}</Text>
        <Text>{elem.professor}</Text>
        <Text>{elem.hores}</Text>
      </View>
      )
    })
  )
}

const MostrarBoton = () => {
  
  if (isAdmin){
    return (
    <Button icon='format-list-bulleted' mode="contained" 
    size={20} > INFORMES</Button>
    )
  } 
}



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
        <View>
        <MostrarBoton></MostrarBoton>
      </View >
      <View>
        <MostrarInforme></MostrarInforme>
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
  color1: {
    backgroundColor:'#F48FB1',
  },
  color2:{
    backgroundColor:'#F8BBD0',
  }
});
export default Inici;
