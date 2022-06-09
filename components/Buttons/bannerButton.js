import styled from "styled-components"

const ButtonBox = styled.div`
    position: relative;
    transform: scale(0.7);
    translateX(-15%);
`

const Button = styled.button`
    padding: 1rem;
    font-size: 2rem;
    border: none;
    color: #0c1016;
    filter: url("#gooey");
    position: relative;
    background-color: var(--app-color);
    transition: background-color 0.3s;

    &:hover {
        background-color: var(--app-secondary-color);
    }
    &:focus {
        outline: none;
    }
    & .bubbles {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    & .bubbles .bubble {
        background-color: var(--app-color);
        border-radius: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        z-index: -1;
    }
    & .bubbles .bubble:nth-child(1) {
        left: 97px;
        width: 25px;
        height: 25px;
        animation: move-1 3.02s infinite;
        animation-delay: 0.2s;
    }
    & .bubbles .bubble:nth-child(2) {
        left: 27px;
        width: 25px;
        height: 25px;
        animation: move-2 3.04s infinite;
        animation-delay: 0.4s;
    }
    & .bubbles .bubble:nth-child(3) {
        left: 49px;
        width: 25px;
        height: 25px;
        animation: move-3 3.06s infinite;
        animation-delay: 0.6s;
    }
    & .bubbles .bubble:nth-child(4) {
        left: 62px;
        width: 25px;
        height: 25px;
        animation: move-4 3.08s infinite;
        animation-delay: 0.8s;
    }
    & .bubbles .bubble:nth-child(5) {
        left: 30px;
        width: 25px;
        height: 25px;
        animation: move-5 3.1s infinite;
        animation-delay: 1s;
    }
    & .bubbles .bubble:nth-child(6) {
        left: 64px;
        width: 25px;
        height: 25px;
        animation: move-6 3.12s infinite;
        animation-delay: 1.2s;
    }
    & .bubbles .bubble:nth-child(7) {
        left: 80px;
        width: 25px;
        height: 25px;
        animation: move-7 3.14s infinite;
        animation-delay: 1.4s;
    }
    & .bubbles .bubble:nth-child(8) {
        left: 17px;
        width: 25px;
        height: 25px;
        animation: move-8 3.16s infinite;
        animation-delay: 1.6s;
    }
    & .bubbles .bubble:nth-child(9) {
        left: 94px;
        width: 25px;
        height: 25px;
        animation: move-9 3.18s infinite;
        animation-delay: 1.8s;
    }
    & .bubbles .bubble:nth-child(10) {
        left: 47px;
        width: 25px;
        height: 25px;
        animation: move-10 3.2s infinite;
        animation-delay: 2s;
    }

    position: absolute;
    left: -15%;
    bottom: 0;
    cursor: pointer;
`

export const BannerButton = () => {
    return (
        <ButtonBox>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="gooey">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                        <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                    </filter>
                </defs>
            </svg>

            <Button>
                <span style={{fontWeight: '500'}}>Ready?</span>
                <span className="bubbles">
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                    <span className="bubble"></span>
                </span>
            </Button>
        </ButtonBox>
    )
}