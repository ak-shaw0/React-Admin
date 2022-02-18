import * as React from 'react';
import { useRecordContext } from 'react-admin';
import {makeStyles} from '@mui/styles';
// import LaunchIcon, { NoEncryption } from '@mui/icons-material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { ClassNames } from '@emotion/react';

const useStyles = makeStyles({
    link : {
        textDecoration : 'none',
    },
    icon : {
        width: '0.5em',
        height: '0.5em',
        paddingLeft: 2,
    },
})

const MyUrlField = ({ source }) => {
    const record = useRecordContext ();
    const classes = useStyles();
    return record ? (
        <a href={record[source]} className={classes.link} >
            {record[source]}
            <RocketLaunchIcon className={classes.icon} />
        </a>
    ) : null;
}

export default MyUrlField;