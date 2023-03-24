import { Box, Center, Flex, Grid, Image } from "@chakra-ui/react";
import { CenterContainer } from "../../../shared/containers/centerContainer";
import { LabelText } from "../../../shared/typography/labelText";
import { TicketTraitsSlider } from "./TicketTraitsSlider/ticketTraitsSlider";

export const TicketDescription = () => {
  return (
    <Flex id="ticket" justify="center" p={{base: "120px 0px 80px", md: "100px 0px 80px"}}>
      <CenterContainer>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="60px">
          <Flex flexDir="column">
            <LabelText>MYSTRA NFT TICKET</LabelText>
            <Box
              mt="20px"
              lineHeight="120%"
              ml="-4px"
              fontFamily="Sora"
              fontSize={{base: "28px", md: "40px"}}
              fontWeight={{base: "800", md: "500"}}
            >
              Buy your pass to Web2
            </Box>
            <Box
              color="#CEE5F2"
              fontFamily="Sora"
              mt="30px"
              lineHeight="160%"
              fontSize="16px"
            >
              The entire mystra platform ecosystem is based on a point system.
              Mystra&nbsp;users are scored based on their engagement in the
              Mystra community and the broader Mystra ecosystem. This ensures
              that those who dedicate time.
            </Box>

            <Flex
              display={{ base: "flex", md: "none" }}
              align="center"
			  mt="30px"
              justify="center"
            >
              <Image src="/assets/elements/mystra_ticket.png" />
            </Flex>

            <TicketTraitsSlider
              traits={[
                {
                  label: "Access & Membership",
                  content:
                    "Gives you access to a creative platform. In combination with staking it entitles you to use all the tools of the Mystra platform",
                },
                {
                  label: "Allocation",
                  content:
                    "It is the first step in obtaining allocations in future incubated projects on the platform.",
                },
                {
                  label: "More Points",
                  content:
                    "Each ticket is assigned a fixed amount of points. Increase your points by buying more tickets.",
                },
               
                {
                  label: "DAO Goveranance",
                  content:
                    "Your ticket gives you a vote in decisions regarding the development of the platform and projects we incubate.",
                },
                
              ]}
            />
          </Flex>

          <Flex
            display={{ base: "none", md: "flex" }}
            align="center"
            justify="center"
          >
            <Image src="/assets/elements/mystra_ticket.png" />
          </Flex>
        </Grid>
      </CenterContainer>
    </Flex>
  );
};
