import { ChevronDownIcon, EmailIcon } from "@chakra-ui/icons";
import { Box, Text, Image, UnorderedList, ListItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <Box>
        <Box width="100%" height="50px" bgColor="#000" paddingTop="5px">
          <Box maxW="871px" margin="0 auto">
            <Box display="flex" justifyContent="space-around">
              <Text color="#fff" fontSize="12px">
                English
                <ChevronDownIcon marginLeft={1} />
              </Text>
              <Text color="#fff" fontSize="12px">
                <FontAwesomeIcon
                  width="12px"
                  height="12px"
                  icon={faLocationDot}
                  color="#FF7821"
                />
                Location: Al nur house, pahartoli, Chittagong
              </Text>
              <Text color="#fff" fontSize="12px">
                <EmailIcon width="12px" height="12px" color="#FF7821" />
                techshore2023@gmail.com
              </Text>
              <Box display="flex" justifyContent="space-between" w="103px">
                <Image
                  height="16px"
                  width="16px"
                  src="/facebook.png"
                  alt="fbimage"
                ></Image>
                <Image
                  src="/linkedin.png"
                  height="16px"
                  width="16px"
                  alt="fbimage"
                ></Image>
                <Image
                  src="/twitter.png"
                  height="16px"
                  width="16px"
                  alt="fbimage"
                ></Image>
                <Image
                  src="/youtube.png"
                  height="16px"
                  width="16px"
                  alt="fbimage"
                ></Image>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box width="950px" color="#FFFFFF" height="65px">
          <Image
            src="/techshore-02.png"
            alt="logo"
            width="160px"
            height="65px"
          ></Image>
          <UnorderedList>
            <ListItem color="#000">Lorem ipsum dolor sit amet</ListItem>
          </UnorderedList>
        </Box>
      </Box>
    </>
  );
};
