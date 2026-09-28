import { Helmet } from "react-helmet-async";
import HeroSection from "./HeroSection";
import ArticleSection from "./ArticleSection";
import ContentSection from "./ContentSection";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>
          666RS Game Blog | 666RS Pakistan, APK, Download & Gaming Guides
        </title>

        <meta
          name="description"
          content="Explore the 666RS Game Blog for 666RS Pakistan information, 666RS APK, 666RS Game Download, 666RS App, Login, Registration, Games, Deposit, Withdrawal, JazzCash, Easypaisa and responsible gaming guides."
        />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large"
        />

        <link
          rel="canonical"
          href="https://666rs2fs.com/blog"
        />

        <meta
          property="og:title"
          content="666RS Game Blog | Gaming Guides & Information"
        />

        <meta
          property="og:description"
          content="Read useful 666RS Game guides covering 666RS Pakistan, APK, Download, App, Login, Games, payments, account information and responsible gaming."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://666rs2fs.com/blog"
        />
      </Helmet>

      <main id="main-content" className="bg-gray-200 text-gray-900">
        <HeroSection />
        <ArticleSection />
        <ContentSection />
      </main>
    </>
  );
}