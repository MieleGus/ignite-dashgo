import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Gustavo Fraga</Text>
        <Text color="gray.300" fontSize="small">
          gustavohenriquemiele@live.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Gustavo Fraga"
        src="https://github.com/mielegus.png"
      />
    </Flex>
  );
}
