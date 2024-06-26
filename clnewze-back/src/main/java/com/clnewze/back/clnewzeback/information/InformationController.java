package com.clnewze.back.clnewzeback.information;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.clnewze.back.clnewzeback.information.dto.Information;
import com.clnewze.back.clnewzeback.util.model.ResponseObject;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/information")
@AllArgsConstructor
public class InformationController {
  private InformationService informationService;

  @GetMapping("/selectList")
  public ResponseEntity<ResponseObject<List<Information>>> selectList(
      @RequestParam(required = false) String genre) {

    List<Information> result = informationService.selectList(genre);
    ResponseObject<List<Information>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }
}
