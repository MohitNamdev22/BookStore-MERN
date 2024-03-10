import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteBook = ()=>{
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const {enqueueSnackbar} = useSnackbar();
    const handleDeleteBook = ( )=>{
        setLoading(true);
        axios
        .delete(`http://localhost:5555/books/${id}`)
        .then(()=>{
            setLoading(false);
            enqueueSnackbar('Book Deleted Successfully', {variant:'success'});
            navigate('/');
        })
        .catch((error)=>{
            setLoading(false);
            enqueueSnackbar('error', {variant:'error'});
            console.log(error);
        });
    };
    return (
        <div className='p-4'>
            <BackButton/>
            <h1 className="text-3xl my-4">Delete Book</h1>
            {loading ? <Spinner/> : ''}
            <div className="flex flex-col items-center border-2 border-sky-400 rouneded-xl w-[600px] p-8 mx-auto">
                <h3 className="text-sxl">
                    Are you sure want to delete this book?
                </h3>
                <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDeleteBook}>
                    Yes, Delete It
                </button>

            </div>
        </div>
    )
}

export default DeleteBook;