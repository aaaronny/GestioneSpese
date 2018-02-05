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

import aaaronny.dev.model.Tipospesa;
import aaaronny.dev.service.TipospesaService;

@RestController
@RequestMapping(value="/Tipospese")
public class TipospesaController {
	
	@Autowired
	private TipospesaService service;
	
	private Logger logger = Logger.getLogger(TipospesaController.class);
	
	@RequestMapping(method = RequestMethod.GET, produces="application/json")
	public ResponseEntity<List<Tipospesa>> getAllTipospesas(){
		ResponseEntity<List<Tipospesa>> response = null;
		List<Tipospesa> list = null;
		list = service.findAll();
		if(list != null){
			response = new ResponseEntity<List<Tipospesa>>(list, HttpStatus.OK);
		}else{
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return response;
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.GET, produces="application/json")
	public ResponseEntity<Tipospesa> getTipospesaById(@PathVariable(value="id") int idTipospesa){
		ResponseEntity<Tipospesa> response = null;
		Tipospesa result = null;
		result = service.findById(idTipospesa);
		if(result != null){
			response = new ResponseEntity<Tipospesa>(result, HttpStatus.OK);
		}else{
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return response;
	}
	
	@RequestMapping(method = RequestMethod.POST, produces="application/json", consumes="application/json")
	public ResponseEntity<Boolean> addTipospesa(@RequestBody Tipospesa spesa){
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
	
	@RequestMapping(method = RequestMethod.DELETE, produces="application/json", consumes="application/json")
	public ResponseEntity<Boolean> delTipospesa(@RequestBody Tipospesa spesa){
		logger.info("OBJECT PASSED ----------> " + spesa.toString());
		ResponseEntity<Boolean> response = null;
		boolean result = service.del(spesa);
		if(result){
			response = new ResponseEntity<Boolean>(result, HttpStatus.OK);
		}else{
			response = new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		return response;
	}
	
	@RequestMapping(method = RequestMethod.PUT, produces="application/json", consumes="application/json")
	public ResponseEntity<Boolean> updateTipospesa(@RequestBody Tipospesa spesa){
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
