import { Box, BoxProps } from '@chakra-ui/react';

export default function Container({
  children,
  ...rest
}: BoxProps): JSX.Element {
  return (
    <Box width="100%" maxWidth="container.xl" margin="0 auto" {...rest}>
      {children}
    </Box>
  );
}
