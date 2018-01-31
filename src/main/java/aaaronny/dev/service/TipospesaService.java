package aaaronny.dev.service;

import java.util.List;

import aaaronny.dev.model.Tipospesa;

public interface TipospesaService {

	public List<Tipospesa> findAll();
	public Tipospesa findById(int idTipospesa);
	public boolean add(Tipospesa tipospesa);
	public boolean del(Tipospesa tipospesa);
	public boolean update(Tipospesa tipospesa);
	
}
