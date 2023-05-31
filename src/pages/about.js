import PagesHero from "@/components/pages-hero/pages-hero";
import Layout from "../components/layout/layout";
import Profile from "@/components/profile/profile";
import Assurance from "@/components/assurance/assurance";
import CtaLayout from "@/components/ctalayout/ctalayout";
import Testimonial from "@/components/testimonials/testimonials";
import Picture from "../../public/images/AboutHero.webp";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Naskaxe Travels: About</title>
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
        <meta name="twitter:title" content="Naskaxe Travels: About." />
        <meta
          name="twitter:description"
          content="Naskaxe Travels is your one-stop shop for planning your next adventure. We offer a wide range of travel packages, from budget-friendly options to luxury experiences. Whether you're looking for a relaxing beach vacation or an exciting city break, we have something for everyone."
        />
        <meta
          name="twitter:url"
          content="https://naskaxetravels.com/about/?src=twitter"
        />
        <meta
          name="twitter:image:src"
          content="https://naskaxetravels.com/images"
        />
        <meta name="twitter:image:alt" content="Naskaxe Travels" />
        <meta name="twitter:creator" content="@TravelnaskaxeCO" />
        <meta name="twitter:site" content="@TravelnaskaxeCO" />
        <link rel="icon" href="/images/favicon.webp" />
        <link rel="canonical" href="https://www.naskaxetravels.com/about" />
      </Head>
      <Layout>
        <PagesHero title={"about us"} navigation={"about"} image={Picture} />
        <Profile />
        <Assurance />
        <CtaLayout />
        <Testimonial />
      </Layout>
    </>
  );
};

export default About;
