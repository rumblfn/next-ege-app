import Link from "next/link"
import { signIn, signOut, useSession } from 'next-auth/react';
import styled from "styled-components";
import { Container } from "@mui/system";
import styles from '../styles/style.module.css';
import { ListOfSubjects } from "./ListOfSubjects";
import { LinkDefault } from "./Link";

const HeaderStyled = styled.header`
    background-color: var(--app-color);
    border-bottom: 2px solid var(--vio-color);
    border-left: 0 solid var(--vio-color);
    transition: border-left 300ms ease-in-out, padding-left 300ms ease-in-out;
    -webkit-box-shadow: 0px 5px 10px -1px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px -1px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px -1px rgba(34, 60, 80, 0.2);

    &:hover {
        padding-left: 0.5rem;
        border-left: 0.5rem solid var(--vio-color);
    }
`

const HeaderBox = styled.div`
    display: flex;
    justify-content: space-between;
    height: 64px;
    align-items: center;
`

const NavBarLeft = styled.nav`
    display: flex;
    gap: 16px;
`

const NavBarRight = styled.nav`
    display: flex;
    gap: 16px;
`

const SubMenuParent = styled.div`
    position: relative;
    cursor: pointer;

    &:focus, &:focus-within, &:hover .sub-menu {
        visibility: visible;
        opacity: 1;
        z-index: 1;
        transform: translateY(0%);
        transition-delay: 0s, 0s, 0.3s;
    }
`

const Header = () => {
    const { data: session, status: loading} = useSession()
    console.log(session, loading)

    return (
        <HeaderStyled>
            <Container>
                <HeaderBox>
                    <NavBarLeft>
                        <SubMenuParent>
                            <LinkDefault href='/' 
                                className={styles.headerLink} 
                                text="Subject"
                            />
                            <ListOfSubjects />
                        </SubMenuParent>
                    </NavBarLeft>
                    <NavBarRight>
                        <LinkDefault href='/profile' text="Profile"/>
                        <LinkDefault href='/auth' text="Log in"/>
                    </NavBarRight>
                </HeaderBox>
            </Container>
        </HeaderStyled>
    )
}

export default Header