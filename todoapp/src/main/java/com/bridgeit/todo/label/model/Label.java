package com.bridgeit.todo.label.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.bridgeit.todo.user.model.User;

@Entity
@Table
public class Label {
	
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	@Column
	private int labelId;
	
	@Column
	private String name;

	public int getLabelId() {
		return labelId;
	}
	
	@ManyToOne
	@JoinColumn(name = "userId")
	private User user;
	
	

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public void setLabelId(int labelId) {
		this.labelId = labelId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	
}
