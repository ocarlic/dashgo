import { Text } from '@chakra-ui/react'

export function Logo() {
  return (
    <Text
      fontSize='3xl'
      fontWeight='bold'
      letterSpacing='tight'
      w='64'
    >
      dashgo
      <Text as='span' m='1' color='pink.500'>.</Text>
    </Text>
  )
}