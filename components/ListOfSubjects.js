import Link from "next/link";
import styled from "styled-components";

const subjects = [
    {
        id: 1,
        title: 'Math'
    },
    {
        id: 2,
        title: 'Russian language'
    },
    {
        id: 3,
        title: 'informatics'
    }
]

const SubMenuLink = styled.a`
    margin: 0;
    padding: 12px;
    transition: background-color 0.2s;

    &:hover {
        background-color: white;
    }
    &:nth-child(1) {
        margin: 0px;
    }
    &:last-child {
        margin: 0px;
    }
`

const SubMenu = styled.div`
    visibility: hidden;
    opacity: 0;
    position: absolute;
    transform: translateY(-3em);
    transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
    background: #DDD;
    border-radius: 6px;
    padding: 12px 0;
    margin: 0px 10px;
    z-index: 30;
    background: var(--app-color);
    background: linear-gradient(180deg, var(--app-color) 0%, var(--app-third-color) 170%);
    display: flex;
    flex-direction: column;
`

export const ListOfSubjects = () => {

    return (
        <SubMenu className="sub-menu">
            {subjects.map(subject => 
                <Link href={`/subject/${subject.id}`} key={subject.id}>
                    <SubMenuLink>
                        {subject.title}
                    </SubMenuLink>
                </Link>
            )}
        </SubMenu>
    );
};
