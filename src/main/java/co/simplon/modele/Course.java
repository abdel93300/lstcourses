package co.simplon.modele;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "COURSE")
@NamedQueries({
		@NamedQuery(name = "Course.findAll", query = " SELECT c FROM Course c JOIN c.enseigne e ORDER BY c.dateAchat ") })
public class Course {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "IDC")
	private int idC;

	@JsonIgnore
	@OneToOne
	@JoinColumn(name = "IDE")
	private Enseigne enseigne;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	@Column(name = "DATE_ACHAT")
	private Date dateAchat;

	public Course(Enseigne enseigne, Date dateAchat) {
		super();
		this.enseigne = enseigne;
		this.dateAchat = dateAchat;
	}

	public Course() {
	}

	public int getIdC() {
		return idC;
	}

	public Enseigne getEnseigne() {
		return enseigne;
	}

	public void setEnseigne(Enseigne enseigne) {
		this.enseigne = enseigne;
	}

	public Date getDateAchat() {
		return dateAchat;
	}

	public void setDateAchat(Date dateAchat) {
		this.dateAchat = dateAchat;
	}

//	@Override
//	public String toString() {
//		return "Monument [identifiant=" + identifiant + ", nom=" + nom
//				+ ", ville=" + ville + "]";
//	}
}
