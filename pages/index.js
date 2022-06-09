import { Container } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { HomePageBanner } from '../components/HomePageBanner'

export default function Home() {
  return (
    <Container>
      <HomePageBanner/>
    </Container>
  )
}
