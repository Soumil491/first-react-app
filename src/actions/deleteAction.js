const deleteAction = (data) => {
    return(
        {
           type: "DELETE",
           payload: data
        }
    )
}

export default deleteAction;