package aaaronny.dev.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Repository;

import aaaronny.dev.model.Spesa;

@Repository
@Transactional
public class SpesaDaoImpl implements SpesaDao {
	
	@PersistenceContext
	private EntityManager entityManager;

	private Logger logger = Logger.getLogger(Spesa.class);

	@Override
	public List<Spesa> findAll() {
		List<Spesa> list = null;
		try{
			list = entityManager.createNamedQuery("Spesa.findAll", Spesa.class).getResultList();
			logger.info("FIND OK ----------> Spesa.findAll");
		}catch (Exception e) {
			logger.error("ERROR ----------> Spesa.findAll");
			logger.error("ERROR ----------> " + e.getMessage());
		}
		return list;
	}

	@Override
	public Spesa findById(int idSpesa) {
		Spesa spesa = null;
		try{
			spesa = entityManager.find(Spesa.class, idSpesa);
			logger.info("FIND OK ----------> Spesa.findById(" + idSpesa + ")");
		}catch (Exception e) {
			logger.error("ERROR ----------> Spesa.findById(" + idSpesa + ")");
			logger.error("ERROR ----------> " + e.getMessage());
		}
		return spesa;
	}

	@Override
	public boolean add(Spesa spesa) {
		boolean result = false;
		try{
			entityManager.persist(spesa);
			result = true;
			logger.info("ADD OK ----------> Spesa.Add");
			logger.info("GENERATED ID ----------> " + spesa.getIdSpesa());
		}catch (Exception e) {
			logger.error("ERROR ----------> Spesa.Add");
			logger.error("ERROR ----------> " + e.getMessage());
		}
		return result;
	}

	@Override
	public boolean del(Spesa spesa) {
		boolean result = false;
		Spesa ts = findById(spesa.getIdSpesa());
		try{
			logger.info("ROW SELECTED ----------> " + ts.toString());
			entityManager.remove(ts);
			result = true;
			logger.info("DEL OK ----------> Spesa.Del");
		}catch (Exception e) {
			logger.error("ERROR ----------> Spesa.Del");
			logger.error("ERROR ----------> " + e.getMessage());
		}
		return result;
	}

	@Override
	public boolean update(Spesa spesa) {
		boolean result = false;
		Spesa ts = findById(spesa.getIdSpesa());
		ts.setData(spesa.getData());
		ts.setDescrizione(spesa.getDescrizione());
		ts.setImporto(spesa.getImporto());
		try{
			spesa = entityManager.merge(spesa);
			result = true;
			logger.info("QUERY OK ----------> Spesa.Update");
		}catch (Exception e) {
			logger.error("ERROR ----------> Spesa.Update");
		}
		return result;
	}

}
