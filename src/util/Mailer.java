package util;
import java.util.List;

import com.sendgrid.SendGrid;
import com.sendgrid.SendGrid.Email;
import com.sendgrid.SendGrid.Response;
import com.sendgrid.SendGridException;

import dto.Contributor;
import dto.Judgment;
import dto.PhysicalAppearance;
import dto.Subject;
import dto.Warrant;

public class Mailer {
	private static final String SENDGRID_USERNAME = System.getenv("SENDGRID_USERNAME");
	private static final String SENDGRID_API_KEY = System.getenv("SENDGRID_API_KEY");
	private static final String SUBMISSION_RECEPIENT = System.getenv("SUBMISSION_RECEPIENT");
	private static final String SUBMISSION_SENDER = System.getenv("SUBMISSION_SENDER");
	
	public void sendStartupNotification () {
		System.out.println("Sendgrid username: " + SENDGRID_USERNAME);
		System.out.println("Sendgrid api key: " + SENDGRID_API_KEY);
		
		SendGrid sendgrid = new SendGrid(SENDGRID_API_KEY);

	    Email email = new Email();
	    email.addTo(SENDGRID_USERNAME);
	    email.setFrom(SUBMISSION_SENDER);
	    email.setSubject("CUFF Notification: Application Startup");
	    email.setText("Startup Servlet triggered in environment: " + System.getenv("ENVIRONMENT"));
	    
	    Response response;
		try {
			response = sendgrid.send(email);
			System.out.println(response.getMessage());
		} catch (SendGridException e) {
			e.printStackTrace();
		}
			
	}
	
	public void emailSubmission (Contributor c, Subject s, PhysicalAppearance pa, List<Warrant> warrants, List<Judgment> judgments) {
		SendGrid sendgrid = new SendGrid(SENDGRID_API_KEY);

	    Email email = new Email();
	    email.addTo(SUBMISSION_RECEPIENT);
	    email.setFrom(SUBMISSION_SENDER);
	    email.setSubject("CUFF Notification: New online submission");
	    
	    // Add border
	    StringBuffer warrantsTable = new StringBuffer("<table><tr><td>Municipality</td><td>Charge</td><td>Warrant number</td><td>Issued</td></tr>");
    	for (Warrant w : warrants) {
	    	warrantsTable
	    	.append("<tr>")
	    		.append("<td>"+w.getMunicipality()+"</td>")
	    		.append("<td>"+w.getCharge()+"</td>")
	    		.append("<td>"+w.getWarrantNumber()+"</td>")
	    		.append("<td>"+w.getMonth()+"/"+w.getYear()+"</td>")
	    		.append("</tr>");
	    }
	    warrantsTable.append("</table>");
	    
	    StringBuffer judgmentsTable = new StringBuffer("<table><tr><td>Municipality</td><td>Judgment number</td><td>Amount</td><td>Issued</td></tr>");
    	for (Judgment j : judgments) {
    		judgmentsTable
	    	.append("<tr>")
	    		.append("<td>"+j.getMunicipality()+"</td>")
	    		.append("<td>"+j.getJudgmentNumber()+"</td>")
	    		.append("<td>"+j.getAmount()+"</td>")
	    		.append("<td>"+j.getMonth()+"/"+j.getYear()+"</td>")
	    		.append("</tr>");
	    }
    	judgmentsTable.append("</table>");
	    
	    System.out.println(warrantsTable);
	    
	    // SET TEMPLATE
	    email.setTemplateId(System.getenv("SENDGRID_TEMPLATE_ID"));
	    email.getSMTPAPI()
	    	.addSubstitution(":contributor_first_name", c.getFirstName())
	    	.addSubstitution(":contributor_last_name", c.getLastName())
	    	.addSubstitution(":contributor_email_address", c.getEmailAddress())
	    	.addSubstitution(":contributor_phone_number", c.getPhoneNumber())
	    	.addSubstitution(":contributor_preferred_contact_method", c.getPreferredContactMethod())
	    	.addSubstitution(":contributor_city", c.getCity())
	    	.addSubstitution(":contributor_state", c.getState())
	    	.addSubstitution(":contributor_zipcode", c.getZipcode())
	    	.addSubstitution(":first_name", s.getFirstName())
	    	.addSubstitution(":middle_name", s.getMiddleName())
	    	.addSubstitution(":last_name", s.getLastName())
	    	.addSubstitution(":aliases", s.getAliases())
	    	.addSubstitution(":drivers_license", s.getDriversLicense())
	    	.addSubstitution(":ssn", s.getSsn())
	    	.addSubstitution(":dob", s.getDob())
	    	.addSubstitution(":background_info", s.getBackgroundInfo())
	    	.addSubstitution(":race", pa.getRace())
	    	.addSubstitution(":nationality", pa.getNationality())
	    	.addSubstitution(":height", pa.getHeight())
	    	.addSubstitution(":weight", pa.getWeight())
	    	.addSubstitution(":hair_color", pa.getHairColor())
	    	.addSubstitution(":eye_color", pa.getEyeColor())
	    	.addSubstitution(":physical_characteristics", pa.getPhysicalCharacteristics())
	    	.addSubstitution(":warrants_table", warrantsTable.toString())
	    	.addSubstitution(":judgments_table", judgmentsTable.toString())
	    	;
	    	
	    email.setHtml("Thank you for your submission --CUFF Team");
	    
	    Response response;
		try {
			response = sendgrid.send(email);
			System.out.println(response.getMessage());
		} catch (SendGridException e) {
			e.printStackTrace();
		}
		
	}
	

}
