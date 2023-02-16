/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ProjectItem from './ProjectItem';
import rocketPayImg from '../assets/rocketpay.jpg';
import tripEzImg from '../assets/tripez.jpg';
import medicalConnectImg from '../assets/medicalConnect.jpg';
import learntImg from '../assets/learnt.jpg';
import noImg from '../assets/noImg.jpg';
import Link from 'next/link';

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
            closeColor='light'
            stack='React, Vite'
            description={
              <div>
                <p>
                  • Project from{' '}
                  <Link
                    href='https://www.rocketseat.com.br'
                    passHref
                    legacyBehavior>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-purple-500 hover:text-yellow-500 ease-in duration-100 dark:text-yellow-500 dark:hover:text-purple-500 cursor-pointer'>
                      Rocketseat's
                    </a>
                  </Link>{' '}
                  explorer lab. There were 3 classes in which a component was
                  developed with{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    ViteJS
                  </span>{' '}
                  to simulate the credit card filling form, where a mask was
                  added to the inputs - using{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    iMaskJS
                  </span>{' '}
                  and{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    RegEx
                  </span>{' '}
                  - and HTML elements were updated via DOM.
                </p>
                <p className='pt-4'>
                  • Was also added a{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    light/dark theme switch
                  </span>
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
                  <span className='text-teal-600 dark:text-teal-500'>
                    trips itineraries
                  </span>
                  , along with{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    to-do lists
                  </span>{' '}
                  and share them with anyone else in a
                  <span className='text-teal-600 dark:text-teal-500'>
                    {' '}
                    PDF file
                  </span>{' '}
                  or{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    via email
                  </span>
                  .{' '}
                </p>
                <p className='pt-4'>
                  • Implemented{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    Maps API
                  </span>{' '}
                  to show location on map when added to the trip calendar, and{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    password encryption.
                  </span>
                </p>
                <p className='pt-4'>
                  •{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    Agile methodologies
                  </span>{' '}
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
                  <span className='text-teal-600 dark:text-teal-500'>
                    monitor patients
                  </span>{' '}
                  during their first weeks after release from hospital and help
                  patients to{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    monitor daily activities
                  </span>
                  .
                </p>
                <p className='pt-4'>
                  • Used{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    GraphQL API
                  </span>{' '}
                  for querying, and implemented{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    machine learning
                  </span>{' '}
                  - with Tensorflow - to predict possible diseases.
                </p>
                <p className='pt-4'>
                  •{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    Agile methodologies
                  </span>{' '}
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
                  <span className='text-teal-600 dark:text-teal-500'>
                    connect
                  </span>{' '}
                  students with tutors that meet their academics needs.
                </p>
                <p className='pt-4'>
                  • Built with{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    Angular
                  </span>{' '}
                  and{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    ExpressJs
                  </span>
                  . Prototype made with{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    Figma
                  </span>
                  .
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
            closeColor='light'
            stack='.Net Core, Postman, AWS, CRUD, API'
            description={
              <div>
                <p>
                  •{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    RESTful API
                  </span>{' '}
                  using ASP .NET Core for a{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    blood donation system
                  </span>{' '}
                  with patients, hospitals and donations entities.
                </p>
                <p className='pt-4'>
                  • Used{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    swagger
                  </span>{' '}
                  for <span className='text-teal-600 dark:text-teal-500'></span>
                  <span className='text-teal-600 dark:text-teal-500'>
                    creating
                  </span>
                  ,{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    reading
                  </span>
                  ,{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    inserting
                  </span>{' '}
                  and{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    deleting
                  </span>{' '}
                  information from the database and{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    Postman
                  </span>{' '}
                  for testing.
                </p>
                <p className='pt-4'>
                  • Database in{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    AWS DynamoDB
                  </span>
                  , deployed with AWS EC2, Elastic BeanStalk, and ECS.
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
            closeColor='light'
            stack='AWS, .Net, API'
            description={
              <div>
                <p>
                  • WPF project for accessing a
                  <span className='text-teal-600 dark:text-teal-500'>
                    {' '}
                    bucket programmatically
                  </span>
                  ,
                  <span className='text-teal-600 dark:text-teal-500'>
                    {' '}
                    selecting
                  </span>{' '}
                  from a list or{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    creating
                  </span>{' '}
                  a new one.
                </p>
                <p className='pt-4'>
                  • Show all objects inside the bucket and allow{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    searching a file
                  </span>{' '}
                  from the computer,{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    uploading
                  </span>{' '}
                  it or{' '}
                  <span className='text-teal-600 dark:text-teal-500'>
                    deleting
                  </span>{' '}
                  an existing file.
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
