import { Flex, Input, Button, Stack, FormControl } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex 
      w="100vw" 
      h="100vh"
      alignItems="center" 
      justify="center"
    >
      <Flex 
        as="form" 
        width="100%" 
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing="4">
          <div>
            <FormControl htmlFor="email">
              E-mail
            </FormControl>
            <Input
                id="email"
                nome="email"
                type="email" 
                focusBorderColor="pink.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                  bgColor: 'gray.900'
                }}
                size="lg"
            />
          </div>
          
          <div>
            <FormControl htmlFor="password">
              Senha
            </FormControl>
            <Input
            id="password"
              nome="password"
              type="password" 
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{
                bgColor: 'gray.900'
              }}
              size="lg"
            />
          </div>
          
        </Stack>

       <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>

      </Flex>
    </Flex>
  )
}
