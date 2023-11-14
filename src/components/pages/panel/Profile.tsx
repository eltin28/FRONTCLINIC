export default function Profile() {
  return (
    <div className="max-w-5xl mx-auto my-12 bg-white rounded-3xl shadow-xl overflow-hidden">
      {/* Encabezado del Perfil */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 opacity-80"></div>
        <div className="relative p-6 flex items-center">
          <img className="h-32 w-32 rounded-full border-4 border-white shadow-xl" src="path_to_profile_image" alt="Profile" />
          <div className="ml-6">
            <h2 className="text-4xl font-bold text-white">Nombre del Usuario</h2>
            <p className="text-lg text-indigo-200">Correo Electrónico</p>
          </div>
        </div>
      </div>

      {/* Contenido del Perfil */}
      <div className="p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Columna Izquierda: Datos del Usuario */}
          <div>
            {/* Nombre */}
            <div className="mb-4">
              <label className="text-gray-700 font-semibold">Nombre</label>
              <p className="text-gray-600">Juan Pérez</p>
            </div>

            {/* Correo Electrónico */}
            <div className="mb-4">
              <label className="text-gray-700 font-semibold">Correo Electrónico</label>
              <p className="text-gray-600">juanperez@example.com</p>
            </div>

            {/* Teléfono */}
            <div className="mb-4">
              <label className="text-gray-700 font-semibold">Teléfono</label>
              <p className="text-gray-600">+1 234 567 8901</p>
            </div>

            {/* Dirección */}
            <div className="mb-4">
              <label className="text-gray-700 font-semibold">Dirección</label>
              <p className="text-gray-600">123 Calle Falsa, Ciudad, País</p>
            </div>

            {/* Intereses */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Intereses</h4>
              <div className="flex flex-wrap">
                <span className="m-1 bg-blue-200 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">Viajar</span>
                <span className="m-1 bg-green-200 text-green-800 text-sm font-medium px-3 py-1 rounded-full">Leer</span>
                <span className="m-1 bg-red-200 text-red-800 text-sm font-medium px-3 py-1 rounded-full">Deportes</span>
                {/* Más etiquetas según sea necesario */}
              </div>
            </div>
          </div>

          {/* Columna Derecha: Sobre Mí */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Sobre mí</h3>
            <p className="text-md text-gray-600">
              Breve descripción o información adicional sobre el usuario. Por ejemplo, sus hobbies, logros profesionales, o cualquier detalle que quiera destacar.
            </p>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="flex justify-between mt-10">
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-lg transition duration-200 ease-in-out">
            Editar Perfil
          </button>
          <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white text-lg font-semibold rounded-lg transition duration-200 ease-in-out">
            Eliminar Perfil
          </button>
        </div>
      </div>
    </div>
  );
}
