import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base';
import Logo from './assets/Logo.png';
import { TouchableOpacity } from 'react-native';
import { Titulo } from './componentes/Titulo';
import { EntradaTexto } from './componentes/EntradaTexto';


export default function Login() {
    return(
        <VStack flex={1} alignItems="center" justifyContent="center" p={5} mt={5}>
        <Image  source={Logo} alt="Logo Voll"/>
        <Titulo>
        Faça login em sua conta
        </Titulo>
        <Box>
        <EntradaTexto
        label="Email"
        placeholder="Insira seu endereço de e-mail"
        />
        <EntradaTexto
        label="Senha"
        placeholder="Insira sua senha"
        />
        </Box>
        <Button mt={10} size='lg' w="100%" bg="blue.800" borderRadius="lg">
        Entrar
        </Button>
        <Link href='https://www.alura.com.br/' mt={2}>Esqueceu sua senha?</Link>
        <Box w="100%" flexDirection="row" justifyContent="center" mt={8}>
        <Text >
        Ainda não tem cadastro? 
        </Text>
        <TouchableOpacity><Text color="blue.500">Faça seu cadastro</Text></TouchableOpacity>
        </Box>
        </VStack>
    );
}
