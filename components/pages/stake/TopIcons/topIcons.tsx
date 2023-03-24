import { Grid, Image } from "@chakra-ui/react";
import { IconAssets } from "../../../../config";
import { GlassIcon } from "./glassIcon";

export const TopIcons = () => {
  return <Grid gridTemplateColumns={{base: "1fr", lg: "1fr 1fr"}} gridGap="24px">
	  <GlassIcon
	  	content={"Our dedicated server for the project is characterized by a high level of security."}
		icon={<Image src={IconAssets.server}/>}
		heading={'Secure server!'}
	  />
	  	  <GlassIcon
	  	content={"We care about the environment, so our servers use renewable energy sources."}
		icon={<Image src={IconAssets.eco_friendly}/>}
		heading={'We are Eco-Friendly!'}
	  />
  </Grid>;
};
