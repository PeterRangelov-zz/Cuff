import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;

import com.sendgrid.SendGrid;
import com.sendgrid.SendGridException;

@WebServlet(loadOnStartup=1, urlPatterns = {"/startup"})
public class StartupServlet extends HttpServlet {
	{
		System.out.println("Startup servlet running");
		Mailer mailer = new Mailer();
		if (System.getenv("ENVIRONMENT").equalsIgnoreCase("PROD")) {
			mailer.sendStartupNotification();
		}
	}

}
