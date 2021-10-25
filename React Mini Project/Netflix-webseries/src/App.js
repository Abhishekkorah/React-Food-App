import React from 'react';
import Card from './Card';
import WebSeriesList from './WebSeriesList';

function App() {
  return (
        
      <React.Fragment>
        <h1 className="text">List of Web Series</h1>
        {
          WebSeriesList.map((val, index) => {
              return (
                <Card 
                key={index}
                // key = {Math.random().toString()}
                imgsrc = {val.imgsrc}
                title = {val.title}
                seriesName = {val.seriesName}
                webSeriesLink = {val.webSeriesLink}
              />
              );
          })
        }
        {/* <Card
          imgsrc = "https://wallpapercave.com/wp/wp5770334.jpg"
          title = "A Netflix Original Series"
          seriesName = "Dark"
          webSeriesLink = "https://www.netflix.com/in/title/80100172"
        />
        <Card
          imgsrc = "https://wallpapercave.com/wp/wp8715684.jpg"
          title = "A Netflix Original Series"
          seriesName = "Naruto"
          webSeriesLink = "https://www.netflix.com/in/title/70205012"
        /> */}
      </React.Fragment>
  );
}

export default App;
