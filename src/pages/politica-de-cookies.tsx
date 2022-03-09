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

export default function PoliticaDeCookies(): JSX.Element {
  return (
    <>
      <Head title="Política de Cookies | FV Gestão" />
      <Flex direction="column" width="100%" height="100%" minHeight="100vh">
        <Header />
        <Box flex="1" marginTop="6rem">
          <chakra.div backgroundColor="#E5E5E5" padding="80px 0">
            <Container maxWidth="920px" fontSize="1.5rem" textAlign="justify">
              <Heading as="h1" textAlign="center" textTransform="uppercase">
                Política de Cookies
              </Heading>

              <Heading as="h2" margin="2rem 0 2rem 0">
                1. Introdução
              </Heading>

              <Text>
                A FV Gestão apresenta por meio desta política, o conceito de
                cookies, o uso dos cookies, e as possibilidades de configurações
                de uso quando você utiliza o nosso site (fvgestao.com.br),
                incluindo qualquer outro formulário de mídia, canal de mídia e
                aplicativo para celular relacionado ou conectado ao site,
                visando proporcionar uma experiência ainda mais transparente. A
                qualquer momento o Titular poderá revogar a sua autorização
                quanto à utilização dos cookies, acessando as configurações de
                seu navegador. Contudo, caso o Titular não aceite alguns cookies
                das páginas da FV Gestão, certas funcionalidades dos nossos
                serviços poderão não funcionar da maneira correta. Em caso de
                dúvidas sobre essa política de cookies, você pode entrar em
                contato com o nosso Encarregado de Proteção de dados por meio do
                endereço de e-mail:{' '}
                <a href="mailto:dpo@fvgestao.com.br">dpo@fvgestao.com.br</a>.
              </Text>

              <Heading as="h2" margin="2rem 0 2rem 0">
                2. Conceito de cookies
              </Heading>

              <Text marginTop="1rem">
                Cookie é um dado que um site coloca no seu dispositivo para
                lembrar de você quando você o visitar novamente. Assim, os
                cookies guardam informações relacionadas às suas preferências,
                idioma, localização, recorrência das suas sessões, e outras
                variáveis que nos ajudam a entender como o site está sendo
                usado, visando melhorar a experiência dos usuários.
              </Text>

              <Heading as="h2" margin="2rem 0 2rem 0">
                3. Uso de cookies
              </Heading>

              <Text marginTop="1rem">
                Utilizamos cookies próprios e de terceiros no site, os quais
                podem ser classificados quanto à sua temporalidade:
              </Text>

              <UnorderedList>
                <ListItem marginTop="1rem">
                  <strong>COOKIES ESTRITAMENTE NECESSÁRIOS:</strong> Estes
                  cookies são essenciais para o funcionamento do site. Uma vez
                  que eles permitem a navegação e utilização das aplicações, bem
                  como o acesso a áreas seguras do site. Assim, sem eles, o
                  nosso site não funcionaria corretamente.
                </ListItem>
                <ListItem marginTop="1rem">
                  <strong>COOKIES DE DESEMPENHO:</strong> Estes cookies permitem
                  medir quantas vezes uma página foi visitada, bem como saber
                  quais páginas são as mais e menos acessadas, de maneira
                  anônima.
                </ListItem>
                <ListItem marginTop="1rem">
                  <strong>COOKIES FUNCIONAIS:</strong> Estes cookies permitem
                  lembrar das escolhas feitas pelos usuários do site e visam
                  melhorar a facilidade de uso do site.
                </ListItem>
                <ListItem marginTop="1rem">
                  <strong>COOKIES DE SEGMENTAÇÃO E RASTREAMENTO:</strong> Estes
                  cookies coletam informações de sua visita em nosso site, para
                  que as propagandas sejam criadas com base no seu perfil e em
                  seus interesses. Normalmente, estes cookies estão atrelados a
                  cookies de terceiros. Se você não permitir estes cookies,
                  continuará visualizando as propagandas, no entanto, as mesmas
                  não serão personalizadas de acordo com as suas preferências.
                </ListItem>
              </UnorderedList>

              <Text marginTop="1rem">
                Você pode remover ou rejeitar os cookies nas configurações do
                seu navegador. No entanto, essa ação pode afetar a
                funcionalidade do site.
              </Text>

              <Text marginTop="1rem">
                Para realizar o gerenciamento de cookies diretamente em seu
                navegador, você pode consultar os links abaixo:
              </Text>

              <UnorderedList marginTop="1rem">
                <ListItem>
                  <a
                    href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=95647"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Suporte do navegador Google Chrome
                  </a>
                </ListItem>
                <ListItem>
                  <a
                    href="http://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-yourcomputer?redirectlocale=en-US&redirectslug=Cookies"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Suporte do navegador Mozilla Firefox
                  </a>
                </ListItem>
                <ListItem>
                  <a
                    href="https://support.microsoft.com/search/results?query=cookies&isEnrichedQuery=false"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Suporte do navegador Microsoft Edge / Internet Explorer
                  </a>
                </ListItem>
                <ListItem>
                  <a
                    href="https://support.apple.com/kb/index?q=cookies&src=globalnav_support&type=organic&page=search&locale=en_US"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Suporte do navegador Safari
                  </a>
                </ListItem>
              </UnorderedList>

              <Text marginTop="1rem">
                Para saber mais informações relacionadas ao tratamento de dados
                pessoais, você pode consultar o nosso{' '}
                <Link href="/aviso-de-privacidade">Aviso de Privacidade</Link>.
              </Text>
            </Container>
          </chakra.div>
        </Box>
        <Footer />
      </Flex>
    </>
  );
}
