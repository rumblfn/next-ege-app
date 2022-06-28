import Link from "next/link";

const SubjectCurrent = ({tasks}) => {
    return (
        <div className="container">
            <div style={{display: 'flex', flexDirection: 'column', marginTop: 32, gap: 12}}>
            {
                tasks.map((item) => 
                <Link href={`/subject/${item.subject_id}/${item.id}`}
                    style={{fontSize: 22, fontWeight: 500, margin: 10}}
                    key={`${item.subject_id}-${item.id}`}
                >
                    <a>
                        {item.task_number}. {item.title}
                    </a>
                </Link>
                )
            }
            </div>
        </div>
    )
}

export default SubjectCurrent;

export async function getStaticPaths() {
    const response = await fetch(`${process.env.SERVER_URL}/subject/getSubjects`)
    const subjects = await response.json()

    const paths = []
    subjects.forEach(subject => {
        paths.push({
            params: {subjectId: subject.id}
        })
    })

    return {
        paths: paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params, req, res, query } = context;
    const { subjectId } = params;
    const response = await fetch(`${process.env.SERVER_URL}/subject/getTasksInfo/?subject_id=${subjectId}`)

    const data = await response.json()

    return {
        props: {
            tasks: data,
        },
    }
}