'use server'

import { PHOTOS_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { Photo } from "@/types/photo";

type PhotosGetParams = {
    page?: number,
    total?: number,
    user?: 0 | string
}

export default async function photosGet({
    page = 1,
    total = 6,
    user = 0
}: PhotosGetParams = {}) {

    try {
        const { url } = PHOTOS_GET({ page, total, user });
        const response = await fetch(url,
            {
                next: {
                    revalidate: 10,
                    tags: ['photos']
                }
            }
        );

        if (!response.ok) {
            throw new Error(`Erro ao obter as fotos.`);
        }

        const data = await response.json() as Photo[];

        return { data, ok: true, error: '' };
    } catch (error) {
        return apiError(error);
    }
}