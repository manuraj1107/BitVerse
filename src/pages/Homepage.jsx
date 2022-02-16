import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  chakra,
  Code,
  Stack,
  Icon,
  useColorModeValue,
  List,
  ListItem,
  Image,
  SimpleGrid,
  Flex,
  StackDivider
} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { useAuth } from '../contexts/AuthContext'
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};


export default function Homepage() {
  const {currentUser
} = useAuth()
  return (
    <Layout>
      {/* { <Text my={6}>{currentUser?.email}</Text> } */}
     <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Check <Text as={'span'} color={'yellow.400'}>Bitcoin</Text> Price with <br />
            <Text as={'span'} color={'green.400'}>
              BitVerse
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            We can help you with your bitcoin analysis by tracking latest price
            around market and fecthing current chart trend
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Link to='/login'>
            <Button
              colorScheme={'green'}
              bg={'green.400'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.500',
              }}>
              Get Started
              
            </Button>
            </Link>
           
          </Stack>
        </Stack>
      </Container>

      <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'green.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Our Features
          </Text>
          
              
            
          <Heading>A One Stop Solution For <Text as={'span'} color={'green.400'}>Bitcoin</Text> Analysis</Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
           BitVerse can help you in every aspects of your bitcoin analysis with our unique features
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Live Chart'}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Current Price'}
            />
            <Feature
              icon={
                <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Price Chart History'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
          />
        </Flex>
      </SimpleGrid>
    </Container>
    </Layout>
  )
}
