import { NativeBaseProvider, StatusBar } from 'native-base';

import { TEMAS } from '@/src/estilos/temas';
import Login from '@/src/Login';


export default function HomeScreen() {
  return (
    <NativeBaseProvider theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Login />
    </NativeBaseProvider>   
  );
}
