import NextHead from 'next/head';

interface HeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  imageUrl?: string;
}

export default function Head({
  title = 'FV Gestão Cultura Vencedora',
  description = 'Promova uma cultura vendedora na sua empresa com o nosso método de avaliação e ferramentas de gestão.',
  keywords = 'cultura vencedora, gestao empresarial, educação, treinamento, workshops, universidade corporativa, desenvolvimento humano organizacional, rh, nps, net promoter score, satisfacao do cliente',
  imageUrl = '/img/meta-image.png',
}: HeadProps): JSX.Element {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta name="language" content="pt-BR" />
      <meta name="robots" content="index" />
      <title>{title}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="FV Gestão" />

      <meta property="og:type" content="page" />
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_URL}`} />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_SITE_URL}${imageUrl}`}
      />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@fvgestao" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content="@carlos3duardo" />
      <meta name="twitter:description" content={description} />
    </NextHead>
  );
}
