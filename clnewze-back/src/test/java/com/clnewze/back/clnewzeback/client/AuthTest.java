package com.clnewze.back.clnewzeback.client;

import org.apache.http.Header;
import org.apache.http.message.BasicHeader;
import org.junit.jupiter.api.Test;

import com.clnewze.back.clnewzeback.domain.dto.LoginDto;
import com.clnewze.back.clnewzeback.util.HttpUtil;
import com.clnewze.back.clnewzeback.util.JsonUtil;

public class AuthTest {

  public static String getToken() {

    String url = CommonLoginTest.HOST + "/api/auth/authenticate";
    Header[] headers = new BasicHeader[1];
    headers[0] = new BasicHeader("Content-Type", "application/json");
    LoginDto loginDto = new LoginDto();
    loginDto.setId("tt001");
    loginDto.setPassword("1234");
    String requestBody = JsonUtil.toJson(loginDto);
    String responseBody = HttpUtil.post(url, headers, requestBody, "UTF-8");
    return (String) JsonUtil.toMap(responseBody).get("data");
  }

  @Test
  public void JWT_토큰받기_테스트() {
    System.out.println(getToken());
  }

}