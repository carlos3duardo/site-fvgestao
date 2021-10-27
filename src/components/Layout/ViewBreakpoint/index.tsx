import { Box, Button, chakra } from '@chakra-ui/react';

export default function ViewBreakpoint(): JSX.Element {
  const dev = process.env.NODE_ENV === 'development';

  return dev ? (
    <Box position="fixed" bottom="2rem" right="2rem">
      <Button size="sm" colorScheme="primary">
        <chakra.span display={{ base: 'none', sm: 'block', md: 'none' }}>
          sm
        </chakra.span>
        <chakra.span display={{ base: 'none', md: 'block', lg: 'none' }}>
          md
        </chakra.span>
        <chakra.span display={{ base: 'none', lg: 'block', xl: 'none' }}>
          lg
        </chakra.span>
        <chakra.span display={{ base: 'none', xl: 'block', '2xl': 'none' }}>
          xl
        </chakra.span>
        <chakra.span display={{ base: 'none', '2xl': 'block' }}>
          2xl
        </chakra.span>
      </Button>
    </Box>
  ) : null;
}
