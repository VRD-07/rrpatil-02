import React from 'react';
import { Compass, Sun, MapPin, Trophy } from 'lucide-react';

import monsoonTripImg from '../assets/cult_trip.jpeg';
import waterparkTripImg from '../assets/water_park.jpeg';
import historicalTripImg from '../assets/Mahabaleshwar.jpg';
import cricketTurfImg from '../assets/turf.jpeg';
import uniformClassroomImg from '../assets/rrp_tshirt.jpeg';

export const BeyondAcademics = () => {
  const activities = [
    {
      icon: Compass,
      title: 'Monsoon Nature Trip',
      desc: 'Annual monsoon trek fostering student bonding and refreshment.',
      photo: monsoonTripImg,
      badge: 'ANNUAL MONSOON',
    },
    {
      icon: Sun,
      title: 'Summer Waterpark Trip',
      desc: 'Exhilarating end-of-term day out at premium waterparks.',
      photo: waterparkTripImg,
      badge: 'SUMMER OUTING',
    },
    {
      icon: MapPin,
      title: '2-Day Historical Maharashtra Trip',
      desc: 'Educational & cultural overnight tour exploring Maharashtra’s heritage.',
      photo: historicalTripImg,
      badge: 'CULTURAL OVERNIGHT',
    },
    {
      icon: Trophy,
      title: 'Monthly Cricket Turf',
      desc: 'Turf booked every month for student cricket matches & fitness.',
      photo: cricketTurfImg,
      badge: 'MONTHLY RECREATION',
    },
  ];

  return (
    <section id="beyond-academics" className="py-16 sm:py-24 bg-[#F0ECE1] border-y border-[#E4DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-[#B08D57]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B08D57]">
              STUDENT LIFE & RECREATION
            </span>
            <span className="h-px w-6 bg-[#B08D57]" />
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#14110F] max-w-3xl">
            Beyond the Classroom
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#14110F]/75 max-w-2xl font-normal leading-relaxed">
            Academic rigor balanced with memorable experiences, camaraderie, and physical recreation.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {activities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E4DCC8] hover:border-[#B08D57] rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative aspect-[16/10] w-full bg-[#0F3D2E]/10 overflow-hidden">
                    <img
                      src={item.photo}
                      alt={item.title}
                      width={320}
                      height={200}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded bg-[#0F3D2E]/90 text-[#FAF7F0] text-[9px] font-extrabold uppercase tracking-wider backdrop-blur-xs">
                      {item.badge}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-[#B08D57]" />
                      <h3 className="font-editorial text-lg font-bold text-[#14110F] group-hover:text-[#0F3D2E] transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#14110F]/75 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Campus Life Banner */}
        <div className="p-4 sm:p-6 rounded-xl bg-white border border-[#E4DCC8] shadow-xs flex flex-col sm:flex-row items-center gap-6">
          <div className="w-full sm:w-1/3 aspect-[16/10] rounded-lg overflow-hidden shrink-0 border border-[#E4DCC8]">
            <img
              src={uniformClassroomImg}
              alt="Students seated in class wearing teal RR-branded polo shirts"
              width={320}
              height={200}
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#B08D57] uppercase tracking-wider block mb-1">
              CAMPUS CAMARADERIE
            </span>
            <h4 className="font-editorial text-xl font-bold text-[#14110F] mb-1">
              Disciplined Environment, Lifelong Friendships
            </h4>
            <p className="text-xs text-[#14110F]/75 leading-relaxed font-normal">
              Our structured academic calendar includes periodic outdoor activities and sports turf bookings to keep students energized and motivated throughout their 2-year preparation journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondAcademics;
