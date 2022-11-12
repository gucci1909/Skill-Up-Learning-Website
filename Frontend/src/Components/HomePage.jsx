import {
  Button,
  Divider,
  Highlight,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AutoPlay from "./slideShow";
import Loader from "./SmallComponents/Loader";

const images = [
  "https://images.ctfassets.net/lh3zuq09vnm2/7siImqwRupwoBHyJCaO1zy/2d7ec1ccc7761f76c8fe18de52e889a4/T-Mobile.svg",
  "https://images.ctfassets.net/lh3zuq09vnm2/7EHGsWMc29UoHErPsvRAsi/0f8210b12ada1e9faa313b4d56274572/Panasonic.svg",
  "https://images.ctfassets.net/lh3zuq09vnm2/18dCY8kGkSbfdNB2Eod1Pp/4768154e8873caa4c1574499dc4e2aab/Microsoft_Logo.svg",
  "https://images.ctfassets.net/lh3zuq09vnm2/3A5yNJ7WfWikTXKsk7r4hh/4060c710bc560b59a0dd06b6521fbe94/Decathlon.svg",
  "https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg",
  "https://s.udemycdn.com/partner-logos/v4/tcs-dark.svg",
  "https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg",
];
const logoSlider = [
  "https://www.svgrepo.com/show/303157/react-logo.svg",
  "https://www.svgrepo.com/show/303206/javascript-logo.svg",
  "https://cdn-icons-png.flaticon.com/128/226/226777.png",

  "https://images.ctfassets.net/lh3zuq09vnm2/3wtrDaAESflMICYhvZtOdE/3d4248c94b553f012fa63a6f0eb52826/Slack.svg",
  "https://images.ctfassets.net/lh3zuq09vnm2/4A944uO2u8ijz0ueTW6Gix/64bb6b8d02d0080f3dc5c5043f5d475e/Property_1_Segment.svg",
  "https://images.ctfassets.net/lh3zuq09vnm2/Oma32qGH0Mrvd0GDwye01/dbf9446b8e9d356738bb804e020dcba9/Hubspot.svg",
];

const skillupt = [
  {
    image:
      "https://in.skillup.online/_next/image/?url=https%3A%2F%2Fcourses-in.skillup.online%2Fasset-v1%3AIBM%2BDS0101EN-Skillup%2B2021%2Btype%40asset%2Bblock%40CO_Introduction-to-Data-Science.jpg&w=1920&q=75",
    name: "Learn Python: The Complete Python Programming Course",
    des: "Self-Paced | Mentored | BEGINNER",
  },
  {
    image:
      "https://in.skillup.online/_next/image/?url=https%3A%2F%2Fcourses-in.skillup.online%2Fasset-v1%3AIBM%2BDA0101EN%2Bv1%2Btype%40asset%2Bblock%40asset-v1_IBM_DA0101EN_v1_type_asset_block_CO_Data-Analysis-with-Python.jpg&w=1920&q=75",
    name: "Data Visualization with Python",
    des: "Self-Paced | Mentored | BEGINNER",
  },
  {
    image:
      "https://in.skillup.online/_next/image/?url=https%3A%2F%2Fcourses-in.skillup.online%2Fasset-v1%3AIBM%2BDS0103EN-Skillup%2B2021%2Btype%40asset%2Bblock%40CO_The-Data-Science-Method.jpg&w=1920&q=75",
    name: "The Data Science Method",
    des: "Self-Paced | Mentored | BEGINNER",
  },
  {
    image:
      "https://in.skillup.online/_next/image/?url=https%3A%2F%2Fcourses-in.skillup.online%2Fasset-v1%3AIBM%2BDS0301EN%2Bv1%2Btype%40asset%2Bblock%40Data_Privacy_Fundamentals.jpg&w=1920&q=75",
    name: "Data Privacy Fundamentals",
    des: "Self-Paced | Mentored | BEGINNER",
  },
];

const HomePage = () => {
  ////////////////////////LOADER //////////////////////////////
  // is Loading   //
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  // console.log(data)

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Stack
      border="orange"
      alignSelf="center"
      maxW="1400px"
      spacing={50}
      padding={{ base: "20px", md: "50px 100px" }}
      paddingTop="0px"
    >
      <Stack p={2}>
        <Text
          textAlign="left"
          maxWidth={{ base: "100%", md: "100%", lg: "60%" }}
          fontSize={{ base: "32px", lg: "42px" }}
        >
          <Highlight query="Learn without limits" styles={{ color: "red.500" }}>
            Tech skills that go beyond certifications, Learn without limits.
          </Highlight>
        </Text>

        <Stack
          spacing={6}
          direction={{ base: "column", md: "column", lg: "column", xl: "row" }}
        >
          <HStack spacing={5}>
            <Image
              src="https://in.skillup.online/_next/static/media/small_circle.cf81fa34.svg"
              w="25px"
            />
            <Text color="GrayText">Job-ready skills</Text>
          </HStack>
          <HStack spacing={5}>
            <Image
              src="https://in.skillup.online/_next/static/media/small_circle.cf81fa34.svg"
              w="25px"
            />
            <Text color="GrayText">Next-gen tech skills</Text>
          </HStack>
          <HStack spacing={5}>
            <Image
              src="https://in.skillup.online/_next/static/media/small_circle.cf81fa34.svg"
              w="25px"
            />
            <Text color="GrayText">Career-shaping skills</Text>
          </HStack>
        </Stack>

        <Stack
          padding={5}
          w="full"
          spacing={50}
          direction={{ base: "column", md: "column", lg: "row", xl: "row" }}
        >
          <Image
            maxH="800px"
            src="https://in.skillup.online/_next/image/?url=%2Fimages%2FbigDataBanner.png&w=750&q=75"
          />

          <Spacer />

          <Stack spacing={{ base: 5, lg: 10 }} margin="auto" textAlign="left">
            <Text
              fontSize="xl"
              fontWeight="semibold"
              maxWidth={{ base: "100%", md: "60%", lg: "60%" }}
            >
              Why Learn with SkillUp Online?
            </Text>
            <Text maxWidth={{ base: "100%", md: "60%", lg: "60%" }}>
              We believe every learner is an individual and every course is an
              opportunity to build job-ready skills. Through our human-centered
              approach to learning, we will empower you to fulfil your
              professional and personal goals and enjoy career success.
            </Text>

            <Stack
              direction={{
                base: "column",
                md: "column",
                lg: "column",
                xl: "row",
              }}
            >
              <Button
                fontWeight="lighter"
                colorScheme="messenger"
                variant="outline"
              >
                Start With Free Trial
              </Button>

              <Button
                fontWeight="lighter"
                colorScheme="messenger"
                variant="solid"
              >
                Login With Google
              </Button>
            </Stack>

            <Text>Skill-up is free forever - upgrade anytime</Text>
          </Stack>
        </Stack>
      </Stack>

      <Stack margin="auto" align="center" spacing={15}>
        <Text fontWeight="semibold" fontSize="3xl">
          Trusted by over 12,500 great teams
        </Text>

        <Text fontSize="sm">
          Leading companies use the same courses to help employees keep their
          skills fresh.
        </Text>

        <AutoPlay images={images} />
      </Stack>

      <Stack margin="auto" align="center" spacing={5}>
        <Text fontWeight="semibold" fontSize="3xl">
          In-Demand Tech Courses
        </Text>
        <Text fontWeight="thin" fontSize="xl">
          Develop sought-after skills your industry needs.
        </Text>

        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={5}>
          {skillupt.map((el) => (
            <Stack
              spacing={10}
              textAlign="left"
              padding={2}
              borderWidth="1px"
              overflow="hidden"
              _hover={{ boxShadow: "2xl" }}
            >
              <Image src={el.image} />
              <Stack textAlign="left">
                <Text fontWeight="semibold" fontSize="xl">
                  {el.name}
                </Text>
                <Text fontWeight="thin" fontSize="sm">
                  {el.des}
                </Text>
              </Stack>

              <Spacer />
              <Text
                color="blue.500"
                fontWeight="semibold"
                cursor="pointer"
                as="u"
              >
                Learn More
              </Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>

      <Divider />
      <Stack margin="auto" align="center" spacing={15}>
        <Text fontWeight="semibold" fontSize="3xl">
          Transformative learning for every team
        </Text>

        <Text fontSize="sm">
          We meet all your learning needs, so you don’t have to spend time
          managing multiple providers.
        </Text>
      </Stack>
      <SimpleGrid
        columns={{ base: 2, md: 3 }}
        margin="auto"
        align="center"
        spacing={5}
      >
        <VStack justifyContent="left" p={5}>
          <Image src="https://business.udemy.com/wp-content/uploads/2022/07/academics-icon-expressive.svg" />
          <Text fontWeight="semibold">Learning & Development</Text>
          <Text>
            Deliver L&D programs that upskill your entire workforce with courses
            taught by instructors from across the globe in a variety of dynamic
            formats.{" "}
          </Text>
          <br />
          <br />
          <Text color="blue.500" fontWeight="semibold" cursor="pointer" as="u">
            Learn More
          </Text>
        </VStack>

        <VStack justifyContent="left" p={5}>
          <Image src="https://business.udemy.com/wp-content/uploads/2022/07/handshake-icon-expressive.svg" />
          <Text fontWeight="semibold">Human Resources</Text>
          <Text>
            Prepare your HR team to attract, grow, and retain talent by
            equipping them with the tools and skills they need to do their best
            work.{" "}
          </Text>
          <br />
          <br />
          <Text color="blue.500" fontWeight="semibold" cursor="pointer" as="u">
            Learn More
          </Text>
        </VStack>

        <VStack justifyContent="left" textAlign="left" p={5}>
          <Image src="https://business.udemy.com/wp-content/uploads/2022/07/dev-ops-icon.svg" />
          <Text fontWeight="semibold">Engineering</Text>
          <Text>
            Upgrade skills to stay ahead of the curve. Offer hands-on practice
            and training on cutting-edge technologies.{" "}
          </Text>
          <br />
          <br />
          <Text color="blue.500" fontWeight="semibold" cursor="pointer" as="u">
            Learn More
          </Text>
        </VStack>
      </SimpleGrid>

      <Divider />

      <Stack
        bg=" rgb(4,65,80) "
        direction={{ base: "column", md: "row" }}
        margin="auto"
        align="center"
        spacing={5}
        padding={10}
      >
        <VStack
          color="white"
          alignItems="flex-start"
          textAlign="left"
          p={5}
          spacing={3}
        >
          <Text fontWeight="bold" fontSize="35px">
            Get Started With Skillup
          </Text>
          <Text fontWeight="thin" fontSize="20px">
            Power the productivity of your teams with tailored skills training
            and competency-based industry certifications.
          </Text>
          <Stack
            direction={{
              base: "column",
              md: "column",
              lg: "column",
              xl: "row",
            }}
          >
            <Button
              fontWeight="lighter"
              colorScheme="messenger"
              variant="solid"
            >
              Get Started Free
            </Button>
          </Stack>
          <Text fontWeight="thin" fontSize="15px">
            No credit card required
          </Text>
        </VStack>

        <Divider display={{ base: "block", md: "none" }} />

        <Stack
          spacing={6}
          direction={{
            base: "column",
            md: "column",
            lg: "column",
            xl: "column",
          }}
        >
          <HStack>
            <Image
              src="https://in.skillup.online/_next/image/?url=%2Fimages%2Fskillupforbusiness-desktop-banner.jpg&w=1920&q=75"
              w="800px"
            />
          </HStack>
        </Stack>
      </Stack>

      <Stack margin="auto" align="center" spacing={5}>
        <Text fontWeight="semibold" fontSize="3xl">
          Language You Learn
        </Text>
        <Text fontWeight="thin" fontSize="xl">
          Save time and effort. Integrate SkillUP with dozens of Language and
          tools.
        </Text>

        <AutoPlay images={logoSlider} />

        <Button
          size="lg"
          fontWeight="lighter"
          colorScheme="messenger"
          variant="outline"
        >
          Explore Intergration
        </Button>
      </Stack>

      <SimpleGrid
        columns={{ base: 2, md: 3 }}
        margin="auto"
        align="center"
        spacing={5}
      >
        <VStack justifyContent="left" textAlign="left" p={5}>
          <Image src="https://images.ctfassets.net/lh3zuq09vnm2/7ddUqkRHENLp65ybfpxC27/ac88f31a04b5509ecdcc512c85347b23/Heatmaps-guide-hero.svg" />
          <Text fontWeight="semibold">The complete guide to heatmaps</Text>
          <Text>
            Heatmaps are a powerful way to understand what users do on your
            website pages—where they click, how far they scroll, what they look
            at or ignore.{" "}
          </Text>
        </VStack>

        <VStack justifyContent="left" textAlign="left" p={5}>
          <Image src="https://images.ctfassets.net/lh3zuq09vnm2/2AEDwOg71AEOHKkHbPYNxv/dc8175848bddbc45a70075ccea56b0a9/behaviour-analytics-guide-hero.svg" />
          <Text fontWeight="semibold">
            The beginner’s guide to behavior analytics
          </Text>
          <Text>
            Behavior analytics is the key to understanding your customers, and
            how they really experience and interact{" "}
          </Text>
        </VStack>

        <VStack justifyContent="left" textAlign="left" p={5}>
          <Image src="https://images.ctfassets.net/lh3zuq09vnm2/5FTM6xaUDTT4zDxqcgTEH5/a68a0b1e353050da6d1bcf005933ed0a/PX-guide-hero.svg" />
          <Text fontWeight="semibold">
            What are product experience insights? (and why every product team
            needs them)
          </Text>
          <Text>
            Heatmaps are a powerful way to understand what users do on your
            website pages—where they click.{" "}
          </Text>
        </VStack>
      </SimpleGrid>

      <Stack
        bg="linear-gradient( 135deg, #F0FF00 10%, #58CFFB 100%)"
        direction={{ base: "column", md: "row" }}
        margin="auto"
        align="center"
        spacing={5}
        padding={10}
      >
        <VStack alignItems="flex-start" textAlign="left" p={5} spacing={6}>
          <Text fontWeight="semibold" fontSize="2xl">
            Get started with SkillUP
          </Text>
          <Text fontWeight="thin" fontSize="15px">
            It only takes a few minutes to get started with SkillUP. Understand
            your users—start free, today.
          </Text>
          <Stack
            direction={{
              base: "column",
              md: "column",
              lg: "column",
              xl: "row",
            }}
          >
            <Button
              fontWeight="lighter"
              colorScheme="messenger"
              variant="outline"
            >
              Start Learning
            </Button>

            <Button
              fontWeight="lighter"
              colorScheme="messenger"
              variant="solid"
            >
              know More
            </Button>
          </Stack>
          <Text fontWeight="thin" fontSize="15px">
            No credit card required
          </Text>
        </VStack>

        <Divider display={{ base: "block", md: "none" }} />

        <Stack
          spacing={6}
          direction={{
            base: "column",
            md: "column",
            lg: "column",
            xl: "column",
          }}
        >
          <Image w={300} src=""></Image>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HomePage;

//_hover={{  color: " red" }}
