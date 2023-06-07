import { Box, Text, Image } from '@chakra-ui/react';
import { sanityClient } from '../lib/SanityClient';
import { College } from '../pages/types';


  
  export default function CollegeProfilePage({ college }: { college: College }) {
    console.log(college)
    return (

      <Box>
        {/* <img src={college.image.asset?._ref} alt={college.name} /> */}
        <Text fontSize="4xl" fontWeight="bold" mb={4}>
          {college.name}
        </Text>
        <Text fontSize="lg" mb={4}>
          Location: {college.location}
        </Text>
        <Text mt={4}>{college.description.toString()}</Text>
      </Box>
    );
  }

  

  import { GetStaticPaths, GetStaticProps } from 'next';
import { Asset } from 'next/font/google';

  
  export const getStaticPaths: GetStaticPaths = async () => {
    const colleges = await sanityClient.fetch(`*[_type == "college"]`);
  
    const paths = colleges.map((college: College) => ({
      params: { slug: college._id },
    }));
  
    return { paths, fallback: false };
  };
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params || {}; // Add this line
  
    const college = await sanityClient.fetch(`*[_type == "college" && _id == $slug][0]`, { slug });
  
    return { props: { college },revalidate:30 };
  };
  
