import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Button, TextField, Avatar } from '@mui/material';
import { getFirestore, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const db = getFirestore();
const auth = getAuth();
const storage = getStorage();

const StudentProfileComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [profileData, setProfileData] = useState({});
  const [newHomework, setNewHomework] = useState('');
  const [newPhoto, setNewPhoto] = useState(null);
  const [isLoadingHomeworks, setIsLoadingHomeworks] = useState(false);
  const [gpaDate, setGpaDate] = useState(new Date()); // Для даты GPA
  const [gpaValue, setGpaValue] = useState(''); // Для значения GPA
  

  useEffect(() => {
    const fetchProfileData = async () => {
      const userId = auth.currentUser ? auth.currentUser.uid : '';
      if (userId) {
        const docRef = doc(db, 'students', userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProfileData(docSnap.data());
        } else {
          await setDoc(docRef, {
            email: auth.currentUser.email,
            gpa: {},
            homeworks: [],
            photo: ''
          });
          const newDocSnap = await getDoc(docRef);
          setProfileData(newDocSnap.data());
        }
      }
    };

    fetchProfileData();
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSaveGpa = async () => {
    const userId = auth.currentUser ? auth.currentUser.uid : '';
    if (userId && gpaDate) {
      const docRef = doc(db, 'students', userId);
      try {
        const updatedGpa = {
          ...profileData.gpa,
          [gpaDate]: gpaValue
        };
        await updateDoc(docRef, { gpa: updatedGpa });
        setProfileData(prevData => ({
          ...prevData,
          gpa: updatedGpa
        }));
      } catch (error) {
        console.error('Error updating GPA:', error);
      }
    }
  };

  const handlePhotoChange = (event) => {
    if (event.target.files[0]) {
      setNewPhoto(event.target.files[0]);
    }
  };

  const handleUploadPhoto = async () => {
    const userId = auth.currentUser ? auth.currentUser.uid : '';
    if (newPhoto && userId) {
      const photoRef = ref(storage, `profilePhotos/${userId}`);
      await uploadBytes(photoRef, newPhoto);
      const photoURL = await getDownloadURL(photoRef);

      const docRef = doc(db, 'students', userId);
      try {
        await updateDoc(docRef, { photo: photoURL });
        setProfileData(prevData => ({
          ...prevData,
          photo: photoURL
        }));
      } catch (error) {
        console.error('Error updating profile photo:', error);
      }
    }
  };

  const handleAddHomework = async () => {
    if (newHomework.trim() === '') return;

    const userId = auth.currentUser ? auth.currentUser.uid : '';
    if (userId) {
      const docRef = doc(db, 'students', userId);
      try {
        const updatedHomeworks = [...(profileData.homeworks || []), newHomework.trim()];
        await updateDoc(docRef, { homeworks: updatedHomeworks });
        setProfileData(prevData => ({
          ...prevData,
          homeworks: updatedHomeworks
        }));
        setNewHomework('');
      } catch (error) {
        console.error('Error adding homework:', error);
      }
    }
  };

  return (
    <div className="student-profile-page" style={{ color: 'white' }}>
      <div className="main-content">
        <Tabs value={activeTab} onChange={handleTabChange} style={{ backgroundColor: 'white', color: 'black' }}>
          <Tab label="Profile" />
          <Tab label="GPA" />
          <Tab label="Homeworks" />
        </Tabs>

        <div className="tab-content">
          {activeTab === 0 && (
            <div className="profile-section">
              <h3>Email: {profileData.email || 'Not provided'}</h3>
              <div style={{ marginTop: '10px' }}>
                <Avatar
                  alt="Profile Photo"
                  src={profileData.photo || ''}
                  sx={{ width: 100, height: 100 }}
                  style={{ borderRadius: '50%' }}
                />
              </div>
              <input type="file" accept="image/*" onChange={handlePhotoChange} style={{ marginTop: '10px' }} />
              <Button variant="contained" onClick={handleUploadPhoto} style={{ marginTop: '10px', backgroundColor: 'white', color: 'black' }}>
                Upload Photo
              </Button>
            </div>
          )}

          {activeTab === 1 && (
            <div className="gpa-section">
              <h2>Your GPA</h2>
              <TextField
                label="GPA Value"
                value={gpaValue}
                onChange={(e) => setGpaValue(e.target.value)}
                fullWidth
                style={{ backgroundColor: 'white', color: 'black' }}
              />
              <div className='date-container' style={{marginTop:'10px'}}>
                <label>Select Date:</label>
                <DatePicker
                label="Select date"
                  selected={gpaDate}
                  onChange={(date) => setGpaDate(date)}
                  dateFormat="dd-MM-yyyy"
                  customInput={<TextField fullWidth style={{ backgroundColor: 'white', color: 'black' , marginLeft: '10px'}}/>}
                />
              </div>


              <Button variant="contained" onClick={handleSaveGpa} style={{ marginTop: '10px', backgroundColor: 'white', color: 'black' }}>
                Save GPA
              </Button>

               <div style={{ marginTop: '20px' }}>
                <h3>GPA History:</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {profileData.gpa && Object.entries(profileData.gpa).map(([date, gpa], index) => (
                    <li key={index} style={{ backgroundColor: 'white', color: 'black', padding: '5px', marginTop: '5px' }}>
                      {`Date: ${new Date(date).toLocaleDateString('ru-RU')}, GPA: ${gpa}`}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div className="homeworks-section">
              <h2>Homeworks</h2>
              <TextField
                label="New Homework"
                value={newHomework}
                onChange={(e) => setNewHomework(e.target.value)}
                fullWidth
                style={{ backgroundColor: 'white', color: 'black' }}
              />
              <Button variant="contained" onClick={handleAddHomework} style={{ marginTop: '10px', backgroundColor: 'white', color: 'black' }}>
                Add Homework
              </Button>
              {isLoadingHomeworks ? <p>Loading homeworks...</p> : (
                <ul style={{ listStyle: 'none', padding: 0, marginTop: '10px' }}>
                  {(profileData.homeworks || []).map((homework, index) => (
                    <li key={index} style={{ backgroundColor: 'white', color: 'black', padding: '5px', marginTop: '5px' }}>
                      {homework}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentProfileComponent;
