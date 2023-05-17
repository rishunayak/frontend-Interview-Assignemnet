import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
     <Box backgroundColor={"#1A1A1A"} p={"50px"}>

      <Flex justifyContent={"space-between"} w={["100","100","90%"]} m="auto" gap={"10px"}>

       <Box  color={"white"} className='footer' w={"50%"}> 
            
                <Box className='footer1'>
                    <Text  mb="10px" fontSize={["13px","13px","24px"]}>Best solutions from</Text>
                    <Image src="https://cdn.discordapp.com/attachments/702481980025077853/1107921625837469716/Vector_Smart_Object.png"/>
                </Box>
                <Box className='footer2'>
                    <Text fontSize={["11px","11px","24px"]} mb={["10px","10px","5px"]}>DOL Max Overlaminate Films</Text>
                    <Text fontSize={["11px","11px","24px"]} mb={["10px","10px","5px"]}>Why us</Text>
                    <Text fontSize={["11px","11px","24px"]} mb={["20px","20px","0px"]}>Enquire now</Text>
                </Box>
         
      </Box>

           <Box className='sideFooter' w={"50%"}>
                <Box fontSize={["8px","8px","13px"]}  color={"#727272"} className='footer3' w={["164px","164px","267px"]}>
                  <Text>Avery Dennison Overlaminate Avery Dennison Overlaminate Films Avery Dennison Digital Overlaminate Films Avery Dennison DOL Max</Text>
                </Box>
                <Box fontSize={["8px","8px","13px"]} color={"#727272"} className='footer4' w={'164px'}>
                  <Text>Overlaminate Overlaminate Films Digital Overlaminate Films</Text>
                </Box>
          </Box>
        
      </Flex>
     
     </Box>
    </>
  )
}

export default Footer