import React, { Component } from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components'

export default function HeaderComponent(props) {
  let navigate = useNavigate();
  const movePage = (link) => {

  }
  
  return (
    // < !--헤더 작성: 맴버, 소개, 곡목록, 악보, 커뮤니티, 다국어기능, 검색-- >
    <div class="header">
      <nav class="hd-content1 navbar">
        <div class="header_logo">
          <a href="/">로고(추가예정)<img src="" /></a>
        </div>
        <div class="header_search">
          <div class="input-group">
            <div class="input-group-prepend">
              <button id="hd-search-menu" class="btn hd-dropdown-color dropdown-toggle"
                type="button" data-target="#" data-toggle="dropdown"
                aria-haspopup="true" role="button" aria-expanded="false" style="width:140px">전체</button>
              <div class="dropdown-menu" role="menu" aria-labelledby="hd-search-menu">
                <button id="hd-search-all" class="dropdown-item" type="button">전체</button>
                <button id="hd-search-information" class="dropdown-item" type="button">곡목록</button>
                <button id="hd-search-media" class="dropdown-item" type="button">영상</button>
                <button id="hd-search-sheetmusic" class="dropdown-item" type="button">악보</button>
                <button id="hd-search-community" class="dropdown-item" type="button">커뮤니티</button>
                <button id="hd-search-teacher" class="dropdown-item" type="button">레슨샘찾기</button>
                <button id="hd-search-practiceRoom" class="dropdown-item" type="button">연습실정보</button>
              </div>
            </div>
            <input id="hd-search" type="text" class="form-control header-search-input"
              aria-label="Text input with dropdown button" />
            <i class="fas fa-search header-icon" onclick=""></i>
          </div>
        </div>

        {/* <!-- 여기는 그냥 100px의 여백 두기 --> */}
        <div style="display:flex;width:100px;"></div>

        <div class="header_language">
          <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button"
              id="select-language" data-target="#" data-toggle="dropdown"
              aria-haspopup="true" role="button" aria-expanded="false">
              Korean
            </button>
            <div class="dropdown-menu" role="menu" aria-labelledby="select-language">
              <button id="select-korean" class="dropdown-item" type="button">Korean</button>
              <button id="select-japanese" class="dropdown-item" type="button">Japanese</button>
              <button id="select-English" class="dropdown-item" type="button">English</button>
              <button id="" class="dropdown-item" type="button">etc..</button>
            </div>
          </div>
        </div>

        <i class="fas fa-list header-icon"></i>

        <div class="header_mymenu">
          <button type="button">
            <i class="fas fa-user-circle"></i>
            <span class="header-nickname">홍길동</span>
          </button>
        </div>

      </nav>

      <nav class="hd-content2 navbar">
        <button type="button" onclick={() => movePage('introduction')}> 소개</button>
        <button type="button" onclick={() => movePage('information')}>곡정보</button>
        <button type="button" onclick={() => movePage('media')}>영상</button>
        <button type="button" onclick={() => movePage('sheetmusic')}>악보</button>
        <button type="button" onclick={() => movePage('teacher')}>레스너찾기</button>
        <button type="button" onclick={() => movePage('practiceRoom')}>연습실정보</button>
        <button type="button" onclick={() => movePage('community')}>커뮤니티</button>
      </nav>

    </div>
  )
}
