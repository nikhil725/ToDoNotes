package com.bridgeit.todo.notes.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import com.bridgeit.todo.collaborator.dao.CollaboratorDaoImpl;
import com.bridgeit.todo.collaborator.dao.ICollaboratorDao;
import com.bridgeit.todo.collaborator.model.Collaborator;
import com.bridgeit.todo.notes.dao.INoteDao;
import com.bridgeit.todo.notes.model.NoteRes;
import com.bridgeit.todo.notes.model.Notes;
import com.bridgeit.todo.user.dao.IUserDao;
import com.bridgeit.todo.user.model.User;

public class NoteServiceImpl implements INoteService{
	
	@Autowired
	INoteDao noteDao;
	
	@Autowired
	IUserDao userDao;
	
	@Autowired
	ICollaboratorDao collaboratorDao;

	@Transactional
	public int createNote(Notes notes, int id) {
		System.out.println("In side create note dao");
		User user = userDao.getUserById(id);
		Date date = new Date();
		
		notes.setUser(user);
		noteDao.addNotes(notes);
		
				return 0;
	}

	@Transactional
	public void updateNote(Notes notes, int id) {
		//get user from user table
		User user = userDao.getUserById(id);
		notes.setUser(user);
		noteDao.updateNote(notes, id);
						
	}

	@Transactional
	public int deleteNote(int noteId) {	
		
		
		
		//Note note=noteDao.getnoteByNoteId();
		//if(note.user.id!=userid){
		// 
		//}
		
//			Notes notes = (Notes) noteDao.getNotesbyId(noteId);
//			if(notes.getUser().getId()!=userId) {
//				System.out.println("Unauthorization token");
//			}
		noteDao.deleteNote(noteId);
		return 0;
				
	}

	
	@Transactional
	public List<NoteRes> getNotes(int id) {
		System.out.println("in service");
	//	return noteDao.getNotesbyId(id);
		User user = userDao.getUserById(id);
		 List<Notes> notes =noteDao.getNotes(user);	
		 List<Collaborator> collabs = collaboratorDao.getCollbySharedId(user);
		 
		 for (Collaborator collaborator : collabs) {
			 
			 Notes obj = collaborator.getNoteId();
			 obj.setCollaboratorName(collaborator.getOwnerId().getName());
			 notes.add(obj);
			
		}
		 
		 List<NoteRes> resDTO = new ArrayList<NoteRes>();
		 
		 for(Notes object : notes) 
		 {	
			/* if(object.getCollaborators()!= null) {
			 for( Collaborator collaboratorObj :object.getCollaborators())
		     {
			  // Notes coollaboratedNote= noteDao.getSharedNote(collaboratorObj.getNoteId(),collaboratorObj.getSharedUserId());
				 Notes note = noteDao.getNote(collaboratorObj.getNoteId());
				 User user2 = userDao.getuser(collaboratorObj.getOwnerId());
				 object.setTitle(note.getTitle());
				 object.setDescription(note.getDescription());
				 object.setCollaboratorName(user2.getName());
		      }
			 }*/
			
			// noteDao.getlabelBynoteId(object.getNoteId())
			 NoteRes dto= new NoteRes(object);
			 resDTO.add(dto);
		 }
		 return resDTO;
		}
	
	
	/*public List<NoteRes> getNotes(int id) {
		System.out.println("in service");
	//	return noteDao.getNotesbyId(id);
		User user = userDao.getUserById(id);
		 List<Notes> notes =noteDao.getNotes(user);	
		
		 List<NoteRes> resDTO = new ArrayList<>();
		 
		 for(Notes object : notes) 
		 {
			 NoteRes dto= new NoteRes(object);
			 resDTO.add(dto);
		 }
		 return resDTO;
		}*/
				
	}
