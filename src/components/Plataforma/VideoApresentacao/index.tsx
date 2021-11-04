import { Box, Flex, Icon, Text, Button, chakra } from '@chakra-ui/react';
import Image from 'next/image';
import { MdPlayCircleOutline } from 'react-icons/md';
import Link from 'next/link';

import { Container } from '../../Layout';

interface VideoApresentacaoProps {
  appNome: string;
  appLogoUrl: string;
  appTexto: string;
  videoCapaUrl: string;
  videoUrl: string;
}

export default function VideoApresentacao({
  appNome,
  appLogoUrl,
  appTexto,
  videoCapaUrl,
  videoUrl,
}: VideoApresentacaoProps): JSX.Element {
  return (
    <Box bgColor="#e5e5e5" padding="5rem 0">
      <Container>
        <Flex
          width="100%"
          align="center"
          direction={{ base: 'column', lg: 'row' }}
        >
          <chakra.div flex="1" textColor="primary.800">
            <chakra.figure w="300px">
              <Image
                src={appLogoUrl}
                alt={appNome}
                width={229}
                height={160}
                layout="fixed"
              />
            </chakra.figure>
            <Text fontSize="1.5rem" m="1rem 0">
              {appTexto}
            </Text>
            {/* <Link href="/quem-somos" passHref>
              <Button
                as="a"
                colorScheme="orange"
                variant="outline"
                borderWidth="2px"
                borderRadius="99px"
                _hover={{
                  background: 'orange.50',
                }}
                _active={{
                  background: 'orange.500',
                  borderColor: 'orange.500',
                  textColor: '#ffffff',
                }}
              >
                mais detalhes
              </Button>
            </Link> */}
          </chakra.div>
          <chakra.figure
            width={{ base: '100%', lg: '520px', xl: '640px' }}
            height={{ base: '260px', md: '420px' }}
            margin={{ base: '0 0 2rem 0', lg: '0 2rem 0 0' }}
            padding="1rem"
            backgroundImage={videoCapaUrl}
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
            backgroundSize="cover"
            backgroundColor="orange.100"
            borderRadius="0.5rem"
            boxShadow="0 .175rem .175rem rgba(0, 0, 0, 0.15)"
          >
            <Flex
              width="100%"
              height="100%"
              borderWidth="2px"
              borderColor="orange.500"
              borderRadius=".5rem"
              transition="all 0.2s ease"
              align="center"
              justify="center"
              _hover={{
                backgroundColor: 'rgba(254, 140, 0, 0.2)',
              }}
            >
              <Icon as={MdPlayCircleOutline} w="4rem" h="4rem" color="white" />
            </Flex>
          </chakra.figure>
        </Flex>
      </Container>
    </Box>
  );
}
