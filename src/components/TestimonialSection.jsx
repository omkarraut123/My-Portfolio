import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import bhargaviImg from '../assets/images/bhargavi.jfif';
import siddharthImg  from '../assets/images/siddharth.png';
import jaspreetImg from '../assets/images/jaspreet.png';
import image from '../assets/images/image.png';
const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Siddharth Sinha",
      role: "Front-end developer",
      company: "Tata Consultancy Services",
      image: siddharthImg,
      testimonial: "Omkar takes full ownership of the tasks assigned and delivers them within time while maintaining top-notch code quality. Their understanding of front-end frameworks and ability to integrate APIs seamlessly is commendable.",
      rating: 5
    },
    {
      id: 2,
      name: "Bhargavi Ega",
      role: "Front-end developer",
      company: "Tata Consultancy Services",
      image: bhargaviImg,
      testimonial: "I’ve seen Omkar switch between front-end and back-end tasks with ease. They have a solid understanding of both client-side and server-side development, making them a reliable full-stack developer you can always count on.",
      rating: 5
    },    
    {
      id: 3,
      name: "Jaspreet Singh",
      role: "Front-end developer",
      company: "Ex-Tcser",
      image: jaspreetImg,
      testimonial: "One of Omkar’s biggest strengths is their proactive approach. Whether it's debugging tricky UI issues or suggesting architectural improvements, they always come up with effective solutions.",
      rating: 5
    },
    {
      id: 4,
      name: "Huzaifa Momin",
      role: "Java developer",
      company: "Tata Consultancy Services",
      image: image,
      testimonial: "Omkar is not just a great developer but also a wonderful team player. Always ready to help others, review code, and contribute actively during discussions. They bring positive energy to the team.",
      rating: 5
    },
    {
      id: 5,
      name: "Ganesh Bengade",
      role: "Full-stack developer",
      company: "Tata Consultancy Services",
      image: image,
      testimonial: "I've had the chance to work with Omkar raut on several critical sprints. Even under tight deadlines, they remained focused, calm, and delivered results without compromising on quality.",
      rating: 5
    },
   
  ];

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };


  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my colleagues say about working with me.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="relative mb-12">
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 mx-auto max-w-4xl">
            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <Quote size={32} className="text-blue-600" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center mb-8">              
              <blockquote className="text-lg lg:text-2xl text-gray-700 italic leading-relaxed mb-8">
                "{testimonials[currentTestimonial].testimonial}"
              </blockquote>
            </div>

            {/* Client Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="relative">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-full p-1">
                  <Star size={12} className="fill-current" />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="text-xl lg:text-2xl font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-blue-600 font-medium text-lg">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                index === currentTestimonial ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >            

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 italic mb-6 line-clamp-4">
                "{testimonial.testimonial}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-blue-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
};

export default TestimonialSection;