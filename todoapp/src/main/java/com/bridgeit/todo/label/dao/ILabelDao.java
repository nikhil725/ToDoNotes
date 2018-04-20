package com.bridgeit.todo.label.dao;

import java.util.List;

import com.bridgeit.todo.label.model.Label;
import com.bridgeit.todo.user.model.User;

public interface ILabelDao {

	String createlabel(Label label);
	public List<Label> getNotes(User user);

	
}
