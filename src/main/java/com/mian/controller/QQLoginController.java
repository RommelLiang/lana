package com.mian.controller;

import com.mian.bean.WeChat;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.Map;


/**
 * mianjing
 * Created by Reinhard Tristan Eugen Heydrich
 * On 2016/11/4.
 */
@Controller
@CrossOrigin
public class QQLoginController {
    @Value("${application.message:Hello World}")
    private String message = "Hello World";

    @RequestMapping(value="/a")
    public @ResponseBody String index(){
        System.out.println("Controller.helloJsp().a"+message);
        return "OOOOOOOOOOOOOOO";
    }
    @RequestMapping(value="/qq", method = RequestMethod.GET)
    public @ResponseBody ModelAndView qq(Map<String,Object> map){
        System.out.println("Controller.helloJsp().qq="+message);
        map.put("hello", message);
        ModelAndView modelAndView = new ModelAndView("new");
        return modelAndView;
    }
    @RequestMapping("/jsontest")
    public @ResponseBody Map<String, String> callSomething () {

        Map<String, String> map = new HashMap<String, String>();
        map.put("url", "http://www.leveluplunch.com");
        map.put("a", "http://www.leveluplunch.com");
        map.put("ul", "http://www.leveluplunch.com");
        map.put("ur", "http://www.leveluplunch.com");
        return map;
    }
   /* @RequestMapping("/jsptest")
    public ModelAndView test() {
        System.out.println("modelAndView");
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("jsp-spring-boot");
        return modelAndView;
    }*/

    @RequestMapping(value = "qqlogin",method = RequestMethod.POST)
    public @ResponseBody String stringTest(@RequestBody WeChat weChatBean) {
        System.out.println(weChatBean.getOpenId());
        System.out.println(weChatBean.getAccessToken());
        return "jsp";
    }
}