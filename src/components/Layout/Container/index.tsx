import { Box, BoxProps } from '@chakra-ui/react';

export default function Container({
  children,
  ...rest
}: BoxProps): JSX.Element {
  return (
    <Box
      width="100%"
      maxWidth="container.xl"
      margin="0 auto"
      padding={{ base: '0 1rem', xl: '0' }}
      {...rest}
    >
      {children}
    </Box>
  );
}
