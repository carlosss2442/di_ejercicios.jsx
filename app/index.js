import React, { useState } from "react";
import { Text, View } from "react-native";
import { PaperProvider, TextInput } from "react-native-paper";




const Saluda = ({ nom, cognoms }) => {

  const [contrasenya, setPassword] = useState("");
  const [isContrasenyaOculta, setContrasenyaOculta] = useState(true);
  const [icono, setIncono] = useState('eye-off');
  
  const modificaContrasenya = (unPassword) => {
    setPassword(unPassword);
    console.log("Actualitze: " + unPassword);
  }

  const modificaContrasenyaOculta = () => {
    setContrasenyaOculta(!isContrasenyaOculta)
    if (isContrasenyaOculta === true){
      setContrasenyaOculta(false);
      setIncono('eye')
    } else {
      setContrasenyaOculta(true);
      setIncono('eye-off')
    }
   
  }

  return (
    <View style={{ margin: 20, alignContent: "center", flex: 1, justifyContent: "center"}}>
      <Text style={{ fontSize: 18, margin: 10 }}>
        Hola {nom} {cognoms}!!
      </Text>
      <Text>Primera pàgina de prova!!!.</Text>

      <View>
        <TextInput mode="outlined" label="Password"
          secureTextEntry={isContrasenyaOculta}
          right={<TextInput.Icon icon={icono}  onPress={() => {modificaContrasenyaOculta()}}/>}
          onChangeText={(text) => modificaContrasenya(text)}
        />
      </View>
      <View>

      </View>
    </View>
  );
};

const Index = () => {


  return (
    <PaperProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          fontSize: 18,
          alignContent: 'center'
        }}
      >
        <Saluda nom="Manel" cognoms="Viel" />

      </View>
    </PaperProvider>
  );
};

export default Index;
