import React from 'react';
const AboutPage = () => {
  return (
    <>
    <div style={styles}>
      <h2 style={{color:"yellow"}}>About This Website:</h2>
    Imagine a website that serves as the ultimate destination for movie enthusiasts, offering a comprehensive database of films from around the world. This platform not only showcases the latest releases but also provides detailed information about each movie, including its ranking, release date, genre, director, cast, and a brief synopsis. Users can explore a wide array of movies, from timeless classics to the newest blockbusters, all meticulously categorized for easy navigation. The website features a dynamic ranking system, updated in real-time based on user ratings and reviews, ensuring that visitors always have access to the most popular and critically acclaimed films. Additionally, each movie page includes trailers, high-quality images, and links to official merchandise and streaming services. For those who love to stay informed, the site offers a news section with the latest updates from the film industry, including upcoming releases, box office reports, and exclusive interviews with filmmakers and actors. Whether you're a casual viewer or a hardcore cinephile, this website is designed to enhance your movie-watching experience by providing all the information you need in one convenient place.
    </div>
    </>
  )
}

let styles = {
    width: '65%',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginTop: '50px',
  color:'white',
  fontSize: '1.2rem',
}
export default AboutPage;
