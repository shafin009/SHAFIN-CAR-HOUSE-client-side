import React from 'react'
import Banner from './BannerPic/Banner';
import BusinessSummery from './Business Summery/BusinessSummery';
import Review from './Review/Review';
import HomeTools from './Tools/HomeTools';
import ExtraSection from './TwoExtraSection/ExtraSection';
import ExtraSection2 from './TwoExtraSection/ExtraSection2';





const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <ExtraSection></ExtraSection>
      <HomeTools></HomeTools>
      <ExtraSection2></ExtraSection2>
      <BusinessSummery></BusinessSummery>
      <Review></Review>
    </div>

  );
}

export default Homepage;
