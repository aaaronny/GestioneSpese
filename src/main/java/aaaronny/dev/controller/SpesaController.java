package aaaronny.dev.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import aaaronny.dev.model.Spesa;
import aaaronny.dev.service.SpesaService;

@RestController
@RequestMapping(value="/Spese")
public class SpesaController {
	
	@Autowired
	private SpesaService service;
	
	private Logger logger = Logger.getLogger(SpesaController.class);
	
	@RequestMapping(method = RequestMethod.GET, produces="application/json")
	public ResponseEntity<List<Spesa>> getAllSpesas(){
		ResponseEntity<List<Spesa>> response = null;
		List<Spesa> list = null;
		list = service.findAll();
		if(list != null){
			response = new ResponseEntity<List<Spesa>>(list, HttpStatus.OK);
		}else{
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return response;
	}
	
	@RequestMapping(method = RequestMethod.POST, produces="application/json", consumes="application/json")
	public ResponseEntity<Boolean> addSpesa(@RequestBody Spesa spesa){
		logger.info("OBJECT PASSED ----------> " + spesa.toString());
		ResponseEntity<Boolean> response = null;
		boolean result = service.add(spesa);
		if(result){
			response = new ResponseEntity<Boolean>(result, HttpStatus.OK);
		}else{
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return response;
	}
	
	@RequestMapping(value="/Spese/{id}", method = RequestMethod.DELETE, produces="application/json", consumes="application/json")
	public ResponseEntity<Boolean> delSpesa(@PathVariable(value="id") int idSpesa){
		logger.info("ID OBJECT PASSED ----------> " + idSpesa);
		ResponseEntity<Boolean> response = null;
		boolean result = service.del(idSpesa);
		if(result){
			response = new ResponseEntity<Boolean>(result, HttpStatus.OK);
		}else{
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return response;
	}
	
	@RequestMapping(method = RequestMethod.PUT, produces="application/json", consumes="application/json")
	public ResponseEntity<Boolean> updateSpesa(@RequestBody Spesa spesa){
		logger.info("OBJECT PASSED ----------> " + spesa.toString());
		ResponseEntity<Boolean> response = null;
		boolean result = service.update(spesa);
		if(result){
			response = new ResponseEntity<Boolean>(result, HttpStatus.OK);
		}else{
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return response;
	}

}
