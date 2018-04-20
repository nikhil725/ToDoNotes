package com.bridgeit.todo.label.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import com.bridgeit.todo.label.dao.ILabelDao;
import com.bridgeit.todo.label.model.Label;
import com.bridgeit.todo.user.dao.IUserDao;
import com.bridgeit.todo.user.model.User;

public class LabelServiceImpl implements ILabelService {

	@Autowired
	ILabelDao labelDao;
	
	@Autowired
	IUserDao userDao;
	
	@Transactional
	@Override
	public String createLabel(Label label, int userId) {
		
		User user = userDao.getUserById(userId);
		System.out.println("user id: "+user.getId());
		label.setUser(user);
		labelDao.createlabel(label);
		return null;	
	}

	@Override
	public List<Label> getNotes() {
		
		return null;
	}

}
