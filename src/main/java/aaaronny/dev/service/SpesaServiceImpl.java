package aaaronny.dev.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import aaaronny.dev.model.Spesa;
import aaaronny.dev.repository.SpesaDao;

@Service
public class SpesaServiceImpl implements SpesaService {

	@Autowired
	private SpesaDao dao;
	
	@Override
	public List<Spesa> findAll() {
		return dao.findAll();
	}

	@Override
	public Spesa findById(int idSpesa) {
		return dao.findById(idSpesa);
	}

	@Override
	public boolean add(Spesa spesa) {
		return dao.add(spesa);
	}

	@Override
	public boolean del(int idSpesa) {
		return dao.del(idSpesa);
	}

	@Override
	public boolean update(Spesa spesa) {
		return dao.update(spesa);
	}

}
