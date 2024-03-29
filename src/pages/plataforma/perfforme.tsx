import { Box, Flex, chakra, Heading, Text } from '@chakra-ui/react';
import {
  Head,
  Header,
  Footer,
  Container,
  Contato,
} from '../../components/Layout';
import {
  Descricao,
  DuvidasFrequentes,
  VideoApresentacao,
} from '../../components/Plataforma';

export default function Perfforme(): JSX.Element {
  return (
    <>
      <Head
        title="Perfforme | FV Gestão"
        description="Avalie sua equipe, realize feedbacks com seus colaboradores e construa seus planos de desenvolvimento individual."
      />
      <Flex direction="column" width="100%" height="100%" minHeight="100vh">
        <Header />
        <Box flex="1">
          <VideoApresentacao
            appNome="Perfforme"
            appTexto="Avalie sua equipe, realize feedbacks com seus colaboradores e construa seus planos de desenvolvimento individual."
            appLogoUrl="/img/plataformas/perfforme-logo.png"
            videoCapaUrl="/img/plataformas/perfforme-capa-video.jpg"
            videoUrl="https://www.youtube.com/embed/_mGPK2lAHos"
          />
        </Box>

        <Descricao
          titulo="Compreenda como sua empresa pode utilizá-la."
          backgroundImage="/img/plataformas/perfforme-descricao-background.jpg"
        >
          <Text mb="1rem">
            A plataforma Perfforme consiste em um conjunto de ações que tem o
            objetivo de fornecer uma consulta e gerenciamento de informações
            para uma empresa em relação aos recursos humanos que estão a sua
            disposição.
          </Text>
        </Descricao>

        <Box padding="5rem 0" bgColor="#e5e5e5" color="primary.800">
          <Container maxWidth="920px">
            <Heading as="h1" textAlign="center" textTransform="uppercase">
              Obtenha melhores resultados na gestão
            </Heading>
            <Text fontSize="1.5rem" textAlign="justify" marginTop="2rem">
              A plataforma proporciona um histórico das avaliações de desempenho
              dos colaboradores, assim como viabiliza as competências técnicas
              que são necessárias para que aconteça o alinhamento cultural e
              organizacional, demonstrando quais são os objetivos estratégicos
              para o seu negócio.
            </Text>
          </Container>
        </Box>

        {/* <Depoimentos /> */}

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
                      'Quais são os pré-requisitos para utilizar a plataforma?',
                    resposta:
                      'Você precisa ter a descrição de cargos de sua empresa,' +
                      'com as competências que cada colaborador precisa ' +
                      'possuir para realizar o seu trabalho.',
                  },
                ]}
              />
            </chakra.div>
          </Container>
        </Box>

        <Contato pagina="Plataforma Perfforme" />
        <Footer />
      </Flex>
    </>
  );
}
