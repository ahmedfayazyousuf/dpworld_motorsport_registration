import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
// ... (previous imports)

const AdminPage = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [updatedScore, setUpdatedScore] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const leaderboardRef = firebase.firestore().collection('Leaderboard');
      const snapshot = await leaderboardRef.orderBy('Score', 'asc').get();

      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().Name,
        score: doc.data().Score,
        // Add other fields as needed
      }));

      setLeaderboardData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await firebase.firestore().collection('Leaderboard').doc(userId).delete();
      setLeaderboardData(prevData => prevData.filter(entry => entry.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleScoreUpdate = async (userId) => {
    try {
      await firebase.firestore().collection('Leaderboard').doc(userId).update({
        Score: parseInt(updatedScore) // Assuming Score is a number
      });
      setUpdatedScore('');
      fetchData(); // Fetch data again to update the leaderboard
    } catch (error) {
      console.error('Error updating score:', error);
    }
  };

  return (
    <div style={{ height: '100vh', overflowY: 'scroll', background: 'white' }}>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
            <th>Action</th>
            <th>Update Score</th> {/* New column for updating score */}
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr key={entry.id}>
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.score}</td>
              <td>
                <button onClick={() => handleDelete(entry.id)}>Delete</button>
              </td>
              <td>
                <input
                  type="number"
                  value={updatedScore}
                  onChange={(e) => setUpdatedScore(e.target.value)}
                />
                <button onClick={() => handleScoreUpdate(entry.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
