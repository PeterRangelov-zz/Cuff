import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;

import com.sendgrid.SendGrid;
import com.sendgrid.SendGridException;

@WebServlet(loadOnStartup=1, urlPatterns = {"/mailer"})
public class StartupServlet extends HttpServlet {
	
	
	String user = "peter.rangelov11@gmail.com";
	String sendgridKey = System.getenv("SENDGRID_API_KEY");
	{
		System.out.println("Startup servlet running");
		
		SendGrid sendgrid = new SendGrid(sendgridKey);

	    SendGrid.Email email = new SendGrid.Email();
	    email.addTo(user);
	    email.setFrom(user);
	    email.setSubject("Hello World");
	    email.setText("Sending email from environment: " + System.getenv("ENVIRONMENT"));
	    
	    SendGrid.Response response;
		try {
			response = sendgrid.send(email);
			System.out.println(response.getMessage());
		} catch (SendGridException e) {
			e.printStackTrace();
		}
	      
	}

}
