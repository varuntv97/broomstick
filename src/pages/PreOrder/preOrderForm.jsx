import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function PreOrderForm(){
    return(
        <div className="preorder_form">
            <h3>Reserve Yours Today!</h3>
            <div className="preorder_form_box">
                <TextField id="outlined-basic" label="Name" variant="outlined" style={{backgroundColor:'#ffff',marginBottom:'1em'}}/>
                <TextField id="outlined-basic" label="Email" variant="outlined" style={{backgroundColor:'#ffff',marginBottom:'1em'}}/>
                <TextField id="outlined-basic" label="Phone" variant="outlined" style={{backgroundColor:'#ffff',marginBottom:'1em'}}/>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    label="Billing Address"
                    rows={4}
                    style={{backgroundColor:'#ffff',marginBottom:'1em'}}
                    />
                <TextField
                    id="outlined-multiline-static"
                    label="Shipping Address"
                    multiline
                    rows={4}
                    style={{backgroundColor:'#ffff',marginBottom:'1em'}}
                />
                <TextField id="outlined-basic" label="Remarks" variant="outlined" style={{backgroundColor:'#ffff',marginBottom:'1em'}} />
                <Button  className={"button_dark button"} variant="contained" style={{width:'200px'}}>Pre-Order</Button>
            </div>
        </div>
    )
}