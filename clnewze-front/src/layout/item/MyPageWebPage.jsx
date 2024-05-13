import React from "react";

import styles from "../../scss/mypage/commom/mypage.main.module.scss";
import {Col, Row} from "reactstrap";

import MyPageMenuComponent from "../../components/mypage/common/menu/MyPageMenuComponent";
import MyPageWebHeaderComponent from "../../components/mypage/common/header/MyPageWebHeaderComponent";
import {Outlet} from "react-router-dom";

const MyPageWebPage = () => {
  return (
    <div>
      {/* 헤더 표시 */}
      <MyPageWebHeaderComponent/>
      {/* <!-- 마이페이지 카테고리 --> */}
      <div className={`${styles?.myPageContainer}`}>
        <Col md={3} className={`${styles?.myPageMenuContainer} p-4`}>
          <MyPageMenuComponent/>
        </Col>
        {/* 영역 출력 */}
        <Col md={9} className={`${styles?.MyPageWebComponent}`}>
          {/* 함수 써서 출력한다. */}
          <Outlet />
        </Col>
      </div>
    </div>
  );
};

export default MyPageWebPage;
