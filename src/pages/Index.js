import React from 'react';
import AddItem from "../components/addItem";
import Header from "../components/header";
import Layout from "../components/layout";
import Blog from "../components/blog";
import { connect } from 'react-redux'

const App = ({ data, addBlog, deleteBlog }) => {
  const addItem = (title, discription) => {
    const blog = {
      id: Math.floor(new Date().valueOf() * Math.random()),
      title: title,
      discription: discription
    }
    addBlog(blog)
  }

  const deleteItem = (blog) => {
    const check = window.confirm("Are you sure?")
    if (check) {
      deleteBlog(blog);
    }
  }

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [data])

  return (
    <>
      <Layout>
        <Header />
        <AddItem addItem={addItem} />
        <Blog deleteItem={deleteItem} />
      </Layout>
    </>
  );
}


const mapStateToProps = ({ data }) => {
  return { data }
}

const mapDispatchToProps = (dispatch) => ({
  addBlog: (props) => dispatch({ type: "ADD_BLOG", data: props }),
  deleteBlog: (props) => dispatch({ type: "DELETE_BLOG", data: props })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)