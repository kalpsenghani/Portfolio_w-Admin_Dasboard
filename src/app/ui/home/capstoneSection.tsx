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
                  { id: 'requirements', label: 'Tech Requirements' },
                  { id: 'plan', label: 'Project Plan' },
                  { id: 'analysis', label: 'Requirement Analysis' },
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
                        href="/docs/ProjectSummary.pdf" 
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
                    EventRaze is a web-based event management system designed to centralize and streamline event-related data within an organization. The platform enables seamless event creation, user registration, secure ticketing, and feedback collection.

                    Built using PHP and MySQL, EventRaze provides a robust backend for managing events. The frontend, developed with HTML, JavaScript, jQuery, and AJAX, delivers an interactive user experience.

                    <ul className="list-disc pl-5 space-y-1" >
                      <b>Key Features:</b>
                      <li>Automated Event Management – Simplifies event scheduling and organization.</li>
                      <li>Secure User Authentication – Ensures data privacy and role-based access.</li>
                      <li>Seamless Ticket Booking – Easy ticket booking to improve event planning.</li>
                      As a Backend Developer, I contributed to designing server-side logic, implementing authentication, and ensuring database efficiency.
                    </ul>
                    </p>
                  </div>
                )}

                {activeTab === 'vision' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">Project Vision</h3>
                      <a 
                        href="/docs/ProjectVision.pdf" 
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
                    The vision of EventRaze is to provide a seamless, automated, and user-friendly platform for event organizers and attendees alike. The system is designed to simplify the event management process by offering efficient scheduling tools, secure ticketing, and real-time analytics. By providing a central hub for event data, EventRaze ensures smooth interactions for all stakeholders. Event organizers can easily manage attendee data, while participants enjoy a simple process for discovering events, registering, and purchasing tickets, all with enhanced user experience and security.
                    </p>
                  </div>
                )}

                {activeTab === 'requirements' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">Tech Requirements</h3>
                      <a 
                        href="/docs/TechRequirements.pdf" 
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
                    The development of EventRaze has specific technical requirements for both the backend and frontend:

<li>Backend: The server-side of the application is built using PHP (5.6/7.x), a widely used scripting language for web development. The backend logic handles event creation, user management, and ticketing.</li>
<li>Frontend: The frontend is developed using HTML for structure, JavaScript for interactivity, jQuery for DOM manipulation, and AJAX for asynchronous data requests. These technologies enable a dynamic and responsive user interface.</li>
<li>Environment: EventRaze can run on various local server environments, including XAMPP, WAMP, MAMP, and LAMP. These server stacks are used to host the PHP backend and MySQL database locally.</li>
<li>Supported Browsers: The system is compatible with major web browsers, including Chrome, Firefox, Edge, and Opera, ensuring wide accessibility for users.</li>
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
                    The development of EventRaze follows an agile methodology, which enables iterative progress and flexibility. The project is divided into several phases:

<li>Requirements Gathering: The team works closely with stakeholders to identify the core features and requirements for the event management system.</li>
<li>System Design: The architecture and technical design of the system are planned, focusing on scalability, security, and usability.</li>
<li>Development: This phase involves coding the backend and frontend functionalities, including event management, registration, and ticketing.</li>
<li>Testing: Testing is conducted to ensure the system works as expected across all browsers and server.</li>
<li>Deployment: After testing, the system is deployed on local servers for initial use, with plans for future migration to cloud hosting.</li>
                    </p>
                  </div>
                )}

                {activeTab === 'analysis' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">Requirement Analysis</h3>
                      <a 
                        href="/docs/HighLevelRequirements.pdf" 
                        target="_blank"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:opacity-90 transition-all text-sm font-medium text-white group"
                      >
                        <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        View document
                      </a>
                    </div>
                    <p className="text-gray-300">
                    The Requirement Analysis phase involves gathering and analyzing all necessary details about the project to ensure a clear understanding of the system's needs. The system's functionality is broken down into modules, including event creation, user registration, and ticketing. Following key aspects considered during analysis:

    <li><strong>User Requirements:</strong> The system must be intuitive and easy to use for both event organizers and attendees.</li>
    <li><strong>Functional Requirements:</strong> Includes features like event creation, registration, ticketing, real-time updates, and feedback management.</li>
    <li><strong>Non-Functional Requirements:</strong> The system should support a scalable architecture, with high availability and security for sensitive data such as user information and ticketing details.</li>
    <li><strong>Performance Requirements:</strong> Fast response times for event listings, registration, and ticket processing to ensure a smooth user experience.</li>
    <li><strong>System Constraints:</strong> The application will run on local servers initially using XAMPP, WAMP, or MAMP environments, with potential future scaling to cloud hosting.</li>

                    </p>
                  </div>
                )}

                {activeTab === 'wireframes' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">Wireframes</h3>
                      <a 
                        href="https://www.figma.com/design/vBg6K0SKkcZcGsJSbGYXXA/EventRaze?node-id=0-1" 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:opacity-90 transition-all text-sm font-medium text-white group"
                      >
                        <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Figma Design
                      </a>
                    </div>
                    <p className="text-gray-300">
                    The Wireframes for EventRaze depict the layout of the application's core pages, such as the event listing, user registration, ticket purchase flow, and feedback collection form. These wireframes focus on ensuring:

<li>Intuitive Navigation: Clear, easy-to-understand layouts that guide users through the event registration and ticketing process.</li>
<li>Responsiveness: The wireframes are designed with mobile and tablet views in mind, ensuring that EventRaze works seamlessly on different devices.</li>
<li></li>User Experience (UX): The wireframes prioritize a simple, engaging experience that minimizes friction during event registration and payment.
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
                    The Status section outlines the current stage of development, including:

<li>Completed: Features such as event creation, user registration, and basic ticketing functionality have been implemented and are functional.</li>
<li>Ongoing: UI enhancements, real-time analytics for event organizers, and feedback collection features are under development.</li>
<li>Future Work: The plan includes transitioning to cloud hosting and further improvements to the event scheduling and ticketing processes, based on user feedback.</li>
                    </p>
                  </div>
                )}

                {activeTab === 'implementation' && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-white">Implementation</h3>
                      <a 
                        href="NOT FOUND" 
                        target="_blank"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:opacity-90 transition-all text-sm font-medium text-white group"
                      >
                        <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Pending...
                      </a>
                    </div>
                    <p className="text-gray-300">
                      The implementation of the system is currently <strong>in progress</strong>. The system is deployed on <strong>local servers using XAMPP, WAMP, or MAMP</strong> for testing. Future iterations include a potential transition to cloud hosting to improve scalability and performance.
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
                  <span className="text-sm text-gray-400">September 2024</span>
                </div>
                
                <div className="relative pl-8 pb-8">
                  <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full border-2 border-purple-500 bg-darkColor"></div>
                  <h4 className="text-xl font-bold text-white">Planning Phase</h4>
                  <p className="text-gray-300 mt-2">Project Planning and Team Charter</p>
                  <span className="text-sm text-gray-400">October 2024</span>
                </div>

                <div className="relative pl-7 pb-7">
                  <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full border-2 border-purple-500 bg-darkColor"></div>
                  <h4 className="text-xl font-bold text-white">Design Phase</h4>
                  <p className="text-gray-300 mt-2">Wireframing and architecture planning</p>
                  <span className="text-sm text-gray-400">November 2024</span>
                </div>

                <div className="relative pl-7 pb-7">
                  <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full border-2 border-purple-500 bg-darkColor"></div>
                  <h4 className="text-xl font-bold text-white">Development Phase</h4>
                  <p className="text-gray-300 mt-2">Programming frontend and Backend</p>
                  <span className="text-sm text-gray-400">January 2025</span>
                </div>

                <div className="relative pl-7 pb-7">
                  <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full border-2 border-purple-500 bg-darkColor"></div>
                  <h4 className="text-xl font-bold text-white">Debugging</h4>
                  <p className="text-gray-300 mt-2">Looking for build errors and debugging the final version</p>
                  <span className="text-sm text-gray-400">February 2025</span>
                </div>

                <div className="relative pl-7 pb-7">
                  <div className="absolute -left-2.5 mt-1.5 h-5 w-5 rounded-full border-2 border-purple-500 bg-darkColor"></div>
                  <h4 className="text-xl font-bold text-white">Deployment</h4>
                  <p className="text-gray-300 mt-2">Right now we are working to deployment our app successfully</p>
                  <span className="text-sm text-gray-400">March 2025</span>
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