import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import director1 from '@/assets/team/director-1.jpg';
import director2 from '@/assets/team/director-2.jpg';
import team1 from '@/assets/team/team-1.jpg';
import team2 from '@/assets/team/team-2.jpg';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
}

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState<'directors' | 'team'>('directors');

  const directors: TeamMember[] = [
    {
      id: '1',
      name: 'Amit Choudhary',
      title: 'Chief Executive & Technology Officer',
      image: director1
    },
    {
      id: '2',
      name: 'Priya Sharma',
      title: 'Chief Strategy Officer',
      image: director2
    },
    {
      id: '3',
      name: 'Anil Gupta',
      title: 'Company Secretary and Compliance Officer',
      image: director1
    }
  ];

  const teamMembers: TeamMember[] = [
    {
      id: '4',
      name: 'Jitender Kumar Mohanlal',
      title: 'Chief Business Officer',
      image: team1
    },
    {
      id: '5',
      name: 'Krishnananda Bhattacharya',
      title: 'Chief Product Officer',
      image: team2
    },
    {
      id: '6',
      name: 'Pallavi Tyagi',
      title: 'Chief Marketing Officer',
      image: team2
    },
    {
      id: '7',
      name: 'Rajesh Kumar',
      title: 'Head of Operations',
      image: team1
    },
    {
      id: '8',
      name: 'Sneha Patel',
      title: 'Head of Technology',
      image: team2
    },
    {
      id: '9',
      name: 'Vikram Singh',
      title: 'Head of Finance',
      image: team1
    }
  ];

  const currentMembers = activeTab === 'directors' ? directors : teamMembers;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6">Organization Structure</h2>
          
          {/* Toggle Buttons */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <Button
              onClick={() => setActiveTab('directors')}
              variant={activeTab === 'directors' ? 'default' : 'outline'}
              className={`px-8 py-3 rounded-full transition-all duration-300 hover-scale ${
                activeTab === 'directors' 
                  ? 'bg-orange-primary hover:bg-orange-600 text-white' 
                  : 'bg-transparent border-2 border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-white'
              }`}
            >
              DIRECTORS
            </Button>
            <Button
              onClick={() => setActiveTab('team')}
              variant={activeTab === 'team' ? 'default' : 'outline'}
              className={`px-8 py-3 rounded-full transition-all duration-300 hover-scale ${
                activeTab === 'team' 
                  ? 'bg-orange-primary hover:bg-orange-600 text-white' 
                  : 'bg-transparent border-2 border-orange-primary text-orange-primary hover:bg-orange-primary hover:text-white'
              }`}
            >
              TEAM
            </Button>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {currentMembers.map((member, index) => (
            <Card 
              key={member.id} 
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  {/* Decorative gradient ring */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-primary/20 to-blue-500/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.title}
                </p>
                
                {/* Decorative bottom element */}
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-orange-primary to-orange-600 rounded-full mx-auto"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="text-center mt-16">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="text-sm font-medium">
              {activeTab === 'directors' ? `${directors.length} Directors` : `${teamMembers.length} Team Members`}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;