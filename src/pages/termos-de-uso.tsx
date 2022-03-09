import {
  Box,
  Flex,
  chakra,
  Heading,
  Text,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Head, Header, Container } from '../components/Layout';
import Footer from '../components/Layout/Footer';

export default function TermosDeUso(): JSX.Element {
  return (
    <>
      <Head
        title="Termos de uso | FV Gestão"
        description="Conheça mais sobre a nossa empresa e a nossa história"
      />
      <Flex direction="column" width="100%" height="100%" minHeight="100vh">
        <Header />
        <Box flex="1" marginTop="6rem">
          <chakra.div backgroundColor="#E5E5E5" padding="80px 0">
            <Container maxWidth="920px">
              <Heading as="h1" textAlign="center" textTransform="uppercase">
                Termos de uso
              </Heading>

              <Heading as="h2" margin="2rem 0 2rem 0">
                1. Introdução
              </Heading>

              <Text fontSize="1.5rem" textAlign="justify" marginTop="2rem">
                A FV Gestão, apresenta por meio deste documento “TERMOS DE USO”,
                as condições aplicáveis para aqueles que acessam este site
                (fvgestao.com.br), suas aplicaçoes, e/ou utilizam os ambientes
                digitais da FV Gestão. Assim, as condições aqui aplicadas, são
                válidas para todos os visitantes e usuários. Dessa forma, os
                visitantes são aqueles que possuem acesso a área home do site e
                dos ambientes digitais, sem necessidade de registro ou senha de
                acesso; já os usuários, são aqueles que possuem acesso a área
                restrita do site e dos ambientes digitais e necessitam de
                registro e senha de acesso.
              </Text>
              <Text fontSize="1.5rem" textAlign="justify" marginTop="2rem">
                Recomendamos que os visitantes e usuários do site e dos
                ambientes digitais da FV Gestão realizem a leitura completa
                deste documento, bem como do{' '}
                <Link href="/aviso-de-privacidade">Aviso de Privacidade</Link> e{' '}
                <Link href="/politica-de-cookies">Política de Cookies</Link> que
                consta as diretrizes da FV Gestão para a proteção dos dados
                pessoais.
              </Text>
              <Text fontSize="1.5rem" textAlign="justify" marginTop="2rem">
                O presente documento poderá ser alterado a qualquer momento e as
                mudanças realizadas serão comunicadas diretamente em nosso site.
              </Text>

              <Heading as="h2" margin="2rem 0 2rem 0">
                2. Informações e funcionamento do site
              </Heading>

              <UnorderedList fontSize="1.5rem" textAlign="justify">
                <ListItem margin="0.5rem 0">
                  A forma de apresentação do site e ambientes digitais da FV
                  Gestão, considerando o seu layout, estrutura e textos podem
                  passar por constantes atualizações, a critério da FV Gestão,
                  em decorrência de normas regulamentares da atividade ou por
                  deliberação da Administração.
                </ListItem>
                <ListItem margin="0.5rem 0">
                  O site e ambientes digitais da FV Gestão trazem diversas
                  informações, com acesso público, entre elas: informações sobre
                  os serviços oferecidos, plataformas desenvolvidas para o
                  público, informações institucionais, canais de atendimento, e
                  outras.
                </ListItem>
                <ListItem margin="0.5rem 0">
                  Referente ao acesso restrito, existem informações cadastrais,
                  além dos serviços e ferramentas oferecidos para os seus
                  clientes.
                </ListItem>
                <ListItem margin="0.5rem 0">
                  O site e os ambientes digitais da FV Gestão, poderão
                  eventualmente ficarem temporariamente indisponíveis por
                  necessidade de manutenção ou força maior, como desastres
                  naturais, falha ou avaria dos sistemas centrais de comunicação
                  e acesso à Internet, ou eventos de terceiros fora do âmbito da
                  FV Gestão. No entanto, a FV Gestão buscará restaurar o acesso
                  em um curto espaço de tempo.
                </ListItem>
              </UnorderedList>

              <Heading as="h2" margin="2rem 0 2rem 0">
                3. Responsabilidades dos visitantes e usuários
              </Heading>

              <UnorderedList fontSize="1.5rem" textAlign="justify">
                <ListItem margin="0.5rem 0">
                  Os visitantes e usuários devem utilizar o site e ambientes
                  digitais da FV Gestão de forma ética, respeitando as
                  finalidades para os quais os mesmos foram criados.
                </ListItem>
                <ListItem margin="0.5rem 0">
                  Visitantes e usuários devem garantir os meios necessários para
                  acesso do site e ambientes digitais, tendo como exemplo os
                  requisitos para acesso à internet.
                </ListItem>
                <ListItem margin="0.5rem 0">
                  Os usuários devem garantir e responder, em qualquer caso, pela
                  veracidade, exatidão e autenticidade dos dados inseridos.
                </ListItem>
                <ListItem margin="0.5rem 0">
                  Os usuários devem manter sigilo dos dados de sua conta de
                  acesso em relação a terceiros. Assim, caso exista a suspeita
                  de quebra de confidencialidade de seus dados de acesso, os
                  usuários deverão realizar a troca dos dados de acesso o mais
                  rápido possível.
                </ListItem>
                <ListItem margin="0.5rem 0">
                  Os usuários autorizam a conferência da veracidade dos seus
                  dados cadastrais, por parte da FV Gestão, por meio da chave de
                  verificação interna de informações de login e senha no site e
                  ambientes digitais, caso existam situações como: dados
                  incorretos, conflitantes ou inverídicos, ou ainda caso o
                  usuário se furte ou se negue a enviar os dados necessários
                  requeridos para complementação ou comprovação de regularidade.
                  Assim, a FV Gestão, mediante comunicado ao usuário poderá
                  bloquear seu acesso para uso, suspender temporariamente ou
                  cancelar definitivamente o seu cadastro, sem prejuízo de
                  outras medidas que entender necessárias e oportunas.
                </ListItem>
                <ListItem margin="0.5rem 0">
                  Os visitantes e usuários se obrigam a ressarcir a FV Gestão ou
                  terceiros, na incidência de danos do site e ambientes
                  digitais, cuja origem for de atos praticados por meio de seu
                  acesso.
                </ListItem>
              </UnorderedList>

              <Heading as="h2" margin="2rem 0 2rem 0">
                4. Responsabilidades da FV Gestão
              </Heading>

              <UnorderedList fontSize="1.5rem" textAlign="justify">
                <ListItem margin="0.5rem 0">
                  Exibir e preservar a funcionalidade do site e ambientes
                  digitais, de maneira clara, permitindo a usabilidade e a
                  navegação por meio das operações realizadas.
                </ListItem>
                <ListItem margin="0.5rem 0">
                  Manter o site e ambientes digitais seguros, com exceção de
                  atos destrutivos por terceiros, que vai além dos esforços da
                  FV Gestão.
                </ListItem>
                <ListItem margin="0.5rem 0">
                  Realizar os melhores esforços para garantir o sigilo e a
                  segurança dos dados inseridos pelos usuários e visitantes, de
                  acordo com o{' '}
                  <Link href="/aviso-de-privacidade">Aviso de Privacidade</Link>
                  .
                </ListItem>
              </UnorderedList>

              <Heading as="h2" margin="2rem 0 2rem 0">
                5. Direitos autorais e propriedade intelectual da FV Gestão
              </Heading>

              <UnorderedList fontSize="1.5rem" textAlign="justify">
                <ListItem margin="0.5rem 0">
                  A marca FV Gestão, seja por meio de outras expressões, como
                  nomes de domínio, conteúdo das telas da plataforma, programas
                  de computador, banco de dados, redes e outras formas que
                  remetam a marca, são propriedades da FV Gestão e estão
                  resguardadas pelas leis de proteção à propriedade intelectual.
                  Assim, ao acessar o site e ambientes digitais, os visitantes e
                  usuários declaram que irão respeitar todos os direitos de
                  propriedade intelectual da FV Gestão, incluindo os direitos
                  referentes aos terceiros.
                </ListItem>
                <ListItem margin="0.5rem 0">
                  A reprodução dos conteúdos do site e ambientes digitais está
                  proibida, desde que não seja autorizada por escrito pela FV
                  Gestão. No entanto, a FV Gestão permanece com os direitos
                  sobre os mesmos. Qualquer utilização não autorizada será
                  considerada violação dos direitos de autor e sujeitará os
                  visitantes e usuários às sanções da Lei 9.610/98.
                </ListItem>
                <ListItem margin="0.5rem 0">
                  Os visitantes e usuários assumem toda e qualquer
                  responsabilidade, de caráter civil e criminal, pela utilização
                  indevida das informações contidas do site e ambientes digitais
                  da FV Gestão.
                </ListItem>
                <ListItem margin="0.5rem 0">
                  Os visitantes e usuários podem enviar conteúdo para a FV
                  Gestão, a fim de serem inseridos, após análise e aprovação no
                  site ou ambientes digitais da FV Gestão. No entanto, os mesmos
                  declaram possuir os direitos autorais ou licença de uso, e
                  assim, concedem a FV Gestão, não de forma exclusiva, o direito
                  de reprodução, com adaptações ou não.
                </ListItem>
                <ListItem margin="0.5rem 0">
                  Caso exista a remoção, bloqueio ou suspensão de qualquer
                  conteúdo ou funcionalidade do site ou nos ambientais digitais
                  da FV Gestão, decorrentes de alguma reclamação, deverá ser
                  interpretada como demonstração de boa-fé e intenção amigável
                  de resolução do conflito e nunca deve ser considerada uma
                  admissão de culpa ou qualquer infração pela FV Gestão.
                </ListItem>
              </UnorderedList>

              <Heading as="h2" margin="2rem 0 2rem 0">
                6. Disposões Gerais
              </Heading>

              <UnorderedList fontSize="1.5rem" textAlign="justify">
                <ListItem>
                  A tolerância para eventual descumprimento de qualquer um dos
                  termos e condições aqui apresentadas, não constituirá uma
                  atualização das obrigações estabelecidas nestes Termos, nem
                  impedirá ou inibirá sua exigibilidade a qualquer momento.
                </ListItem>
                <ListItem>
                  Caso qualquer condição desde documento (TERMOS DE USO) seja
                  declarada nula, integralmente ou parcialmente, por motivo
                  legal ou contratual, as demais cláusulas continuarão vigentes.
                </ListItem>
              </UnorderedList>

              <Heading as="h2" margin="2rem 0 2rem 0">
                7. Aceitação aos termos de uso
              </Heading>

              <Text fontSize="1.5rem" textAlign="justify" marginTop="2rem">
                Ao acessar, navegar ou utilizar o site e ambientes digitais da
                FV Gestão, todos os visitantes e usuários declaram aceitar os
                termos e condições contidos neste documento (TERMOS DE USO).
              </Text>

              <Heading as="h2" margin="2rem 0 2rem 0">
                8. Lei aplicável e jurisdição
              </Heading>

              <Text fontSize="1.5rem" textAlign="justify" marginTop="2rem">
                Os termos de uso aqui apresentados são interpretados de acordo
                com a legislação brasileira, e o Foro da Comarca de João Pessoa,
                foi escolhido para dirimir qualquer litígio ou controvérsia
                envolvendo este documento.
              </Text>
            </Container>
          </chakra.div>
        </Box>
        <Footer />
      </Flex>
    </>
  );
}
