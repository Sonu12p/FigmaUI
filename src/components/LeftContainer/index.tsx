import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import * as React from 'react';
import Select, { SelectProps, selectClasses } from '@mui/base/Select';
import Option, { optionClasses } from '@mui/base/Option';
import Popper from '@mui/base/Popper';
import { styled } from '@mui/system';
import DragDrop from "./DragDrop";


const CustomSelect = React.forwardRef(function CustomSelect<
  TValue extends {},
  Multiple extends boolean,
>(props: SelectProps<TValue, Multiple>, ref: React.ForwardedRef<HTMLButtonElement>) {
  const slots: SelectProps<TValue, Multiple>['slots'] = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <Select {...props} ref={ref} slots={slots} />;
}) as <TValue extends {}, Multiple extends boolean>(
  props: SelectProps<TValue, Multiple> & React.RefAttributes<HTMLButtonElement>,
) => JSX.Element;


const numberOfEmployees = [
  {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },
  {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },
];

export default function LeftContainer() {
  return (
    <div className="leftContainer">
      <div className="leftContainerTitle">Register</div>
      <Grid container spacing={2.3}>
        <Grid item xs={12} lg={6}>
          <TextField
            fullWidth
            id="First Name"
            label="First Name"
            defaultValue="John"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            fullWidth
            id="Last Name"
            label="Last Name"
            placeholder="Doe"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="Mobile Number"
            label="Mobile Number"
            InputProps={{
              startAdornment: <CustomSelect defaultValue={'+62'} placeholder="+62">
                <StyledOption value={'+62'}>+62</StyledOption>
                <StyledOption value={'+63'}>+63</StyledOption>
                <StyledOption value={'+64'}>+64</StyledOption>
              </CustomSelect>,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="Business Name"
            label="Business Name"
            placeholder="crm"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="Business Address"
            label="Business Address"
            placeholder="1901 Thornridge Cir. Shiloh, Hawaii 81063"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="Business Email Address"
            label="Business Email Address"
            placeholder="example@email.com"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            fullWidth
            id="Password"
            label="Password"
            type="password"
            placeholder="8+ strong character"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <TextField
            fullWidth
            id="Confirm Password"
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="Australian Business Number"
            label="Australian Business Number"
            placeholder="812 5678 910"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            id="Business Logo"
            label="Business Logo"
            inputProps={
              {
                style: {
                  width: 0,
                  padding: 0,
                }
              }
            }
            InputProps={{
              startAdornment: <DragDrop />,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            id="Number of Employees"
            select
            label="Number of Employees"
          >
            {numberOfEmployees.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel control={<Checkbox size="medium" defaultChecked />} label={<div>I agree to all <a href="#" className="appLink">Terms & Conditions</a></div>} />
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <Button style={{ height: 60, textTransform: 'none' }} size="large" variant="contained" fullWidth>Sign Up</Button>
        </Grid>

        <Grid item xs={12}>
          <div>Already have an account? <a href="#" className="appLink">Sign In</a></div>
        </Grid>

      </Grid>
    </div>
  )
}

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledButton = styled('button')(
  ({ theme }) => `
  font-size: 0.875rem;
  box-sizing: border-box;
  min-width: 65px;
  padding: 8px 14px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: none;
  color: #E5E7EB;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${selectClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }

  &.${selectClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `,
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 320px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 4px 6px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.05)'
    };
  `,
);

const StyledOption = styled(Option)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.${optionClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${optionClasses.highlighted}.${optionClasses.selected} {
    background-color: #5048E5;
    color: #FFFFFF;
  }

  &.${optionClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const StyledPopper = styled(Popper)`
  z-index: 1;
`;