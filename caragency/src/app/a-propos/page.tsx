import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
            alt="Modern office building"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">À propos d'AutoPrestige</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Plus de 20 ans d'excellence dans la vente de véhicules haut de gamme
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fondée en 2004, AutoPrestige est née de la passion de deux entrepreneurs 
                  pour l'automobile d'exception. Nous avons débuté avec un showroom modeste 
                  et une vision claire : offrir à nos clients une expérience d'achat unique 
                  dans le monde de l'automobile de luxe.
                </p>
                <p>
                  Au fil des années, nous avons bâti notre réputation sur la qualité de nos 
                  véhicules, l'expertise de notre équipe et un service client personnalisé. 
                  Aujourd'hui, nous sommes fiers d'être reconnus comme l'un des concessionnaires 
                  automobiles les plus prestigieux de la région.
                </p>
                <p>
                  Notre success repose sur nos valeurs fondamentales : l'intégrité, 
                  l'excellence et la satisfaction client. Chaque véhicule que nous proposons 
                  est minutieusement sélectionné et inspecté pour garantir la qualité 
                  exceptionnelle que nos clients attendent.
                </p>
              </div>
            </div>
            <div className="h-96 relative rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1126&q=80"
                alt="Luxury car showroom interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Les principes qui guident chacune de nos actions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Nous nous engageons à offrir uniquement des véhicules d'exception, 
                rigoureusement sélectionnés pour leur qualité et leur performance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Passion</h3>
              <p className="text-gray-600">
                Notre passion pour l'automobile nous guide dans chaque conseil 
                et chaque service que nous offrons à nos clients.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Client</h3>
              <p className="text-gray-600">
                Votre satisfaction est notre priorité. Nous vous accompagnons 
                personnellement dans toutes les étapes de votre achat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des professionnels passionnés à votre service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Pierre Dubois",
                role: "Directeur Général",
                experience: "25 ans d'expérience",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
              },
              {
                name: "Marie Laurent",
                role: "Responsable Commerciale",
                experience: "15 ans d'expérience",
                image: "https://images.unsplash.com/photo-1594736797933-d0d2e4eb1299?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
              },
              {
                name: "Jean Martin",
                role: "Expert Technique",
                experience: "20 ans d'expérience",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-24 h-24 relative rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              AutoPrestige en Chiffres
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-300 mb-2">20+</div>
              <p className="text-blue-100">Années d'expérience</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-300 mb-2">5000+</div>
              <p className="text-blue-100">Clients satisfaits</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-300 mb-2">150+</div>
              <p className="text-blue-100">Véhicules vendus/an</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-blue-300 mb-2">98%</div>
              <p className="text-blue-100">Taux de satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 