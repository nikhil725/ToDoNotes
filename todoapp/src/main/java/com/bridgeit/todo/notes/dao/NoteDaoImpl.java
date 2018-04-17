package com.bridgeit.todo.notes.dao;


import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.bridgeit.todo.notes.model.Notes;
import com.bridgeit.todo.user.model.User;

public class NoteDaoImpl implements INoteDao{

	@Autowired
	private SessionFactory mySessionFactory;
 
	public void addNotes(Notes notes) {

		Session session = mySessionFactory.openSession();
		session.save(notes);
		System.out.println("Data saved..");

	}

	public void updateNote(Notes notes, int id) {

		System.out.println("ID in dao: "+id);
		
		Session session = mySessionFactory.getCurrentSession();
		session.update(notes);
		/*Query query = (Query) session.createQuery("update Notes set Title =:title, Description =:description, Trash =:trash where id = :id");
		query.setParameter("title", notes.getTitle());
		query.setParameter("description", notes.getDescription());
		query.setParameter("trash", notes.getTrash());
		System.out.println(notes.getDescription()+"....."+notes.getTitle()+"....."+notes.getTrash());
		query.setParameter("id", id);
		query.executeUpdate();*/
		System.out.println("data updated...");

	}


	public void deleteNote(int id) {

		System.out.println("Inside dao impl");
		Session session = mySessionFactory.openSession();
		//	session.delete(id);
		//		Notes notes = (Notes) session.byId(Notes.class).load(id);
		//		session.delete(notes);
		System.out.println(id);
		System.out.println("Notes deleted");
		String hql = "delete from Notes n where n.id =:id";
		Query query = session.createQuery(hql);
		query.setParameter("id", id);
		query.executeUpdate();
		System.out.println("record delete...");
	}

	public List<Notes> getNotes(User user) {
		System.out.println("print list");

		Session session = mySessionFactory.getCurrentSession();
		Criteria criteria  = session.createCriteria(Notes.class);
		criteria.add(Restrictions.eq("user", user)).setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY);
		System.out.println("print list");
		@SuppressWarnings("unchecked")
		List<Notes> notes = criteria.list();
		System.out.println("print list");
	
		return notes;
	}

	public List<Notes> getNotesbyId(int id) {


		Session session = mySessionFactory.getCurrentSession();
		Criteria criteria = session.createCriteria(Notes.class);
		criteria.add(Restrictions.eq("id", id));
		List<Notes> notes = criteria.list();
		System.out.println("Successfull");
		return notes;
	}





}
