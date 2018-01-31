package aaaronny.dev.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Repository;

import aaaronny.dev.model.Tipospesa;

@Repository
public class TipospesaDaoImpl implements TipospesaDao {
	
	@PersistenceContext
	private EntityManager entityManager;

	private Logger logger = Logger.getLogger(Tipospesa.class);

	@Override
	public List<Tipospesa> findAll() {
		List<Tipospesa> list = null;
		try{
			list = entityManager.createNamedQuery("Tipospesa.findAll", Tipospesa.class).getResultList();
		}catch (Exception e) {
			logger.error("ERROR ----------> Tipospesa.findAll");
		}
		return list;
	}

	@Override
	public Tipospesa findById(int idTipospesa) {
		Tipospesa Tipospesa = null;
		try{
			Tipospesa = entityManager.find(Tipospesa.class, idTipospesa);
		}catch (Exception e) {
			logger.error("ERROR ----------> Tipospesa.findById(" + idTipospesa + ")");
		}
		return Tipospesa;
	}

	@Override
	public boolean add(Tipospesa Tipospesa) {
		boolean result = false;
		try{
			entityManager.persist(Tipospesa);
			result = true;
		}catch (Exception e) {
			logger.error("ERROR ----------> Tipospesa.Add");
		}
		return result;
	}

	@Override
	public boolean del(Tipospesa Tipospesa) {
		boolean result = false;
		try{
			entityManager.remove(Tipospesa);
			result = true;
		}catch (Exception e) {
			logger.error("ERROR ----------> Tipospesa.Del");
		}
		return result;
	}

	@Override
	public boolean update(Tipospesa Tipospesa) {
		boolean result = false;
		try{
			Tipospesa = entityManager.merge(Tipospesa);
			result = true;
		}catch (Exception e) {
			logger.error("ERROR ----------> Tipospesa.Update");
		}
		return result;
	}

}
