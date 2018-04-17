package com.bridgeit.todo.notes.model;

public class NoteRes {

	private int noteId;
	private String title;
	private String description;
	private Boolean trash;
	private Boolean archive;
	private Boolean pin;

	public NoteRes(Notes object) {
		
		this.noteId= object.getNoteId();
		this.title = object.getTitle();
		this.description=object.getDescription();
		this.trash = object.getTrash();
		this.archive = object.getArchive();
		this.pin = object.getPin();
	}
	
	
	public int getNoteId() {
		return noteId;
	}
	public void setNoteId(int noteId) {
		this.noteId = noteId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Boolean getTrash() {
		return trash;
	}
	public void setTrash(Boolean trash) {
		this.trash = trash;
	}
	public Boolean getArchive() {
		return archive;
	}
	public void setArchive(Boolean archive) {
		this.archive = archive;
	}
	public Boolean getPin() {
		return pin;
	}
	public void setPin(Boolean pin) {
		this.pin = pin;
	}
	

}
