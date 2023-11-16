import { useState } from 'react';
import './../Styles/PagesTailwinds.css';

export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('fecha');
    const [filterOption, setFilterOption] = useState('');

    
    const blogPosts = [
        {
            title: "Consulta general",
            description: "Experimentando molestias abdominales y dolor persistente. Consulta médica en el Centro Médico Genova.",
            imageUrl: "/src/assets/medical-appointment.jpg",
            author: "Jose, MD",
            date: "12 de Noviembre, 2023 a las 2:30 pm",
            category: "Pendiente",
            categoryColor: "bg-yellow-200 text-red-800"
        },
        {
            title: "Lectura de resultados",
            description: "Sintiendo fatiga constante y dolores musculares. Revisión de resultados de exámenes en Genova Wellness Center.",
            imageUrl: "/src/assets/health-checkup.png",
            author: "Natalia",
            date: "05 de Noviembre, 2023 a las 10:00 am",
            category: "Cancelada",
            categoryColor: "bg-red-200 text-red-800"
        },
        {
            title: "Consulta general",
            description: "Experimentando problemas digestivos y falta de energía. Consulta para recetas personalizadas en Genova Nutrición.",
            imageUrl: "/src/assets/nutritional-recipes.jpg",
            author: "Didier, MD",
            date: "20 de Octubre, 2023 a las 3:45 pm",
            category: "Atendida",
            categoryColor: "bg-blue-200 text-red-800"
        }
    ];

    // Función para convertir string de fecha a objeto Date
    const parseDate = (str: string): Date => {
        const [day, month, year] = str.split(" de ");
        return new Date(`${year}-${month}-${day}`);
    };

    // Función para filtrar y ordenar las citas
    const getFilteredAndSortedPosts = () => {
        const filteredPosts = blogPosts.filter(post => 
            (filterOption === '' || post.category === filterOption) &&
            post.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        // Ordenar por fecha
        if (sortOption === 'fecha') {
            filteredPosts.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());
        }

        return filteredPosts;
    };

    return (
        <div className="container-pages bg-gray-100">
            <div className='container-internal-pages bg-[#EAFAF1]'>
                <div className="mb-8 flex justify-between w-full border-b border-black-500">
                    <input
                        type="text"
                        placeholder="Buscar en citas..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="my-4 p-3 border border-gray-300 rounded-lg md:w-2/4 shadow focus:outline-none focus:ring-2 focus:ring-blue-500 ml-8"
                    />
                    <div className="flex justify-end items-center mr-8">
                        <p className="text-lg text-gray-700 mr-4">Resultados encontrados</p>
                        <select
                            onChange={(e) => setSortOption(e.target.value)}
                            className="p-3 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Ordenar por</option>
                            <option value="fecha">Fecha</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-wrap mx-8">
                    <div className="w-full md:w-1/4 pr-4 mb-4">
                        <div className="p-4 rounded-lg shadow-lg" >
                            <h2 className="font-bold text-xl mb-3">Filtrar por</h2>
                            <select 
                                onChange={(e) => setFilterOption(e.target.value)}
                                className="p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Todas las Categorías</option>
                                <option value="Estado">Estado</option>
                                <option value="Tipo de consulta">Tipo de consulta</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full md:w-3/4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {getFilteredAndSortedPosts().map((post, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                                    <img className="w-full h-48 object-cover rounded-lg mb-4" src={post.imageUrl} alt={`Blog ${post.title}`} />
                                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                    <p className="text-gray-600 mb-4">{post.description}</p>
                                    <div className="text-gray-500 text-sm mb-2">Por {post.author} - {post.date}</div>
                                    <span className={`inline-block ${post.categoryColor} rounded-full px-3 py-1 text-sm font-bold`}>{post.category}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}