package aaaronny.dev.service;

import java.util.List;

import aaaronny.dev.model.Spesa;

public interface SpesaService {

	public List<Spesa> findAll();
	public Spesa findById(int idSpesa);
	public boolean add(Spesa spesa);
	public boolean del(int idSpesa);
	public boolean update(Spesa spesa);
	
}
