import { Box, BoxProps, chakra, Heading } from '@chakra-ui/react';
import { Container } from '../../Layout';

interface DescricaoProps extends BoxProps {
  backgroundImage: string;
}

export default function Descricao({
  backgroundImage,
  children,
  ...rest
}: DescricaoProps): JSX.Element {
  return (
    <Box
      padding={{ base: '0', md: '5rem 0' }}
      backgroundImage={`url(${backgroundImage})`}
      backgroundRepeat="no-repeat"
      backgroundPosition="center center"
      backgroundSize="cover"
      {...rest}
    >
      <Container
        padding={{ base: '0', md: '0 2rem', xl: '0' }}
        display="flex"
        flexDirection="row-reverse"
      >
        <Box
          padding="3rem"
          width={{ base: '100%', lg: '600px' }}
          color="gray.200"
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'background.light',
            borderRadius: { base: '0', md: '0.75rem' },
            width: '100%',
            height: '100%',
            opacity: '0.9',
            zIndex: '0',
          }}
        >
          <Heading
            as="h2"
            fontSize={{ base: '1.75rem', md: '2.5rem' }}
            color="orange.500"
            marginBottom="1rem"
            position="relative"
            zIndex="1"
          >
            Otimize os processos de gestão
          </Heading>
          <chakra.div
            fontSize="1.5rem"
            marginBottom="1rem"
            position="relative"
            zIndex="1"
          >
            {children}
          </chakra.div>
        </Box>
      </Container>
    </Box>
  );
}
