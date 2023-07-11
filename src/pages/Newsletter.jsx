import React from 'react';
import NewsletterItem from '../components/NewsletterItem';
import SideBarTemplate from '../components/SideBarTemplate';

const Newsletter = () => {
  // Mock data for newsletters
  const newsletters = [
    {
      id: 1,
      title: 'Summer Sale!',
      description: 'Don\'t miss out on our exclusive summer sale.',
      image: 'https://picsum.photos/200',
      link: '',
    },
    {
      id: 2,
      title: 'New Arrivals',
      description: 'Discover our latest collection of trendy products.',
      image: 'https://picsum.photos/200',
      link: '',

    },
    {
        id: 3,
        title: 'Summer Sale!',
        description: 'Don\'t miss out on our exclusive summer sale.',
        image: 'https://picsum.photos/200',
        link: '',
      },
      {
        id: 4,
        title: 'Summer Sale!',
        description: 'Don\'t miss out on our exclusive summer sale.',
        image: 'https://picsum.photos/200',
        link: '',
      },
    // Add more newsletters as needed
  ];

  return (
    <SideBarTemplate title="Latest Newsletters" content={<div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsletters.map((newsletter) => (
          <NewsletterItem key={newsletter.id} {...newsletter} />
        ))}
      </div>
    </div>
  </div>}/>
    
  );
};

export default Newsletter;
