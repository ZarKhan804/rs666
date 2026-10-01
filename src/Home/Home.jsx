import { Helmet } from "react-helmet-async";

import HeroSection from "./HeroSection";
import ArticleSection from "./ArticleSection";
import ContentSection from "./ContentSection";

function Home() {
  const title = "666RS Game Pakistan – Download APK & Play Online";

  const description =
    "Explore 666RS Game Pakistan information, mobile access, gaming features, download guidance, account resources and useful gaming guides.";

  const canonicalUrl = "https://666rspak.com/";

  return (
    <>
      <Helmet>
        <title>{title}</title>

        <meta
          name="description"
          content={description}
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="author" content="666RS" />

        <link
          rel="canonical"
          href={canonicalUrl}
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={description}
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="666RS" />

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
      </Helmet>

      <main
        id="main-content"
        className="bg-gray-200"
      >
        <HeroSection />
        <ArticleSection />
        <ContentSection />
      </main>
    </>
  );
}

export default Home;