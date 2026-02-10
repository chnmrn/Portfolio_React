import ASP_NET from '../../assets/images/icons/Backend/ASPNET.png'
import CSharp from '../../assets/images/icons/Backend/CSharp.png'
import FrameWork from '../../assets/images/icons/Backend/Framework.png'
import Python from '../../assets/images/icons/Backend/Python.png'
import RestAPI from '../../assets/images/icons/Backend/RestAPI.png'
import SQLDB from '../../assets/images/icons/Backend/SQL.png'

import HTML from '../../assets/images/icons/Frontend/HTML.png'
import CSS from '../../assets/images/icons/Frontend/CSS.png'
import JavaScript from '../../assets/images/icons/Frontend/JavaScript.png'
import NextJS from '../../assets/images/icons/Frontend/NextJS.png'
import React from '../../assets/images/icons/Frontend/React.png'

import Figma from '../../assets/images/icons/Tools/Figma.png'
import Git from '../../assets/images/icons/Tools/Git.png'
import GitHub from '../../assets/images/icons/Tools/GitHub.png'
import Postman from '../../assets/images/icons/Tools/Postman.png'
import PowerBI from '../../assets/images/icons/Tools/PowerBI.png'
import Unity from '../../assets/images/icons/Tools/Unity.png'
import VS2022 from '../../assets/images/icons/Tools/VS2022.png'
import VSCode from '../../assets/images/icons/Tools/VSCode.png'

const techStackData = [
  {
    title: 'Back End',
    items: [
      { name: 'C#', icon: CSharp },
      { name: 'ASP.NET Core', icon: ASP_NET },
      { name: 'EntityFramework Core', icon: FrameWork },
      { name: 'RESTful APIs', icon: RestAPI },
      { name: 'Python', icon: Python },
      { name: 'SQL', icon: SQLDB }
    ]
  },
  {
    title: 'Front End',
    items: [
      { name: 'HTML', icon: HTML },
      { name: 'CSS', icon: CSS },
      { name: 'JavaScript', icon: JavaScript },
      { name: 'React', icon: React },
      { name: 'Next.js', icon: NextJS }
    ]
  },
  {
    title: 'Tools',
    items: [
      { name: 'Visual Studio 2022', icon: VS2022 },
      { name: 'Visual Studio Code', icon: VSCode },
      { name: 'Git', icon: Git },
      { name: 'GitHub', icon: GitHub },
      { name: 'Postman', icon: Postman },
      { name: 'Figma', icon: Figma },
      { name: 'Unity', icon: Unity },
      { name: 'Power BI', icon: PowerBI}
    ]
  }
];

export default techStackData;