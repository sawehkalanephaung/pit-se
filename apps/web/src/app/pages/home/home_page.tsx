import HeroBanner from '../../sections/home/hero_banner';
import heroBannerImage from '../../../assets/photos/hero-banner.png';

export function HomePage() {
  return (
    <>
      <HeroBanner
        title="Learn Science by Doing"
        description="Free interactive simulations that make Physics, Math, and more simple and fun."
        imageUrl={heroBannerImage}
        imageAlt="Students exploring science simulations"
      />
    </>
  );
}

export default HomePage;
