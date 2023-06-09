import Head from "next/head";
import Layout from "@/components/layout/layout";
import Hero from "@/components/hero/hero";
import Portfolio from "@/components/portfolio/portfolio";
import Pitch from "@/components/pitch/pitch";
import Services from "@/components/services/services";
import Testimonial from "@/components/testimonials/testimonials";
import NewsLetter from "@/components/newsletter/newsletter";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Naskaxe Travels: The World is Yours to Explore.</title>
        <meta name="viewport" content="width=device-width" />
        <meta
          name="description"
          content="Naskaxe Travels is your one-stop shop for planning your next adventure. We offer a wide range of travel packages, from budget-friendly options to luxury experiences. Whether you're looking for a relaxing beach vacation or an exciting city break, we have something for everyone."
        />
        <meta
          property="og:title"
          content="Naskaxe Travels: The World is Yours to Explore."
        />
        <meta
          property="og:description"
          content="Naskaxe Travels is your one-stop shop for planning your next adventure. We offer a wide range of travel packages, from budget-friendly options to luxury experiences. Whether you're looking for a relaxing beach vacation or an exciting city break, we have something for everyone."
        />
        <meta property="og:image" content="https://naskaxetravels.com/images" />
        <meta property="og:image:alt" content="Naskaxe Travels" />
        <meta
          name="twitter:title"
          content="Naskaxe Travels: The World is Yours to Explore."
        />
        <meta
          name="twitter:description"
          content="Naskaxe Travels is your one-stop shop for planning your next adventure. We offer a wide range of travel packages, from budget-friendly options to luxury experiences. Whether you're looking for a relaxing beach vacation or an exciting city break, we have something for everyone."
        />
        <meta
          name="twitter:url"
          content="https://naskaxetravels.com/?src=twitter"
        />
        <meta
          name="twitter:image:src"
          content="https://naskaxetravels.com/images"
        />
        <meta name="twitter:image:alt" content="Naskaxe Travels" />
        <meta name="twitter:creator" content="@TravelnaskaxeCO" />
        <meta name="twitter:site" content="@TravelnaskaxeCO" />
        <link rel="icon" href="/images/favicon.webp" />
        <link rel="canonical" href="https://www.naskaxetravels.com" />
      </Head>
      <Layout>
        <Hero />
        <Portfolio />
        <Pitch />
        <Services />
        <Testimonial />
        <NewsLetter />
      </Layout>
    </>
  );
}
