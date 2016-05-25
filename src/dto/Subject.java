package dto;

import java.util.ArrayList;

import javax.xml.bind.annotation.XmlRootElement;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @XmlRootElement @AllArgsConstructor @NoArgsConstructor
public class Subject {
	private String gender;
	private String firstName;
	private String middleName;
	private String lastName;
	private String aliases;
	private String driversLicense;
	private String ssn;
	private String dob;
	private String backgroundInfo;
	
	
	

}
