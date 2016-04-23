package controllers;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/test")
public class PulseCheck {
	@GET @Produces(MediaType.TEXT_PLAIN)
	public String getPulsecheck() {
		return "Restful backend is running";
	}
}
