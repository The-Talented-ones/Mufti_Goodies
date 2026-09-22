import AnnouncementBar from "../../components/home/AnnouncementBar";
import HeroSection from "../../components/home/HeroSection";
import FeaturedProduct from "../../components/home/FeaturedProduct";
import WhyMuftiGoodies from "../../components/home/WhyMuftiGoodies";
import DodoStoryPreview from "../../components/home/DodoStoryPreview";
import HowWeMakeIt from "../../components/home/HowWeMakeIt";
import HeritagePreview from "../../components/home/HeritagePreview";
import NewsletterSection from "../../components/home/NewsletterSection";

export default function Home() {
  return (
    <>
      <AnnouncementBar />

      <HeroSection />

      <FeaturedProduct />

      <WhyMuftiGoodies />

      <DodoStoryPreview />

      <HowWeMakeIt />

      <HeritagePreview />

      <NewsletterSection />
    </>
  );
}