package com.bridgeit.todo.label.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bridgeit.todo.label.model.Label;
import com.bridgeit.todo.label.service.ILabelService;
import com.bridgeit.todo.util.Token;

@RestController
public class LabelController {

	@Autowired
	ILabelService labelService;
	
	@RequestMapping(value="createLabels", method = RequestMethod.POST)
	public ResponseEntity<String> createLabels(@RequestBody Label label, HttpServletRequest request){
			
		int userId = Token.getId(request.getHeader("Authorization"));
		labelService.createLabel(label, userId);
		return new ResponseEntity<>("label add", HttpStatus.OK);
		
	}
	
	@RequestMapping(value="getLabels", method = RequestMethod.GET)
	public ResponseEntity<List<Label>> getLabels(){
		
		return null;
		
	}
		
}
