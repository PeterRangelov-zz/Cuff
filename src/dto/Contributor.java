package dto;

import javax.xml.bind.annotation.XmlRootElement;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @XmlRootElement @AllArgsConstructor @NoArgsConstructor
public class Contributor {
	private String firstName;
	private String lastName;
	private String emailAddress;
	private String phoneNumber;
	private String preferredContactMethod;
	
	private String city;
	private String state;
	private String zipcode;
	private String relationship;
	
	

}
