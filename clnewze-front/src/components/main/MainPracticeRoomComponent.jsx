import React, { useEffect, useState } from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import styles from "../../scss/main/main.module.scss";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";
import restApiAllUser from "../../util/restApiAllUser";
import PracticeRoom from '../practiceRoom/contents/board/PracticeRoomListComponent';

const MainPracticeRoomComponent = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [items, setItems] = useState([]);

  // 장르 설정 할때 마다
  useEffect(() => {
    restApiAllUser.get(
      process.env.REACT_APP_API_ROOT +
        "practiceroom/selectList?categories=" +
        null
    )
      .then((res) => setItems(res.data.data))
      .catch((e) => console.error(e));
  }, []);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items?.map((item, index) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={index}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
          {/* <button type="button" className={`${styles?.commonMainCard}`} style={{backgroundColor:"white"}}>
            1
          </button> */}
          <PracticeRoom boards={items} />
        <CarouselCaption
          className="text-danger"
          // captionText={item?.caption}
          // captionHeader={item?.caption}
        />
      </CarouselItem>
    );
  });
  return (
    <>
      <div className={`${styles?.mainCommonHeader}`}>
        <h1>연습실 정보</h1>
        <p onClick={() => navigate("/practiceroom")}>
          <ChevronRight /> 더보기
        </p>
      </div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {/* <CarouselIndicators
          items={!!items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        /> */}
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </>
  );
};

export default MainPracticeRoomComponent;