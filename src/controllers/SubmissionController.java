package controllers;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.PropertyNamingStrategy;
import org.codehaus.jackson.type.TypeReference;

import dto.Contributor;
import dto.Judgment;
import dto.PhysicalAppearance;
import dto.Subject;
import dto.Warrant;
import util.Mailer;

@Path("/submit")
public class SubmissionController {
	 @GET @Produces(MediaType.TEXT_PLAIN)
	 public String sayPlainTextHello() {
	   return "Hello Jersey";
	 }
	 
	 @POST @Consumes(MediaType.APPLICATION_JSON) @Produces(MediaType.TEXT_PLAIN)
	 public Response submitContributorInfo(@FormParam("testInput") String testInput, @FormParam("contributor") String contributor, @FormParam("subject") String subject, @FormParam("physical_appearance") String physicalAppearance, @FormParam("warrants") String warrants, @FormParam("judgments") String judgments) throws JsonParseException, JsonMappingException, IOException, InterruptedException {
		 ObjectMapper mapper = new ObjectMapper().setPropertyNamingStrategy(PropertyNamingStrategy.CAMEL_CASE_TO_LOWER_CASE_WITH_UNDERSCORES);
		 Contributor c = mapper.readValue(contributor, Contributor.class);
		 Subject s = mapper.readValue(subject, Subject.class);
		 PhysicalAppearance pa = mapper.readValue(physicalAppearance, PhysicalAppearance.class);
		 ArrayList<Warrant> w = mapper.readValue(warrants, new TypeReference<List<Warrant>>(){});
		 ArrayList<Judgment> j = mapper.readValue(judgments, new TypeReference<List<Judgment>>(){});
		 
		 System.out.println("Contributor: " + c);
		 System.out.println("Subject: " + s);
		 System.out.println("Physical appearance: " + pa);
		 System.out.println("Warrants: " + w);
		 System.out.println("Judgments: " + j);
		 
		 System.out.println(pa.getHeight()/12 + " feet, " +pa.getHeight()%12+" inches");
		 
		 Mailer mailer = new Mailer();
		 mailer.emailSubmission(c, s, pa, w, j);
		 
		 return Response.ok("Got it! " + testInput + contributor).build();
	 }
	 	 
	 
	 
}
