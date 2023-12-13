
import React from 'react';

function Banner() {
  const bannerStyle = {
    backgroundImage: 'url("banner.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="banner" style={bannerStyle}>
      <div className="banner-content">
        <div className="movie-info">
          <h1>Movie Title</h1>
          <p>Brief description of the movie goes here.</p>
        </div>
      </div>
    </section>
  );
}

export default Banner;

// .banner-content {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     padding: 20px;
//     color: #fff; /* Set the text color */
//   }

// import React from 'react';

// function Banner() {
//   return (
//     <section className="banner">
//       <div className="movie-info">
//         <h1>Movie Title</h1>
//         <p>Brief description of the movie goes here.</p>
//       </div>
//       {/* Banner image or video goes here */}
//       <img src="banner.jpg" alt="Movie Banner" />
//     </section>
//   );
// }


// export default Banner;


  