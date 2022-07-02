



import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment , Grid, Button } from '@material-ui/core';
import { Add, Close, Edit } from '@material-ui/icons';

import useTable from '../../component/utils/useTable'
import React  , {useState} from 'react'
import data from '../../constant/data';
import AddNew from '../../component/utils/AddNew';
import useStyles from './Styles.js'
import theme from '../../component/ui/Theme'

const SendMail = () => {
  const classes = useStyles()
  const records = data.mailInfo
  const headCells = data.mailHeaderCells
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
        <Grid container direction='column' className={classes.createBranch} >
          <Grid item className={classes.branchAdd} >
            <AddNew text='add new mail' icon={<Add className={classes.icon}  />} />
          </Grid>
          <Grid item>
            <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map(item =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.senderName}</TableCell>
                                    <TableCell>{item.senderPhone}</TableCell>
                                    <TableCell>{item.receiverName}</TableCell>
                                    <TableCell>{item.receiverPhone}</TableCell>
                                    <TableCell>{item.origin}</TableCell>
                                    <TableCell>{item.destination}</TableCell>
                                    <TableCell>{item.package}</TableCell>
                                    {/* <TableCell>{item.price}</TableCell> */}
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

export default SendMail