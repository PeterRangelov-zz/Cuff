package controllers;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/submit")
public class SubmissionController {
	 @GET @Produces(MediaType.TEXT_PLAIN)
	 public String sayPlainTextHello() {
	   return "Hello Jersey";
	 }
	 
	 @POST @Consumes(MediaType.APPLICATION_JSON)
	 public Response submitContributorInfo(@FormParam("testInput") String testInput, @FormParam("contributor") String contributor) {
		 System.out.println(testInput);
		 System.out.println(contributor);
		 return Response.ok("Got it! " + testInput + contributor).build();
	 }
	 	 
	 
	 
}
