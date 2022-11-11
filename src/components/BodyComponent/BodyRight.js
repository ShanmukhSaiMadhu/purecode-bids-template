import React from 'react'
import {TextField, Box, Grid, IconButton, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography, Divider, Select, FormControl, InputLabel, FormGroup, FormControlLabel, Checkbox, Button, } from '@mui/material'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

function BodyRight() {

    const items = [
        ['Agriculture, Forestry,Fishing and Hunting', 'Near East', 'Tuvalu'],

        ['Construction', 'United States', 'Uganda'],

        ['Educational Services', 'Western Hemisphere', 'United Arab Emirates'],

        ['Agriculture, Forestry,Fishing and Hunting', 'Near East', 'Tuvalu'],

        ['Construction', 'United States', 'Uganda'],

        ['Educational Services', 'Western Hemisphere', 'United Arab Emirates'],

        ['Agriculture, Forestry,Fishing and Hunting', 'Near East', 'Tuvalu'],

        ['Construction', 'United States', 'Uganda'],
    ]

  return (
    <Grid xs={12} spacing={0}>
        <Box m={1} sx={{display: 'flex', justifyContent: 'space-between'}}>
            <IconButton size='small' sx={{backgroundColor: '#bfc0c0', color: '#333333', borderRadius: '5px', border: '2px solid #66a581', fontWeight: '500'}}>
                Reset Filters
            </IconButton>

            <IconButton align="right" size='small' variant= 'outlined' sx={{border: '2px solid red', borderRadius: '5px'}}>
                <ClearOutlinedIcon sx={{color: 'red', fontSize: '1.3rem'}} />
            </IconButton>
        </Box>


        <TableContainer sx={{marginTop: '0.2rem'}}>
            <Table>
                <TableHead >
                    <TableRow sx={{backgroundColor: '#dddddd'}}>
                        <TableCell sx={{padding: '0', textAlign: 'center', width: '11rem', fontWeight: '600'}}>Project Size</TableCell>
                        <TableCell sx={{padding: '0', textAlign: 'center', width: '10.5rem', fontWeight: '600'}}>Project Source</TableCell>
                        <TableCell sx={{padding: '0', textAlign: 'center', width: '12rem', fontWeight: '600'}}>Date of Entry</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell  sx={{ border: '1px solid black', padding: '0', height: '11rem'}}>
                            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '2.5rem',gap: '5px'}}>
                                <Box>
                                    <Typography sx={{fontWeight: '600'}}>Min:</Typography>
                                    <TextField size='small' sx={{backgroundColor: '#eeeeee', border: '1px solid #64a481', borderRadius: '5px', width: '6rem',  borderWidth: '1px'}} />
                                </Box>

                                <Box>
                                    <Typography sx={{fontWeight: '600'}}>Max:</Typography>
                                    <TextField size='small' sx={{backgroundColor: '#eeeeee', border: '1px solid #64a481', borderRadius: '5px', width: '6rem'}} />
                                </Box>
                            </Box>
                        </TableCell>
                        <TableCell sx={{border: '1px solid black', padding: '0'}}>
                            <FormControl sx={{marginLeft: '1rem'}}>
                                <InputLabel sx={{color: 'black'}}>All</InputLabel>
                                <Select
                                label="All"
                                sx={{width: '8rem', height: '3.3rem'}}
                                >
                                </Select>
                            </FormControl>

                            <Typography sx={{color: 'black', fontWeight: '600', backgroundColor: '#dddddd', textAlign: 'center', margin: '0.7rem 0', padding: '0'}}>Project Status</Typography>

                            <FormControl sx={{marginLeft: '2rem'}}>
                                <InputLabel sx={{color: 'black'}}>All</InputLabel>
                                <Select
                                label="All"
                                sx={{width: '6rem', height: '3.3rem'}}
                                >
                                </Select>
                            </FormControl>
                        </TableCell>
                        <TableCell sx={{border: '1px solid black'}}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Under One Year" labelPlacement="bottom"/>
                            </FormGroup>
                        </TableCell>
                    </TableRow>

                    <TableRow sx={{backgroundColor: '#dddddd'}}>
                        <TableCell sx={{padding: '0', textAlign: 'center', fontWeight: '600'}}>Selector Type</TableCell>
                        <TableCell sx={{padding: '0', textAlign: 'center',  fontWeight: '600'}}>Region Choices</TableCell>
                        <TableCell sx={{padding: '0', textAlign: 'center',  fontWeight: '600'}}>Country Choices</TableCell>
                    </TableRow>

                    <TableRow>
                        <TableCell  sx={{ border: '1px solid black', display: 'flex', justifyContent: 'space-between' }}>
                            <Button sx={{border: '1px solid green', color: 'black', borderRadius: '5px', fontSize: '0.6rem'}} size= 'small' variant="outlined">Unselect All</Button>
                            <Button sx={{border: '1px solid green', color: 'black', borderRadius: '5px', fontSize: '0.6rem'}} size= 'small' variant="outlined">Select All</Button>
                        </TableCell>

                        <TableCell sx={{border: '1px solid black', padding: '0 0.1rem'}}>
                            <Button sx={{border: '1px solid green', color: 'black', borderRadius: '5px', fontSize: '0.6rem'}} size= 'small' variant="outlined">Unselect All</Button>
                            <Button sx={{border: '1px solid green', color: 'black', borderRadius: '5px', fontSize: '0.6rem'}} size= 'small' variant="outlined">Select All</Button>
                        </TableCell>

                        <TableCell sx={{ display: 'flex', justifyContent: 'space-between'}}>
                            <Button sx={{border: '1px solid green', color: 'black', borderRadius: '5px', fontSize: '0.6rem'}} size= 'small' variant="outlined">Unselect All</Button>
                            <Button sx={{border: '1px solid green', color: 'black', borderRadius: '5px', fontSize: '0.6rem'}} size= 'small' variant="outlined">Select All</Button>
                        </TableCell>
                    </TableRow>

                    {items.map((item) => (
                        <TableRow>
                            <TableCell sx={{border: '1px solid black', padding: '0'}} >
                                <FormGroup >
                                    <FormControlLabel control={<Checkbox defaultChecked />} label={item[0]} labelPlacement="end"/>
                                </FormGroup>
                            </TableCell>

                            <TableCell sx={{border: '1px solid black', padding: '0'}} >
                                <FormGroup >
                                    <FormControlLabel fontWeight='900' control={<Checkbox defaultChecked />} label={item[1]} labelPlacement="end"/>
                                </FormGroup>
                            </TableCell>

                            <TableCell sx={{border: '1px solid black', padding: '0'}} >
                                <FormGroup >
                                    <FormControlLabel control={<Checkbox defaultChecked />} label={item[2]} labelPlacement="end"/>
                                </FormGroup>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Grid>
  )
}

export default BodyRight