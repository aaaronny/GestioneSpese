package aaaronny.dev.controller;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {
	
	private Logger logger = Logger.getLogger(HomeController.class);
	
	@RequestMapping(value={"/", "/home"}, method = RequestMethod.GET)
	public String getHome(){
		logger.info("REDIRECT OK ----------> index.jsp");
		return "index";
	}
	
}