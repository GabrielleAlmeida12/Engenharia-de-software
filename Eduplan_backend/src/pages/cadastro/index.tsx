import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Link, Text, useTheme, Image } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { FiGithub, FiLock, FiUser } from 'react-icons/fi';
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { FormEvent } from "react";

function Cadastro() {
  const theme = useTheme();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    signIn('credentials');
  }

  return (
    <Flex
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bg="gray.300"
      flexDirection="column" // Para alinhar a imagem e o formulário verticalmente
    >
      <Image
        src="/imagens/Logo.png"
        alt="Logo da sua aplicação"
        width="130px"
        height="auto"
        marginBottom="2rem"
        position="absolute"
        top="2rem"
        left="2rem"
      />

      <form onSubmit={onSubmit}>
        <Box
          width="428px"
        >
          <Text
            color="gray.900"
            fontSize="xl"
            textAlign="center"
            fontFamily="heading"
            fontWeight={600}
            marginBottom="2rem">Sign up for a new account</Text>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
            >
              <FiUser color={theme.colors.gray['500']} />
            </InputLeftElement>
            <Input
              placeholder="Email"
              marginBottom="1rem"
              borderColor="black"
              borderWidth="0 0 2px 0"
              backgroundColor="gray.50"
              color="gray.900"
              rounded="full"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
            >
              <FiLock color={theme.colors.gray['500']} />
            </InputLeftElement>
            <Input
              placeholder="Senha"
              type="password"
              marginBottom="1rem"
              borderColor="black"
              borderWidth="0 0 2px 0"
              backgroundColor="gray.50"
              color="gray.900"
              rounded="full"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
            >
              <FiUser color={theme.colors.gray['500']} />
            </InputLeftElement>
            <Input
              placeholder="Name"
              marginBottom="1rem"
              borderColor="black"
              borderWidth="0 0 2px 0"
              backgroundColor="gray.50"
              color="gray.900"
              rounded="full"
            />
          </InputGroup>
          <Flex direction="column" alignItems="center">
            <Button
              type="submit"
              marginTop="2rem"
              marginBottom="1rem"
              width="100%"
              backgroundColor="gray.900"
              color="gray.50"
              _hover={{ backgroundColor: "gray.700" }}>Cadastrar</Button>
            <Link
              href="/login"
              color="gray.900">
              Já tem uma conta?<Text as="span" color="gray.900"> Faça login</Text>
            </Link>
          </Flex>

          <Flex marginTop="2rem" alignItems="center" justifyContent="center">
            <Text
              color="gray.900"
              textAlign="center"
              marginRight="1rem">Ou entre com</Text>
            <Button
              backgroundColor="gray.900"
              leftIcon={<FiGithub color={theme.colors.gray['100']} />}
              color={theme.colors.gray['100']}
              _hover={{ backgroundColor: "gray.700" }}
              onClick={() => signIn('github')}>Github</Button>
          </Flex>
        </Box>
      </form>
    </Flex>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if(session){
    return {
      redirect: {
        destination: '/cadastro',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}

export default Cadastro;
