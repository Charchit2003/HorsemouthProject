import { Box, Center, List, ListItem, Text } from '@chakra-ui/react';
import { sanityClient } from '../lib/SanityClient';
import { useEffect, useState } from 'react';
import { College } from '../pages/types';
import Link from 'next/link';
import theme from '../src/styles/theme';


export default function CollegeListPage() {
  const [colleges, setColleges] = useState<College[]>([]);

  useEffect(() => {
    const fetchColleges = async () => {
      try {
        const response = await sanityClient.fetch('*[_type == "college"]');
        setColleges(response);
        
      } catch (error) {
        console.error('Error fetching colleges:', error);
      }
    };

    fetchColleges();
  }, []);

  return (
    <Box bg={"mintcream"} w="100%" h="8000" mt={10}>
   <Box  m={2} w="100%" h="60px" color='gray.50' bg={'lightslategrey '} border={10} borderColor={"Black"}>
      <Text fontSize={50} fontWeight="bold" mb={4} mt={10} pb={5} align={'center'}>
        List of Colleges
      </Text>
    </Box>
      <List spacing={4}>
        {colleges.map((college) => (
          <ListItem
            key={college._id}
            py={2}
            px={4}
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
            _hover={{ bg: 'gray.100' }}
          >
            <Link href={`/${college._id}`}>
              {college.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

