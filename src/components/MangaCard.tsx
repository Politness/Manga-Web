import React from 'react';

// Interface for the Manga object
interface Manga {
    id: number;
    title: string;
    image: string;
    description: string;
}

// Interface for MangaCard component properties
interface MangaCardProps {
    manga: Manga;
}

export const MangaCard: React.FC<MangaCardProps> = ({ manga }) => {
    return (
        <div className="card w-full sm:w-52 bg-gray-700 shadow-xl p-6 hover:shadow-2xl hover:shadow-sky-500/40 border-2 border-sky-700 rounded-xl m-2">
            <div className="flex flex-col items-center"> {/* Center the image */}
                <figure>
                    <img src={manga.image} alt="img-front-manga" />
                </figure>
            </div>
            <div className="card-body p-2">
                <h2 className="card-title text-center">{manga.title}</h2>
                <p className="text-sky-500">{manga.description}</p>
            </div>
        </div>
    );
};

