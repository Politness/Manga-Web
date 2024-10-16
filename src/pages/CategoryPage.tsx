import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MangaCard } from '../components/MangaCard';
import Pagination from '../components/Pagination';
import { Manga } from '../types/Manga'

const categoryMangas: Manga[] = [
    {
        id: 1,
        title: 'Solo Leveling',
        image: 'https://upload.wikimedia.org/wikipedia/en/6/6c/Solo_Leveling_Volume_1_Cover.jpg',
        description: 'Description of Manga ...Learn more',
        type: 'action',
    },
    {   
        id: 2,
        title: 'Neon Genesis Evangelion',
        image: 'https://upload.wikimedia.org/wikipedia/en/e/ee/NeonGenesisEvangelionManga1.jpg',
        description: 'Description of Manga ...Learn more',
        type: 'drama',
    },
    {
        id: 3,
        title: 'One Piece',
        image: 'https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg',
        description: 'Description of Manga ...Learn more',
        type: 'adventure',
    },
    {
        id: 4,
        title: 'Berserk',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Berserk_vol01.png/220px-Berserk_vol01.png',
        description: 'Description of Manga ...Learn more',
        type: 'adventure',
    },
    {
        id: 5,
        title: 'Death Note',
        image: 'https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg',
        description: 'Description of Manga ...Learn more',
        type: 'drama',
    },
    {
        id: 6,
        title: 'Attack on Titan',
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg/220px-Shingeki_no_Kyojin_manga_volume_1.jpg',
        description: 'Description of Manga ...Learn more',
        type: 'adventure',
    },
    {
        id: 7,
        title: 'Fullmetal Alchemist',
        image: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Fullmetal123.jpg',
        description: 'Description of Manga ...Learn more',
        type: 'drama',
    },
    {
        id: 8,
        title: 'One Punch-Man',
        image: 'https://upload.wikimedia.org/wikipedia/en/c/c3/OnePunchMan_manga_cover.png',
        description: 'Description of Manga ...Learn more',
        type: 'comedy',
    },
    {
        id: 9,
        title: 'Oyasumi Punpun',
        image: 'https://m.media-amazon.com/images/I/917IJDfk36L._AC_UF1000,1000_QL80_.jpg',
        description: 'Description of Manga ...Learn more',
        type: 'drama',
    },
    {
        id: 10,
        title: 'Uzumaki',
        image: 'https://w9.junji-ito.com/wp-content/uploads/2022/05/Junji-Ito-Manga.webp',
        description: 'Description of Manga ...Learn more',
        type: 'drama',
    }, {
        id: 11,
        title: 'Vagabond',
        image: 'https://upload.wikimedia.org/wikipedia/en/9/99/Vagabond_%28manga%29_vol._1.png',
        description: 'Description of Manga ...Learn more',
        type: 'drama',
    },
    {
        id: 12,
        title: 'JoJo no Kimyou na Bouken Part 7: Steel Ball Run',
        image: 'https://upload.wikimedia.org/wikipedia/en/8/87/Steel_Ball_Run_1.jpg',
        description: 'Description of Manga ...Learn more',
        type: 'adventure',
    },
    {
        id: 13,
        title: 'Hunter x Hunter',
        image: 'https://m.media-amazon.com/images/M/MV5BYzYxOTlkYzctNGY2MC00MjNjLWIxOWMtY2QwYjcxZWIwMmEwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
        description: 'Description of Manga ...Learn more',
        type: 'adventure',
    },
    {
        id: 14,
        title: 'Dorohedoro',
        image: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Dorohedoro_01.jpg',
        description: 'Description of Manga ...Learn more',
        type: 'drama',
    },
    {
        id: 15,
        title: 'Azumanga Daioh',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpA6Mo-WIvnMgWeU-w1fA0l_hCSz-UQUtA0Q&s',
        description: 'Description of Manga ...Learn more',
        type: 'comedy',
    },
    {
        id: 16,
        title: 'Yotsuba&!',
        image: 'https://mangadex.org/covers/58be6aa6-06cb-4ca5-bd20-f1392ce451fb/5951267f-f863-4e1b-b1fc-a5cfb56faaf8.jpg.512.jpg',
        description: 'Description of Manga ...Learn more',
        type: 'comedy',
    },

    // We will change to api
];

const CategoryPage: React.FC = () => {
    const itemsPerPage = 8;
    const { type } = useParams<{ type: string }>();
    const [currentPage, setCurrentPage] = useState(1);

    let filteredMangas = categoryMangas;

    // Filter manga based on category type or show all
    // if (type && type.toLowerCase() !== 'all') {
    //     filteredMangas = categoryMangas.filter((manga) => manga.type === type);
    // }

    const indexOfLastManga = currentPage * itemsPerPage;
    const indexOfFirstManga = indexOfLastManga - itemsPerPage;
    const currentMangas = filteredMangas.slice(indexOfFirstManga, indexOfLastManga);

    const totalPages = Math.ceil(filteredMangas.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="container mx-auto px-4 py-8 min-h-screen">
            {/* <h2 className="text-3xl font-semibold mb-4">Search: {type}</h2> */}
            <h2 className="text-3xl font-semibold mb-4 text-white">All Mangas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto text-white">
                {currentMangas.map((manga) => (
                    <MangaCard key={manga.id} manga={manga} />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
    );
};

export default CategoryPage;
