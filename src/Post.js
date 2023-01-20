import React, {forwardRef} from 'react'
import { Avatar } from '@mui/material';
import "./Post.css";
import InputOption from './InputOption';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import SyncIcon from '@mui/icons-material/Sync';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    return (
        <>
            <div ref={ref} className="Post">
                <div className="Post_header">
                    <Avatar> {name[0]}</Avatar>
                    <div className="Post_info">
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
                </div>

                <div className="Post_body">
                    <p>{message}</p>
                </div>

                <div className="Post_buttons">
                    <InputOption Icon={ThumbUpOutlinedIcon} title="Like" color="grey"/>
                    <InputOption Icon={ChatBubbleOutlineOutlinedIcon} title="Comment" color="grey"/>
                    <InputOption Icon={SyncIcon} title="Repost" color="grey"/>
                    <InputOption Icon={NearMeOutlinedIcon} title="Send" color="grey"/>
                </div>
            </div>
        </>
    )
});

export default Post;