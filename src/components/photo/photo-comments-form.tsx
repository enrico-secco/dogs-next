"use client";

import { useFormState, useFormStatus } from "react-dom";
import styles from "./photo-comments-form.module.css";
import EnviarIcon from "@/icons/enviar-icon";
import ErrorMessage from "../helper/error-message";
import { Comment } from "@/types/comment";
import commentPost from "@/actions/comment-post";
import { useEffect, useRef } from "react";

function FormButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className={styles.button} disabled={pending}>
            <EnviarIcon />
        </button>
    );
}

export default function PhotoCommentsForm({
    single,
    id,
    setComments,
}: {
    single: boolean;
    id: number;
    setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}) {
    const [state, action] = useFormState(commentPost, {
        ok: false,
        data: null,
        error: ''
    })

    useEffect(() => {
        if (state.ok && state.data) {
            setComments((comments) => [...comments, state.data]);
            commentRef.current && (commentRef.current.value = '');
        }
    }, [state, setComments]);

    const commentRef = useRef<HTMLTextAreaElement>(null);

    return (
        <form action={action} className={`${styles.form} ${single ? styles.single : ''}`}>
            <input type="hidden" name="id" value={id} />
            <textarea
                className={styles.textarea}
                name="comment"
                id="comment"
                placeholder="Comente..."
                ref={commentRef}
            ></textarea>
            <FormButton />
            <ErrorMessage error={state.error} />
        </form>
    )
}