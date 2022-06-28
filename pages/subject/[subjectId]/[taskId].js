import { useRouter } from "next/router";

const TaskCurrent = () => {
    const router = useRouter();
    const id = router.query.taskId;

    return (
        <div className="container">
            <div style={{marginTop: 32}}>
                Task id - {id}
            </div>
        </div>
    )
}

export default TaskCurrent;