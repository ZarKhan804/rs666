import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  canonical,
  children,
}) {
  const siteUrl = "https://666rspak.com";

  const canonicalUrl = canonical
    ? `${siteUrl}${canonical}`
    : siteUrl;

  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:site_name"
        content="666RSPak"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      {children}
    </Helmet>
  );
}

export default SEO;