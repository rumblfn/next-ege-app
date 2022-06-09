import { Container } from "@mui/system"
import styled from "styled-components"
import { Link } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from '../styles/style.module.css';

const FooterTop = styled.div`
    display: flex;
    align-items: center;
    height: 64px;
    justify-content: flex-end;
`

const LeftLinkText = styled.span`
    margin-right: 12px;
`

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <FooterTop>
                    <Link underline="hover" target="_blank" 
                        href="https://github.com/rumblfn/EgeApp" 
                        sx={{display: 'flex', alignItems: 'center'
                    }}>
                        <LeftLinkText>Source code</LeftLinkText>
                        <GitHubIcon />
                    </Link>
                </FooterTop>
            </Container>
        </footer>
    )
}

export default Footer