import { useState } from "react"
import styled from "styled-components"
import { BannerButton } from "./Buttons/bannerButton"

const HomePageTopBox = styled.div`
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  margin: 72px 0 72px;
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;

  background: linear-gradient(50deg, var(--app-third-color), var(--vio-color));
`

const HomePageTopBoxLeft = styled.div`
    & p {
        font-size: 26px;
        font-weight: 500;
    }
`

const HomePageTopBoxRight = styled.div`
    ${props => props.bulbOn && `
        & .bulb {
            background: var(--app-bulb-color);
            box-shadow: 0 0 50px var(--app-bulb-color),
                0 0 100px var(--app-bulb-color),
                0 0 150px var(--app-bulb-color),
                0 0 280px var(--app-bulb-color),
                0 0 250px var(--app-bulb-color),
                0 0 300px var(--app-bulb-color),
                0 0 350px var(--app-bulb-color);
        }
        & .bulb::before {
            background: var(--app-bulb-color);
        }
        & .bulb::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 120px;
            height: 120px;
            background: var(--app-bulb-color);
            border-radius: 50%;
            filter: blur(40px);
        }
        & .bulb span:nth-child(1) {
            box-shadow: 20px 20px 0 10px var(--app-bulb-color);
        }
        & .bulb span:nth-child(2) {
            box-shadow: -20px 20px 0 10px var(--app-bulb-color);
        }
    `}
`

const Bulb = styled.div`
    position: relative;
    right: -220px;
    top: 100px;
    width: 80px;
    height: 80px;
    background: var(--app-bg-color);
    border-radius: 50%;
    z-index: 2;
    transition: all 0.3s;
    cursor: pointer;

    &::before {
        transition: all 0.3s;
        content: '';
        position: absolute;
        top: -50px;
        left: 22.5px;
        width: 35px;
        height: 80px;
        background: var(--app-bg-color);
        border-top: 30px solid #000;
        border-radius: 10px;
    }
    & span:nth-child(1) {
        position: absolute;
        top: -16px;
        left: -4px;
        display: block;
        width: 30px;
        height: 30px;
        background: transparent;
        transform: rotate(342deg);
        border-bottom-right-radius: 40px;
        box-shadow: 20px 20px 0 10px #444;
    }
    & span:nth-child(2) {
        position: absolute;
        top: -16px;
        right: -4px;
        display: block;
        width: 30px;
        height: 30px;
        background: transparent;
        transform: rotate(17deg);
        border-bottom-left-radius: 40px;
        box-shadow: -20px 20px 0 10px var(--app-bulb-color);
    }
`

const Wire = styled.div`
    position: absolute;
    left: calc(50% - 2px);
    top: -249px;
    width: 4px;
    height: 200px;
    background: #000;
    z-index: 1;
`

export const HomePageBanner = () => {
    const [bulbOn, setBulbOn] = useState(true)

    return (
        <HomePageTopBox>
            <HomePageTopBoxLeft>
                <div>
                    <h1>Приложение для подготовки к ЕГЭ</h1>
                    <p>
                        Здесь вы можете получить необходимые знания для успешной сдачи ЕГЭ по математике, информатике и русскому языку.
                    </p>
                    <p>
                        Авторизованные пользователи получают доступ ко всему функционалу приложения. Выполняйте задания и получайте достижения.
                    </p>
                </div>
                <BannerButton />
            </HomePageTopBoxLeft>
            <HomePageTopBoxRight bulbOn={bulbOn}>
                <div className="light">
                    <Bulb className="bulb" 
                        onClick={() => {setBulbOn(prev => !prev)}}
                    >
                        <Wire className="wire"></Wire>
                    </Bulb>
                    <div className="switch">
                        <div className="btn"></div>
                    </div>
                </div>
            </HomePageTopBoxRight>
        </HomePageTopBox>
    )
}