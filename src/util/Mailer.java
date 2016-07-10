package util;
import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.io.FileUtils;

import com.sendgrid.SendGrid;
import com.sendgrid.SendGrid.Email;
import com.sendgrid.SendGrid.Response;
import com.sendgrid.SendGridException;

import dto.Contributor;
import dto.CriminalHistory;
import dto.Judgment;
import dto.PhysicalAppearance;
import dto.Subject;
import dto.Warrant;

public class Mailer {
	private static final String SENDGRID_USERNAME = System.getenv("SENDGRID_USERNAME");
	private static final String SENDGRID_API_KEY = System.getenv("SENDGRID_API_KEY");
	private static final String SUBMISSION_SENDER = System.getenv("SUBMISSION_SENDER");
	private static final String SUBMISSION_RECEPIENT = System.getenv("SUBMISSION_RECEPIENT");
	private static final String SUBMISSION_BCC = System.getenv("SUBMISSION_BCC");
	
	
	public void sendStartupNotification () {
		System.out.println("Sendgrid username: " + SENDGRID_USERNAME);
		System.out.println("Sendgrid api key: " + SENDGRID_API_KEY);
		SendGrid sendgrid = new SendGrid(SENDGRID_API_KEY);

	    Email email = new Email();
	    email.addTo(SENDGRID_USERNAME);
	    email.addSmtpApiTo(SENDGRID_USERNAME);
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
	
	public void emailSubmission (Contributor c, Subject s, PhysicalAppearance pa, List<Warrant> warrants, List<Judgment> judgments, List<CriminalHistory> criminalHistory) throws InterruptedException, IOException, URISyntaxException {
		SendGrid sendgrid = new SendGrid(SENDGRID_API_KEY);

	    Email email = new Email();
	    email.addTo(SUBMISSION_RECEPIENT);
	    email.setFrom(SUBMISSION_SENDER);
	    email.setBcc(new String[]{SUBMISSION_BCC});
	    
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
	    
	    StringBuffer criminalHistoryTable = new StringBuffer("<table><tr><td>Municipality</td><td>Charge</td><td>Issued</td></tr>");
    	for (CriminalHistory ch : criminalHistory) {
    		criminalHistoryTable
	    	.append("<tr>")
	    		.append("<td>"+ch.getMunicipality()+"</td>")
	    		.append("<td>"+ch.getCharge()+"</td>")
	    		.append("<td>"+ch.getMonth()+"/"+ch.getYear()+"</td>")
	    		.append("</tr>");
	    }
    	criminalHistoryTable.append("</table>");
    	
    	// Digest file
    	String urlString = System.getenv("EMAIL_TEMPLATE_URL");
    	URL url =  new URL(urlString);
    	File urlFile = new File("temp.txt");
    	FileUtils.copyURLToFile(url, urlFile);
    	String data = FileUtils.readFileToString(urlFile, "UTF-8");
    	String emailContent = String.format(data, c.getFirstName(), c.getLastName(), c.getEmailAddress(), c.getPhoneNumber(), c.getPreferredContactMethod(), c.getRelationship(), c.getCity(), c.getState(), c.getZipcode(),
    			c.getContactName(), c.getContactOrganization(), c.getContactCity(), c.getContactState(), c.getContactPhoneNumber(), c.getContactEmailAddress(),
    			s.getFirstName(), s.getMiddleName(), s.getLastName(), s.getGender(), s.getAliases(), s.getDriversLicense(), s.getSsn(), s.getDob(), s.getBackgroundInfo(),
    			s.getStates(), s.getVehicle(), s.getVehiclePlateNumber(), s.getVin(), s.getReward(),
    			pa.getRace(), pa.getNationality(), pa.getHeight()/12 + " feet, " +pa.getHeight()%12+" inches", pa.getWeight()+ "lbs", pa.getHairColor(), pa.getEyeColor(), pa.getPhysicalCharacteristics(),
    			warrantsTable.toString(), judgmentsTable.toString(), criminalHistoryTable.toString());
    	System.out.println(emailContent);
	    
	    // SET TEMPLATE
//	    email.setTemplateId(System.getenv("SENDGRID_TEMPLATE_ID"));
//	    email.getSMTPAPI()
//	    	.addSubstitution(":contributor_first_name", c.getFirstName())
//	    	.addSubstitution(":contributor_last_name", c.getLastName())
//	    	.addSubstitution(":contributor_email_address", c.getEmailAddress())
//	    	.addSubstitution(":contributor_phone_number", c.getPhoneNumber())
//	    	.addSubstitution(":contributor_preferred_contact_method", c.getPreferredContactMethod())
//	    	.addSubstitution(":contributor_relationship_to_subject", c.getRelationship())
//	    	.addSubstitution(":contributor_city", c.getCity())
//	    	.addSubstitution(":contributor_state", c.getState())
//	    	.addSubstitution(":contributor_zipcode", c.getZipcode())
//	    	.addSubstitution(":contributor_contact_name", c.getCity())
//	    	.addSubstitution(":contributor_contact_organization", c.getContactOrganization())
//	    	.addSubstitution(":contributor_contact_city", c.getContactCity())
//	    	.addSubstitution(":contributor_contact_state", c.getContactState())
//	    	.addSubstitution(":contributor_contact_phone_number", c.getContactPhoneNumber())
//	    	.addSubstitution(":contributor_contact_email_address", c.getContactEmailAddress())
//	    	.addSubstitution(":first_name", s.getFirstName())
//	    	.addSubstitution(":middle_name", s.getMiddleName())
//	    	.addSubstitution(":last_name", s.getLastName())
//	    	.addSubstitution(":aliases", s.getAliases())
//	    	.addSubstitution(":gender", s.getGender())
//	    	.addSubstitution(":drivers_license", s.getDriversLicense())
//	    	.addSubstitution(":ssn", s.getSsn())
//	    	.addSubstitution(":dob", s.getDob())
//	    	.addSubstitution(":background_info", s.getBackgroundInfo())
//	    	.addSubstitution(":race", pa.getRace())
//	    	.addSubstitution(":nationality", pa.getNationality())
//	    	.addSubstitution(":height", pa.getHeight()/12 + " feet, " +pa.getHeight()%12+" inches")
//	    	.addSubstitution(":weight", pa.getWeight() + "lbs")
//	    	.addSubstitution(":hair_color", pa.getHairColor())
//	    	.addSubstitution(":eye_color", pa.getEyeColor())
//	    	.addSubstitution(":physical_characteristics", pa.getPhysicalCharacteristics())
//	    	.addSubstitution(":warrants_table", warrantsTable.toString())
//	    	.addSubstitution(":judgments_table", judgmentsTable.toString())
//	    	.addSubstitution(":criminal_history_table", criminalHistoryTable.toString())
//	    	;
	    
	    email.setSubject(c.getEntryType()+" online submission from " + c.getFirstName());
	    email.setHtml(emailContent);
//	    email.setHtml("Thank you for your submission --CUFF Team");
	    
	    
	    Map<String, String> headers = email.getHeaders();
	    Set<String> keys = headers.keySet();
	    
	    System.out.println("***************** PRINTING HEADERS *****************");
	    System.out.println(headers.size() + " headers:");
	    for (String key : keys) {
	    	String value = (String) headers.get(key);
	    	System.out.println(String.format("%s -> %s", key, value));
	    }
	    System.out.println("****************************************************");
	    
	    Response response;
	    Thread.sleep(1000);
		try {
			response = sendgrid.send(email);
			System.out.println(response.getMessage());
		} catch (SendGridException e) {
			e.printStackTrace();
		}
		
	}
	

}
