import { Text, View } from "react-native-web";

import estilo from "./estilo";

export default function Inicio(){
  return(
    <View style={estilo.container}>
    <Text style={estilo.txt}>SOCORRO</Text>
    </View>
  )
}