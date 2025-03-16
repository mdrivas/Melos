export default function ResourcesPage() {
  const resources = [
    {
      category: "Articles & Research",
      items: [
        {
          title: "Coming Soon",
          description: "We're curating a collection of valuable articles and research papers about physician coaching and wellness.",
          link: "#"
        }
      ]
    },
    {
      category: "Wellness Resources",
      items: [
        {
          title: "Coming Soon",
          description: "A carefully selected list of wellness resources specifically for healthcare providers.",
          link: "#"
        }
      ]
    },
    {
      category: "Professional Development",
      items: [
        {
          title: "Coming Soon",
          description: "Resources for professional growth and career development in healthcare.",
          link: "#"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-8">
          Resources
        </h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
          A curated collection of resources to support healthcare providers in their personal and professional journey.
        </p>

        <div className="max-w-4xl mx-auto">
          {resources.map((category, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="p-6 bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors group"
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-blue-100 mb-4 opacity-90">
                      {item.description}
                    </p>
                    <a 
                      href={item.link}
                      className="inline-flex items-center text-blue-100 font-medium group-hover:text-white"
                    >
                      Learn More 
                      <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform ml-1">→</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-lg font-semibold text-blue-900 mb-2">Disclaimer</h2>
          <p className="text-sm text-gray-500">
            The Provider's Coach Project is dedicated to supporting healthcare providers through no-cost coaching while also promoting the physician coaching profession and advocating for its role in healthcare. This resource page is provided for informational purposes only. Inclusion of coaching services or other resources does not constitute an endorsement or financial relationship. We believe in the value of physician coaching and its positive impact on healthcare professionals; however, we encourage individuals to conduct their own research and select services that best meet their needs. The Provider's Coach Project does not receive compensation for listing these resources.
          </p>
        </div>
      </div>
    </section>
  );
} 