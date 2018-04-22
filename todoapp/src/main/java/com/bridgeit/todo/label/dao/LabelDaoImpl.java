package com.bridgeit.todo.label.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import com.bridgeit.todo.label.model.Label;
import com.bridgeit.todo.user.model.User;

public class LabelDaoImpl implements ILabelDao {

	@Autowired
	private SessionFactory mySessionFactory;
	
	@Override
	public String createlabel(Label label) {
		
		Session session = mySessionFactory.getCurrentSession();
		session.save(label);
		
		return null;	
	}

	@Override
	public List<Label> getLabels(User user) {
		Session session = mySessionFactory.getCurrentSession();
		Criteria criteria = session.createCriteria(Label.class);
		criteria.add(Restrictions.eq("user", user));
		List<Label> labels = criteria.list();
		return labels;
	}
	
}
