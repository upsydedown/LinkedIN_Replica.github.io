import React from 'react'
import "./Feed.css";
import InputOption from "./InputOption.js"
import CreateIcon from '@mui/icons-material/Create';
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit';

const Feed = () => {
    return (
        <>
            <div className="feed">
                <div className="feed_inputContainer">
                    <div className="feed_input">
                        <CreateIcon />
                        <form className='input_section' action="">
                            <input type="text" />
                            <button className="post">Post</button>
                        </form>
                    </div>
                    <div className="feed_input_options">
                        <InputOption Icon={PhotoSizeSelectActualOutlinedIcon} title="Photo" color="#70B5F9" />
                        <InputOption Icon={SmartDisplayIcon} title="Video" color="#7FC15E" />
                        <InputOption Icon={BusinessCenterIcon} title="Job" color="#c79ef7" />
                        <InputOption Icon={VerticalSplitIcon} title="Write Article" color="#f5987e" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Feed