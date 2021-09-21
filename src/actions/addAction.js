const addAction = (data)=>{
    return (
        {
            type: "ADD",
            payload: data
        }
    )
}

export default addAction;