"use server";

import { STATS_GET } from "@/functions/api";
import apiError from "@/functions/api-error";
import { Stats } from "@/types/stats";
import { cookies } from "next/headers";

export default async function statsGet() {
    try {
        const token = cookies().get('token')?.value;
        if (!token) throw new Error('Acesso negado.');

        const { url } = STATS_GET();
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`
            },
            next: {
                revalidate: 60
            },
        });

        if (!response.ok) throw new Error("Erro ao buscar os dados.");

        const data = (await response.json()) as Stats[];

        return { data, ok: true, error: '' };


    } catch (error) {
        return apiError(error);
    }
}