package com.bridgeit.todo.label.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import com.bridgeit.todo.label.dao.ILabelDao;
import com.bridgeit.todo.label.model.Label;
import com.bridgeit.todo.label.model.LabelRes;
import com.bridgeit.todo.notes.dao.INoteDao;
import com.bridgeit.todo.notes.model.NoteRes;
import com.bridgeit.todo.notes.model.Notes;
import com.bridgeit.todo.user.dao.IUserDao;
import com.bridgeit.todo.user.model.User;

public class LabelServiceImpl implements ILabelService {

	@Autowired
	ILabelDao labelDao;
	
	@Autowired
	IUserDao userDao;
	
	@Autowired
	INoteDao noteDao;
	
	@Transactional
	@Override
	public String createLabel(Label label, int userId) {
		
		System.out.println("### Inside service####");
		User user = userDao.getUserById(userId);
		System.out.println("user id: "+user.getId());
		label.setUser(user);
		labelDao.createlabel(label);
		return null;	
	}

	@Transactional
	@Override
	public List<LabelRes> getLabels(int userId) {
	
		
		List <Label> labels = null;
		User user = userDao.getUserById(userId);
		
        	labels = labelDao.getLabels(user);
        	 List<LabelRes> labelDto = new ArrayList<LabelRes>();
        	 for(Label object : labels) 
    		 {
        		 LabelRes dto = new LabelRes(object);
        		 labelDto.add(dto);
    		 }
    		 return labelDto;
    		}

	@Override
	@Transactional
	public void addLabel(int noteId, int labelId) {
		
		Notes note = noteDao.getNotesbyId(noteId).get(0);
		Label label = labelDao.getLabelById(labelId);
		note.getLabels().add(label);
		noteDao.updateNote(note, note.getNoteId());
	}

	@Override
	public void deleteLabel() {
		// TODO Auto-generated method stub
		
		
	}

	@Override
	public void deleteLabelFromNote() {
		// TODO Auto-generated method stub
		
	}
       
     	}

