import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Link, Text, useTheme} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { FiGithub, FiLock, FiUser } from 'react-icons/fi';
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { FormEvent } from "react";

function Cadastro() {
    const theme = useTheme() ;
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        signIn('credentials'); }


    return (
        <Flex
          width="100%"
          height="100vh"
          alignItems="center"
          justifyContent="center">
          <form onSubmit={onSubmit}>
            <Box
              width="428px"
            >
              <Text
                color="gray.100"
                fontSize="xl"
                textAlign="center"
                fontFamily="heading"
                fontWeight={600}
                marginBottom="2rem">Sign up to new account</Text>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                >
                  <FiUser color={theme.colors.gray['500']} />
                </InputLeftElement>
                <Input
                  placeholder="Email"
                  marginBottom="1rem"
                  borderColor="gray.700"
                  backgroundColor="gray.700"
                  color="gray.100" />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                >
                  <FiLock color={theme.colors.gray['500']} />
                </InputLeftElement>
                <Input
                  placeholder="Senha"
                  marginBottom="1rem"
                  borderColor="gray.700"
                  backgroundColor="gray.700"
                  color="gray.100"
                  type="password" />
              </InputGroup>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                >
                  <FiUser color={theme.colors.gray['500']} />
                </InputLeftElement>
                <Input
                  placeholder="Name"
                  /*marginBottom="1rem"*/
                  borderColor="gray.700"
                  backgroundColor="gray.700"
                  color="gray.100" />
              </InputGroup>
              <Flex direction="column" alignItems="center">
                <Button
                  type="submit"
                  marginTop="2rem"
                  marginBottom="1rem"
                  width="100%"
                  backgroundColor="secondary.500"
                  _hover={{ backgroundColor: "secondary.600" }}>Cadastrar</Button>
                <Link
                  href="/login"
                  color="gray.100">
                  Já tenho conta<Text as="span" color="secondary.500"></Text>
                </Link>
              </Flex>
    
              <Flex marginTop="2rem" alignItems="center" justifyContent="center">
                <Text
                  color="secondary.500"
                  textAlign="center"
                  marginRight="1rem">Ou entre com</Text>
                <Button
                  backgroundColor="gray.600"
                  leftIcon={<FiGithub color={theme.colors.gray['100']} />}
                  color={theme.colors.gray['100']}
                  _hover={{ backgroundColor: "gray.700" }}
                  onClick={() => signIn('github')}>Github</Button>
              </Flex>
            </Box>
          </form>
        </Flex>
      )
    };


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

export default Cadastro ; 