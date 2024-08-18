"use client";

import { Photo } from "@/types/photo";
import FeedPhotos from "./feed-photos";
import { useEffect, useRef, useState } from "react";
import photosGet from "@/actions/photos-get";

export default function Feed({ photos, user }: { photos: Photo[], user?: 0 | string }) {
    const [photosFeed, setPhotosFeed] = useState<Photo[]>(photos);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [infinite, setInfinite] = useState(photosFeed.length < 6 ? false : true);

    const isFetching = useRef(false);
    function infiniteScroll() {
        if (isFetching.current) return;

        isFetching.current = true;
        setLoading(true);
        setTimeout(() => {
            setPage(currentPage => currentPage + 1);
            isFetching.current = false;
            setLoading(false);
        }, 1000);
    }

    useEffect(() => {
        if (page === 1) return;
        async function getPagePhotos(page: number) {
            const actionData = await photosGet({ page, total: 6, user }, { cache: 'no-store' });
            if (actionData && actionData.data !== null) {
                const { data } = actionData;
                setPhotosFeed((currentPhotos) => [...currentPhotos, ...data]);

                if (data.length < 6) setInfinite(false);
            }
        }

        getPagePhotos(page);
    }, [page]);

    useEffect(() => {
        if (infinite) {
            window.addEventListener('scroll', infiniteScroll);
            window.addEventListener('wheel', infiniteScroll);
        } else {
            window.removeEventListener('scroll', infiniteScroll);
            window.removeEventListener('wheel', infiniteScroll);
        }
    }, [infinite]);

    return (
        <div>
            <FeedPhotos photos={photosFeed} />
            {loading && <p>Carregando...</p>}
        </div>
    )
}