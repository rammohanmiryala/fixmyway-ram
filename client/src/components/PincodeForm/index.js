import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Search, Grid, Header, Segment, Button } from 'semantic-ui-react'
import "../../styles/PincodeForm.css";


import { Link } from 'react-router-dom';

import pincodesdata from "../PostcodeDetails/PINCODEDATA.json"


const PincodeForm = () => {
    const [searchValue, setsearchValue] = useState("");
    return (
        <form>
            <>
                <div className="searchbar">
                    <Search
                        type="text"
                        placeholder='Search...'
                        onSearchChange={event => setsearchValue(event.target.value)}
                        value={searchValue}
                        id="searchbar" /> {/* <Button onClick={getpostcodes} /> */}
                </div>
                
                    <div className="searchbar">
                        {pincodesdata.filter((val) => {
                            if (searchValue == "") {
                                return
                            } else if (val.Name.toLowerCase().includes(searchValue.toLowerCase())) {
                                return val
                            }
                        }).map((postcode) => {
                            return <ul className="postcodes">
                                <Link className="buttoncolor">
                                    {postcode.Name} <span> </span>with<span> </span>Pincode<span> </span> {postcode.Pincode}</Link></ul>
                        })}
                    </div>
               
            </>
        </form>

    );

}
export default PincodeForm;