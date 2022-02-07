import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { connect } from 'react-redux'

const AddItem = ({ addItem }) => {
    const [blog, setBlog] = React.useState("")
    const [discription, setDiscription] = React.useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!blog || !discription) {
            alert("Fill the data")
        }
        else {
            addItem(blog, discription)
        }
        setBlog("")
        setDiscription("")
    }

    return (<>
        <h2>Add blog</h2>
        <form onSubmit={submit}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <TextField size="small" value={blog} onChange={(e) => { setBlog(e.target.value) }} label="Title..." variant="outlined" style={{ width: "100%", marginBottom: "10px" }} />
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        value={discription} 
                        onChange={(e) => { setDiscription(e.target.value) }} 
                        label="Discription..." 
                        style={{ width: "100%", marginBottom: "10px" }}
                    />
                    <Button variant="contained" type="submit">ADD</Button>
                </Grid>
            </Grid>
        </form>
    </>)
}


const mapStateToProps = ({ data }) => {
    return { data }
}

export default connect(mapStateToProps)(AddItem)