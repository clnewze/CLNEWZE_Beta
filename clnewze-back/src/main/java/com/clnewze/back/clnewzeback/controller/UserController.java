package com.clnewze.back.clnewzeback.controller;

import java.security.NoSuchAlgorithmException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.support.SessionStatus;

import com.clnewze.back.clnewzeback.domain.dto.TUserDto;
import com.clnewze.back.clnewzeback.domain.entity.TUser;
import com.clnewze.back.clnewzeback.domain.model.ResponseObject;
import com.clnewze.back.clnewzeback.service.UserService;

import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/user")
@Slf4j
@AllArgsConstructor
public class UserController {
  private UserService userService;

  // 회원 가입
  @PostMapping("/signup")
  public ResponseEntity<ResponseObject<TUser>> signup(@Valid @RequestBody TUserDto t_userDto)
      throws NoSuchAlgorithmException {
    log.debug("회원가입");
    TUser result = userService.signup(t_userDto);
    ResponseObject<TUser> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 사용자 전체 조회
//  @GetMapping("/")
//  @PreAuthorize("hasAnyRole('ADMIN')")
//  public ResponseEntity<ResponseObject<TUser>> getMyUserInfo() {
//    // T_user result = userService.getMyUserWithAuthorities().get();
//    System.out.println("전체 사용자 조회 완료");
//    TUserDto t_userDto = userService.getMyUserWithAuthorities();
//    TUser result = TUser.builder().id(t_userDto.getId())//
//        // .password(t_userDto.getPassword())//
//        .userName(t_userDto.getUserName())//
//        .creTime(t_userDto.getCrtTime())//
//        .loginTime(t_userDto.getLoginTime())//
//        .nickName(t_userDto.getNickName())//
//        .birthday(t_userDto.getBirthday())//
//        .activated(t_userDto.getActivated())//
//        .build();
//    ResponseObject<TUser> ro = new ResponseObject<>("성공");
//    ro.setData(result);
//    return new ResponseEntity<>(ro, HttpStatus.OK);
//  }

  // 특정 사용자 조회
  @GetMapping("/{id}")
  public ResponseEntity<ResponseObject<TUser>> getMyUserInfo(@RequestParam String id) {
    // T_user result = userService.getMyUserWithAuthorities(id).get();
    TUserDto t_userDto = userService.getMyUserWithAuthorities(id);
    TUser result = TUser.builder().id(t_userDto.getId()).userName(t_userDto.getUserName())
        .creTime(t_userDto.getCrtTime()).loginTime(t_userDto.getLoginTime()).nickName(t_userDto.getNickName())
        .birthday(t_userDto.getBirthday()).activated(t_userDto.getActivated()).build();
    ResponseObject<TUser> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  // 인증 로그인 -> 이부분을 JWT 로그인 인증 처리를 진행해야함
  // 혹은 signin API 필요 없이 AuthController를 이용하여 token 값만 받은 것으로 끝내도 무방한지 여부를 알고
  // 싶습니다.
  @PostMapping("/signin")
  public Boolean signIn(@RequestBody TUser t_user) throws NoSuchAlgorithmException {
    //
    System.out.println("로그인 처리 완료");

    // 아래는 그냥 임시로 true로 지정함
    return true;
    // Boolean b = userService.userSearch(t_user);
    // return b;
  }

  // 간편 로그인 (인증 무시)
  @PostMapping("/simplelogin")
  public Boolean simpleLogin(@RequestBody TUser t_user) throws NoSuchAlgorithmException {
    Boolean b = userService.userSearch(t_user);
    return b;
  }

  // 로그아웃 처리 용도, 현재는 사용하지 않고 있으며, 개발 예정이다.
  @RequestMapping("/logout")
  public void logout(SessionStatus status, HttpSession session) throws Exception {
    // @SessionAttributes에서 관리하는 세션 데이터를 모두 제거한다.
    status.setComplete();
    // 세션을 꺼내 무효화시킨다.
    session.invalidate();
  }

}