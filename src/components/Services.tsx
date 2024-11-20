import React from 'react';
import { Globe, Smartphone, Search, Gauge, Shield, Wrench } from 'lucide-react';
import { useLocale } from '../hooks/useLocale';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom websites that perfectly represent your brand and meet your business needs.'
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Websites that look and work beautifully on all devices and screen sizes.'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and increase organic traffic.'
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Fast-loading websites that provide an excellent user experience.'
  },
  {
    icon: Shield,
    title: 'Security Solutions',
    description: 'Protect your website and user data with robust security measures.'
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Ongoing support to keep your website running smoothly and up-to-date.'
  }
];

export default function Services() {
  const { t } = useLocale();

  return (
    <section id="services" className="py-32 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-40 -left-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -right-20 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive web development services to help your business succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <service.icon className="h-12 w-12 text-gradient relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}