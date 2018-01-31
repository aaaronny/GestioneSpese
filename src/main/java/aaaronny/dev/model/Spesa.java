package aaaronny.dev.model;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the spesa database table.
 * 
 */
@Entity
@NamedQuery(name="Spesa.findAll", query="SELECT s FROM Spesa s")
public class Spesa implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int idSpesa;

	@Temporal(TemporalType.DATE)
	private Date data;

	private String descrizione;

	private float importo;

	//bi-directional many-to-one association to Tipospesa
	@ManyToOne
	@JoinColumn(name="tipospesa")
	private Tipospesa tipospesaBean;

	public Spesa() {
	}

	public int getIdSpesa() {
		return this.idSpesa;
	}

	public void setIdSpesa(int idSpesa) {
		this.idSpesa = idSpesa;
	}

	public Date getData() {
		return this.data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public String getDescrizione() {
		return this.descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public float getImporto() {
		return this.importo;
	}

	public void setImporto(float importo) {
		this.importo = importo;
	}

	public Tipospesa getTipospesaBean() {
		return this.tipospesaBean;
	}

	public void setTipospesaBean(Tipospesa tipospesaBean) {
		this.tipospesaBean = tipospesaBean;
	}

	@Override
	public String toString() {
		return "Spesa [idSpesa=" + idSpesa + ", data=" + data + ", descrizione=" + descrizione + ", importo=" + importo
				+ ", tipospesaBean=" + tipospesaBean + "]";
	}

}