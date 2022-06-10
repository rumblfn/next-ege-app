import { Container } from '@mui/system'
import styled from 'styled-components'
import { HomePageBanner } from '../components/HomePageBanner'
import Link from 'next/link'
import { LinkDefault } from '../components/Link'

const HomePageBox = styled.div`
  margin: ${props => props.marginTop ? props.marginTop : '32px'} 0 32px;
`

const BoxTitle = styled.h2`
  margin: 16px 0;
`

const BoxSubTitle = styled.h4`
  margin: 8px 0;
`

const QuestionsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
`

const SubjectsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px;
`

const StyledA = styled.a`
  margin: 8px 0;
  cursor: pointer;
`

export default function Home({subjects}) {
  return (
    <Container>
      <HomePageBanner/>
      <HomePageBox>
        <BoxTitle>Доступные модули</BoxTitle>
        <SubjectsBox>
          {subjects.map(subject => 
            <Link href={`/subject/${subject.id}`} key={subject.id}>
              <StyledA>
                {subject.title}
              </StyledA>
            </Link>
          )}
        </SubjectsBox>
      </HomePageBox>
      <HomePageBox marginTop='64px'>
        <BoxTitle>Вопросы и ответы</BoxTitle>
        <QuestionsBox>
          <div>
            <BoxSubTitle>Что такое Subject?</BoxSubTitle>
            <p>Это полностью бесплатная платформа для подготовки к ЕГЭ по математике, информатике и русскому языку. 
              Subject создается в процессе подготовки к экзамену самим разработчиком и вами, пользователями моего приложения (если такие конечно найдутся)
            </p>
          </div>
          <div>
            <BoxSubTitle>Как проходит обучение?</BoxSubTitle>
            <p>Выбираете нужный раздел, открываете тему из списка. 
              По каждой теме есть задания и теория, все, что необходимо знать на экзамене.
              Если у вас что-то не получается, вы можете задать вопрос в обсуждении под каждой темой.
            </p>
          </div>
          <div>
            <BoxSubTitle>Какие возможности есть для практикующих разработчиков?</BoxSubTitle>
            <p>Subject – проект с открытым исходным кодом. Участвовать в его развитии может любой практикующий разработчик. 
              Исходный код доступен на GitHub. 
              Вы можете помочь в создании новых курсов и уроков, улучшать существующие, 
              исправлять неточности и опечатки, переводить курсы на английский язык.
            </p>
          </div>
        </QuestionsBox>
      </HomePageBox>
    </Container>
  )
}


export async function getStaticProps() {
  const response = await fetch(`${process.env.SERVER_URL}/subject/getSubjects`)
  const subjects = await response.json()

  return {
      props: {
        subjects,
    }
  }
}