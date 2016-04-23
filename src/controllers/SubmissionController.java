package controllers;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/submit")
public class SubmissionController {
	 @GET @Produces(MediaType.TEXT_PLAIN)
	 public String sayPlainTextHello() {
	   return "Hello Jersey";
	 }
}
