package aaaronny.dev.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import aaaronny.dev.model.Tipospesa;
import aaaronny.dev.repository.TipospesaDao;

@Service
public class TipospesaServiceImpl implements TipospesaService {

	@Autowired
	private TipospesaDao dao;
	
	@Override
	public List<Tipospesa> findAll() {
		return dao.findAll();
	}

	@Override
	public Tipospesa findById(int idTipospesa) {
		return dao.findById(idTipospesa);
	}

	@Override
	public boolean add(Tipospesa tipospesa) {
		return dao.add(tipospesa);
	}

	@Override
	public boolean del(Tipospesa tipospesa) {
		return dao.del(tipospesa);
	}

	@Override
	public boolean update(Tipospesa tipospesa) {
		return dao.update(tipospesa);
	}

}
