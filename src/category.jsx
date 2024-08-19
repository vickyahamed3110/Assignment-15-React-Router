import React from "react";
import { useParams, Link} from "react-router-dom";
const data = {
    FSD:[
        {
            id:1,
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
            title:"Best Full-Stack Development Project Ideas in 2024",
        },
        {
            id:2,
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
            title:"How Long Would It Take to Be a Full Stack Developer?",
        },
        {
            id:3,
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png",
            title:"10 Best Database Management Systems For Software Developers",
        },
        {
            id:4,
            img:"https://www.guvi.in/blog/wp-content/uploads/2021/05/react-600x314.jpg",
            title:"6 Essential Prerequisites For Learning ReactJS",
        },
        {
            id:5,
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg",
            title:"Top 10 Full-Stack Developer Frameworks in 2024",
        }],
    datascience:[{
        id:6,
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
        title:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
    },
    {
        id:7,
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp",
        title:"12 Real-World Data Science Examples: Power Of Data Science",
    },
    {
        id:8,
        img:"https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-1536x804.png",
        title:"Can A Commerce Student Do Data Science?",
    },
    {
        id:9,
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
        title:"Top Product-Based Companies for Data Scientists in 2024",
    },
    {
        id:10,
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Everything-about-Data-Science-Salary-in-India.png",
        title:"Everything about Data Scientist Salary in India | 2024",
    },
    {
        id:11,
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Best-Data-Science-Online-Courses-for-Beginners.webp",
        title:"10 Best Data Science Online Courses for Beginners | 2024",
    }],
    cybersecurity:[{
        id:12,
        img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
        title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    },
    {
        id:13,
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
        title:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
    },
    {
        id:14,
        img:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
        title:"What is Cybersecurity? Importance and its uses & the growing challenge...",
    },
    {
        id:15,
        img:"https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp",
        title:"The Ultimate Cybersecurity Roadmap for Beginners",
    },
    {
        id:16,
        img:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-1536x864.png",
        title:"8 Different Types of Cybersecurity and Threats Involved",
    },
    {
        id:17,
        img:"https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-600x314.png",
        title:"The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
    }],
    career:[{
        id:18,
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/03/java.jpeg",
        title:"Java Full Stack Development Course"
    },
    {
        id:19,
        img:"https://www.guvi.in/blog/wp-content/uploads/2023/02/animated-javascript-project-image.jpg",
        title:"MERN Full Stack Development"
    },
    {
        id:20,
        img:"https://www.guvi.in/blog/wp-content/uploads/2020/10/data-e1625548568296.png",
        title:"Data Science Course"
    }
  ]
  };

  function Category() {
    const{categoryName} = useParams();
    console.log(categoryName)
    let categoryData;
    if(categoryName ==="all") {
        categoryData = Object.values(data).flat();
    } else {
        categoryData = data[categoryName] || [];
    }
    return (
        <>
        <nav>
        <ul className="category-list">
          <li><Link to="/category/all">ALL</Link></li>
          <li><Link to="/category/FSD">FULL STACK DEVELOPMENT</Link></li>
          <li><Link to="/category/datascience">DATA SCIENCE</Link></li>
          <li><Link to="/category/cybersecurity">CYBER SECURITY</Link></li>
          <li><Link to="/category/career">CAREER</Link></li>
          </ul>
      </nav>
        <div className='All-cards'>
          {categoryData.map(item => (
             <div className='card'>
             <img src={item.img}/>
             <h3>{item.title}</h3>
         </div>
          ))}
    
      </div>
        
        </>
        
    );
  }

  export default Category


  

  
  



