import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Upcoming: React.FC = () => {

    const events = [
        {
            title:'Nap Night',
            location:'Urban League of NE',
            date:'April 7th 2024', 
            image:'./img/calendar/napnightapril.png',
            link:'',
            description:'More information coming soon'
        },
        {
            title:'Steampunk Tea Party',
            location:'Washington Branch Library',
            date:'Thursdays, August 10th - 24th', 
            image:'./img/calendar/steampunktp2024.png',
            link:'https://omaha.bibliocommons.com/events/647a40fab05dd010f76de2a7',
            description:`Join OPL every Thursday as a local community member shares their story. This month, Jade Rogers, Founder of The House of Afros, Capes, and Curls, will share her story and introduce teens to the storytelling medium of Dungeons & Dragons. 
            Enjoy snacks, engage in discussion with the storyteller, and explore new storytelling mediums and activities. Presenters will include local artists, activists, business leaders, and more, empowering teens to explore new ways to express themselves.
            This program is for teens 11–18 years old.`
        },
        {
            title:`AfroOmaha's AfroFest`,
            location:'Stinson Park, 2285 S 67th St',
            date:'Saturday September 2nd', 
            image:'./img/calendar/faeday2024.png',
            link:'https://www.eventbrite.com/e/afro-fest-omaha-2023-tickets-533889597157',
            description:`Come see us at AfroOmaha's AfroFest!  There will also be thrilling local and international performances of live music and dance. Vendors with an array of arts, crafts, jewelry, and of course authentic African cuisine will be present! The Children’s and Educational Village will be filled with fun filled activities, and more!`
        },
        // {
        //     title:`NukeCon Board Game Con`,
        //     location:'Mid-America Center Council Bluffs',
        //     date:'Friday September 22nd - Sunday September 24th', 
        //     image:'./img/calendar/nukecon.jpg',
        //     link:'https://www.nuke-con.com/',
        //     description:`Nuke-Con is an all-volunteer organization dedicated to promoting the positive educational, social, and entertainment aspects in all types of gaming hobbies. We'll be a vendor there. More information coming soon!`
        // },
        // {
        //     title:`Divisible Documentary Film Screening`,
        //     location:'TBD',
        //     date:'TBD', 
        //     image:'./img/calendar/film.jpg',
        //     link:'https://www.divisibledoc.com/',
        //     description:` More information coming soon!`
        // },
        // {
        //     title:`AfroCon 2023: Making Space to Dream`,
        //     location:'TBD',
        //     date:'Saturday October 7th', 
        //     image:'./img/calendar/afrocon.jpg',
        //     link:'http://www.afroconomaha.com/',
        //     description:` More information coming soon!`
        // },
        // {
        //     title:`AfroCon VIP Brunch`,
        //     location:'TBD',
        //     date:'Sunday October 8th', 
        //     image:'./img/calendar/brunch.jpg',
        //     link:'http://www.afroconomaha.com/',
        //     description:` More information coming soon!`
        // },

    ]


    return (
        <section className="page-section bg-light" id="photos">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">
                              Our Upcoming Events
                            </h2>
                            {/* <ImageList variant="masonry" cols={1} gap={8} sx={{ width: '100%', height: '100%' }}>
      {events.map((item) => (
        <ImageListItem key={item.image}>
          <img
            srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.image}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.title}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList> */}

                            <div className="row justify-content-center">
                                { events.map((event, idx)=>(
                                     <div className="col-xs-6 col-md-4" key={idx}>
                                     <a href="#" className="thumbnail">
                                     <img src={event.image} className="img-fluid rounded-start event-img" alt="..." />
                                     </a>
                                   </div>
                                //     <div className="card mb-3" key={idx}>
                                //     <div className="row g-0">
                                //       <div className="col-md-5">
                                //         <img src={event.image} className="img-fluid rounded-start" alt="..." />
                                //       </div>
                                //       {/* <div className="col-md-7">
                                //         <div className="card-body">
                                //           <h5 className="card-title">{event.title} : {event.date} @ {event.location}</h5>
                                //           <p className="card-text">{event.description}</p>
                                //           <a href={event.link} rel="noreferrer" target="_blank" className="btn btn-danger mb-3 btn-sm">
                                //     Find out more!
                                // </a>
                                //         </div>
                                //       </div> */}
                                //     </div>
                                //   </div>
                                  
                                ))

                                }
  </div>
                         
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default Upcoming
