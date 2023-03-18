import React, {useEffect} from 'react';
import {auth} from '../../config/firebase';
import {db} from '../../config/firebase'
import {getDocs, collection} from 'firebase/firestore'
import './LeaderBoard.css'

const LeaderBoard = () => {

    const dataRef = collection(db, 'scores')
    
    useEffect(async () => {
        const data = await getDocs(dataRef);
        console.log (data);
    }, [])

    return(
        <div className="container container-leaderboard">
            <h2>Leaderboard</h2>
            <div className="leaderboard">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Total Corrects</th>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default LeaderBoard