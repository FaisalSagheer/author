

const BlogDetailsPage = async ({ params }) => {
    const { blogdetails } = await params
    return  <h1>Blogs{blogdetails} </h1>
} 
export default BlogDetailsPage;