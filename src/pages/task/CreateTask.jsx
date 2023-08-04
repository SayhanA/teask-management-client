

const CreateTask = () => {

    const handleAddTask = (event) => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const status = form.status.value;
        const taskDetails = { title, description, status }
        console.log(taskDetails)

        fetch("http://localhost:5000/newTask", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(taskDetails)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        
    }
    
    return (
        <div>
            <div className='max-w-[600px] mx-auto border mt-10 rounded-xl px-20 pt-10'>
                <h3 className='text-center text-2xl font-bold pb-5'>Create New Task</h3>
                <form onSubmit={handleAddTask}>
                    <input className="input input-bordered w-full mb-5" name="title" placeholder="title" />
                    <input className="input input-bordered w-full mb-5" name="description" placeholder="Description" />
                    <input className="input input-bordered w-full mb-5" name="status" placeholder="Status" />
                    <input type="submit" className='btn w-full btn-primary mb-20' value="Add task" />
                </form>
            </div>
        </div>
    );
};

export default CreateTask;