import React, {useState} from 'react';
import OwlCarousel from 'react-owl-carousel3'
import axios from 'axios'
import TeamCard from './TeamCard';

const options = {
    items: 3,
    loop: false,
    rewind: false,
    nav: false,
    dots: true,
    margin: 30,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 3
        },
        1500: {
            items: 5
        }
    }
}

const Team = () => {
    const [display, setDisplay] = useState(false);
    const [team,setTeam] = useState([])

    React.useEffect(() => {
        setDisplay(true);
        const getTeam = async ( ) =>{
            const {data} = await axios.get('/api/team')
            setTeam(data)
           // console.log(data)
        }
        getTeam()
    }, [])
    //console.log(team)

    return (
        <div className="team-area ptb-80 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Our Awesome Team</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            
            {display ? <OwlCarousel 
                className="team-slider owl-carousel owl-theme owl-theme-style"
                {...options}
            > 
             
             {team.map(teamMember => (
                 <TeamCard teamMember={teamMember}/>
             ))}
                
            </OwlCarousel> : ''}
        </div>
    )
}

export default Team;