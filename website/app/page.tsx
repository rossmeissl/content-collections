import { Hero } from "./components/Hero";
import { HmrSection } from "./components/HmrSection";
import { TypeSafeApiSection } from "./components/TypeSafeApiSection";
import { ValidationSection } from "./components/ValidationSection";
import { TransformationSection } from "./components/TransformationSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <HmrSection />
      <TypeSafeApiSection />
      <ValidationSection />
      <TransformationSection />
    </main>
  );
}
