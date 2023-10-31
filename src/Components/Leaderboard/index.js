import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  // Fetch the top 10 users with the highest "Score"
  useEffect(() => {
    const Users = firebase.firestore().collection("Users");

    // Query Firestore to fetch the top 10 users based on "Score" in ascending order
    Users.orderBy("Score", "asc").limit(10).get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setLeaderboardData(data);
      })
      .catch((error) => {
        console.error("Error fetching leaderboard data: ", error);
      });
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center", flexWrap: 'wrap', textAlign: 'center', backgroundColor: 'red' }}>
        <h2 className="specialFont">LEADERBOARD</h2>
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((user) => (
                <tr key={user.id}>
                  <td>{user.Name}</td>
                  <td>{user.Score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Leaderboard;
