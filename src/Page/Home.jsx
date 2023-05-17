import { Box, Button, Center, Checkbox, Flex, FormControl, FormLabel, HStack, Heading, Image, Input, InputGroup, InputRightElement, List, ListItem, Select, Stack, Text, Textarea, UnorderedList, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
//import bannerImageCopy from "./Components/Assests/bannerImageCopy.png"

const Home = () => {

   const [inquire,setInquire]=useState("none")

  const handleInquire=()=>
  {
    setInquire("block")
    console.log(inquire)
  } 

  
  return (
    <Box>

      <Box position={"absolute"} zIndex={1}  top={"570px"} display={[inquire,inquire,"none"]} id='inqure'>
      <Stack spacing={8}  w={'95%'} m="auto" >
       
       <Box
         rounded={'lg'}
         bgColor={"#fff"}
         boxShadow={'lg'}
         p={8}>
           <Heading>Connect with us</Heading>
           <Text mb={"20px"}>for outstanding protective overlaminates</Text>
         <Stack spacing={4}>
           
             <Box>
               <FormControl id="firstName">
                 <FormLabel>First Name</FormLabel>
                 <Input type="text" />
               </FormControl>
             </Box>
             <Box >
               <FormControl id="lastName">
                 <FormLabel>Last Name</FormLabel>
                 <Input type="text" />
               </FormControl>
             </Box>
             
             
             <Box >
               <FormControl id="email">
                 <FormLabel>Email</FormLabel>
                 <Input type="email" />
               </FormControl>
             </Box>
             <Box >
               <FormControl id="number">
                 <FormLabel>Contact Number</FormLabel>
                 <Input type="number" />
               </FormControl>
             </Box>

          

           
             <Box>
               <FormControl id="company">
                 <FormLabel>Company</FormLabel>
                 <Input type="text" />
               </FormControl>
             </Box>
             <Box >
               <FormControl id="State">
                 <FormLabel>State</FormLabel>
                 <Select >
                   <option>California</option>
                   <option>USA</option>
                   <option>India</option>
                   <option>America</option>
                 </Select>
               </FormControl>
             </Box>



           <FormControl id="details">
             <FormLabel>How would you describe yourself?</FormLabel>
             <Select >
                   <option>Installer</option>
                   <option>Programer</option>
                   <option>India</option>
                   <option>America</option>
                 </Select>
           </FormControl>


           <FormControl id="Preferred" >
             <FormLabel>Preferred Distributor:</FormLabel>
             <Select >
                   <option>Aerotect</option>
                   <option>Programer</option>
                   <option>India</option>
                   <option>America</option>
                 </Select>
           </FormControl>

           <FormControl id="details">
             <FormLabel>Additional Information</FormLabel>
             <Textarea></Textarea>
           </FormControl>

          
           <Flex gap={"10px"} alignItems={"flex-start"}> <Box mt={"5px"}><Checkbox ></Checkbox> </Box> <span>I'd like to receive promotions, product information and service offers from Avery Dennison.</span></Flex>
            


           <Stack spacing={10} pt={2} alignItems={"center"}>
             <Button
             m="10px 0px"
              fontSize={"20px"}
               loadingText="Submitting"
               width={"40%"}
               colorScheme='orange'
               color={'white'}
               p={"20px 10px"}
               onClick={()=>setInquire("none")}
               >
               Submit  <ArrowForwardIcon ml={"20px"} fontSize={["20px","20px","50px"]}/>
             </Button>
           </Stack>
         















         
          
         </Stack>
       </Box>
     </Stack>


      </Box>




      <Box  position={"absolute"} zIndex={1} left={"55%"} top={"100px"} display={["none","none",inquire]} id='inqure'>

      <Stack spacing={8}  w={'100%'} >
       
        <Box
          rounded={'lg'}
          bgColor={"#fff"}
          boxShadow={'lg'}
          p={8}>
            <Heading>Connect with us</Heading>
            <Text mb={"20px"}>for outstanding protective overlaminates</Text>
          <Stack spacing={4}>
            <HStack>
              <Box w={"50%"}>
                <FormControl id="firstName">
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box w={"50%"}>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              </HStack>
              <HStack>
              <Box w={"50%"}>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input type="email" />
                </FormControl>
              </Box>
              <Box w={"50%"}>
                <FormControl id="number">
                  <FormLabel>Contact Number</FormLabel>
                  <Input type="number" />
                </FormControl>
              </Box>

            </HStack>

            <HStack>
              <Box w={"50%"}>
                <FormControl id="company">
                  <FormLabel>Company</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box w={"50%"}>
                <FormControl id="State">
                  <FormLabel>State</FormLabel>
                  <Select >
                    <option>California</option>
                    <option>USA</option>
                    <option>India</option>
                    <option>America</option>
                  </Select>
                </FormControl>
              </Box>

            </HStack>


            <FormControl id="details">
              <FormLabel>How would you describe yourself?</FormLabel>
              <Select >
                    <option>Installer</option>
                    <option>Programer</option>
                    <option>India</option>
                    <option>America</option>
                  </Select>
            </FormControl>


            <FormControl id="Preferred" >
              <FormLabel>Preferred Distributor:</FormLabel>
              <Select >
                    <option>Aerotect</option>
                    <option>Programer</option>
                    <option>India</option>
                    <option>America</option>
                  </Select>
            </FormControl>

            <FormControl id="details">
              <FormLabel>Additional Information</FormLabel>
              <Textarea></Textarea>
            </FormControl>
   

            <Flex gap={"10px"} alignItems={"flex-start"}> <Box mt={"5px"}><Checkbox ></Checkbox> </Box> <span>I'd like to receive promotions, product information and service offers from Avery Dennison.</span></Flex>
            
             


            <Stack spacing={10} pt={2} alignItems={"center"}>
             <Button
              m="10px 0px"
               fontSize={"30px"}
                loadingText="Submitting"
                width={"40%"}
                colorScheme='orange'
                color={'white'}
                p={"30px 0px"}
                onClick={()=>setInquire("none")}
                >
                Submit <ArrowForwardIcon ml={"20px"} fontSize={["20px","20px","50px"]}/>
              </Button>
            </Stack>
          















          
           
          </Stack>
        </Box>
      </Stack>

      </Box>

        <Box id='top' left={"-431px"} backgroundImage={["https://cdn.discordapp.com/attachments/990722581189500938/1108149853655158804/banner_image_copy2x.png","https://cdn.discordapp.com/attachments/990722581189500938/1108149853655158804/banner_image_copy2x.png","https://cdn.discordapp.com/attachments/702481980025077853/1107797906683088966/banner_image_copy.png"]}  backgroundPosition={"80% 0%"} backgroundSize="cover" ba backgroundRepeat={"no-repeat"} h={["80vh","80vh","100vh"]} >
            <Box ml={["20px","20px","100px"]} pt={["20px","20px", "80px"]}>
              <Box display={["none","none","block"]}>
              <Image src={'https://cdn.discordapp.com/attachments/702481980025077853/1107800059988422796/Asset_34x-8.png'} />
              </Box>

              <Box display={["block","block","none"]}>
              <Image src={'https://cdn.discordapp.com/attachments/990722581189500938/1108145537011683359/Asset_34x-8.png'} />
              </Box>
               
               <Heading mt={["40px","40px", "120px"]} w={["329px","329px","754px"]} fontSize={["22px","22px","51px"]}>
                 Take your graphics protection to the next level with DOL Max overlaminates
               </Heading>
               <Text mt="30px" fontSize={["16px","16px","34px"]} w={["248px","248px","527px"]}>Pair with MPI 1105 wrapping film for ramped up protection</Text>

               <Flex gap={["20px","20px", "80px"]}  mt="50px"  display={["none","none","flex"]}>
                 <Box >
                  <svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
                    <circle id="Ellipse_19" data-name="Ellipse 19" cx="54.5" cy="54.5" r="40.5" fill="#292929"/>
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="37.769" height="51.313" viewBox="0 0 37.769 51.313" x="35" y="31" >
                  <defs>
                  
                  <clipPath id="clip-path" >
                    <rect id="Rectangle_139" data-name="Rectangle 139" width="37.769" height="51.313" fill="#fff"  />
                  </clipPath>
                    </defs>
                   <g id="Group_194" data-name="Group 194" clip-path="url(#clip-path)" >
                     <path id="Path_87" data-name="Path 87" d="M37.769,18.92A18.884,18.884,0,1,0,4.2,30.756v19.56a.953.953,0,0,0,1.267.9L18.884,46.6,32.3,51.259h0a.953.953,0,0,0,1.267-.9V30.757a18.776,18.776,0,0,0,4.2-11.837ZM18.884,1.94A16.951,16.951,0,0,1,31.207,30.557c-.133.143-.257.286-.391.419s-.523.486-.79.714l-.514.438c-.257.209-.533.409-.81.6l-.619.419q-.391.257-.8.486l-.743.4c-.257.134-.514.257-.781.371s-.581.238-.885.352-.486.191-.724.266-.685.2-1.038.295l-.648.171c-.409.086-.819.143-1.228.2l-.533.086h0a16.458,16.458,0,0,1-3.609,0l-.533-.086c-.409-.057-.819-.114-1.228-.2l-.648-.171c-.352-.086-.7-.181-1.038-.295s-.486-.171-.733-.266-.591-.229-.885-.352-.524-.248-.781-.371l-.743-.4q-.41-.238-.8-.486l-.628-.428q-.415-.286-.8-.6l-.523-.448c-.266-.229-.533-.466-.781-.714s-.266-.286-.409-.428h0A16.951,16.951,0,0,1,18.884,1.94Zm12.78,47.035L19.2,44.7a.952.952,0,0,0-.628,0L6.1,48.975V32.786c.191.171.391.323.581.486l.362.3c.343.276.7.533,1.048.781l.419.286c.352.229.7.448,1.067.648l.5.286c.343.181.7.352,1.057.5l.6.266c.343.143.685.257,1.028.381l.685.238c.343.1.685.181,1.038.266s.486.123.733.171.762.124,1.143.171c.219,0,.438.076.667.1s.6,0,.9.048v3.172a.953.953,0,0,0,1.905,0V37.748a5.567,5.567,0,0,0,.9-.048c.3-.048.438-.066.667-.1.381-.048.771-.1,1.143-.171s.486-.114.733-.171.7-.162,1.038-.266L25,36.767c.343-.114.7-.238,1.028-.381l.6-.266c.362-.162.714-.324,1.057-.514l.495-.276c.362-.209.724-.419,1.076-.648l.419-.286c.362-.248.714-.514,1.048-.79l.352-.3c.191-.162.391-.314.581-.486Z" transform="translate(0 0)" fill="#fff"/>
                     <path id="Path_88" data-name="Path 88" d="M52.878,74.536a.966.966,0,0,0,1.352,0L67.743,61.042a.953.953,0,0,0,0-1.352l-3.381-3.371a.952.952,0,0,0-1.343,0L53.6,65.746l-2.7-2.857a.945.945,0,0,0-1.39,0L46.125,66.45a.953.953,0,0,0,0,1.324ZM50.2,64.889l2.676,2.857h0a.951.951,0,0,0,1.371,0L63.686,58.3l2.029,2.029L53.553,72.517,48.144,67.1Z" transform="translate(-38.059 -46.511)" fill="#fff"/>
                   </g>
                  </svg>
                  </svg>
 
                  <Text textAlign={"center"} fontSize={"20px"} color={"#5D5D5D"} w="122px">Maximum Durability</Text>
               </Box>
                 <Box>
                 <svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
                    <circle id="Ellipse_19" data-name="Ellipse 19" cx="54.5" cy="54.5" r="40.5" fill="#292929"/>
                    <svg id="Group_195" data-name="Group 195" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="40.107" height="47.313" viewBox="0 0 40.107 47.313"  x="35" y="32" >
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_75" data-name="Rectangle 75" width="40.107" height="47.313" fill="#fff"/>
    </clipPath>
  </defs>
  <g id="Group_105" data-name="Group 105" clip-path="url(#clip-path)">
    <path id="Path_42" data-name="Path 42" d="M39.989,11.195a.856.856,0,0,0-.719-.772C32.166,9.3,27.988,7.014,20.634.228a.854.854,0,0,0-1.16,0C12.122,7.014,7.945,9.3.838,10.422a.856.856,0,0,0-.719.772,39.589,39.589,0,0,0,4.32,21.281,34.7,34.7,0,0,0,6.39,8.775,28.1,28.1,0,0,0,8.894,6,.859.859,0,0,0,.66,0,28.1,28.1,0,0,0,8.894-6,34.7,34.7,0,0,0,6.39-8.775,39.589,39.589,0,0,0,4.32-21.281ZM20.054,45.528C8.585,40.523.827,26.269,1.773,12c6.912-1.19,11.212-3.543,18.281-9.987,7.068,6.444,11.369,8.8,18.281,9.987.946,14.267-6.812,28.521-18.281,33.526" transform="translate(0 0)" fill="#fff"/>
  </g>
</svg>
                  </svg>
                  <Text textAlign={"center"} fontSize={"20px"} color={"#5D5D5D"} w="122px">Enhanced Appearance</Text>
                 </Box>
                 <Box>
                 <svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
                    <circle id="Ellipse_19" data-name="Ellipse 19" cx="54.5" cy="54.5" r="40.5" fill="#292929"/>
                    <svg id="Asset_2ne" data-name="Asset 2ne" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" x="25" y="28">
  <g id="Layer_2">
    <g id="Symbols">
      <path id="Path_89" data-name="Path 89" d="M43.27,7.25v42.5H11.57V7.25H43.283M44.533,6H10.32V51H44.533V6Z" transform="translate(2.58 1.5)" fill="#fff"/>
      <line id="Line_1" data-name="Line 1" x1="21.475" transform="translate(19.263 42.025)" fill="none" stroke="#fff" stroke-width="1"/>
      <line id="Line_2" data-name="Line 2" x1="33.4" transform="translate(13.3 36.375)" fill="none" stroke="#fff" stroke-width="1"/>
      <line id="Line_3" data-name="Line 3" x1="10.462" transform="translate(19.263 45.825)" fill="none" stroke="#fff" stroke-width="1"/>
      <rect id="Rectangle_140" data-name="Rectangle 140" width="60" height="60" fill="none" opacity="0.3"/>
      <line id="Line_4" data-name="Line 4" y1="5.2" x2="9.012" transform="translate(26.163 17.962)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/>
      <line id="Line_5" data-name="Line 5" y1="5.213" x2="9.025" transform="translate(24.237 23.075)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/>
    </g>
  </g>
</svg>
                  </svg>
                  <Text textAlign={"center"} fontSize={"20px"} color={"#5D5D5D"}  w="122px">High Gloss Finish</Text>
                 </Box>
               </Flex>



               <Flex  display={["flex","flex","none"]}>
                 <Box >
                  <svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 109 109">
                    <circle id="Ellipse_19" data-name="Ellipse 19" cx="54.5" cy="54.5" r="28" fill="#292929"/>
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="35" height="35" viewBox="0 0 37.769 51.313" x="37" y="35" >
                  <defs>
                  
                  <clipPath id="clip-path" >
                    <rect id="Rectangle_139" data-name="Rectangle 139" width="37.769" height="51.313" fill="#fff"  />
                  </clipPath>
                    </defs>
                   <g id="Group_194" data-name="Group 194" clip-path="url(#clip-path)" >
                     <path id="Path_87" data-name="Path 87" d="M37.769,18.92A18.884,18.884,0,1,0,4.2,30.756v19.56a.953.953,0,0,0,1.267.9L18.884,46.6,32.3,51.259h0a.953.953,0,0,0,1.267-.9V30.757a18.776,18.776,0,0,0,4.2-11.837ZM18.884,1.94A16.951,16.951,0,0,1,31.207,30.557c-.133.143-.257.286-.391.419s-.523.486-.79.714l-.514.438c-.257.209-.533.409-.81.6l-.619.419q-.391.257-.8.486l-.743.4c-.257.134-.514.257-.781.371s-.581.238-.885.352-.486.191-.724.266-.685.2-1.038.295l-.648.171c-.409.086-.819.143-1.228.2l-.533.086h0a16.458,16.458,0,0,1-3.609,0l-.533-.086c-.409-.057-.819-.114-1.228-.2l-.648-.171c-.352-.086-.7-.181-1.038-.295s-.486-.171-.733-.266-.591-.229-.885-.352-.524-.248-.781-.371l-.743-.4q-.41-.238-.8-.486l-.628-.428q-.415-.286-.8-.6l-.523-.448c-.266-.229-.533-.466-.781-.714s-.266-.286-.409-.428h0A16.951,16.951,0,0,1,18.884,1.94Zm12.78,47.035L19.2,44.7a.952.952,0,0,0-.628,0L6.1,48.975V32.786c.191.171.391.323.581.486l.362.3c.343.276.7.533,1.048.781l.419.286c.352.229.7.448,1.067.648l.5.286c.343.181.7.352,1.057.5l.6.266c.343.143.685.257,1.028.381l.685.238c.343.1.685.181,1.038.266s.486.123.733.171.762.124,1.143.171c.219,0,.438.076.667.1s.6,0,.9.048v3.172a.953.953,0,0,0,1.905,0V37.748a5.567,5.567,0,0,0,.9-.048c.3-.048.438-.066.667-.1.381-.048.771-.1,1.143-.171s.486-.114.733-.171.7-.162,1.038-.266L25,36.767c.343-.114.7-.238,1.028-.381l.6-.266c.362-.162.714-.324,1.057-.514l.495-.276c.362-.209.724-.419,1.076-.648l.419-.286c.362-.248.714-.514,1.048-.79l.352-.3c.191-.162.391-.314.581-.486Z" transform="translate(0 0)" fill="#fff"/>
                     <path id="Path_88" data-name="Path 88" d="M52.878,74.536a.966.966,0,0,0,1.352,0L67.743,61.042a.953.953,0,0,0,0-1.352l-3.381-3.371a.952.952,0,0,0-1.343,0L53.6,65.746l-2.7-2.857a.945.945,0,0,0-1.39,0L46.125,66.45a.953.953,0,0,0,0,1.324ZM50.2,64.889l2.676,2.857h0a.951.951,0,0,0,1.371,0L63.686,58.3l2.029,2.029L53.553,72.517,48.144,67.1Z" transform="translate(-38.059 -46.511)" fill="#fff"/>
                   </g>
                  </svg>
                  </svg>
 
                  <Text m="auto" fontSize={"9px"} color={"#5D5D5D"}  w="48px">Maximum Durability</Text>
               </Box>
                 <Box>
                 <svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 109 109">
                    <circle id="Ellipse_19" data-name="Ellipse 19" cx="54.5" cy="54.5" r="28" fill="#292929"/>
                    <svg id="Group_195" data-name="Group 195" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="35" height="35" viewBox="0 0 40.107 47.313"  x="37" y="39" >
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_75" data-name="Rectangle 75" width="40.107" height="47.313" fill="#fff"/>
    </clipPath>
  </defs>
  <g id="Group_105" data-name="Group 105" clip-path="url(#clip-path)">
    <path id="Path_42" data-name="Path 42" d="M39.989,11.195a.856.856,0,0,0-.719-.772C32.166,9.3,27.988,7.014,20.634.228a.854.854,0,0,0-1.16,0C12.122,7.014,7.945,9.3.838,10.422a.856.856,0,0,0-.719.772,39.589,39.589,0,0,0,4.32,21.281,34.7,34.7,0,0,0,6.39,8.775,28.1,28.1,0,0,0,8.894,6,.859.859,0,0,0,.66,0,28.1,28.1,0,0,0,8.894-6,34.7,34.7,0,0,0,6.39-8.775,39.589,39.589,0,0,0,4.32-21.281ZM20.054,45.528C8.585,40.523.827,26.269,1.773,12c6.912-1.19,11.212-3.543,18.281-9.987,7.068,6.444,11.369,8.8,18.281,9.987.946,14.267-6.812,28.521-18.281,33.526" transform="translate(0 0)" fill="#fff"/>
  </g>
</svg>
                  </svg>
                  <Text  m="auto" fontSize={"9px"} color={"#5D5D5D"}  w="48px">Enhanced Appearance</Text>
                 </Box>
                 <Box>
                 <svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 109 109">
                    <circle id="Ellipse_19" data-name="Ellipse 19" cx="54.5" cy="54.5" r="28" fill="#292929"/>
                    <svg id="Asset_2ne" data-name="Asset 2ne" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 60 60" x="36" y="35">
  <g id="Layer_2">
    <g id="Symbols">
      <path id="Path_89" data-name="Path 89" d="M43.27,7.25v42.5H11.57V7.25H43.283M44.533,6H10.32V51H44.533V6Z" transform="translate(2.58 1.5)" fill="#fff"/>
      <line id="Line_1" data-name="Line 1" x1="21.475" transform="translate(19.263 42.025)" fill="none" stroke="#fff" stroke-width="1"/>
      <line id="Line_2" data-name="Line 2" x1="33.4" transform="translate(13.3 36.375)" fill="none" stroke="#fff" stroke-width="1"/>
      <line id="Line_3" data-name="Line 3" x1="10.462" transform="translate(19.263 45.825)" fill="none" stroke="#fff" stroke-width="1"/>
      <rect id="Rectangle_140" data-name="Rectangle 140" width="60" height="60" fill="none" opacity="0.3"/>
      <line id="Line_4" data-name="Line 4" y1="5.2" x2="9.012" transform="translate(26.163 17.962)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/>
      <line id="Line_5" data-name="Line 5" y1="5.213" x2="9.025" transform="translate(24.237 23.075)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="1"/>
    </g>
  </g>
</svg>
                  </svg>
                  <Text  m="auto" fontSize={"9px"} color={"#5D5D5D"}  w="48px">High Gloss Finish</Text>
                 </Box>
               </Flex>



            </Box>
 
        </Box>








        <Box display={[inquire,inquire,"none"]} mt={["1050px"]}></Box>


        <Box   backgroundImage={["https://media.discordapp.net/attachments/702481980025077853/1108166844700971008/Mask_Group_12x.png","https://media.discordapp.net/attachments/702481980025077853/1108166844700971008/Mask_Group_12x.png","https://cdn.discordapp.com/attachments/702481980025077853/1108125235871498442/back2x.png"]}  backgroundSize="cover" backgroundRepeat={"no-repeat"} height={["110vh","100vh"]} >

           <Box ml={["20px","20px","100px"]} pt={["20px","20px","150px"]} w={["375px","375px","793px"]}>
             <Heading fontSize={["22px","22px","51px"]}>DOL Max Overlaminate Films</Heading>
             <Text fontSize={["14px","14px","25px"]} mt={"10px"} mb={"20px"} color={"#131313"}>Printed graphics deserve maximum protection, DOL Max is the solution.</Text>

             <Box>
                <Heading fontSize={"20px"}>Features & Benefits:</Heading>
                <UnorderedList mt={"20px"} fontSize={["14px","14px","25px"]} >
                  <ListItem mb={["20px","20px","25px"]}>Premium vertical durability of up to 7 years and up to 2 years horizontal durability protection.</ListItem>
                  <ListItem mb={["20px","20px","25px"]}>Premium vertical durability of up to 7 years and up to 2 years horizontal durability protection.</ListItem>
                  <ListItem >Our digital overlaminates can be used on a variety of substrates, including banners, vehicle graphics, outdoor signage, and more.</ListItem>
                </UnorderedList>
             </Box>

             <Button mt={["30px","30px","50px"]} colorScheme='orange' p={["20px 30px 20px 30px","20px 30px 20px 30px","30px 40px 30px 40px"]} color={"white"} fontSize={"20px"} onClick={()=>handleInquire()} > <a href='#top'> Inquire now  <ArrowForwardIcon ml={"20px"} fontSize={["20px","20px","50px"]}/> </a> </Button>

           </Box>
           
        </Box>











        <Box>

           <Flex backgroundColor={"#E5E5E5"} gap={"80px"} >
             <Box w={"40%"} display={["none","none","block"]} ><Image src="https://media.discordapp.net/attachments/702481980025077853/1108130586796752906/GS_DIGITAL_AD_WALL_FILMS_INTERIOR_DESIGN_COLLECTION_Indoor_MPI8621_Removable2x.png" w={"100%"} h="100%"/> </Box>
             <Box w={["90%","90%", "60%"]} m="auto">
                   <Box mt={"100px"} fontSize={"20px"}>
                       <Heading fontSize={"51px"} mb="30px">Why us?</Heading>
                       <Flex alignItems={ ["start","start","center"]}  gap={["10px","10px","40px"]} mb={["30px","30px","50px"]} flexDirection={["column","column","row"]}>

                        <Box display={["none","none","block"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="109" viewBox="0 0 109 109">
                        <circle id="Ellipse_19" data-name="Ellipse 19" cx="54.5" cy="54.5" r="54.5" fill="#fff"/>
                        <svg id="Group_110" data-name="Group 110" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="51.484" height="69.946" viewBox="0 0 51.484 69.946" x="35" y="31" >
                         <defs>
                          <clipPath id="clip-path">
                           <rect id="Rectangle_74" data-name="Rectangle 74" width="51.484" height="69.946" fill="#292929" stroke="#fff" stroke-linejoin="round" stroke-width="0.5"/>
                          </clipPath>
                        </defs>
                        <g id="Group_103" data-name="Group 103" clip-path="url(#clip-path)">
                         <path id="Path_40" data-name="Path 40" d="M51.484,25.79A25.742,25.742,0,1,0,5.725,41.925V68.587a1.3,1.3,0,0,0,1.727,1.221l18.29-6.283,18.29,6.348h0a1.3,1.3,0,0,0,1.727-1.221V41.925A25.6,25.6,0,0,0,51.483,25.79ZM25.742,2.645a23.107,23.107,0,0,1,16.8,39.008c-.182.195-.35.389-.532.571s-.713.662-1.077.973l-.7.6c-.35.285-.727.558-1.1.818l-.844.571q-.532.35-1.09.662l-1.012.545c-.35.182-.7.35-1.065.506s-.791.324-1.207.48-.662.26-.987.363-.934.273-1.415.4l-.883.234c-.558.117-1.116.195-1.674.273l-.727.117v0a22.435,22.435,0,0,1-4.92,0l-.727-.117c-.558-.078-1.117-.156-1.674-.273l-.883-.234c-.48-.117-.948-.246-1.415-.4s-.662-.234-1-.363-.805-.312-1.207-.48-.714-.338-1.065-.506l-1.012-.545q-.558-.325-1.09-.662l-.857-.584q-.565-.39-1.09-.818l-.713-.61c-.363-.312-.727-.636-1.065-.974s-.363-.389-.558-.584v0a23.106,23.106,0,0,1,16.8-38.969ZM43.162,66.76,26.17,60.931a1.3,1.3,0,0,0-.857,0L8.321,66.76V44.692c.26.234.532.441.791.662l.494.416c.467.377.948.727,1.428,1.065l.571.389c.48.312.961.61,1.454.883l.688.389c.467.246.948.48,1.441.688l.818.363c.467.195.934.35,1.4.519l.934.324c.467.143.934.246,1.415.363s.662.168,1,.233,1.039.169,1.557.234c.3,0,.6.1.909.13s.818,0,1.22.065v4.324a1.3,1.3,0,0,0,2.6,0V51.455a7.589,7.589,0,0,0,1.22-.065c.4-.065.6-.091.909-.13.519-.065,1.051-.143,1.558-.234s.662-.156,1-.233.948-.221,1.415-.363l.934-.312c.467-.156.948-.324,1.4-.519l.818-.363c.494-.221.974-.441,1.441-.7l.675-.377c.494-.285.987-.571,1.467-.883l.571-.389c.494-.338.974-.7,1.428-1.077l.48-.4c.26-.221.532-.428.791-.662Z" transform="translate(0 0)" fill="#292929" stroke="#fff" stroke-linejoin="round" stroke-width="0.5"/>
                         <path id="Path_41" data-name="Path 41" d="M55.427,81.252a1.317,1.317,0,0,0,1.843,0L75.69,62.857a1.3,1.3,0,0,0,0-1.844l-4.608-4.6a1.3,1.3,0,0,0-1.831,0L56.413,69.27l-3.674-3.895a1.288,1.288,0,0,0-1.9,0L46.222,70.23a1.3,1.3,0,0,0,0,1.8ZM51.779,68.1,55.426,72h0A1.3,1.3,0,0,0,57.3,72L70.16,59.119l2.765,2.765L56.347,78.5l-7.373-7.386Z" transform="translate(-35.228 -43.05)" fill="#292929" stroke="#fff" stroke-linejoin="round" stroke-width="0.5"/>
                        </g>
                       </svg>
                       </svg>
                        </Box>


                        <Box display={["block","block","none"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="109" viewBox="0 0 109 109">
                        <circle id="Ellipse_19" data-name="Ellipse 19" cx="54.5" cy="54.5" r="54.5" fill="#fff"/>
                        <svg id="Group_110" data-name="Group 110" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="51.484" height="69.946" viewBox="0 0 51.484 69.946" x="31" y="24" >
                         <defs>
                          <clipPath id="clip-path">
                           <rect id="Rectangle_74" data-name="Rectangle 74" width="51.484" height="69.946" fill="#292929" stroke="#fff" stroke-linejoin="round" stroke-width="0.5"/>
                          </clipPath>
                        </defs>
                        <g id="Group_103" data-name="Group 103" clip-path="url(#clip-path)">
                         <path id="Path_40" data-name="Path 40" d="M51.484,25.79A25.742,25.742,0,1,0,5.725,41.925V68.587a1.3,1.3,0,0,0,1.727,1.221l18.29-6.283,18.29,6.348h0a1.3,1.3,0,0,0,1.727-1.221V41.925A25.6,25.6,0,0,0,51.483,25.79ZM25.742,2.645a23.107,23.107,0,0,1,16.8,39.008c-.182.195-.35.389-.532.571s-.713.662-1.077.973l-.7.6c-.35.285-.727.558-1.1.818l-.844.571q-.532.35-1.09.662l-1.012.545c-.35.182-.7.35-1.065.506s-.791.324-1.207.48-.662.26-.987.363-.934.273-1.415.4l-.883.234c-.558.117-1.116.195-1.674.273l-.727.117v0a22.435,22.435,0,0,1-4.92,0l-.727-.117c-.558-.078-1.117-.156-1.674-.273l-.883-.234c-.48-.117-.948-.246-1.415-.4s-.662-.234-1-.363-.805-.312-1.207-.48-.714-.338-1.065-.506l-1.012-.545q-.558-.325-1.09-.662l-.857-.584q-.565-.39-1.09-.818l-.713-.61c-.363-.312-.727-.636-1.065-.974s-.363-.389-.558-.584v0a23.106,23.106,0,0,1,16.8-38.969ZM43.162,66.76,26.17,60.931a1.3,1.3,0,0,0-.857,0L8.321,66.76V44.692c.26.234.532.441.791.662l.494.416c.467.377.948.727,1.428,1.065l.571.389c.48.312.961.61,1.454.883l.688.389c.467.246.948.48,1.441.688l.818.363c.467.195.934.35,1.4.519l.934.324c.467.143.934.246,1.415.363s.662.168,1,.233,1.039.169,1.557.234c.3,0,.6.1.909.13s.818,0,1.22.065v4.324a1.3,1.3,0,0,0,2.6,0V51.455a7.589,7.589,0,0,0,1.22-.065c.4-.065.6-.091.909-.13.519-.065,1.051-.143,1.558-.234s.662-.156,1-.233.948-.221,1.415-.363l.934-.312c.467-.156.948-.324,1.4-.519l.818-.363c.494-.221.974-.441,1.441-.7l.675-.377c.494-.285.987-.571,1.467-.883l.571-.389c.494-.338.974-.7,1.428-1.077l.48-.4c.26-.221.532-.428.791-.662Z" transform="translate(0 0)" fill="#292929" stroke="#fff" stroke-linejoin="round" stroke-width="0.5"/>
                         <path id="Path_41" data-name="Path 41" d="M55.427,81.252a1.317,1.317,0,0,0,1.843,0L75.69,62.857a1.3,1.3,0,0,0,0-1.844l-4.608-4.6a1.3,1.3,0,0,0-1.831,0L56.413,69.27l-3.674-3.895a1.288,1.288,0,0,0-1.9,0L46.222,70.23a1.3,1.3,0,0,0,0,1.8ZM51.779,68.1,55.426,72h0A1.3,1.3,0,0,0,57.3,72L70.16,59.119l2.765,2.765L56.347,78.5l-7.373-7.386Z" transform="translate(-35.228 -43.05)" fill="#292929" stroke="#fff" stroke-linejoin="round" stroke-width="0.5"/>
                        </g>
                       </svg>
                       </svg>

                        </Box>


                      
                          <Box>
                          <Heading fontSize={"20px"}>Quality Products</Heading>
                          <Text color={"#515151"}>Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</Text>
                          </Box>
                          
                       </Flex>


                       <Flex alignItems={ ["start","start","center"]}  gap={["10px","10px","40px"]} mb={["30px","30px","50px"]} flexDirection={["column","column","row"]}>
                        
                       <Box display={["none","none","block"]}>

                       <svg xmlns="http://www.w3.org/2000/svg" width="80" height="109" viewBox="0 0 109 109">
                        <circle id="Ellipse_19" data-name="Ellipse 19" cx="54.5" cy="54.5" r="54.5" fill="#fff"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="58.154" height="58.154" viewBox="0 0 58.154 58.154" x="25" y="28">
                        <g id="ici-adhesives" transform="translate(-6 -5)">
                         <circle id="Ellipse_23" data-name="Ellipse 23" cx="1.292" cy="1.292" r="1.292" transform="translate(51.554 44.416)" fill="#292929"/>
                          <path id="Path_69" data-name="Path 69" d="M35.492,34.723h0a1.248,1.248,0,0,0,1.292-1.131,1.292,1.292,0,1,0-2.585,0C34.362,34.238,34.846,34.885,35.492,34.723Z" transform="translate(17.354 16.8)" fill="#292929"/>
                          <circle id="Ellipse_24" data-name="Ellipse 24" cx="1.292" cy="1.292" r="1.292" transform="translate(46.708 21.316)" fill="#292929"/>
                          <path id="Path_70" data-name="Path 70" d="M32.492,14.785A1.292,1.292,0,1,0,31.2,13.492C31.362,14.138,31.846,14.785,32.492,14.785Z" transform="translate(15.508 4.431)" fill="#292929"/>
    <path id="Path_71" data-name="Path 71" d="M32.492,20.423h0a1.248,1.248,0,0,0,1.292-1.131A1.39,1.39,0,0,0,32.492,18,1.274,1.274,0,0,0,31.2,19.292,1.145,1.145,0,0,0,32.492,20.423Z" transform="translate(15.508 8)" fill="#292929"/>
    <circle id="Ellipse_25" data-name="Ellipse 25" cx="1.292" cy="1.292" r="1.292" transform="translate(46.708 12.108)" fill="#292929"/>
    <circle id="Ellipse_26" data-name="Ellipse 26" cx="1.292" cy="1.292" r="1.292" transform="translate(51.554 39.893)" fill="#292929"/>
    <circle id="Ellipse_27" data-name="Ellipse 27" cx="1.292" cy="1.292" r="1.292" transform="translate(51.554 12.108)" fill="#292929"/>
    <circle id="Ellipse_28" data-name="Ellipse 28" cx="1.292" cy="1.292" r="1.292" transform="translate(51.554 21.316)" fill="#292929"/>
    <circle id="Ellipse_29" data-name="Ellipse 29" cx="1.292" cy="1.292" r="1.292" transform="translate(51.554 16.631)" fill="#292929"/>
    <circle id="Ellipse_30" data-name="Ellipse 30" cx="1.292" cy="1.292" r="1.292" transform="translate(51.554 35.208)" fill="#292929"/>
    <circle id="Ellipse_31" data-name="Ellipse 31" cx="1.292" cy="1.292" r="1.292" transform="translate(51.554 26)" fill="#292929"/>
    <circle id="Ellipse_32" data-name="Ellipse 32" cx="1.292" cy="1.292" r="1.292" transform="translate(51.554 30.523)" fill="#292929"/>
    <circle id="Ellipse_33" data-name="Ellipse 33" cx="1.292" cy="1.292" r="1.292" transform="translate(51.554 53.785)" fill="#292929"/>
    <circle id="Ellipse_34" data-name="Ellipse 34" cx="1.292" cy="1.292" r="1.292" transform="translate(27.485 53.785)" fill="#292929"/>
    <path id="Path_72" data-name="Path 72" d="M22.3,36.492h0a1.248,1.248,0,0,0,1.131,1.292,1.292,1.292,0,1,0,0-2.585A1.371,1.371,0,0,0,22.3,36.492Z" transform="translate(10.031 18.585)" fill="#292929"/>
    <circle id="Ellipse_35" data-name="Ellipse 35" cx="1.292" cy="1.292" r="1.292" transform="translate(37.016 53.785)" fill="#292929"/>
    <circle id="Ellipse_36" data-name="Ellipse 36" cx="1.292" cy="1.292" r="1.292" transform="translate(46.708 30.523)" fill="#292929"/>
    <circle id="Ellipse_37" data-name="Ellipse 37" cx="1.292" cy="1.292" r="1.292" transform="translate(41.862 53.785)" fill="#292929"/>
    <path id="Path_73" data-name="Path 73" d="M17.592,35.2h0A1.39,1.39,0,0,0,16.3,36.492a1.292,1.292,0,1,0,2.585,0A1.39,1.39,0,0,0,17.592,35.2Z" transform="translate(6.339 18.585)" fill="#292929"/>
    <path id="Path_74" data-name="Path 74" d="M14.592,35.2h0A1.39,1.39,0,0,0,13.3,36.492a1.292,1.292,0,0,0,2.585,0A1.39,1.39,0,0,0,14.592,35.2Z" transform="translate(4.492 18.585)" fill="#292929"/>
    <path id="Path_75" data-name="Path 75" d="M49.177,13v1.938h5.654V56.293H19.938V53.223H18v5.008H56.77V13Z" transform="translate(7.385 4.923)" fill="#292929"/>
    <circle id="Ellipse_38" data-name="Ellipse 38" cx="1.292" cy="1.292" r="1.292" transform="translate(46.708 39.893)" fill="#292929"/>
    <path id="Path_76" data-name="Path 76" d="M32.492,31.985a1.274,1.274,0,0,0,1.292-1.292A1.189,1.189,0,0,0,32.492,29.4,1.274,1.274,0,0,0,31.2,30.692C31.362,31.5,31.846,31.985,32.492,31.985Z" transform="translate(15.508 15.016)" fill="#292929"/>
    <circle id="Ellipse_39" data-name="Ellipse 39" cx="1.292" cy="1.292" r="1.292" transform="translate(46.708 35.208)" fill="#292929"/>
    <circle id="Ellipse_40" data-name="Ellipse 40" cx="1.292" cy="1.292" r="1.292" transform="translate(46.708 49.1)" fill="#292929"/>
    <circle id="Ellipse_41" data-name="Ellipse 41" cx="1.292" cy="1.292" r="1.292" transform="translate(46.708 53.785)" fill="#292929"/>
    <path id="Path_77" data-name="Path 77" d="M6,5V51.847H44.77V5ZM42.831,49.908H7.938V6.938H42.831Z" fill="#292929"/>
  </g>
</svg>
                       </svg>

                      </Box>

                      <Box display={["block","block","none"]}>

                        
                       <svg xmlns="http://www.w3.org/2000/svg" width="80" height="109" viewBox="0 0 109 109">
                        <circle id="Ellipse_19" data-name="Ellipse 19" cx="54.5" cy="54.5" r="54.5" fill="#fff"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="58.154" height="58.154" viewBox="0 0 58.154 58.154" x="25" y="28">
                        <g id="ici-adhesives" transform="translate(-6 -5)">
                         <circle id="Ellipse_23" data-name="Ellipse 23" cx="1.292" cy="1.292" r="1.292" transform="translate(51.554 44.416)" fill="#292929"/>
                          <path id="Path_69" data-name="Path 69" d="M35.492,34.723h0a1.248,1.248,0,0,0,1.292-1.131,1.292,1.292,0,1,0-2.585,0C34.362,34.238,34.846,34.885,35.492,34.723Z" transform="translate(17.354 16.8)" fill="#292929"/>
                          <circle id="Ellipse_24" data-name="Ellipse 24" cx="1.292" cy="1.292" r="1.292" transform="translate(46.708 21.316)" fill="#292929"/>
                          <path id="Path_70" data-name="Path 70" d="M32.492,14.785A1.292,1.292,0,1,0,31.2,13.492C31.362,14.138,31.846,14.785,32.492,14.785Z" transform="translate(15.508 4.431)" fill="#292929"/>
    <path id="Path_71" data-name="Path 71" d="M32.492,20.423h0a1.248,1.248,0,0,0,1.292-1.131A1.39,1.39,0,0,0,32.492,18,1.274,1.274,0,0,0,31.2,19.292,1.145,1.145,0,0,0,32.492,20.423Z" transform="translate(15.508 8)" fill="#292929"/>
    <circle id="Ellipse_25" data-name="Ellipse 25" cx="1.292" cy="1.292" r="1.292" transform="translate(46.708 12.108)" fill="#292929"/>
    <circle id="Ellipse_26" data-name="Ellipse 26" cx="1.292" cy="1.292" r="1.292" transform="translate(51.554 39.893)" fill="#292929"/>
    <circle id="Ellipse_27" data-name="Ellipse 27" cx="1.292" cy="1.292" r="1.292" transform="translate(51.554 12.108)" fill="#292929"/>
    <circle id="Ellipse_28" data-name="Ellipse 28" cx="1.292" cy="1.292" r="1.292" transform="translate(51.554 21.316)" fill="#292929"/>
    <circle id="Ellipse_29" data-name="Ellipse 29" cx="1.292" cy="1.292" r="1.292" transform="translate(51.554 16.631)" fill="#292929"/>
    <circle id="Ellipse_30" data-name="Ellipse 30" cx="1.292" cy="1.292" r="1.292" transform="translate(51.554 35.208)" fill="#292929"/>
    <circle id="Ellipse_31" data-name="Ellipse 31" cx="1.292" cy="1.292" r="1.292" transform="translate(51.554 26)" fill="#292929"/>
    <circle id="Ellipse_32" data-name="Ellipse 32" cx="1.292" cy="1.292" r="1.292" transform="translate(51.554 30.523)" fill="#292929"/>
    <circle id="Ellipse_33" data-name="Ellipse 33" cx="1.292" cy="1.292" r="1.292" transform="translate(51.554 53.785)" fill="#292929"/>
    <circle id="Ellipse_34" data-name="Ellipse 34" cx="1.292" cy="1.292" r="1.292" transform="translate(27.485 53.785)" fill="#292929"/>
    <path id="Path_72" data-name="Path 72" d="M22.3,36.492h0a1.248,1.248,0,0,0,1.131,1.292,1.292,1.292,0,1,0,0-2.585A1.371,1.371,0,0,0,22.3,36.492Z" transform="translate(10.031 18.585)" fill="#292929"/>
    <circle id="Ellipse_35" data-name="Ellipse 35" cx="1.292" cy="1.292" r="1.292" transform="translate(37.016 53.785)" fill="#292929"/>
    <circle id="Ellipse_36" data-name="Ellipse 36" cx="1.292" cy="1.292" r="1.292" transform="translate(46.708 30.523)" fill="#292929"/>
    <circle id="Ellipse_37" data-name="Ellipse 37" cx="1.292" cy="1.292" r="1.292" transform="translate(41.862 53.785)" fill="#292929"/>
    <path id="Path_73" data-name="Path 73" d="M17.592,35.2h0A1.39,1.39,0,0,0,16.3,36.492a1.292,1.292,0,1,0,2.585,0A1.39,1.39,0,0,0,17.592,35.2Z" transform="translate(6.339 18.585)" fill="#292929"/>
    <path id="Path_74" data-name="Path 74" d="M14.592,35.2h0A1.39,1.39,0,0,0,13.3,36.492a1.292,1.292,0,0,0,2.585,0A1.39,1.39,0,0,0,14.592,35.2Z" transform="translate(4.492 18.585)" fill="#292929"/>
    <path id="Path_75" data-name="Path 75" d="M49.177,13v1.938h5.654V56.293H19.938V53.223H18v5.008H56.77V13Z" transform="translate(7.385 4.923)" fill="#292929"/>
    <circle id="Ellipse_38" data-name="Ellipse 38" cx="1.292" cy="1.292" r="1.292" transform="translate(46.708 39.893)" fill="#292929"/>
    <path id="Path_76" data-name="Path 76" d="M32.492,31.985a1.274,1.274,0,0,0,1.292-1.292A1.189,1.189,0,0,0,32.492,29.4,1.274,1.274,0,0,0,31.2,30.692C31.362,31.5,31.846,31.985,32.492,31.985Z" transform="translate(15.508 15.016)" fill="#292929"/>
    <circle id="Ellipse_39" data-name="Ellipse 39" cx="1.292" cy="1.292" r="1.292" transform="translate(46.708 35.208)" fill="#292929"/>
    <circle id="Ellipse_40" data-name="Ellipse 40" cx="1.292" cy="1.292" r="1.292" transform="translate(46.708 49.1)" fill="#292929"/>
    <circle id="Ellipse_41" data-name="Ellipse 41" cx="1.292" cy="1.292" r="1.292" transform="translate(46.708 53.785)" fill="#292929"/>
    <path id="Path_77" data-name="Path 77" d="M6,5V51.847H44.77V5ZM42.831,49.908H7.938V6.938H42.831Z" fill="#292929"/>
  </g>
</svg>
                       </svg>


                      </Box>
                      
                          <Box>
                          <Heading fontSize={"20px"}>Quality Products</Heading>
                          <Text color={"#515151"}>Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</Text>
                          </Box>
                          
                       </Flex>





                       <Flex alignItems={ ["start","start","center"]}  gap={["10px","10px","40px"]} mb={["30px","30px","50px"]} flexDirection={["column","column","row"]}>

                        <Box display={["none","none","block"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="109" viewBox="0 0 109 109">
                        <circle id="Ellipse_19" data-name="Ellipse 19" cx="54.5" cy="54.5" r="54.5" fill="#fff"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65.282" height="65.125" viewBox="0 0 65.282 65.125"   x="25" y="28">
  <g id="ici-online-communication" transform="translate(-12.197 -9)">
    <path id="Path_78" data-name="Path 78" d="M47.237,38.454a1.5,1.5,0,0,1,.1-3.007A1.484,1.484,0,0,1,48.792,36.9a1.594,1.594,0,0,1-1.556,1.556m0,1.348a2.827,2.827,0,1,0-2.9-2.8,2.833,2.833,0,0,0,2.9,2.8ZM37.9,38.454A1.478,1.478,0,1,1,39.407,37a1.5,1.5,0,0,1-1.5,1.452m0,1.348A2.827,2.827,0,1,0,35,37a2.879,2.879,0,0,0,2.9,2.8ZM56.57,38.454a1.478,1.478,0,0,1,.052-2.956,1.484,1.484,0,0,1,1.452,1.452,1.5,1.5,0,0,1-1.5,1.5m0,1.3a2.827,2.827,0,1,0-2.9-2.8A2.833,2.833,0,0,0,56.57,39.75Z" transform="translate(-10.98 -12.084)" fill="#292929"/>
    <path id="Path_79" data-name="Path 79" d="M12.2,11.593v26.6a2.545,2.545,0,0,0,2.541,2.541H19.25l6.844,7.57V40.681H57.724a2.545,2.545,0,0,0,2.541-2.541v-26.6A2.545,2.545,0,0,0,57.724,9H14.687A2.482,2.482,0,0,0,12.2,11.593Zm1.4.052A1.262,1.262,0,0,1,14.843,10.4H57.62a1.262,1.262,0,0,1,1.244,1.244V38.088a1.262,1.262,0,0,1-1.244,1.244H24.9v5.548l-4.667-5.133-.363-.363h-5.03A1.262,1.262,0,0,1,13.6,38.14ZM53.42,56.755a1.5,1.5,0,1,1-.1,3.007,1.461,1.461,0,0,1-1.452-1.5,1.484,1.484,0,0,1,1.556-1.5m0-1.348a2.852,2.852,0,1,0,2.9,2.852A2.878,2.878,0,0,0,53.42,55.407Zm9.333,1.348A1.478,1.478,0,1,1,62.7,59.71a1.484,1.484,0,0,1-1.452-1.452,1.442,1.442,0,0,1,1.5-1.5h0m0-1.348a2.852,2.852,0,1,0,2.9,2.9A2.932,2.932,0,0,0,62.753,55.407ZM44.087,56.755a1.478,1.478,0,0,1-.052,2.956,1.484,1.484,0,0,1-1.452-1.452,1.442,1.442,0,0,1,1.5-1.5h0m0-1.348a2.852,2.852,0,1,0,2.9,2.852,2.878,2.878,0,0,0-2.9-2.852Z" transform="translate(0)" fill="#292929"/>
    <path id="Path_80" data-name="Path 80" d="M93.37,95.511v-26.6a2.545,2.545,0,0,0-2.541-2.541H86.318l-6.9-7.57v7.622H47.741A2.545,2.545,0,0,0,45.2,68.963v26.6A2.545,2.545,0,0,0,47.741,98.1H90.777A2.634,2.634,0,0,0,93.37,95.511Zm-1.4-.1a1.262,1.262,0,0,1-1.244,1.244H47.948A1.262,1.262,0,0,1,46.7,95.407V68.963a1.262,1.262,0,0,1,1.244-1.244H80.666V62.17L85.333,67.3l.363.415h5.03a1.262,1.262,0,0,1,1.244,1.244V95.407Z" transform="translate(-15.891 -23.978)" fill="#292929"/>
  </g>
</svg>
                       </svg>

                        </Box>

                        <Box display={["block","block","none"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="109" viewBox="0 0 109 109">
                        <circle id="Ellipse_19" data-name="Ellipse 19" cx="54.5" cy="54.5" r="54.5" fill="#fff"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="65.282" height="65.125" viewBox="0 0 65.282 65.125"   x="25" y="28">
  <g id="ici-online-communication" transform="translate(-12.197 -9)">
    <path id="Path_78" data-name="Path 78" d="M47.237,38.454a1.5,1.5,0,0,1,.1-3.007A1.484,1.484,0,0,1,48.792,36.9a1.594,1.594,0,0,1-1.556,1.556m0,1.348a2.827,2.827,0,1,0-2.9-2.8,2.833,2.833,0,0,0,2.9,2.8ZM37.9,38.454A1.478,1.478,0,1,1,39.407,37a1.5,1.5,0,0,1-1.5,1.452m0,1.348A2.827,2.827,0,1,0,35,37a2.879,2.879,0,0,0,2.9,2.8ZM56.57,38.454a1.478,1.478,0,0,1,.052-2.956,1.484,1.484,0,0,1,1.452,1.452,1.5,1.5,0,0,1-1.5,1.5m0,1.3a2.827,2.827,0,1,0-2.9-2.8A2.833,2.833,0,0,0,56.57,39.75Z" transform="translate(-10.98 -12.084)" fill="#292929"/>
    <path id="Path_79" data-name="Path 79" d="M12.2,11.593v26.6a2.545,2.545,0,0,0,2.541,2.541H19.25l6.844,7.57V40.681H57.724a2.545,2.545,0,0,0,2.541-2.541v-26.6A2.545,2.545,0,0,0,57.724,9H14.687A2.482,2.482,0,0,0,12.2,11.593Zm1.4.052A1.262,1.262,0,0,1,14.843,10.4H57.62a1.262,1.262,0,0,1,1.244,1.244V38.088a1.262,1.262,0,0,1-1.244,1.244H24.9v5.548l-4.667-5.133-.363-.363h-5.03A1.262,1.262,0,0,1,13.6,38.14ZM53.42,56.755a1.5,1.5,0,1,1-.1,3.007,1.461,1.461,0,0,1-1.452-1.5,1.484,1.484,0,0,1,1.556-1.5m0-1.348a2.852,2.852,0,1,0,2.9,2.852A2.878,2.878,0,0,0,53.42,55.407Zm9.333,1.348A1.478,1.478,0,1,1,62.7,59.71a1.484,1.484,0,0,1-1.452-1.452,1.442,1.442,0,0,1,1.5-1.5h0m0-1.348a2.852,2.852,0,1,0,2.9,2.9A2.932,2.932,0,0,0,62.753,55.407ZM44.087,56.755a1.478,1.478,0,0,1-.052,2.956,1.484,1.484,0,0,1-1.452-1.452,1.442,1.442,0,0,1,1.5-1.5h0m0-1.348a2.852,2.852,0,1,0,2.9,2.852,2.878,2.878,0,0,0-2.9-2.852Z" transform="translate(0)" fill="#292929"/>
    <path id="Path_80" data-name="Path 80" d="M93.37,95.511v-26.6a2.545,2.545,0,0,0-2.541-2.541H86.318l-6.9-7.57v7.622H47.741A2.545,2.545,0,0,0,45.2,68.963v26.6A2.545,2.545,0,0,0,47.741,98.1H90.777A2.634,2.634,0,0,0,93.37,95.511Zm-1.4-.1a1.262,1.262,0,0,1-1.244,1.244H47.948A1.262,1.262,0,0,1,46.7,95.407V68.963a1.262,1.262,0,0,1,1.244-1.244H80.666V62.17L85.333,67.3l.363.415h5.03a1.262,1.262,0,0,1,1.244,1.244V95.407Z" transform="translate(-15.891 -23.978)" fill="#292929"/>
  </g>
</svg>
                       </svg>

                        </Box>
                      
                          <Box>
                          <Heading fontSize={"20px"}>Quality Products</Heading>
                          <Text color={"#515151"}>Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</Text>
                          </Box>
                          
                       </Flex>



                       <Flex alignItems={ ["start","start","center"]}  gap={["10px","10px","40px"]} mb={["30px","30px","50px"]} flexDirection={["column","column","row"]}>

                        <Box display={["none","none","block"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="109" viewBox="0 0 109 109">
                        <circle id="Ellipse_19" data-name="Ellipse 19" cx="54.5" cy="54.5" r="54.5" fill="#fff"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60.598" height="71.913" viewBox="0 0 60.598 71.913"  x="25" y="25">
                          <path id="Path_68" data-name="Path 68" d="M67.139,26.083C66.747,35.679,65.181,49,59.5,57.417c-9.6,14.1-21.542,19-21.542,19s-11.946-4.9-21.542-19S8.781,14.725,8.781,14.725s5.092.783,15.667-1.371S37.96,6.5,37.96,6.5,40.9,11,51.472,13.354s15.667,1.371,15.667,1.371L58.131,27.258,37.96,54.871l-12.925-18.8" transform="translate(-7.581 -5.5)" fill="none" stroke="#292929" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        </svg>
                       </svg>

                        </Box>

                        <Box display={["block","block","none"]}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="109" viewBox="0 0 109 109">
                        <circle id="Ellipse_19" data-name="Ellipse 19" cx="54.5" cy="54.5" r="54.5" fill="#fff"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60.598" height="71.913" viewBox="0 0 60.598 71.913"  x="25" y="25">
                          <path id="Path_68" data-name="Path 68" d="M67.139,26.083C66.747,35.679,65.181,49,59.5,57.417c-9.6,14.1-21.542,19-21.542,19s-11.946-4.9-21.542-19S8.781,14.725,8.781,14.725s5.092.783,15.667-1.371S37.96,6.5,37.96,6.5,40.9,11,51.472,13.354s15.667,1.371,15.667,1.371L58.131,27.258,37.96,54.871l-12.925-18.8" transform="translate(-7.581 -5.5)" fill="none" stroke="#292929" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                        </svg>
                       </svg>

                        </Box>
                      
                          <Box>
                          <Heading fontSize={"20px"}>Quality Products</Heading>
                          <Text color={"#515151"}>Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</Text>
                          </Box>
                          
                       </Flex>



                       <Button mt={["30px","30px","80px"]} mb={["20px","20px","0px"]} colorScheme='orange' p={["20px 30px 20px 30px","20px 30px 20px 30px","30px 40px 30px 40px"]} color={"white"} fontSize={["20px","20px","30px"]} >Request a call back  <ArrowForwardIcon ml={"20px"} fontSize={["20px","20px","50px"]}/>  </Button>
                      
                       
                       
                   </Box>
                   
             </Box> 
           
           </Flex>
           <Box display={["block","block","none"]}><Image src='https://cdn.discordapp.com/attachments/702481980025077853/1108181809516265483/GS_DIGITAL_AD_WALL_FILMS_INTERIOR_DESIGN_COLLECTION_Indoor_MPI8621_Removable2x.png'  w={"100%"}/></Box>
           
        </Box>

    </Box>
  )
}

export default Home