import Link from 'next/link';
import Image from 'next/image';

export default function ServicesPage() {
  const services = [
    {
      title: "Financement Sur Mesure",
      description: "Solutions de financement flexibles adaptées à votre budget",
      icon: "💳",
      features: [
        "Taux préférentiels négociés",
        "Crédit auto jusqu'à 84 mois",
        "Leasing avec option d'achat",
        "Reprise de votre ancien véhicule",
        "Simulation en ligne gratuite"
      ]
    },
    {
      title: "Garantie Premium",
      description: "Protection complète pour votre tranquillité d'esprit",
      icon: "🛡️",
      features: [
        "Garantie constructeur étendue",
        "Assistance 24h/24, 7j/7",
        "Véhicule de remplacement",
        "Réparations dans notre réseau",
        "Extension jusqu'à 5 ans possible"
      ]
    },
    {
      title: "Service Après-Vente",
      description: "Maintenance et réparations par des experts certifiés",
      icon: "🔧",
      features: [
        "Techniciens certifiés constructeur",
        "Pièces détachées d'origine",
        "Entretien préventif personnalisé",
        "Diagnostic électronique complet",
        "Carrosserie et peinture"
      ]
    },
    {
      title: "Conciergerie Automobile",
      description: "Services exclusifs pour nos clients privilégiés",
      icon: "🎩",
      features: [
        "Livraison à domicile",
        "Récupération pour entretien",
        "Nettoyage et détailing",
        "Préparation avant livraison",
        "Service de voiturier"
      ]
    },
    {
      title: "Reprise & Échange",
      description: "Évaluation professionnelle de votre véhicule actuel",
      icon: "🔄",
      features: [
        "Estimation gratuite en ligne",
        "Expertise sur rendez-vous",
        "Reprise au meilleur prix",
        "Démarches administratives incluses",
        "Paiement sécurisé immédiat"
      ]
    },
    {
      title: "Assurance & Protection",
      description: "Solutions d'assurance partenaires avantageuses",
      icon: "🏠",
      features: [
        "Partenariats avec assureurs premium",
        "Tarifs négociés exclusifs",
        "Assurance GAP disponible",
        "Protection juridique incluse",
        "Gestion des sinistres facilitée"
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-24">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Professional automotive service"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Une gamme complète de services pour vous accompagner avant, pendant et après votre achat
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Notre Processus d'Accompagnement
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              De votre première visite à la livraison, nous vous guidons à chaque étape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Évaluation de vos besoins et présentation des options disponibles"
              },
              {
                step: "02",
                title: "Sélection",
                description: "Choix du véhicule et des services adaptés à votre profil"
              },
              {
                step: "03",
                title: "Financement",
                description: "Étude personnalisée des solutions de financement"
              },
              {
                step: "04",
                title: "Livraison",
                description: "Préparation et remise de votre véhicule dans les meilleures conditions"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Quelles sont les conditions pour obtenir un financement ?",
                answer: "Nous étudions toutes les demandes de financement. Les conditions varient selon votre profil mais nous avons des solutions adaptées à chaque situation, y compris pour les jeunes conducteurs et les professions libérales."
              },
              {
                question: "Proposez-vous une garantie sur les véhicules d'occasion ?",
                answer: "Tous nos véhicules d'occasion bénéficient d'une garantie minimum de 6 mois, extensible jusqu'à 5 ans. Cette garantie couvre les principaux organes mécaniques et électroniques."
              },
              {
                question: "Est-il possible de faire reprendre mon véhicule actuel ?",
                answer: "Absolument ! Nous proposons un service de reprise avec estimation gratuite. Notre expert évalue votre véhicule et vous propose un prix de reprise compétitif que vous pouvez déduire du prix de votre nouveau véhicule."
              },
              {
                question: "Effectuez-vous la livraison à domicile ?",
                answer: "Oui, nous proposons un service de livraison à domicile dans un rayon de 100km autour de notre showroom. Au-delà, nous étudions chaque demande individuellement."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Besoin d'informations sur nos services ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Notre équipe d'experts est là pour répondre à toutes vos questions
          </p>
          <div className="space-x-4">
            <Link
              href="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Nous contacter
            </Link>
            <Link
              href="/vehicules"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Voir nos véhicules
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 