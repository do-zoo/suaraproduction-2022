import { AcademicCapIcon, ChartBarIcon, DesktopComputerIcon, MapIcon, OfficeBuildingIcon, PresentationChartLineIcon } from '@heroicons/react/solid'
import React from 'react'

function ServicesItem() {
  return (
    <section className='relative text-text-color'>
        <div className="contain">
            <div className="title w-full h-full text-center py-24 batas-suci mb-12">
                <h2 className='text-3xl lg:text-4xl font-semibold md:max-w-xl lg:max-w-2xl mx-auto'>Get the best out of your company with our service</h2>
            </div>
            <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between batas-suci mr-6 rounded-tr-2xl md:rounded-tr-3xl md:mr-12 lg:mr-24 text-main-color bg-text-color gap-12 py-9 md:py-32">
                <div className="service flex flex-col gap-3 pl-6 pr-6 pb-6">
                    <div className="service-icon">
                        <OfficeBuildingIcon className='w-14 text-my-orange' />
                    </div>
                    <div className="service-title font-bold text-2xl">
                        <h3>Company Profile Video</h3>
                    </div>
                    <div className="service-desc">
                        <p>Present your company image and business 
                            through an attractive company profile video. 
                            Tell your company to via video.</p>
                    </div>
                </div>
                <div className="service flex flex-col gap-3 pl-6 pr-6 pb-6">
                    <div className="service-icon">
                        <AcademicCapIcon className='w-14 text-my-orange' />
                    </div>
                    <div className="service-title font-bold text-2xl">
                        <h3>Video Based Learning</h3>
                    </div>
                    <div className="service-desc">
                        <p>we can help you to create video-based learning that makes it easier for students to learn</p>
                    </div>
                </div>
                <div className="service flex flex-col gap-3 pl-6 pr-6 pb-6">
                    <div className="service-icon">
                        <DesktopComputerIcon className='w-14 text-my-orange' />
                    </div>
                    <div className="service-title font-bold text-2xl">
                        <h3>Live Streaming & Virtual Event</h3>
                    </div>
                    <div className="service-desc">
                        <p>Stay productive and connected through Live 
                            Streaming and Virtual Events in the New Normal Era. 
                            We help you stream your event to the Zoom platform, 
                            Youtube and others.</p>
                    </div>
                </div>
                <div className="service flex flex-col gap-3 pl-6 pr-6 pb-6">
                    <div className="service-icon">
                        <ChartBarIcon className='w-14 text-my-orange' />
                    </div>
                    <div className="service-title font-bold text-2xl">
                        <h3>Digital Content Creation</h3>
                    </div>
                    <div className="service-desc">
                        <p>SUARA PRODUCTION helps you produce 
                            Digital Content for your customer engagement needs.</p>
                    </div>
                </div>
                <div className="service flex flex-col gap-3 pl-6 pr-6 pb-6">
                    <div className="service-icon">
                        <PresentationChartLineIcon className='w-14 text-my-orange' />
                    </div>
                    <div className="service-title font-bold text-2xl">
                        <h3>Explainer Video</h3>
                    </div>
                    <div className="service-desc">
                        <p>Explain how to use and the features of your product with an attractive and professional explanatory video.</p>
                    </div>
                </div>
                <div className="service flex flex-col gap-3 pl-6 pr-6 pb-6">
                    <div className="service-icon">
                        <MapIcon className='w-14 text-my-orange' />
                    </div>
                    <div className="service-title font-bold text-2xl">
                        <h3>Safety Induction Video</h3>
                    </div>
                    <div className="service-desc">
                        <p>Ensuring that Occupational Safety and Health
                            Protocols are followed is essential 
                            in your work site and business.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServicesItem