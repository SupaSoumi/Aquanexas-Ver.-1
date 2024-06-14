const readMoreButtons = document.querySelectorAll('.solution-cards .btn');
const solutionTitle = document.getElementById('solution-title');
const solutionImage = document.getElementById('solution-image');
const solutionDescription = document.getElementById('solution-description');
const solutionFeatures = document.getElementById('solution-features');
const solutionBenefits = document.getElementById('solution-benefits');

const storyTitle = document.getElementById('story-title');
const storyImage = document.getElementById('story-image');
const storyDescription = document.getElementById('story-description');

const solutionData = {
  'water-management': {
    title: 'Water Management Solutions',
    image: 'water-management.jpg',
    description: 'Our water management solutions focus on sustainable practices to conserve and efficiently utilize water resources. We offer rainwater harvesting systems, efficient irrigation methods, and educational programs to promote water conservation. Our goal is to ensure long-term water security for communities and ecosystems.',
    features: [
      'Rainwater harvesting systems',
      'Drip irrigation techniques',
      'Water conservation education',
      'Groundwater recharge solutions'
    ],
    benefits: [
      'Reduced water consumption',
      'Increased crop yields',
      'Improved water security',
      'Environmental sustainability'
    ]
  },
  'water-sanitation': {
    title: 'Water Sanitation Solutions',
    image: 'water-sanitation.jpg',
    description: 'Access to safe drinking water and proper sanitation facilities is essential for public health and well-being. Our water sanitation solutions include water treatment processes, safe water storage and distribution systems, and the construction of sanitation facilities. We also provide hygiene education and training to promote healthy practices.',
    features: [
      'Water treatment plants',
      'Safe water storage and distribution',
      'Sanitation facility construction',
      'Hygiene education and training'
    ],
    benefits: [
      'Improved public health',
      'Reduced waterborne diseases',
      'Increased access to safe drinking water',
      'Enhanced community well-being'
    ]
  }
};

const impactStories = {
  'village-water': {
    title: 'Clean Water Brings Hope to a Village',
    image: 'impact-story-1.jpg',
    description: 'In a remote village in Africa, access to clean water was a daily struggle. Women and children had to walk miles to fetch water from contaminated sources, putting their health at risk. AquaNexus partnered with the local community to implement a sustainable water management solution. We installed a rainwater harvesting system and constructed a water treatment plant, ensuring a reliable supply of safe drinking water. The impact was transformative – children could attend school without worrying about fetching water, and families could focus on income-generating activities. The village's health and well-being improved significantly, and the community now has a brighter future.'
  },
  'women-empowerment': {
    title: 'Empowering Women through Water',
    image: 'impact-story-2.jpg',
    description: 'In a rural community where access to safe water and sanitation was limited, women faced significant challenges. They spent countless hours fetching water from distant sources, leaving little time for education or economic opportunities. AquaNexus recognized the need for a comprehensive water sanitation solution and worked closely with the community to construct a water treatment plant and install proper sanitation facilities. We also provided hygiene education and training to promote healthy practices. The impact was transformative – women gained back valuable time, enabling them to start small businesses and achieve financial independence. The community's overall well-being improved, and women became empowered agents of change.'
  }
};

readMoreButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const solutionKey = event.currentTarget.dataset.solution;
    const solutionUrl = `solution-details.html?solution=${solutionKey}`;
    window.open(solutionUrl, '_blank');
  });
});

// Check if the URL has a solution parameter
const urlParams = new URLSearchParams(window.location.search);
const solutionKey = urlParams.get('solution');
const storyKey = urlParams.get('story');

if (solutionKey) {
  const solutionInfo = solutionData[solutionKey];

  if (solutionInfo) {
    solutionTitle.textContent = solutionInfo.title;
    solutionImage.src = solutionInfo.image;
    solutionImage.alt = solutionInfo.title;
    solutionDescription.textContent = solutionInfo.description;

    // Clear existing feature and benefit list items
    solutionFeatures.innerHTML = '';
    solutionBenefits.innerHTML = '';

    // Add feature list items
    solutionInfo.features.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      solutionFeatures.appendChild(li);
    });

    // Add benefit list items
    solutionInfo.benefits.forEach(benefit => {
      const li = document.createElement('li');
      li.textContent = benefit;
      solutionBenefits.appendChild(li);
    });
  } else {
    console.error('Solution data not found');
  }
} else if (storyKey) {
  const storyInfo = impactStories[storyKey];

  if (storyInfo) {
    storyTitle.textContent = storyInfo.title;
    storyImage.src = storyInfo.image;
    storyImage.alt = storyInfo.title;
    storyDescription.textContent = storyInfo.description;
  } else {
    console.error('Impact story data not found');
  }
}
