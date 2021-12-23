import React from "react";
import {
  MainSectionContainer,
  MainSectionCard,
  MainSectionCardInfo,
  MainSectionCardIcon,
  MainSectionCardPlan,
  MainSectionCardExp,
  MainSectionCardLength,
  MainSectionCardFeatures,
  ImgWrapper,
  Img,
  HashtagSelect,
} from "./MainSection.elements";
import { distanceCalc } from "./DistCalculator.js";
import Hashtag from "./Hashtag";

const MainSectionFragment = ({ contents, mainSearchHandle }) => {
  let dist =
    Math.round(
      (distanceCalc(contents.lat, contents.long) + Number.EPSILON) * 100
    ) / 100;

  // const hashtags = likes_hash_tags.map((hashtag) => {
  //   return <> {hashtag}<br/> </>
  // });
  return (
    <MainSectionContainer>
      <MainSectionCard>
        <MainSectionCardInfo>
          <MainSectionCardIcon>
            <ImgWrapper>
              <Img src={contents.title_img} alt="타이틀 이미지" />
            </ImgWrapper>
          </MainSectionCardIcon>
          <MainSectionCardPlan>{contents.title}</MainSectionCardPlan>
          <MainSectionCardExp></MainSectionCardExp>
          <MainSectionCardLength>{dist} km</MainSectionCardLength>
          <MainSectionCardFeatures>
            {contents.likes_hash_tags.map((fill) => (
              <HashtagSelect>
                <Hashtag
                  text={fill}
                  mainSearchHandle={mainSearchHandle}
                ></Hashtag>
              </HashtagSelect>
            ))}
          </MainSectionCardFeatures>
        </MainSectionCardInfo>
      </MainSectionCard>
    </MainSectionContainer>
  );
};

export default MainSectionFragment;
