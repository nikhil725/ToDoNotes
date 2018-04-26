package com.bridgeit.todo.collaborator.dao;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.bridgeit.todo.collaborator.model.Collaborator;

public class CollaboratorDaoImpl implements ICollaboratorDao{

	
	@Autowired
	private SessionFactory mySessionFactory;
	
	@Override
	public void addCollaborator(Collaborator collaborator) {
		
	Session session = mySessionFactory.getCurrentSession();
	session.save(collaborator);
	System.out.println("collaborat successfully");
	
	}

}
