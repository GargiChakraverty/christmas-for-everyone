import React, { useEffect, useState } from 'react';
import './App.css';
import { Card } from '@material-ui/core';
import Loader from './loader';
import donate from './images/undraw_gifts_btw0.svg';
import Pagination from '@material-ui/lab/Pagination';
import FavoriteIcon from '@material-ui/icons/Favorite';


function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = React.useState(1);


  const handleChange = (event, newPage) => {
    setIsLoaded(false);
    setPage(newPage);
    // console.log(newPage);
    handleFetch(newPage);
  };

  const URL = 'https://api.data.charitynavigator.org/v2/Organizations?app_id=0b2879ee&app_key=4d77461979dff998e5526c6475a090ea&fundraisingOrgs=true&search=poverty&rated=true&sort=RATING%3ADESC&pageSize=2';

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  
  useEffect(() => {
    handleFetch(1);
  }, [])
// 
  const handleFetch = (page) => {
    var URL_New= URL+`&pageNum=${page}`;
    // console.log(URL_New);
    fetch(URL_New)
			.then(response => response.json())
			.then((result) => {
        setIsLoaded(true);
        setItems(result);
        setPage({page});
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    )
	};

  
  if (error) {
    return <div><div style={{margin:"auto", textAlign: "center", width: "50%", transform:"translateX(25%)"}}><Pagination count={40} color="secondary" onChange={handleChange}/></div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return(
      <>
      <div style={{margin:"auto", textAlign: "center", width: "50%", transform:"translateX(25%)"}}><Pagination count={40} color="secondary" onChange={handleChange}/></div>
      <Loader/>
      
      </>
    );
  } else {
    return (
      <>
      <div style={{margin:"auto", width: "50%", transform:"translateX(25%)"}}>
      <Pagination count={40} color="secondary" onChange={handleChange}/>
      </div>
      <div className="contents" style={{display:"flex", width:"100%", margin:"auto"}}>
      <div style={{display:"block"}}>
      <img className="img-left" src={donate} width="300px" height="300px" alt="Underprivilege"/>
      <h2 style={{overflowWrap:"normal"}} className="caption">Help the underprivilege. <br></br>Make your contribution today</h2>
      </div>
      <div style={{display:"flex", wordWrap:"normal", width:"50%",flexDirection: "row", flexWrap:"wrap", justifyContent:"space-evenly", flexGrow: "1", flexShrink:"1"}}>
        <div style={{display:"block", width:"100%"}}>
          <h2 style={{fontFamily: "'Comfortaa', cursive"}}>Donate for a Noble Cause <FavoriteIcon fontSize="large"/></h2>
        </div>
        {items.map(item => (
           <div key={item.ein} style={{width:"350px"}}>
            <Card className="card" style={{backgroundImage:"linear-gradient(60deg, rgba(11, 232, 129,0.6), rgba(255, 255, 200,1.0))", margin: '5px', padding: '10px 10px 10px 10px', minHeight:"250px"}}>
            <h3 style={{fontFamily:"'Nova Flat', cursive"}}><u><b>{item.charityName}</b></u></h3>
            <p style={{fontFamily:"'Roboto Condensed', sans-serif"}}>{item.tagLine}</p>
            <p className="star" style={{fontFamily:"'Ubuntu', sans-serif"}}>Rating:  {item.currentRating.rating}</p>
            <p style={{fontFamily:"'Ubuntu', sans-serif"}}>Cause: {item.cause.causeName}</p>
            <p style={{fontFamily:"'Ubuntu', sans-serif"}}>{item.mailingAddress.city}, {item.mailingAddress.stateOrProvince}</p>
            <a href={item.websiteURL} target="_blank" rel="noreferrer" style={{fontFamily:"'Ubuntu', sans-serif"}}>Click here to Donate</a>
            </Card>
           </div>
        ))}
      </div>
      </div>
      </>
    );
  }  
}


export default MyComponent;
