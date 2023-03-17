import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function RestReviews({reviews}) {
    console.log(reviews);
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button className='ps-0' variant='dark'
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Click Here to view the Client Reviews
            </Button>

            <Collapse in={open}>
                <div className='my-2' id="example-collapse-text">
                    {
                        reviews.map(item=>(
                            <div>
                                <h6> {item.name} : (<span>{item.date}</span>)</h6>
                                <p>Rating :{item.rating}</p>
                                <p>Comments :{item.comments}</p>

                            </div>
                        ))
                    }
                </div>
            </Collapse>
        </>
    )
}

export default RestReviews