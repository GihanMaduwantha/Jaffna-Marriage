import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaDumpster, FaEdit } from 'react-icons/fa';
import p1 from '../../assests/home/p1.jpeg'
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { get } from 'react-scroll/modules/mixins/scroller';
import { baseURL } from '../../api';
function UserManagement() {

    const [open, setOpen] = React.useState(false);
    const [openDiactive, setOpenDiactive] = React.useState(false);

    const [selectedUser, setSelectedUser] = useState(null);

  const handleClickOpen = (userData) => {
    setOpen(true);
    setSelectedUser(userData);
  };
  const handleClickOpenDiactive = (userData) => {
    setOpenDiactive(true);
    setSelectedUser(userData);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenDiactive(false);
  };


  const activateUser = async() => {
    const token = localStorage.getItem('api_token');
  

    const response = await fetch(`${baseURL}/activateUser/${selectedUser.id}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    

    setOpen(false);
    setOpenDiactive(false);
    sendgetUserRequest();



  }
  const deactivateUser = async() => {
    const token = localStorage.getItem('api_token');
    const response = await fetch(`${baseURL}/deactivateUser/` + selectedUser.id, {
         method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    setOpen(false);
    setOpenDiactive(false);
    sendgetUserRequest();
  }

    const [userList, setUserList] = useState(null);

    const [editPanel, setEditPanel] = useState(false);

    function openCard() {
        setEditPanel(true)
    }

    function closeCard() {
        setEditPanel(false)
    }


    const [email, setEmail] = useState('lakshmi@mail.com');
    const [name, setName] = useState('Lakshmi Devi');
    const [country, setCountry] = useState('Sri Lnaka');
    const [city, setCity] = useState('Jaffna');
    const [relegion, seteligion] = useState('Hindu');
    const [cast, setCast] = useState('brahman');
    const [language, setLanguage] = useState('tamil');
    const [mobile, setMobile] = useState('+94761234567');
    const [gender, setGender] = useState('female');
    const [age, setAge] = useState('23');
    const [occupation, setOccupation] = useState('Doctor');
    const [marritalStatus, setMarriedStatus] = useState('Single');
    useEffect(() => {
        // fetch('http://localhost:8000/api/explore')
        // .then(res => res.json())
        // .then(data => {
        //     setExploreItems(data)
        // })


        //get all users from laravel admin route
        //https://backend.jaffnamarriage.com/Back-end/public/api/allUsers
        //pass token in header

        // fetch('https://backend.jaffnamarriage.com/Back-end/public/api/allUsers', {

        //     headers: {
        //         'Authorization': 'Bearer ' + localStorage.getItem('token')
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         setUserList(data)
        //     })

        sendgetUserRequest();

        console.log('token', localStorage.getItem('api_token'))

        

    }, [])

    const sendgetUserRequest = async () => {
        const token = localStorage.getItem('api_token');
        const response = await fetch(`${baseURL}/allUsers`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        const data = await response.json();
        console.log(data);
        setUserList(data.users);

    }

    const userListDummy = [
        {
            id: 1,
            name: 'test user',
            gender: 'female',
            spokenLnguage: 'tamil',
            marritalStatus: 'unmarried',
            town: 'jaffna',
            country: 'sri lanka',
            age: '23',
            photo: p1,
            language: ['tamil', 'english', 'sinhala'],
            relegion: 'hindu',
            caste: 'brahmin',
            education: 'bachelor degree',
            occupation: 'doctor',
            height: '5.5ft',
            postedOn: '2021-09-01',
            postedOn: '2021-09-01',
        },
        {
            id: 2,
            name: 'test user2',
            gender: 'female',
            spokenLnguage: 'tamil',
            marritalStatus: 'unmarried',
            town: 'jaffna',
            country: 'sri lanka',
            age: '23',
            photo: p1,
            language: ['tamil', 'english', 'sinhala'],
            relegion: 'hindu',
            caste: 'brahmin',
            education: 'bachelor degree',
            occupation: 'doctor',
            height: '5.5ft',
            postedOn: '2021-09-01',
        },
        
    ]

    useEffect(() => {

        // setUserList(userListDummy);



    }, [userList])


    return (
        <div className='takeFullWithAndHeight'>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Do you want to Deactivate this user?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                Click Confirm to Deactivate the selected user: {selectedUser && selectedUser.name}
                    <br />
                    user id: {selectedUser && selectedUser.id}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={deactivateUser} autoFocus>
                    Confirm
                </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={openDiactive}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Do you want to Activate this user?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Click Confirm to Activate the selected user: {selectedUser && selectedUser.name}
                    <br />
                    user id: {selectedUser && selectedUser.id}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={activateUser} autoFocus>
                    Confirm
                </Button>
                </DialogActions>
            </Dialog>
            {userList && (
                <div className='userList' >

                    {userList.map((item, index) => (
                        <div key={index} className='eachUserFromList'>
                            <div className='mainDetailUser'>
                                <div className='bigText'>{item.id + " : " + item.name}</div>
                                <div>{item.country + " - " + item.town}</div>
                            </div>

                            <div className='iconsCont'>
                                {(item.active == 1)? <div className='labelApproved' onClick={() => handleClickOpen(item)}>
                                    approved
                                </div> :
                                
                                <div className='labelNotApproved' onClick={() => handleClickOpenDiactive(item)}>
                                    not approved
                                    </div>
}
                            </div>
                            <div className='iconsCont'>

                                <div onClick={openCard} className='iconCircleEdit'><FaEdit /></div>
                                <div className='iconCircleDelete'><FaDumpster /></div>
                            </div>


                        </div>
                    ))}

                </div>
            )}


            {(editPanel == true) && (
                <div className='openedCardOverlay' onClick={closeCard}></div>
            )}
            {(editPanel == true) && (

                <div className='openedCardContainer'>
                    <div className='profEdit'>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Mobile
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your mobile"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                City
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Country
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your county"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Marrital Status
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your Marrital status"
                                value={marritalStatus}
                                onChange={(e) => setMarriedStatus(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                language
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your language"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                cast
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your cast"
                                value={cast}
                                onChange={(e) => setCast(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Age
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your Age"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-gray-300 focus:border-blue-500 focus:bg-white focus:outline-none"
                            />
                        </div>

                        <Button
                            variant="contained"
                            style=
                            {{
                                width: "350px",
                                backgroundColor: "#fefefe",
                                color: "#ff9800",
                            }}
                            size="large"

                            onClick={openCard}
                        >Update</Button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default UserManagement