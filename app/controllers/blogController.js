
// create
export const createBlog = async (req,res) =>{
    return res.json({message: "Blog created successfully"})
}

// read
export const readBlog = async (req,res) =>{
    return res.json({message: "Blog read successfully"})
}

// update
export const updateBlog = async (req,res) =>{
    return res.json({message: "Blog update successfully"})
}

// delete
export const deleteBlog = async (req,res) =>{
    return res.json({message: "Blog delete successfully"})
}