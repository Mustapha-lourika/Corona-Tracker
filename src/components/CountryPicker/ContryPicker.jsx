import React ,{ useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import { countries} from '../../api';

import styles from './ContryPicker.module.css'



const CountryPicker=({changeCountry})=>{
    const [fetchCountriess,setFetchCountriess]=useState([]); 
    useEffect(()=>{
        const fetchCountries=async ()=>{
            setFetchCountriess(await  countries());
        }
        fetchCountries();
    },[]);


return (
<FormControl className={styles.formControl}>
    <NativeSelect defaultValue='' onChange={(e)=>{changeCountry(e.target.value)}}>
        <option value=""> Gloabal</option>
     {fetchCountriess.map( (country,i) => <option key={i} value={country}> {country}</option>)}
    </NativeSelect>
</FormControl>)
}
export default CountryPicker;