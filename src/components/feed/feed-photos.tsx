import Image from "next/image";
import Link from "next/link";
import styles from "./feed.module.css";
import { Photo } from "@/types/photo";

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
    return (
        <div>
            <ul className={`${styles.feed} animeLeft`}>
                {photos.map((photo) => (
                    <li className={styles.photo} key={photo.id}>
                        <Link href={`/foto/${photo.id}`} scroll={false}>
                            <Image
                                src={photo.src}
                                width={1500}
                                height={1500}
                                alt={photo.title}
                                sizes="80vw"
                            />
                            <span className={styles.visualizacao}>{photo.acessos}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
