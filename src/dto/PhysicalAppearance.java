package dto;

import javax.xml.bind.annotation.XmlRootElement;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data @XmlRootElement @AllArgsConstructor @NoArgsConstructor
public class PhysicalAppearance {
	private String race;
	private String nationality;
	private int height;
	private int weight;
	private String hairColor;
	private String eyeColor;
	private String physicalCharacteristics;
	
	

}
