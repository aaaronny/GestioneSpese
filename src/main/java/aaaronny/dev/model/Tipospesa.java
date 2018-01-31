package aaaronny.dev.model;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The persistent class for the tipospesa database table.
 * 
 */
@Entity
@NamedQuery(name="Tipospesa.findAll", query="SELECT t FROM Tipospesa t")
public class Tipospesa implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int idTipospesa;

	private String descrizione;

	public Tipospesa() {
	}

	public int getIdTipospesa() {
		return this.idTipospesa;
	}

	public void setIdTipospesa(int idTipospesa) {
		this.idTipospesa = idTipospesa;
	}

	public String getDescrizione() {
		return this.descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	@Override
	public String toString() {
		return "Tipospesa [idTipospesa=" + idTipospesa + ", descrizione=" + descrizione + "]";
	}

}