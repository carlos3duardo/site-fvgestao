import {
  Box,
  Flex,
  chakra,
  Heading,
  Text,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { Head, Header, Container } from '../components/Layout';
import Footer from '../components/Layout/Footer';

export default function TermosDeUso(): JSX.Element {
  return (
    <>
      <Head title="Aviso de privacidade | FV Gestão" />
      <Flex direction="column" width="100%" height="100%" minHeight="100vh">
        <Header />
        <Box flex="1">
          <chakra.div backgroundColor="#E5E5E5" padding="80px 0">
            <Container maxWidth="920px" fontSize="1.5rem" textAlign="justify">
              <Heading as="h1" textAlign="center" textTransform="uppercase">
                Aviso de privacidade e proteção de dados pessoais
              </Heading>

              <Text marginTop="2rem">
                A FV GESTÃO CONSULTORIA EMPRESARIAL LTDA., de natureza Sociedade
                Empresária Limitada, sob CNPJ nº 29.615.031/0001-39, com sede na
                Av. Senador Ruy Carneiro, 895, Miramar, João Pessoa, PB,
                apresenta neste &quot;AVISO DE PRIVACIDADE&quot;, voltado para
                os clientes e ao público em geral, os detalhes sobre a obtenção
                e utilização dos dados pessoais deixados pelo Titular ou
                coletados automaticamente na utilização dos diversos sites e
                serviços da FV Gestão.
              </Text>
              <Text marginTop="2rem">
                Em caso de dúvidas sobre o aviso de privacidade, sugestões ou
                requisições, por favor, entrar em contato com o nosso{` `}
                <strong>Encarregado de Proteção de Dados</strong> por meio do
                endereço de e-mail:
                {` `}
                <a href="mailto:dpo@fvgestao.com.br">dpo@fvgestao.com.br</a>.
              </Text>

              <Heading as="h2" margin="2rem 0 2rem 0">
                1. Termos e definições
              </Heading>

              <Text>
                Para um melhor entendimento deste aviso de privacidade, é
                necessário conhecer alguns termos e definições importantes,
                conforme apresentado a seguir:
              </Text>

              <Text marginTop="1rem">
                <strong>LGPD:</strong> Denominada como Lei Geral de Proteção de
                Dados (Lei 13.709/2018), é responsável pela regulamentação do
                tratamento de dados pessoais no Brasil.
              </Text>

              <Text marginTop="1rem">
                <strong>DADOS PESSOAIS:</strong> Qualquer informação relacionada
                a pessoa natural identificada ou identificável. Tendo como
                exemplos: Nome, sobrenome, estado civil, local e data de
                nascimento, cargo, e-mail, telefone e outros.
              </Text>

              <Text marginTop="1rem">
                <strong>DADOS PESSOAIS SENSÍVEIS:</strong> São os dados pessoais
                referentes à origem racial ou étnica, convicção religiosa,
                opinião política, filiação a sindicato ou a organização de
                caráter religioso, filosófico ou político, dado referente à
                saúde ou à vida sexual, dado genético ou biométrico, quando
                vinculado a uma pessoa natural.
              </Text>

              <Text marginTop="1rem">
                <strong>TITULAR DO DADO:</strong> Pessoa natural a quem se
                referem os dados pessoais que são objeto de tratamento. Tendo
                como exemplos: Beneficiários, potenciais clientes,
                colaboradores, fornecedores, terceiros e outros.
              </Text>

              <Text marginTop="1rem">
                <strong>TRATAMENTO DE DADOS:</strong> Qualquer operação
                realizada com dados pessoais, tais como: coleta, produção,
                recepção, classificação, utilização, acesso, reprodução,
                transmissão, distribuição, processamento, arquivamento,
                armazenamento, eliminação, avaliação ou controle da informação,
                modificação, comunicação, transferência, difusão ou extração.
              </Text>

              <Text marginTop="1rem">
                <strong>ANONIMIZAÇÃO:</strong> É a utilização de meios técnicos
                razoáveis e disponíveis no momento do tratamento, por meio dos
                quais um dado perde a possibilidade de associação, direta ou
                indireta, a um indivíduo.
              </Text>

              <Text marginTop="1rem">
                <strong>PSEUDONIMIZAÇÃO:</strong> Processo de tratamento por
                meio do qual um dado perde a possibilidade de associação, direta
                ou indireta, a um indivíduo, senão pelo uso de informação
                adicional mantida separadamente pelo controlador em ambiente
                controlado e seguro.
              </Text>

              <Heading as="h2" margin="2rem 0 2rem 0">
                2. Coleta de dados
              </Heading>

              <Text marginTop="1rem">
                Para a prestação dos serviços da FV Gestão, os dados poderão ser
                coletados de três formas, sendo:
              </Text>

              <UnorderedList>
                <ListItem marginTop="1rem">
                  <strong>
                    A – Dados pessoais fornecidos diretamente pelo titular
                  </strong>
                  : Serão coletados todos os dados pessoais fornecidos ao
                  acessar um dos nossos canais de atendimento ou ao contratar os
                  serviços da FV Gestão.
                </ListItem>
                <ListItem marginTop="1rem">
                  <strong>B – Dados pessoais fornecidos por terceiros</strong>:
                  A coleta de dados pode se dá por intermédio de terceiros,
                  sejam parceiros ou prestadores de serviços, que possuam
                  relacionamento com o titular. Além disso, a FV Gestão pode
                  coletar os dados de bases públicas, disponibilizados por
                  autoridades ou terceiros, ou ainda de dados tornados públicos
                  pelo titular em websites e redes sociais, respeitando a
                  privacidade.
                </ListItem>
                <ListItem marginTop="1rem">
                  <strong>
                    C – Dados pessoais coletados de forma automática
                  </strong>
                  : Coleta de dados de forma automática por meio de tecnologias
                  padrões que são utilizadas com o propósito de melhorar a
                  experiência de navegação do Titular nos serviços da empresa,
                  de acordo com suas buscas e preferências, tendo como exemplo o
                  cookies.
                </ListItem>
              </UnorderedList>

              <Text marginTop="1rem">
                O Titular poderá acessar, atualizar e complementar seus dados,
                bem como solicitar a exclusão dos seus dados coletados pela FV
                Gestão, por meio do e-mail:{' '}
                <a href="mailto:dpo@fvgestao.com.br">dpo@fvgestao.com.br</a>.
              </Text>

              <Heading as="h2" margin="2rem 0 2rem 0">
                3. Utilização de dados pessoais
              </Heading>

              <Text marginTop="1rem">
                A utilização dos dados pessoais tratados pela FV Gestão depende
                do relacionamento do Titular com a empresa e pode ter diversas
                finalidades. Assim, segue abaixo as principais finalidades de
                utilização dos dados pessoais:
              </Text>

              <UnorderedList>
                <ListItem marginTop="1rem">
                  A finalidade predominante da utilização dos dados pessoais é o
                  vínculo contratual. Para isso, os dados são utilizados para
                  garantir a conformidade dos serviços ofertados ao titular.
                </ListItem>
                <ListItem marginTop="1rem">
                  A FV Gestão pode tratar os dados pessoais para obrigação legal
                  ou regulatória.
                </ListItem>
                <ListItem marginTop="1rem">
                  Com o consentimento do titular, os dados podem ser utilizados
                  para fins publicitários, como para o envio de informações de
                  marcas, produtos, promoções e descontos da FV Gestão, bem como
                  a divulgação de eventos ou para a realização de pesquisas
                  relacionadas às suas atividades. Caso não deseje mais receber
                  informativos publicitários da FV Gestão, a qualquer momento o
                  Titular pode contatar a empresa por meio do Encarregado de
                  Proteção de Dados, através e-mail:{' '}
                  <a href="mailto:dpo@fvgestao.com.br">dpo@fvgestao.com.br</a>.
                </ListItem>
                <ListItem marginTop="1rem">
                  A empresa poderá tratar dados pessoais com base em seu
                  legítimo interesse, respeitando o limite do quanto é esperado
                  pelo Titular, considerando os seus interesses, direitos e
                  liberdades fundamentais.
                </ListItem>
              </UnorderedList>

              <Heading as="h2" margin="2rem 0 2rem 0">
                4. Direito dos titulares
              </Heading>

              <Text marginTop="1rem">
                De acordo com a legislação nacional aplicável à proteção de
                dados, são direitos dos titulares de dados que podem ser
                solicitados à FV Gestão:
              </Text>

              <UnorderedList>
                <ListItem marginTop="1rem">
                  Confirmação da existência de tratamento de dados pessoais;
                </ListItem>
                <ListItem marginTop="1rem">Acesso aos dados tratados;</ListItem>
                <ListItem marginTop="1rem">
                  Correção dos dados incompletos, inexatos ou desatualizados;
                </ListItem>
                <ListItem marginTop="1rem">
                  Providências para anonimização, bloqueio ou eliminação de
                  dados pessoais desnecessários, excessivos ou tratados;
                </ListItem>
                <ListItem marginTop="1rem">
                  Portabilidade dos dados pessoais a outro fornecedor de serviço
                  ou produto, mediante requisição expressa.
                </ListItem>
                <ListItem marginTop="1rem">
                  Eliminação dos dados pessoais tratados com o consentimento do
                  titular, observadas as exceções (art. 16, LGPD);
                </ListItem>
                <ListItem marginTop="1rem">
                  Recebimento das informações das entidades públicas e privadas
                  com as quais a FV Gestão compartilha dados;
                </ListItem>
                <ListItem marginTop="1rem">
                  Informações sobre a possibilidade de não fornecer
                  consentimento e sobre as consequências da negativa;
                </ListItem>
                <ListItem marginTop="1rem">
                  Revogação do consentimento, nos termos do § 5º do art. 8º da
                  LGPD.
                </ListItem>
              </UnorderedList>

              <Text marginTop="1rem">
                As solicitações referentes aos dados pessoais poderão ser
                realizadas por meio do envio de requisição para o Encarregado de
                Dados da FV Gestão via e-mail:{' '}
                <a href="mailto:dpo@fvgestao.com.br">dpo@fvgestao.com.br</a>. O
                atendimento a estas solicitações será avaliado com base na
                legislação aplicável pela FV Gestão, e na impossibilidade de
                atendimento, as respostas serão justificadas. A FV Gestão
                procurará atender as solicitações no menor tempo possível,
                contudo, solicitações que requerem um maior tempo para análise,
                como a complexidade das ações da solicitação, podem atrasar ou
                impedir a sua rápida resposta.
              </Text>

              <Heading as="h2" margin="2rem 0 2rem 0">
                5. Cookies
              </Heading>

              <Text marginTop="1rem">
                Um <em>cookie</em> é um dado que um site coloca no seu
                dispositivo para lembrar de você quando você o visitar
                novamente.
              </Text>

              <Text marginTop="1rem">
                Para saber mais sobre o gerenciamento de cookies diretamente em
                seu navegador, você pode consultar os links abaixo:
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
                A qualquer momento o Titular poderá revogar a sua autorização
                quanto à utilização dos cookies, acessando as configurações de
                seu navegador. Contudo, caso o Titular não aceite alguns cookies
                das páginas da FV Gestão, certas funcionalidades dos nossos
                serviços poderão não funcionar da maneira correta.
              </Text>

              <Heading as="h2" margin="2rem 0 2rem 0">
                6. Compartilhamento de dados
              </Heading>

              <Text marginTop="1rem">
                A FV Gestão poderá compartilhar os dados coletadas nas seguintes
                hipóteses:
              </Text>

              <UnorderedList>
                <ListItem marginTop="1rem">
                  Com empresas parceiras e fornecedores para possibilitar a
                  prestação dos serviços aos Titulares;
                </ListItem>
                <ListItem marginTop="1rem">
                  Com autoridades, entidades governamentais ou outros terceiros,
                  para cumprir com obrigações legais ou regulamentares,
                  incluindo o cumprimento a qualquer lei aplicável, processo
                  judicial ou administrativo, bem como para a proteção dos
                  interesses da FV Gestão e titulares dos dados pessoais;
                </ListItem>
                <ListItem marginTop="1rem">
                  No caso de transferência de informações para a continuidade
                  dos serviços referentes as transações comerciais como fusões,
                  aquisições por outra empresa, ou venda de todo ou parte dos
                  ativos da FV Gestão.
                </ListItem>
              </UnorderedList>

              <Heading as="h2" margin="2rem 0 2rem 0">
                7. Transferência internacional de dados
              </Heading>

              <Text marginTop="1rem">
                Os dados pessoais podem ser transferidos para outros países por
                empresas parceiras ou fornecedores da FV Gestão que hospedam
                dados no exterior, respeitando a legislação e/ou regulação
                vigentes.
              </Text>

              <Heading as="h2" margin="2rem 0 2rem 0">
                8. Retenção de dados
              </Heading>

              <Text marginTop="1rem">
                Os dados tratados pela FV Gestão serão eliminados quando
                deixarem de ser úteis para as finalidades para os quais foram
                coletados, ou, quando o Titular solicitar a sua exclusão, exceto
                se a sua manutenção for expressamente autorizada por lei ou
                regulação aplicável para o exercício de direito de defesa em
                processo judicial, administrativo ou arbitral, ou ainda, em
                determinadas situações, no legítimo interesse da FV Gestão para
                evitar fraudes e outras violações à legislação.
              </Text>

              <Heading as="h2" margin="2rem 0 2rem 0">
                9. Proteção de dados pessoais
              </Heading>

              <Text marginTop="1rem">
                A FV Gestão adota medidas de segurança técnicas, administrativa
                e físicas dos seus dados pessoais, o que inclui:
              </Text>

              <UnorderedList>
                <ListItem marginTop="1rem">
                  Proteção contra acesso não autorizado e utilização indevida.
                </ListItem>
                <ListItem marginTop="1rem">
                  Acesso restrito de pessoas ao local onde são armazenadas as
                  informações pessoais.
                </ListItem>
                <ListItem marginTop="1rem">
                  Colaboradores, prestadores de serviço e fornecedores que
                  possuem contato com os dados pessoais devem se comprometer em
                  manter o sigilo dos dados. Assim, a quebra do sigilo
                  acarretará responsabilidade civil e o responsável será
                  responsabilizado nos moldes da legislação aplicável.
                </ListItem>
              </UnorderedList>

              <Text marginTop="1rem">
                Além da adoção das medidas técnicas e físicas, a FV Gestão
                também adota medidas administrativas visando a proteção dos
                dados pessoais, por meio de comitês de governança e privacidade
                dos dados pessoais relativos às atividades e processos da
                empresa.
              </Text>

              <Text marginTop="1rem">
                Mesmo com essas medidas de segurança, nenhuma transmissão de
                informações é totalmente segura, o que pode acarretar em
                incidências na privacidade e proteção dos dados, de modo que a
                FV Gestão não pode garantir integralmente que todos os dados
                recebidos ou enviados não sejam alvos de acessos indevidos
                oriundos de métodos criados para essa finalidade.
              </Text>

              <Heading as="h2" margin="2rem 0 2rem 0">
                Aviso de atualizações
              </Heading>

              <Text marginTop="1rem">
                Este Aviso de Privacidade pode ser alterado a qualquer momento
                pela FV Gestão, devido a seu exclusivo critério, aprimoramento
                da segurança, melhoria dos nossos serviços ou para atendimento
                das obrigações legais, regulatórias ou administrativas.
              </Text>

              <Heading as="h2" margin="2rem 0 2rem 0">
                Legislação aplicável
              </Heading>

              <Text marginTop="1rem">
                Este Aviso de Privacidade é regido, interpretado e executado de
                acordo com as leis da República Federativa do Brasil,
                especialmente a Lei nº 13.709/2018.
              </Text>
            </Container>
          </chakra.div>
        </Box>
        <Footer />
      </Flex>
    </>
  );
}
