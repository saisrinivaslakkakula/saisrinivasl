import React, {useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageBanner from '../components/PageBanner';
import TeamCard from '../components/TeamCard'
import axios from 'axios'
 
const TeamScreen = () => {

    const [display, setDisplay] = useState(false);
    const [team,setTeam] = useState([])

    React.useEffect(() => {
        setDisplay(true);
        const getTeam = async ( ) =>{
            const {data} = await axios.get('/api/team')
            setTeam(data)
        }
        getTeam()
    }, [])
    //console.log(team)

    return (
        <div>
          

            <PageBanner pageTitle="Team" />
            <div className="team-area pt-80 pb-50 bg-f9f6f6">
                <div className="container">
                    <div className="row justify-content-center">
                    {team.map(teamMember => (
                         <div className="col-lg-4 col-md-6">
                 <TeamCard teamMember={teamMember}/>
                 </div>
             ))}
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default TeamScreen;