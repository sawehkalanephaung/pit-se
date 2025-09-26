import HeroBanner from '../../sections/home/hero_banner';
import WhoAreWe from '../../sections/home/who_are_we';

import heroBannerImage from '../../../assets/photos/hero-banner.png';
import whoWeAreImage from '../../../assets/photos/about-us.png';

export function HomePage() {
  return (
    <>
      <HeroBanner
        title="Learn Science by Doing"
        description="Free interactive simulations that make Physics, Math, and more simple and fun."
        imageUrl={heroBannerImage}
        imageAlt="Students exploring science simulations"
      />
      <WhoAreWe
        title="We create free, high-quality STEM simulations"
        description="Our mission is to remove the cost and complexity barriers to make education accessible for everyone. Our tools are designed for classrooms, self-learners, and lifelong curiosity."
        highlights={[
          'Research-backed interactive STEM content',
          'Designed alongside educators around the world',
          'Always free for learners, always open for teachers',
        ]}
        imageUrl={whoWeAreImage}
        imageAlt="Students collaborating around science experiments"
        ctaHref="#team"
      />
    </>
  );
}

export default HomePage;
