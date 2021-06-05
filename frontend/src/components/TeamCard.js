import React, {useState} from 'react';
import * as Icon from 'react-feather';
import {Link} from 'react-router-dom'

const TeamCard = ({teamMember}) => {
    {console.log(teamMember)}
    return (
        <div className="single-team">
                    <div className="team-image">
                        <img src={teamMember.photo} alt="Team member" />
                    </div>

                    <div className="team-content">
                        <div className="team-info">
                            <h3>{teamMember.firstName}</h3>
                            <span>{teamMember.role}</span>
                        </div>

                        <ul>
                            <li>
                                <Link href="#" target="_blank">
                                    <Icon.Facebook />
                                </Link>
                                
                            </li>
                            <li>
                                <Link href="#" target="_blank">
                                    <Icon.Twitter />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" target="_blank">
                                    <Icon.Linkedin />
                                </Link>
                            </li>
                            <li>
                                <Link href="#" target="_blank">
                                    <Icon.Gitlab />
                                </Link>
                            </li>
                        </ul>

                        {/*<p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>*/}
                    </div>
        </div>
    )
}

export default TeamCard
