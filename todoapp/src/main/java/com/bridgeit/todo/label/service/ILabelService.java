package com.bridgeit.todo.label.service;

import java.util.List;

import com.bridgeit.todo.label.model.Label;

public interface ILabelService {
	
	public String createLabel(Label label, int userID);
	public List<Label> getNotes();
	
	
}
