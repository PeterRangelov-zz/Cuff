package util;
import com.sendgrid.SendGrid;
import com.sendgrid.SendGridException;
import com.sendgrid.SendGrid.Email;
import com.sendgrid.SendGrid.Response;

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
	
	public void emailSubmission () {
		SendGrid sendgrid = new SendGrid(SENDGRID_API_KEY);

	    Email email = new Email();
	    email.addTo(SUBMISSION_RECEPIENT);
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
	

}
