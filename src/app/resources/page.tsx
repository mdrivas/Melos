'use client';

import { Merriweather } from "next/font/google";
import { CirclePair } from "~/components/ui/circle-pair";
import { CircleTriplet } from "~/components/ui/circle-triplet";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, ShoppingCart } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

interface Article {
  title: string;
  authors: string;
  journal: string;
  year: string;
  doi: string;
  category: string;
  url: string;
}

interface Resource {
  title: string;
  description: string;
  content: Article[];
}

interface Book {
  title: string;
  author: string;
  coverImage: string;
  category: string;
  rating?: number;
  amazonUrl: string;
}

export default function ResourcesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);
  const [selectedResourceIndex, setSelectedResourceIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const researchArticles: Article[] = [
    {
      title: "Effect of a Professional Coaching Intervention on the Well-being and Distress of Physicians: A Pilot Randomized Clinical Trial",
      authors: "Dyrbye LN, Shanafelt TD, Gill PR, Satele DV, West CP",
      journal: "JAMA Internal Medicine",
      year: "2019",
      doi: "10.1001/jamainternmed.2019.2425",
      category: "Physician Well-being",
      url: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2740206"
    },
    {
      title: "Professional Coaching and Surgeon Well-being: A Randomized Controlled Trial",
      authors: "Dyrbye LN, Gill PR, Satele DV, West CP",
      journal: "Annals of Surgery",
      year: "2023",
      doi: "10.1097/SLA.0000000000005678",
      category: "Surgeon Well-being",
      url: "https://pubmed.ncbi.nlm.nih.gov/36000783/"
    },
    {
      title: "Online Well-Being Group Coaching Program for Women Physician Trainees: A Randomized Clinical Trial",
      authors: "Mann A, Shah AN, Thibodeau PS, Thurman KT, Syed A, Woodward MA, Dunbar K, Jones CJ, Dyrbye L, Fainstad T",
      journal: "JAMA Network Open",
      year: "2023",
      doi: "10.1001/jamanetworkopen.2023.35541",
      category: "Women in Medicine",
      url: "https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2810135"
    },
    {
      title: "Physician Coaching: An Intervention to Address the Burnout Gender Gap Among Physicians",
      authors: "Mikhaeil-Demo Y, Vermylen JH, Agarwal G",
      journal: "Psychiatric Annals",
      year: "2024",
      doi: "10.3928/00485713-20231130-02",
      category: "Gender and Burnout",
      url: "https://journals.healio.com/doi/10.3928/00485713-20231130-02"
    },
  ];

  const resources: Resource[] = [
    {
      title: "Articles & Research",
      description: "Explore our curated collection of peer-reviewed research papers about physician coaching and wellness.",
      content: researchArticles,
    },
    {
      title: "Wellness Resources",
      description: "A carefully selected list of wellness resources specifically for healthcare providers.",
      content: [],
    },
    {
      title: "Professional Development",
      description: "Resources for professional growth and career development in healthcare.",
      content: [],
    },
    {
      title: "Community Resources",
      description: "Connect with other healthcare providers and find support in your local community.",
      content: [],
    }
  ];

  const bookCategories = [
    "All",
    "Wellness",
    "Personal Development",
    "Stress Management"
  ];

  const books: Book[] = [
    {
      title: "The Art of Happiness",
      author: "The Dalai Lama",
      coverImage: "/books/book1.jpg",
      category: "Wellness",
      rating: 4.8,
      amazonUrl: "https://www.amazon.com/Art-Happiness-Handbook-Living/dp/1573227544"
    },
    {
      title: "Everything is Figureoutable",
      author: "Marie Forleo",
      coverImage: "/books/book2.jpg",
      category: "Personal Development",
      rating: 4.7,
      amazonUrl: "https://www.amazon.com/Everything-Is-Figureoutable-audiobook/dp/B07RQV9QNP"
    },
    {
      title: "The Compound Effect",
      author: "Darren Hardy",
      coverImage: "/books/book3.jpg",
      category: "Personal Development",
      rating: 4.7,
      amazonUrl: "https://www.amazon.com/The-Compound-Effect-Darren-Hardy-audiobook/dp/B07MWCVQ1T"
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      coverImage: "/books/book4.jpg",
      category: "Personal Development",
      rating: 4.7,
      amazonUrl: "https://www.amazon.com/Atomic-Habits-James-Clear-audiobook/dp/B07RFSSYBH"
    },
    {
      title: "Burnout",
      author: "Emily and Amelia Nagoski",
      coverImage: "/books/book5.jpg",
      category: "Stress Management",
      rating: 4.6,
      amazonUrl: "https://www.amazon.com/Burnout-audiobook/dp/B07M8DLR1L"
    },
    {
      title: "Mindset",
      author: "Carol Dweck",
      coverImage: "/books/mindset.jpg",
      category: "Personal Development",
      rating: 4.6,
      amazonUrl: "https://www.amazon.com/Mindset-Psychology-Carol-S-Dweck/dp/0345472322"
    },
    {
      title: "You are a Badass",
      author: "Jen Sincero",
      coverImage: "/books/you_are_a_badass.jpg",
      category: "Personal Development",
      rating: 4.7,
      amazonUrl: "https://www.amazon.com/You-Are-Badass-Doubting-Greatness/dp/0762447699"
    },
    {
      title: "The Gifts of Imperfection",
      author: "Brene Brown",
      coverImage: "/books/the_gifts_of_imperfection.jpg",
      category: "Wellness",
      rating: 4.8,
      amazonUrl: "https://www.amazon.com/Gifts-Imperfection-Think-Supposed-Embrace/dp/1592858491"
    },
    {
      title: "The Power of Now",
      author: "Eckhart Tolle",
      coverImage: "/books/the_power_of_now.jpg",
      category: "Wellness",
      rating: 4.7,
      amazonUrl: "https://www.amazon.com/Power-Now-Guide-Spiritual-Enlightenment/dp/1577314808"
    },
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      coverImage: "/books/think_and_grow_rich.jpg",
      category: "Personal Development",
      rating: 4.7,
      amazonUrl: "https://www.amazon.com/Think-Grow-Rich-Napoleon-Hill/dp/0785833528"
    },
    {
      title: "The Gap and the Gain",
      author: "Dan Sullivan",
      coverImage: "/books/the_gap_and_the_gain.jpg",
      category: "Personal Development",
      rating: 4.8,
      amazonUrl: "https://www.amazon.com/Gap-Gain-High-Achievers-Happiness-Confidence/dp/1401964362"
    }
  ];

  const filteredBooks = selectedCategory === "All" 
    ? books 
    : books.filter(book => book.category === selectedCategory);

  const handleNext = () => {
    setCurrentArticleIndex((prev) => 
      prev < (resources[selectedResourceIndex]?.content?.length || 0) - 1 ? prev + 1 : prev
    );
  };

  const handlePrevious = () => {
    setCurrentArticleIndex((prev) => prev > 0 ? prev - 1 : prev);
  };

  const openModal = (resourceIndex: number) => {
    setSelectedResourceIndex(resourceIndex);
    setCurrentArticleIndex(0);
    setIsModalOpen(true);
  };

  const currentResource = resources[selectedResourceIndex];
  const currentArticle = currentResource?.content[currentArticleIndex];

  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="py-20 bg-gradient-to-b from-[#D4E6FF] via-[#E8F1FF] to-white relative overflow-hidden">
        {/* Circle Decorations */}
        <div className="absolute top-14 right-16 hidden lg:block">
          <CircleTriplet color="bg-[#E8F1FF]" />
        </div>
        <div className="absolute bottom-20 left-16 hidden 2xl:block pointer-events-none">
          <CirclePair color="bg-[#E8F1FF]" />
        </div>

        <div className="container mx-auto px-4">
          <h1 className={`text-5xl lg:text-6xl tracking-tight text-[#2E3142] text-center mb-8 ${merriweather.className}`}>
            Resources
          </h1>
          <p className="text-xl text-[#2E3142]/80 text-center max-w-5xl mx-auto mb-16">
            We're building a curated collection of resources to support healthcare providers in their personal and professional journey.
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {resources.map((resource, index) => (
                <div 
                  key={index}
                  className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h2 className={`text-3xl text-[#2E3142] mb-4 ${merriweather.className}`}>
                    {resource.title}
                  </h2>
                  <p className="text-lg text-[#2E3142]/80 mb-6 leading-relaxed">
                    {resource.description}
                  </p>
                  
                  {resource.content?.length ? (
                    <Button 
                      onClick={() => openModal(index)}
                      variant="outline"
                      className="text-[#1473E6] border-[#1473E6] hover:bg-[#1473E6] hover:text-white transition-colors"
                    >
                      Browse Articles
                    </Button>
                  ) : (
                    <span className="inline-block text-lg text-[#1473E6]/70 font-medium italic">
                      Coming Soon
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className={`text-4xl text-[#2E3142] text-center mb-8 ${merriweather.className}`}>
            Recommended Books
          </h2>
          
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {bookCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`
                  ${selectedCategory === category 
                    ? 'bg-[#1473E6] text-white' 
                    : 'text-[#1473E6] border-[#1473E6] hover:bg-[#1473E6] hover:text-white'
                  }
                  transition-colors
                `}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {filteredBooks.map((book, index) => (
              <Link
                key={index}
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F5F8FF]">
                  <Image
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-xl font-medium text-[#2E3142] mb-2 group-hover:text-[#1473E6] transition-colors">
                      {book.title}
                    </h3>
                    <ShoppingCart className="w-5 h-5 text-[#1473E6] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-[#2E3142]/70">
                    {book.author}
                  </p>
                  {book.rating && (
                    <div className="flex items-center mt-2">
                      {[...Array(5)].map((_, i) => {
                        const ratingFloor = Math.floor(book.rating ?? 0);
                        const ratingDecimal = book.rating ? (book.rating - ratingFloor) : 0;
                        
                        // Full star
                        if (i < ratingFloor) {
                          return (
                            <span key={i} className="text-lg text-[#1473E6]">★</span>
                          );
                        }
                        // Partial star (0.3-0.7 gets ¾ star, >0.7 gets full star)
                        else if (i === ratingFloor && ratingDecimal >= 0.3) {
                          return (
                            <span key={i} className="text-lg text-[#1473E6]">
                              {ratingDecimal >= 0.7 ? '★' : '¾'}
                            </span>
                          );
                        }
                        // Empty star
                        return (
                          <span key={i} className="text-lg text-[#1473E6]/20">★</span>
                        );
                      })}
                      <span className="ml-2 text-sm text-[#2E3142]/70">
                        {book.rating.toFixed(1)}
                      </span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl text-[#2E3142] mb-4 ${merriweather.className}`}>
              Disclaimer
            </h2>
            <p className="text-lg text-[#2E3142]/70 leading-relaxed">
              The Provider's Coach Project is dedicated to supporting healthcare providers through no-cost coaching while also promoting the physician coaching profession and advocating for its role in healthcare. This resource page is provided for informational purposes only. Inclusion of coaching services or other resources does not constitute an endorsement or financial relationship. We believe in the value of physician coaching and its positive impact on healthcare professionals; however, we encourage individuals to conduct their own research and select services that best meet their needs. The Provider's Coach Project does not receive compensation for listing these resources.
            </p>
          </div>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className={`text-2xl ${merriweather.className}`}>
              {currentResource?.title}
            </DialogTitle>
          </DialogHeader>
          
          {currentArticle && (
            <div className="mt-6">
              <div className="border-l-4 border-[#1473E6]/20 pl-4 py-2">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl text-[#2E3142] font-medium">
                    {currentArticle.title}
                  </h3>
                  <Link 
                    href={currentArticle.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1473E6] hover:text-[#1473E6]/80 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
                <p className="text-[#2E3142]/70 mb-1">
                  {currentArticle.authors}
                </p>
                <p className="text-[#2E3142]/70 text-sm">
                  {currentArticle.journal} ({currentArticle.year})
                </p>
                <p className="text-sm text-[#2E3142]/70 mt-1">
                  DOI: <Link 
                    href={`https://doi.org/${currentArticle.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1473E6] hover:text-[#1473E6]/80 transition-colors"
                  >
                    {currentArticle.doi}
                  </Link>
                </p>
                <span className="inline-block text-sm bg-[#1473E6]/10 text-[#1473E6] px-3 py-1 rounded-full mt-2">
                  {currentArticle.category}
                </span>
              </div>

              <div className="flex justify-between items-center mt-8">
                <Button
                  onClick={handlePrevious}
                  disabled={currentArticleIndex === 0}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </Button>
                <span className="text-sm text-[#2E3142]/70">
                  {currentArticleIndex + 1} of {currentResource.content.length}
                </span>
                <Button
                  onClick={handleNext}
                  disabled={currentArticleIndex === currentResource.content.length - 1}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
} 