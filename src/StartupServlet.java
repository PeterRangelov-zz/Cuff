import util.Mailer;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;


@WebServlet(loadOnStartup=1, urlPatterns = {"/startup"})
public class StartupServlet extends HttpServlet {
	{
		System.out.println("Startup servlet running");
		Mailer mailer = new Mailer();
		if (System.getenv("ENVIRONMENT").equalsIgnoreCase("PROD") || System.getenv("ENVIRONMENT").equalsIgnoreCase("STAGING")) {
			mailer.sendStartupNotification();
		}
	}

}