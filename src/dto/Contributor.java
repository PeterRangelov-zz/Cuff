package dto;

import lombok.Data;

@Data
public class Contributor {
	private String firstName;
	private String lastName;
	private String city;
	private String state;
	private String zipcode;
	private String emailAddress;
	private String phoneNumber;
	private String preferredContactMethod;

}
