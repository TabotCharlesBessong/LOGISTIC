

import React from 'react'
import { Radio,RadioGroup,FormControl,FormLabel , FormControlLabel , TextField, MenuItem } from '@material-ui/core'
import { useField , useFormikContext } from 'formik'


const RadioGroups = ({
    name,
    options,
    ...otherProps
}) => {
  const {setFieldValue} = useFormikContext()
  const [field,meta] = useField(name)

  const handleChange = (e)=>{
    const {value} = e.target 
    setFieldValue(name,value)
  }

  const configRadio = {
    ...field,
    ...otherProps,
    radio:true,
    variant:'outlined',
    fullWidth:true,
    onChange:handleChange
  }

  if(meta && meta.touched && meta.error){
    configRadio.error = true
    configRadio.helperText = meta.error
  }

  return (
    <TextField
    {...configRadio}
    >
      {
        Object.keys(options).map((item,pos)=>{
            return(
                <MenuItem key={pos} value={item}>
                    {options[item]}
                </MenuItem>
            )
        })
      }
    </TextField>
  )
}

export default RadioGroups