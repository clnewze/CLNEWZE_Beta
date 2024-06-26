package com.clnewze.back.clnewzeback.blog;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.clnewze.back.clnewzeback.util.model.ResponseObject;
import com.clnewze.back.clnewzeback.blog.vo.BlogVo;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/blog")
@AllArgsConstructor
public class BlogController {
  private BlogService blogService;

  /**
   * @return
   */
  @GetMapping("/selectList")
  public ResponseEntity<ResponseObject<List<BlogVo>>> selectList(
      @RequestParam int pageNo,
      @RequestParam int limit) throws Exception {

    List<BlogVo> result = blogService.selectList(pageNo, limit);
    ResponseObject<List<BlogVo>> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }

  @GetMapping("selectListAllCount")
  public ResponseEntity<ResponseObject<Integer>> selectListAllCount() {
    Integer result = blogService.selectListAllCount();
    ResponseObject<Integer> ro = new ResponseObject<>("성공");
    ro.setData(result);
    return new ResponseEntity<>(ro, HttpStatus.OK);
  }
}
