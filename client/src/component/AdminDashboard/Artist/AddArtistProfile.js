import React, { useState } from 'react';
import "./AddArtistProfile.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddArtistProfile = () => {
    const artists = {
        name: "",
        email: "",
        address: "",
        artistDeatils: "",
        artistCategory: "",
    };
    const [artist, setArtist] = useState(artists);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        console.log(name, value);

        setArtist({ ...artist, [name]: value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/artist", artist)
            .then((response) => {
                toast.success(response.data.message, { position: "top-right" });
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className='addUser'>
            <Link to="/artistProfileList" type="button" class="btn btn-secondary">
                <i class="fa-solid fa-backward"></i> Back</Link>
            <h3>Add New Artist</h3>
            <form className="addUserForm" onSubmit={submitForm}>
                <div className='inputGroup'>
                    <label htmlFor="name">Artist Name:</label>
                    <input
                        type="text"
                        id='artistName'
                        onChange={inputHandler}
                        name='artistName'
                        autoComplete='off'
                        placeholder='Enter artist name'
                    />
                </div>
                <div className='inputGroup'>
                    <label htmlFor="name">Artist Email:</label>
                    <input
                        type="email"
                        id='artistEmail'
                        onChange={inputHandler}
                        name='artistEmail'
                        autoComplete='off'
                        placeholder='Enter your Artist Email'
                    />
                </div>
                <div className='inputGroup'>
                    <label htmlFor="name">Artist Address:</label>
                    <input
                        type="text"
                        id='artistAddress'
                        onChange={inputHandler}
                        name='artistAddress'
                        autoComplete='off'
                        placeholder='Enter Your Artist Address'
                    />
                </div>
                <div className='inputGroup'>
                    <label htmlFor="name">Artist Deatils:</label>
                    <input
                        type="text"
                        id='artistDeatils'
                        onChange={inputHandler}
                        name='artistDeatils'
                        autoComplete='off'
                        placeholder='Enter Your Artist Deatils'
                    />
                </div>
                 <div className='inputGroup'>
                    <label htmlFor="name">Artist Deatils:</label>
                    <input
                        type="text"
                        id='artistCategory'
                        onChange={inputHandler}
                        name='artistCategory'
                        autoComplete='off'
                        placeholder='Enter Your Artist Category'
                    />
                </div>
                <div className='inputGroup'>
                    <button type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddArtistProfile;
