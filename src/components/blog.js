import React from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import { connect } from 'react-redux'

const Blog = (({ data, deleteItem }) => {
    return (<>
        <h2>Blog List</h2>
        {data.length === 0 ? "No data..." :
            data.map((item, i) => {
                return (
                    <>
                        <Grid container spacing={1}>
                            <Grid item xs={11} sm={11} md={11} style={{ padding: "10px 0px 0px 5px" }}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>{item.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {item.discription}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                            <Grid item xs={1} sm={1} md={1} style={{ paddingTop: "15px" }}>
                                <IconButton aria-label="delete">
                                    <DeleteIcon onClick={() => { deleteItem(item) }} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </>
                )
            })
        }
    </>)
})


const mapStateToProps = ({ data }) => {
    return { data }
}

export default connect(mapStateToProps)(Blog)
