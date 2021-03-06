import React, { Component } from 'react';
import {createMuiTheme, ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export class FormCharacteristicDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values, handleCheckboxChange } = this.props;
        // const { roomCharacteristics } = values.roomCharacteristics;

        const theme = createMuiTheme({
            palette: {
                primary: {
                    main: '#007AE5',
                },
                secondary: {
                    main: '#E0E4E7',
                },
            },
        });

        return (
            <MuiThemeProvider theme={theme}>
                <Dialog
                    open
                    fullWidth
                    maxWidth='sm'
                >
                    <DialogTitle align="center" id="form-dialog-title">Do any of these room characteristics apply?</DialogTitle>
                    <DialogContent>
                        <DialogContentText align="center">
                            Select all that apply.
                        </DialogContentText>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={values.highCeilings} onChange={handleCheckboxChange('highCeilings')} name="highCeilings" color="primary"/>}
                                label="High Ceilings"
                                color="primary"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={values.lotsOfSunlight} onChange={handleCheckboxChange('lotsOfSunlight')} name="lotsOfSunlight" color="primary"/>}
                                label="Lots of sunlight"
                                color="primary"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={values.heavilyInsulated} onChange={handleCheckboxChange('heavilyInsulated')} name="heavilyInsulated" color="primary"/>}
                                label="Heavily insultated"
                            />
                        </FormGroup>
                        {/*<FormControl component="fieldset">*/}
                        {/*    <RadioGroup aria-label="roomCharacteristics" name="roomCharacteristics" defaultValue={values.roomCharacteristics} value={roomCharacteristics} onChange={handleChange('roomCharacteristics')} >*/}
                        {/*        <FormControlLabel value="High Ceilings" control={<Radio />} label="High Ceilings" />*/}
                        {/*        <FormControlLabel value="Lots of sunlight" control={<Radio />} label="Lots of sunlight" />*/}
                        {/*        <FormControlLabel value="Heavily insulated" control={<Radio />} label="Heavily insulated" />*/}
                        {/*    </RadioGroup>*/}
                        {/*</FormControl>*/}
                        <br />
                        <br />
                        <Button
                            color="secondary"
                            variant="contained"
                            fullWidth
                            onClick={this.back}
                        >Back</Button>

                        <Button
                            color="primary"
                            variant="contained"
                            fullWidth
                            onClick={this.continue}
                        >Next</Button>
                    </DialogContent>
                </Dialog>
            </MuiThemeProvider>
        );
    }
}

export default FormCharacteristicDetails;
