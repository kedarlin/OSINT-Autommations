import React from 'react';

const UseCaseConfiguration = ({ selectedUseCases, handleUseCaseToggle }) => {
  // Define the list of use cases
  const useCases = [
    { id: 'newsArticles', label: 'News Articles' },
    { id: 'googleSearch', label: 'Google Search' },
    { id: 'googleDorks', label: 'Google Dorks' },
    { id: 'darkWebSearch', label: 'DarkWeb Search' },
  ];

  return (
    <div className='use-case-configuration'>
      <h3>Select Use Cases:</h3>
      <div className='use-case-options'>
        {useCases.map((useCase) => (
          <div key={useCase.id} className='use-case-option'>
            <input
              type='checkbox'
              id={useCase.id}
              checked={selectedUseCases.includes(useCase.id)}
              onChange={() => handleUseCaseToggle(useCase.id)}
            />
            <label htmlFor={useCase.id}>{useCase.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseCaseConfiguration;
