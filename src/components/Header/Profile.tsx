import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Victor Carli</Text>
        
        <Text color='gray.300' fontSize='small'>
          victorcarlibr@gmail.com
        </Text>
      </Box>

      <Avatar size='md' name='Victor Carli' src='https://github.com/ocarlic.png'/>
    </Flex>
  )
}