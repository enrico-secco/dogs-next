"use client";

import React from 'react';
import PhotoCommentsForm from './photo-comments-form';
import styles from './photo-comments.module.css';
import { useUser } from '@/context/user-context';
import { Comment } from '@/types/comment';

const PhotoComments = ({ single, id, comments }: { single: boolean, id: number, comments: Comment[] }) => {
    const [commentsState, setCommentsState] = React.useState(() => comments);
    const commentsSection = React.useRef<HTMLUListElement>(null);
    const { user } = useUser();

    React.useEffect(() => {
        if (commentsSection.current) {
            commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
        }
    }, [commentsState]);

    return (
        <>
            <ul
                ref={commentsSection}
                className={`${styles.comments} ${single ? styles.single : ''}`}
            >
                {commentsState.map((comment) => (
                    <li key={comment.comment_ID}>
                        <b>{comment.comment_author}: </b>
                        <span>{comment.comment_content}</span>
                    </li>
                ))}
            </ul>
            {user && (
                <PhotoCommentsForm
                    single={single}
                    id={id}
                    setComments={setCommentsState}
                />
            )}
        </>
    );
};

export default PhotoComments;
