import Accordion from '../../Accordion';

interface FaqItemProps {
  pergunta: string;
  resposta: string;
}

interface DuvidasFrequentesProps {
  questoes: FaqItemProps[];
}

export default function DuvidasFrequentes({
  questoes,
}: DuvidasFrequentesProps): JSX.Element {
  const data = questoes.map(q => ({
    title: q.pergunta,
    description: q.resposta,
  }));

  return <Accordion items={data} />;
}
