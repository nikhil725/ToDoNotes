package com.bridgeit.todo.collaborator.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.bridgeit.todo.collaborator.dao.ICollaboratorDao;
import com.bridgeit.todo.collaborator.model.Collaborator;
import com.bridgeit.todo.notes.dao.INoteDao;
import com.bridgeit.todo.user.dao.IUserDao;
import com.bridgeit.todo.user.model.User;

public class CollaboratorServiceImpl implements ICollaboratorService{

	@Autowired
	ICollaboratorDao collaboratorDao;
	
	@Autowired
	IUserDao userDao;
	
	@Autowired
	INoteDao noteDao;
	
	@Override
	public void addCollaborator(Collaborator collaborator, int id) {
		
		User user = userDao.getUserByEmaiId(collaborator.getSharedUserId().getEmail());
		collaborator.setSharedUserId(user);			
		
	}
	
	
	

}
