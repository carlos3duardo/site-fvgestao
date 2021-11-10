import {
  AspectRatio,
  Box,
  Button,
  chakra,
  Flex,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import Image from 'next/image';
import { MdPlayCircleOutline } from 'react-icons/md';

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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bgColor="background.grayLight" padding="5rem 0">
        <Container>
          <Flex
            width="100%"
            align="center"
            direction={{ base: 'column', lg: 'row' }}
          >
            <chakra.div
              flex="1"
              textColor="primary.800"
              textAlign={{ base: 'center', lg: 'left' }}
            >
              <chakra.figure
                margin={{ base: '0 auto', md: '0 2rem 0 0' }}
                width={{ base: '100%', lg: '50%' }}
              >
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
            </chakra.div>
            <chakra.figure
              width={{ base: '100%', lg: '50%', xl: '640px' }}
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
                color="white"
                cursor="pointer"
                _hover={{
                  backgroundColor: 'rgba(254, 140, 0, 0.2)',
                  color: 'orange.500',
                }}
                onClick={onOpen}
              >
                <Icon as={MdPlayCircleOutline} w="4rem" h="4rem" />
              </Flex>
            </chakra.figure>
          </Flex>
        </Container>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="100%" maxWidth="1024px">
          <ModalHeader>{appNome}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AspectRatio ratio={16 / 9}>
              <iframe title={appNome} src={videoUrl} />
            </AspectRatio>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="primary" onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
