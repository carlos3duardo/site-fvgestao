import NextHead from 'next/head';

interface HeadProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export default function Head({
  title = 'FV Gestão Cultura Vencedora',
  description = 'Promova uma cultura vendedora na sua empresa com o nosso método de avaliação e ferramentas de gestão.',
  imageUrl = '/img/meta-image.png',
}: HeadProps): JSX.Element {
  return (
    <NextHead>
      <title>{title}</title>

      {/* Primary Meta Tags */}

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={typeof window !== 'undefined' ? window.location.href : ''}
      />
      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={
          typeof window !== 'undefined'
            ? `${window?.location.origin}${imageUrl}`
            : ''
        }
      />

      {/* Twitter */}

      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content={typeof window !== 'undefined' ? window.location.href : ''}
      />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={
          typeof window !== 'undefined'
            ? `${window?.location.origin}${imageUrl}`
            : ''
        }
      />
    </NextHead>
  );
}
