import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Search, Grid, Header, Segment, Button} from 'semantic-ui-react'
import "../../styles/PincodeForm.css";
import PostcodeDetails from  "../PostcodeDetails"

import {Link} from 'react-router-dom';

import pincodesdata from "../PostcodeDetails/PINCODEDATA.json"



const App = () => {
    const [searchValue,
        setsearchValue] = useState("");

        const searchedvalue ={searchValue}

    const getpostcodes = (e) => {
        e.preventDefault();
    }

    const handleEnterKeyPressed = (e) => {
        if(e.key=== 'Enter') {
          onSearch(searchValue)
        }
      }
 
    return (
       
        
         <>
          const values = {searchedvalue}
    
     <form>
        

        <div className="searchbar">

            <Search
                type="text"
                placeholder='Search...'
                onSearchChange={event => setsearchValue(event.target.value)}
                value={searchValue}
                onKeyPress={handleEnterKeyPressed}
                id="searchbar"/> {/* <Button onClick={getpostcodes} /> */}
        </div>
        <div className="searchbar">

            <PostcodeDetails searchedval={searchedvalue}/> {/* <ul className="searchbar_result">
                {pincodesdata.filter((val) => {
                    if (searchValue == "") {
                        return
                    } else if (val.Name.toLowerCase().includes(searchValue.toLowerCase())) {
                        return val
                    }
                }).map((postcode) => {
                    return <ul className="postcodes">
                        <Link className ="buttoncolor">
                        {postcode.Name} <span> </span>with<span> </span>Pincode<span> </span> {postcode.Pincode}</Link></ul>
                })}
            </ul>
        </div> */}
        </div>
    </form> </>
    );
};
export default App;