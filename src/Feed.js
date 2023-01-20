import React, { useState, useEffect } from 'react'
import "./Feed.css";
import InputOption from "./InputOption.js";
import CreateIcon from '@mui/icons-material/Create';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';
import Post from "./Post.js";
import { db } from './firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
    const user = useSelector(selectUser);

    const [input, setInput] = useState("second")
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                })))
        ));
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("");
    };

    return (
        <>
            <div className="feed">
                <div className="feed_inputContainer">
                    <div className="feed_input">
                        <CreateIcon />
                        <form className='input_section' action="">
                            <input value={input} onChange={e => setInput(e.target.value)} type="text" />
                            <button onClick={sendPost} className="post" type='submit'>Post</button>
                        </form>
                    </div>
                    <div className="feed_input_options">
                        <InputOption Icon={PhotoSizeSelectActualOutlinedIcon} title="Photo" color="#70B5F9" />
                        <InputOption Icon={SmartDisplayIcon} title="Video" color="#7FC15E" />
                        <InputOption Icon={BusinessCenterIcon} title="Job" color="#c79ef7" />
                        <InputOption Icon={VerticalSplitIcon} title="Write Article" color="#f5987e" />
                    </div>
                </div>

                {/* ===Post-section=== */}
                <FlipMove>
                    {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                        <Post
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            photoUrl={photoUrl}
                        />
                    ))}
                </FlipMove>
            </div>
        </>
    )
}

export default Feed