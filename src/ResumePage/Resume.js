import React from 'react'
import { Link } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ResumePage from './SinglePage'

const ResumePage = () => (
  <MainLayout>
    <ResumePage pdf="./resume.pdf"/>
  </MainLayout>
);

export default ResumePage;