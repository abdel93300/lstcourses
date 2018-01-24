package co.simplon.modele;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

@Entity
@Table(name = "ENSEIGNE")
@NamedQueries({
		@NamedQuery(name = "Enseigne.findAll", query = " SELECT e FROM Enseigne e ORDER BY e.nomEnseigne ") })
public class Enseigne {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "IDE")
	private int idE;

	@Column(name = "NOM_E", nullable = false, length = 30)
	private String nomEnseigne;

	@Column(name = "VILLE", nullable = false, length = 30)
	private String ville;
	
	@Column(name = "CODE_POSTAL", nullable = false, length = 5)
	private String codePostal;

	public Enseigne(String nomEnseigne, String ville, String codePostal) {
		super();
		this.nomEnseigne = nomEnseigne;
		this.ville = ville;
		this.codePostal = codePostal;
	}

	public Enseigne() {
	}

	public int getIdE() {
		return this.idE;
	}

	public String getNomEnseigne() {
		return this.nomEnseigne;
	}

	public String getVille() {
		return ville;
	}

	public String getCodePostal() {
		return codePostal;
	}

	
	public void setIdE(int idE) {
		this.idE = idE;
	}

	public void setNomEnseigne(String nomEnseigne) {
		this.nomEnseigne = nomEnseigne;
	}

	public void setVille(String ville) {
		this.ville = ville;
	}

	public void setCodePostal(String codePostal) {
		this.codePostal = codePostal;
	}
	
	

//	@Override
//	public String toString() {
//		return "Monument [identifiant=" + identifiant + ", nom=" + nom
//				+ ", ville=" + ville + "]";
//	}
}
