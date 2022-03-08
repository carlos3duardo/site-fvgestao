import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  chakra,
} from '@chakra-ui/react';
import { MdPlayCircleOutline } from 'react-icons/md';
import { useDisclosure } from '@chakra-ui/hooks';

import { Container } from '../../Layout';

export default function BannerPremioEnergisa(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container className="container" position="relative" alignItems="center">
        <Box color="white">
          <Heading
            as="h1"
            width="100%"
            textAlign="center"
            fontSize={{ base: '3rem', md: '4.5rem', lg: '4.5rem' }}
            padding={{ base: '0.5rem 1rem 2rem 1rem', lg: '0 0 3rem 0' }}
            color="orange.500"
            lineHeight="1"
          >
            Prêmio Sinergisa
          </Heading>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box
              padding={{
                base: '0 0 1rem 0',
                md: '0 0 4rem 0',
                lg: '0 3rem 0 0',
              }}
              width={{ base: '100%', lg: '50%', xl: '55%' }}
            >
              <Heading
                as="h2"
                fontSize={{
                  base: '1.5rem',
                  md: '2.5rem',
                  lg: '2.25rem',
                  xl: '2.5rem',
                }}
                textAlign={{ base: 'center', lg: 'left' }}
                zIndex="4"
              >
                A FV Gestão parabeniza todas as empresas participantes e
                agradece a confiança depositada em nosso time.
              </Heading>
            </Box>
            <Box
              width={{ base: '100%', lg: '50%', xl: '45%' }}
              padding={{ base: '0', md: '0 3rem', lg: '0' }}
            >
              <chakra.figure
                width="100%"
                height={{
                  base: '260px',
                  md: '420px',
                  lg: '360px',
                  xl: '380px',
                }}
                margin={{ base: '0', lg: '0' }}
                padding="1rem"
                backgroundImage="img/home-banner-sinergisa-video-thumbnail.png"
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
            </Box>
          </Flex>
        </Box>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="100%" maxWidth="1024px" bgColor="transparent">
          <ModalCloseButton color="white" />
          <ModalBody padding="2.5rem" borderRadius="0">
            <AspectRatio ratio={16 / 9}>
              <iframe
                title="Prêmio Sinergisa"
                src="https://www.youtube.com/embed/ZzovC-qZ0uc"
              />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
