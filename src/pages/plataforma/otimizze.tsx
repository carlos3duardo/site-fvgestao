import {
  Box,
  Flex,
  chakra,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
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

export default function Otimizze(): JSX.Element {
  return (
    <>
      <Head
        title="Otimizze | FV Gestão"
        description="Avalia os pontos de melhorias, cria planos de ação e gerencia tudo no ambiente da plataforma."
      />
      <Flex direction="column" width="100%" height="100%" minHeight="100vh">
        <Header />
        <Box flex="1">
          <VideoApresentacao
            appNome="Otimizze"
            appTexto="Avalia os pontos de melhorias, cria planos de ação e gerencia tudo no ambiente da plataforma."
            appLogoUrl="/img/plataformas/otimizze-logo.png"
            videoCapaUrl="/img/plataformas/otimizze-capa-video.jpg"
            videoUrl="https://www.youtube.com/embed/3MmG2AlAbZk"
          />
        </Box>

        <Descricao
          titulo="Otimize os processos de gestão"
          backgroundImage="/img/plataformas/otimizze-descricao-background.jpg"
        >
          <Text mb="1rem">
            A plataforma atua em duas frentes: empresas e consultores.
          </Text>
          <Text mb="1rem">
            Os consultores atuam utilizando todos os recursos disponibilizados
            pela plataforma para avaliar a gestão das empresas de sua base,
            também acompanha o progresso dos planos de ação através do KANBAN.
          </Text>
          <Text mb="1rem">
            As empresas participam diretamente do processo aplicando
            autoavaliações, cadastrando os seus colaboradores e gerenciando a
            praxe da execução das melhorias voltadas para o incremento da
            gestão.
          </Text>
          <Text>O KANBAN também está disponível para essas empresas.</Text>
        </Descricao>

        <Box padding="5rem 0" bgColor="#e5e5e5" color="primary.800">
          <Container maxWidth="920px">
            <Heading as="h1" textAlign="center" textTransform="uppercase">
              Aumente os resultados
            </Heading>
            <Text fontSize="1.5rem" textAlign="justify" marginTop="2rem">
              Os resultados são transformadores e indispensáveis para a melhoria
              contínua, independentemente do porte da empresa.
            </Text>
            <UnorderedList fontSize="1.5rem" margin="2rem 0 0 2rem">
              <ListItem>Avaliação do nível de maturidade da gestão</ListItem>
              <ListItem>Auditorias</ListItem>
              <ListItem>
                Elaboração de comentários e oportunidades de melhoria
              </ListItem>
              <ListItem>
                Criação de planos de ação e acompanhamento da implementação de
                melhorias por meio do Kanban
              </ListItem>
              <ListItem>
                Criação de quadros para a gestão de atividades internas
              </ListItem>
            </UnorderedList>
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
                      'Ter conhecimento dos processos gerenciais de sua empresa.',
                  },
                  {
                    pergunta:
                      'Posso aplicar um auto-diagnóstico sem a necessidade ' +
                      'de um consultor empresarial?',
                    resposta:
                      'Sim. Oferecemos avaliações que sua organização poderá ' +
                      'realizar sem auxílio, e nossa plataforma gera um ' +
                      'relatório de feedback de acordo com as suas respostas.',
                  },
                ]}
              />
            </chakra.div>
          </Container>
        </Box>

        <Contato pagina="Plataforma Otimizze" />
        <Footer />
      </Flex>
    </>
  );
}
