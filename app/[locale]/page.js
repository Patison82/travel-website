import Carousel from "@/components/Carousel";
import Parallax from "@/components/Main";
import FlightSearchForm from "@/components/FlightSearchForm";
import HotelSearchForm from "@/components/HotelSearchForm";
import Icons from "@/components/Icons";
import HotelSection from "@/components/HotelSection";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

const i18nNamespaces = ["home", "about"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNamespaces}
      >
        <main>
          <Parallax />
          <FlightSearchForm />
          <Carousel />
          <HotelSearchForm />
          <HotelSection />
          <Icons />
        </main>
      </TranslationsProvider>
    </>
  );
}
