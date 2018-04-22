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
import com.bridgeit.todo.label.model.LabelRes;
import com.bridgeit.todo.label.service.ILabelService;
import com.bridgeit.todo.notes.model.Notes;
import com.bridgeit.todo.util.Token;

@RestController
public class LabelController {

	@Autowired
	ILabelService labelService;
	
	@RequestMapping(value="createLabels", method = RequestMethod.POST)
	public ResponseEntity<String> createLabels(@RequestBody Label label, HttpServletRequest request){
		System.out.println("**** Inside create label #####****");
		
		System.out.println("label name "+label.getName());
		System.out.println("label is ");
		int userId = Token.getId(request.getHeader("Authorization"));
		labelService.createLabel(label, userId);
		return new ResponseEntity<>("label add", HttpStatus.OK);
		
	}
	
	@RequestMapping(value="getLabels", method = RequestMethod.GET)
	public ResponseEntity<?> getLabels(HttpServletRequest request){
	
		System.out.println("In side get label controller...");
	
		int userId = Token.getId(request.getHeader("Authorization"));
		System.out.println("userId is: "+userId);

		
		List<LabelRes> labels = labelService.getLabels(userId);
		
		if (labels.size() != 0) {
			
			return new ResponseEntity<List>(labels,HttpStatus.OK);
			
		} else {
			
			return new ResponseEntity<List<Notes>>(HttpStatus.NO_CONTENT);
		}
		
	}
		
}
