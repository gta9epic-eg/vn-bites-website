import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { PopularItems } from "@/components/home/popular-items";
import { FeaturedOffers } from "@/components/home/featured-offers";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PopularItems />
      <FeaturedOffers />
    </>
  );
}
