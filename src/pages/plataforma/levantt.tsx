import { Box, Flex, chakra, Heading, Text } from '@chakra-ui/react';
import {
  Head,
  Header,
  Footer,
  Container,
  Contato,
} from '../../components/Layout';
import { Depoimentos } from '../../components/Home';
import {
  Descricao,
  DuvidasFrequentes,
  VideoApresentacao,
} from '../../components/Plataforma';

export default function Levantt(): JSX.Element {
  return (
    <>
      <Head
        title="Levantt | FV Gestão"
        description="Acompanha e mede o grau de satisfação em tempo real para desenvolver um plano de lealdade para os seus clientes."
      />
      <Flex direction="column" width="100%" height="100%" minHeight="100vh">
        <Header />
        <Box flex="1" marginTop="96px">
          <VideoApresentacao
            appNome="Levantt"
            appTexto="Acompanha e mede o grau de satisfação em tempo real para desenvolver um plano de lealdade para os seus clientes."
            appLogoUrl="/img/plataformas/levantt-logo.png"
            videoCapaUrl="/img/plataformas/levantt-capa-video.jpg"
            videoUrl="https://www.youtube.com/embed/gFQbqeLxh8M"
          />
        </Box>

        <Descricao
          titulo="Levantt: desvendando o enigma do público consumidor"
          backgroundImage="/img/plataformas/levantt-descricao-background.jpg"
        >
          <Text mb="1rem">
            Conhecer de perto as insatisfações, desejos e volições dos clientes
            é a chave para o sucesso de qualquer empresa ou negócio. Tecnologia
            e método aliados permitem saber, com extrema precisão, como se
            comporta o cliente em relação a sua empresa. Assim é a Levantt.
          </Text>
        </Descricao>

        <Box padding="5rem 0" bgColor="#e5e5e5" color="primary.800">
          <Container maxWidth="920px">
            <Heading as="h1" textAlign="center" textTransform="uppercase">
              Funcionando na prática
            </Heading>
            <Text fontSize="1.5rem" textAlign="justify" marginTop="2rem">
              A partir dos seus dados inseridos na plataforma, as operações dos
              algoritmos que compõe o sistema executam a leitura e fazem a
              comparação desses elementos, resultando daí os parâmetros que vão
              embasar o novo relacionamento entre a empresa e seu público-alvo,
              transformando a cultura e inovando a gestão. 
            </Text>
          </Container>
        </Box>

        <Depoimentos />

        <Box padding="5rem 0" bgColor="#e5e5e5" color="primary.800">
          <Container maxWidth="920px">
            <Heading as="h1" textAlign="center" textTransform="uppercase">
              Dúvidas Frequentes
            </Heading>
            <chakra.div marginTop="2rem">
              <DuvidasFrequentes
                questoes={[
                  {
                    pergunta:
                      'Dá para fazer uma pergunta subjetiva no Levantt?',
                    resposta:
                      'Não. Mas existe um espaço em cada pesquisa que dá ' +
                      'ao cliente a oportunidade de fazer suas consideraçoes.',
                  },
                  {
                    pergunta: 'Dá para fazer uma campanha sem o NPS?',
                    resposta:
                      'Não. O NPS é a métrica principal que a plataforma ' +
                      'utiliza para avaliar a satisfação dos clientes. ' +
                      'Porém, você pode adicionar mais perguntas que ' +
                      'possam lhe ajudar a identificar onde seu ' +
                      'serviço e/ou produto pode melhorar.',
                  },
                ]}
              />
            </chakra.div>
          </Container>
        </Box>

        <Contato pagina="Plataforma Levantt" />
        <Footer />
      </Flex>
    </>
  );
}
