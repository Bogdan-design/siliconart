import { Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About SiliconArt</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're a team of passionate developers dedicated to creating exceptional web experiences that help businesses thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Users className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">
              Our skilled professionals bring years of experience in web development and design.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Target className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Client-Focused</h3>
            <p className="text-gray-600">
              We prioritize your business goals and deliver solutions that match your vision.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Award className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality First</h3>
            <p className="text-gray-600">
              We maintain high standards in every project, ensuring exceptional results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}