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

export default function Capacitte(): JSX.Element {
  return (
    <>
      <Head
        title="Capacitte | FV Gestão"
        description="Cria a universidade corporativa da organização construindo um ambiente de aprendizado a partir de um conteúdo específico para o desenvolvimento dos colaboradores."
      />
      <Flex direction="column" width="100%" height="100%" minHeight="100vh">
        <Header />
        <Box flex="1">
          <VideoApresentacao
            appNome="Capacitte"
            appTexto="Cria a universidade corporativa da organização construindo um ambiente de aprendizado a partir de um conteúdo específico para o desenvolvimento dos colaboradores."
            appLogoUrl="/img/plataformas/capacitte-logo.png"
            videoCapaUrl="/img/plataformas/capacitte-capa-video.jpg"
            videoUrl="https://www.youtube.com/embed/gFQbqeLxh8M"
          />
        </Box>

        <Descricao
          titulo="O que é o Capacitte, a nossa Universidade Corporativa?"
          backgroundImage="/img/plataformas/capacitte-descricao-background.jpg"
        >
          <Text mb="1rem">
            Mais que uma faculdade, um centro de instrução avançado assentado na
            vanguarda do ensino corporativo, permitindo a criação e inserção de
            cursos e trilhas de capacitação exclusivos da sua empresa,
            contemplado assim o que de mais moderno existe no ensino empresarial
            e gestão.
          </Text>
        </Descricao>

        <Box padding="5rem 0" bgColor="#e5e5e5" color="primary.800">
          <Container maxWidth="920px">
            <Heading as="h1" textAlign="center" textTransform="uppercase">
              Como funciona?
            </Heading>
            <Text fontSize="1.5rem" textAlign="justify" marginTop="2rem">
              Capacitte é um equipamento educacional que vai contribuir,
              diretamente, na base de formação, capacitação e atualização dos
              colaboradores da sua empresa. Ela pode ser utilizada de forma
              permanente e integrada com as necessidades individuais de cada
              empresa, permitindo uma visão ampla e direcionada dos conteúdos
              disponibilizados para estudo e reflexão.
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
                    pergunta: 'A plataforma emite certificado de conclusão?',
                    resposta:
                      'Sim. Após o aluno concluir o material do curso, ele ' +
                      'terá acesso ao seu certificado. O gestor também pode ' +
                      'adicionar uma prova para avaliar o aluno. Neste caso, ' +
                      'o certificado apenas será disponibilizado se o aluno ' +
                      'atingir a nota mínima para aprovação.',
                  },
                  {
                    pergunta: 'A plataforma tem cursos próprios?',
                    resposta:
                      'Não. O administrador da plataforma precisa ' +
                      'inserir os cursos da empresa, e os seus conteúdos ' +
                      'especíticos.',
                  },
                  {
                    pergunta:
                      'Quais os tipos de arquivos que a plataforma ' +
                      'aceita?',
                    resposta:
                      'Os mais comuns arquivos de mídia disponíveis ' +
                      'atualmente: .mp4 (vídeo), .mp3(áudio), ' +
                      '.pdf e .docx (documentos), .pptx (apresentações). ' +
                      'Também é possível adicionar links para arquivos de ' +
                      'outros sites, quando não é possível armazenar na ' +
                      'plataforma.',
                  },
                  {
                    pergunta: 'É possível adicionar provas nos meus cursos?',
                    resposta:
                      'Sim. Você pode adicionar provas para cada ' +
                      'módulo (capítulo) dos seus cursos com questões ' +
                      'objetivas e subjetivas. Para esta última você precisa ' +
                      'deixar um colaborador responsável para realizar a ' +
                      'correção.',
                  },
                ]}
              />
            </chakra.div>
          </Container>
        </Box>

        <Contato pagina="Plataforma Capacitte" />
        <Footer />
      </Flex>
    </>
  );
}
