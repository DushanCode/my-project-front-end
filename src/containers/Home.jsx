import React from 'react';

import {
  BlogSection,
  Hero,
  MyLibraryCommunity,
  Libraries,
  GetStarted,
  ReligiousSection,
  Books,
} from '../components';

const Home = () => {
  return (
    <div>
      <Hero />
      <BlogSection />
      <MyLibraryCommunity />
      <Libraries />
      <GetStarted />
      <Books />
      <ReligiousSection />
    </div>
  );
};

export default Home;
