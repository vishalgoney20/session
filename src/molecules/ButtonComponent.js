import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#FF9052',
      color: '#FFFFFF'
    },
    borderRadius: 6,
    backgroundColor: '#FF9052',
    color: '#FFFFFF',
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0,
    textAlign: 'center',
    width:332,
    height:50
  },
  widthVariant:{
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: '#FF9052',
      color: '#FFFFFF'
    },
    borderRadius: 6,
    backgroundColor: '#FF9052',
    color: '#FFFFFF',
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0,
    textAlign: 'center' ,
    width:156,
    height:50
  },

});


function ButtonComponent(props) {
  const classes = useStyles();
  return (
    <Button className={props.value==='Share Link' ? classes.widthVariant : classes.root}
              onClick={props.onClick}
              disabled={props.disabled} 
              style={{ backgroundColor: props.disabled ? '#FFC997' : '#FF9052', color: '#FFFFFF' }}
              variant="contained" color="secondary" type="submit" >{props.value}</Button>
  );
}


export default ButtonComponent;