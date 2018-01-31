package aaaronny.dev.repository;

import java.util.List;

import aaaronny.dev.model.Tipospesa;

public interface TipospesaDao {
	
	public List<Tipospesa> findAll();
	public Tipospesa findById(int idTipospesa);
	public boolean add(Tipospesa Tipospesa);
	public boolean del(Tipospesa Tipospesa);
	public boolean update(Tipospesa Tipospesa);

}
