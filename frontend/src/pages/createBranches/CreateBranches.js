

import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment , Grid, Button } from '@material-ui/core';
import { Close, Edit } from '@material-ui/icons';

import useTable from '../../component/utils/useTable'
import React  , {useState} from 'react'
import data from '../../constant/data';
import Submit from '../../component/formUI/submit/Submit';

const CreateBranches = () => {
  const records = data.branchesHeadCells
  const headCells = data.branchesHeadCells
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

  const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);
    console.log(recordsAfterPagingAndSorting)

  return (
    <>
      <Paper elevation={4} >
        <Grid container direction='column'>
          <Grid item >

          </Grid>
          <Grid item>
            <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.location}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.password}</TableCell>
                                    <TableCell>
                                        {/* <Submit
                                            color="primary"
                                            >
                                            <Edit fontSize="small" />
                                        </Submit> */}
                                        <Button
                                            color="secondary">
                                            <Close fontSize="small" />
                                        </Button>
                                    </TableCell>
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
          </Grid>
        </Grid>
      </Paper>
    </>
  )
}

export default CreateBranches