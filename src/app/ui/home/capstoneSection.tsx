"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CapstoneSection() {
  const [activeTab, setActiveTab] = useState('summary');

  return (
    <section id="capstone" className="relative py-32 bg-transparent">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Capstone Project</h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project Card */}
          <div className="lg:w-1/3">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10">
              <Image
                src="/eventraze.jpeg" // Add your project image
                alt="Capstone Project Preview"
                width={600}
                height={400}
                className="rounded-xl mb-6 w-full"
              />
              <h3 className="text-2xl font-bold text-white mb-4">EventRaze</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">PHP</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm">Postgres</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-300 text-sm">HTML</span>
                <span className="px-3 py-1 bg-yellow-500/20 rounded-full text-blue-300 text-sm">CSS</span>

              </div>
              <Link 
                href="https://github.com/kalpsenghani/EventRaze"
                target="_blank"
                className="inline-block w-full text-center py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
              >
                View Project
              </Link>
            </div>
          </div>

          {/* Documentation Tabs */}
          <div className="lg:w-2/3">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10">
              <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto">
                {[
                  { id: 'summary', label: 'Project Summary' },
                  { id: 'vision', label: 'Project Vision' },
                  { id: 'requirements', label: 'Requirements' },
                  { id: 'plan', label: 'Project Plan' },
                  { id: 'analysis', label: 'Analysis & Design' },
                  { id: 'wireframes', label: 'Wireframes' },
                  { id: 'status', label: 'Status' },
                  { id: 'implementation', label: 'Implementation' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="prose prose-invert max-w-none">
                {activeTab === 'summary' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">Project Summary</h3>
                      <a 
                        href="/docs/project-summary.pdf" 
                        target="_blank"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:opacity-90 transition-all text-sm font-medium text-white group"
                      >
                        <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        View Document
                      </a>
                    </div>
                    <p className="text-gray-300">
                      [Your project summary content]
                    </p>
                  </div>
                )}

                {activeTab === 'vision' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">Project Vision</h3>
                      <a 
                        href="/docs/project-vision.pdf" 
                        target="_blank"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:opacity-90 transition-all text-sm font-medium text-white group"
                      >
                        <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        View Document
                      </a>
                    </div>
                    <p className="text-gray-300">
                      [Your project vision content]
                    </p>
                  </div>
                )}

                {activeTab === 'requirements' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">Requirements</h3>
                      <a 
                        href="/docs/requirements.pdf" 
                        target="_blank"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:opacity-90 transition-all text-sm font-medium text-white group"
                      >
                        <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        View Document
                      </a>
                    </div>
                    <p className="text-gray-300">
                      [Your requirements content]
                    </p>
                  </div>
                )}

                {activeTab === 'plan' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">Project Plan</h3>
                      <a 
                        href="/docs/project-plan.pdf" 
                        target="_blank"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:opacity-90 transition-all text-sm font-medium text-white group"
                      >
                        <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        View Document
                      </a>
                    </div>
                    <p className="text-gray-300">
                      [Your project plan content]
                    </p>
                  </div>
                )}

                {activeTab === 'analysis' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">Analysis & Design</h3>
                      <a 
                        href="/docs/analysis-design.pdf" 
                        target="_blank"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:opacity-90 transition-all text-sm font-medium text-white group"
                      >
                        <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        View Document
                      </a>
                    </div>
                    <p className="text-gray-300">
                      [Your analysis content]
                    </p>
                  </div>
                )}

                {activeTab === 'wireframes' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">Wireframes</h3>
                      <a 
                        href="/docs/wireframes.pdf" 
                        target="_blank"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:opacity-90 transition-all text-sm font-medium text-white group"
                      >
                        <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        View Document
                      </a>
                    </div>
                    <p className="text-gray-300">
                      [Your wireframes content]
                    </p>
                  </div>
                )}

                {activeTab === 'status' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">Status</h3>
                      <a 
                        href="/docs/status.pdf" 
                        target="_blank"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:opacity-90 transition-all text-sm font-medium text-white group"
                      >
                        <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        View Document
                      </a>
                    </div>
                    <p className="text-gray-300">
                      [Your status content]
                    </p>
                  </div>
                )}

                {activeTab === 'implementation' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">Implementation</h3>
                      <a 
                        href="/docs/implementation.pdf" 
                        target="_blank"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:opacity-90 transition-all text-sm font-medium text-white group"
                      >
                        <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        View Document
                      </a>
                    </div>
                    <p className="text-gray-300">
                      [Your implementation content]
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8">Development Timeline</h3>
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/10">
            <div className="relative">
              <div className="border-l-2 border-purple-500/50 ml-3">
                <div className="relative pl-8 pb-8">
                  <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full border-2 border-purple-500 bg-darkColor"></div>
                  <h4 className="text-xl font-bold text-white">Project Initiation</h4>
                  <p className="text-gray-300 mt-2">Initial planning and requirement gathering</p>
                  <span className="text-sm text-gray-400">January 2024</span>
                </div>
                
                <div className="relative pl-8 pb-8">
                  <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full border-2 border-purple-500 bg-darkColor"></div>
                  <h4 className="text-xl font-bold text-white">Design Phase</h4>
                  <p className="text-gray-300 mt-2">Wireframing and architecture planning</p>
                  <span className="text-sm text-gray-400">February 2024</span>
                </div>

                {/* Add more timeline items as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}