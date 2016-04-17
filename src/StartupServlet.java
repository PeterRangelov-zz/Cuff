import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;

import com.sendgrid.SendGrid;
import com.sendgrid.SendGridException;

@WebServlet(loadOnStartup=1, urlPatterns = {"/startup"})
public class StartupServlet extends HttpServlet {
	{
		Mailer mailer = new Mailer();
		mailer.sendStartupNotification();
	}

}
