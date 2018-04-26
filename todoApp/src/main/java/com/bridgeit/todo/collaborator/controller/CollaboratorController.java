package com.bridgeit.todo.collaborator.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.bridgeit.todo.collaborator.model.Collaborator;
import com.bridgeit.todo.collaborator.service.ICollaboratorService;
import com.bridgeit.todo.util.Token;


public class CollaboratorController {

	@Autowired
	private ICollaboratorService collaboratorService;
	
	@RequestMapping(value = "/addCollaborator", method = RequestMethod.POST)
	public ResponseEntity<Void> createCollaborator(@RequestBody Collaborator collaborator, HttpServletRequest request) {
		int id = Token.getId(request.getHeader("Authorization"));
		try {
			collaboratorService.addCollaborator(collaborator, id);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
	}
	
	

}
