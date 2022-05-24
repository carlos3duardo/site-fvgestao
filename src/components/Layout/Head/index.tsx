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

      <meta key="title" name="title" content={title} />
      <meta key="description" name="description" content={description} />

      {/* Open Graph / Facebook */}

      <meta key="facebook-title" property="og:title" content={title} />
      <meta
        key="facebook-description"
        property="og:description"
        content={description}
      />
      <meta
        key="facebook-url"
        property="og:url"
        content={typeof window !== 'undefined' ? window.location.href : ''}
      />
      <meta
        key="facebook-image"
        property="og:image"
        content={
          typeof window !== 'undefined'
            ? `${window?.location.origin}${imageUrl}`
            : ''
        }
      />
      <meta key="type" property="og:type" content="website" />

      {/* Twitter */}

      <meta key="twitter-title" property="twitter:title" content={title} />
      <meta
        key="twitter-description"
        property="twitter:description"
        content={description}
      />
      <meta
        key="twitter-url"
        property="twitter:url"
        content={typeof window !== 'undefined' ? window?.location.href : ''}
      />
      <meta
        key="twitter-image"
        property="twitter:image"
        content={
          typeof window !== 'undefined'
            ? `${window?.location.origin}${imageUrl}`
            : ''
        }
      />
      <meta
        key="twitter-card"
        property="twitter:card"
        content={
          typeof window !== 'undefined'
            ? `${window?.location.origin}${imageUrl}`
            : ''
        }
      />
    </NextHead>
  );
}
