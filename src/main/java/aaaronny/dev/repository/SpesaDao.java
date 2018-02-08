package aaaronny.dev.repository;

import java.util.List;

import aaaronny.dev.model.Spesa;

public interface SpesaDao {
	
	public List<Spesa> findAll();
	public Spesa findById(int idSpesa);
	public boolean add(Spesa spesa);
	public boolean update(Spesa spesa);
	public boolean del(int idSpesa);

}
