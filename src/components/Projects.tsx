/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ProjectItem from './ProjectItem';
import rocketPayImg from '../assets/rocketpay.jpg';
import tripEzImg from '../assets/tripez.jpg';
import medicalConnectImg from '../assets/medicalConnect.jpg';
import learntImg from '../assets/learnt.jpg'
import noImg from '../assets/noImg.jpg';

const Projects = () => {
  return (
    <div id='projects' className='w-full p-10 py-16'>
      <div className='max-w-[1240px] md:pl-[100px] m-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='col-span-2 lg:col-span-3'>
          <h2
            className='text-gray-700 tracking-widest text-xl sm:text-2xl md:text-3xl text-shadow dark:text-gray-200 dark:text-shadow-dark
          '>
            Projects
          </h2>
        </div>

        <div className='pt-8'>
          <ProjectItem
            title='RocketPay'
            bgImg={rocketPayImg}
            stack='React, Vite'
            description={
              <div>
                <p>
                  • Project from{' '}
                  <a
                    target='https://www.rocketseat.com.br'
                    rel='noopener noreferrer'
                    className='text-yellow-500 hover:text-teal-500 ease-in duration-300'>
                    Rocketseat's
                  </a>{' '}
                  explorer lab. There were 3 classes in which a component was
                  developed with <span className='text-teal-500'>ViteJS</span>{' '}
                  to simulate the credit card filling form, where a mask was
                  added to the inputs - using{' '}
                  <span className='text-teal-500'>iMaskJS</span> and{' '}
                  <span className='text-teal-500'>RegEx</span> - and HTML
                  elements were updated via DOM.
                </p>
                <p className='pt-4'>
                  • Was also added a{' '}
                  <span className='text-teal-500'>light/dark theme switch</span>
                  , updating styles according to the user's choice via DOM and
                  CSS variables.
                </p>
              </div>
            }
            liveLink='https://explorer-lab-01-henna.vercel.app'
            repoLink='https://github.com/Souzamanda/explorer-lab1'
          />
        </div>
        <div className='pt-8'>
          <ProjectItem
            title='TripEz'
            bgImg={tripEzImg}
            stack='Angular, ExpressJs, Apollo, GraphQL, MongoDB'
            description={
              <div>
                <p>
                  • Web App made to enable travelers to make{' '}
                  <span className='text-teal-500'>trips itineraries</span>,
                  along with to-do lists and share them with anyone else in a
                  PDF file or via email.{' '}
                </p>
                <p className='pt-4'>
                  • Implemented <span className='text-teal-500'>Maps API</span>{' '}
                  to show location on map when added to the trip calendar, and{' '}
                  <span className='text-teal-500'>password encryption.</span>
                </p>
                <p className='pt-4'>
                  • <span className='text-teal-500'>Agile methodologies</span>{' '}
                  were followed in this academic group project.
                </p>
              </div>
            }
            liveLink='https://trip-ez.herokuapp.com'
            repoLink='https://github.com/TripEZ'
          />
        </div>
        <div className='pt-8'>
          <ProjectItem
            title='Medical Connect'
            bgImg={medicalConnectImg}
            stack='React, ExpressJs, MongoDB, GraphQL'
            description={
              <div>
                <p>
                  • Web App to help nurse practitioners to{' '}
                  <span className='text-teal-500'>monitor patients</span> during
                  their first weeks after release from hospital and help
                  patients to monitor their daily activities.
                </p>
                <p className='pt-4'>
                  • Used <span className='text-teal-500'>GraphQL API</span> for
                  querying, and implemented{' '}
                  <span className='text-teal-500'>machine learning</span> - with
                  Tensorflow - to predict possible diseases.
                </p>
                <p className='pt-4'>
                  • <span className='text-teal-500'>Agile methodologies</span>{' '}
                  were followed in this academic group project.
                </p>
              </div>
            }
            liveLink='https://comp308group2project.herokuapp.com'
            repoLink='https://github.com/Souzamanda/Group2COMP308Project'
          />
        </div>
        <div className='pt-8'>
          <ProjectItem
            title='Learnt App'
            bgImg={learntImg}
            stack='Angular, ExpressJs, MongoDB, Figma'
            description={
              <div>
                <p>
                  • Web App made to{' '}
                  <span className='text-teal-500'>connect</span> students with
                  tutors that meet their academics needs.
                </p>
                <p className='pt-4'>
                  • Built with <span className='text-teal-500'>Angular</span>{' '}
                  and <span className='text-teal-500'>ExpressJs</span>.
                  Prototype made with{' '}
                  <span className='text-teal-500'>Figma</span>.
                </p>
              </div>
            }
            liveLink='https://learntwebapp.herokuapp.com'
            repoLink='https://github.com/LearntApp/learntApp-v-1.0'
          />
        </div>
        <div className='pt-8'>
          <ProjectItem
            title='Blood Donation API'
            bgImg={noImg}
            stack='ASP.Net Core, Postman, AWS'
            description={
              <div>
                <p>
                  • <span className='text-teal-500'>RESTful API</span> using ASP
                  .NET Core for a blood donation system with patients, hospitals
                  and donations entities.
                </p>
                <p className='pt-4'>
                  • Used <span className='text-teal-500'>swagger</span> for
                  creating, reading, inserting and deleting information from the
                  database and <span className='text-teal-500'>Postman</span>{' '}
                  for testing.
                </p>
                <p className='pt-4'>
                  • Database in{' '}
                  <span className='text-teal-500'>AWS DynamoDB</span>, deployed
                  with AWS EC2, Elastic BeanStalk, and ECS.
                </p>
              </div>
            }
            liveLink=''
            repoLink='https://github.com/Souzamanda/BloodDonationProject'
          />
        </div>
        <div className='pt-8'>
          <ProjectItem
            title='Upload objects in S3 bucket'
            bgImg={noImg}
            stack='AWS, .Net'
            description={
              <div>
                <p>
                  • WPF project for accessing a bucket{' '}
                  <span className='text-teal-500'>programmatically</span>,
                  selecting from a list or creating a new one.
                </p>
                <p className='pt-4'>
                  • Show all objects inside the bucket and allow <span className='text-teal-500'>searching</span> a file from the computer, <span className='text-teal-500'>uploading</span> it or <span className='text-teal-500'>deleting</span> an existing file.
                </p>
              </div>
            }
            liveLink=''
            repoLink='https://github.com/Souzamanda/WebApplication1'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
