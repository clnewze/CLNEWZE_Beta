import React, { useState } from 'react'

export default function informationComponent(props) {
  let [ino, setIno] = useState(0);
  let [artist, setArtist] = useState('');
  let [title, setTitle] = useState('');
  let [viewNumber, setViewNumber] = useState(0);
  let [img, setImg] = useState('');
  let [genre, setGenre] = useState('');
  let [releaseDate, setReleaseDate] = useState('');
  let [albumName, setAlbumName] = useState('');
  let [musicLink, setMusicLink] = useState('');
  let [content, setContent] = useState('');

  
  return (
    <div>
      {/* <!-- 상세보기 --> */}
      <div class="bgdim"></div>
      <div class="common-board-detail-container">
        <h5 class="title-detail-information">{artist} - {title}</h5>
        <div style="font-size:9px; color: #555; float:right;">조회수 : {viewNumber} </div>
        <nav class="nav common-content-detail-container">
          <img src={img} class="album"/>
            <div class="detail-container">
              <div class="">장르 : {genre}</div>
              <div class="">발매날짜 : {releaseDate}년</div>
              <div class="">앨범명 : {albumName}</div>
              <div class="">음원 듣기 : {musicLink}</div>
            </div>
        </nav>

        <h3>상세정보</h3>

        {/* <!-- 내용 작성 --> */}
        <div style="height:80%">
          {content}
        </div>

        {/* <!-- 여기는 하단에 놓는다 --> */}
        <nav class="navbar information-button-event" >
          <div>이전 상세목록</div>
          <div>곡 정보 더보기</div>
          <div>다음 상세목록</div>
        </nav>
      </div>
    </div >
  )
}