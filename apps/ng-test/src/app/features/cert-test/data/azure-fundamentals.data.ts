import { TestDto, SkillDto, TestOutlineSectionDto } from '../models/test.model';

// Define skills for Azure Fundamentals
export const azureFundamentalsSkills: SkillDto[] = [
  {
    Id: 'skill-cloud-concepts',
    Name: 'Cloud Computing Concepts',
    Description: 'Understanding of core cloud computing principles, deployment models, and service types',
    Category: 'Fundamentals',
    Weight: 10
  },
  {
    Id: 'skill-azure-services',
    Name: 'Azure Core Services',
    Description: 'Knowledge of essential Azure services including compute, storage, and databases',
    Category: 'Core Services',
    Weight: 9
  },
  {
    Id: 'skill-security',
    Name: 'Security and Compliance',
    Description: 'Understanding of Azure security features, identity management, and compliance',
    Category: 'Security',
    Weight: 8
  },
  {
    Id: 'skill-pricing',
    Name: 'Pricing and Support',
    Description: 'Knowledge of Azure pricing models, cost management, and support options',
    Category: 'Management',
    Weight: 7
  },
  {
    Id: 'skill-database',
    Name: 'Database Services',
    Description: 'Understanding of Azure database offerings and when to use each',
    Category: 'Core Services',
    Weight: 7
  }
];

// Define test outline
export const azureFundamentalsOutline: TestOutlineSectionDto[] = [
  {
    Id: 'section-cloud-concepts',
    Title: 'Cloud Concepts',
    Description: 'Understand cloud computing principles and deployment models',
    Order: 1,
    ContentMarkdownUrl: '/assets/test-content/azure-fundamentals/cloud-concepts.md',
    QuestionIds: ['q1'],
    SkillIds: ['skill-cloud-concepts'],
    EstimatedTimeMinutes: 2,
    Weight: 20
  },
  {
    Id: 'section-azure-services',
    Title: 'Azure Core Services',
    Description: 'Learn about fundamental Azure services and their use cases',
    Order: 2,
    ContentMarkdownUrl: '/assets/test-content/azure-fundamentals/azure-services.md',
    QuestionIds: ['q2'],
    SkillIds: ['skill-azure-services', 'skill-database'],
    EstimatedTimeMinutes: 3,
    Weight: 30
  },
  {
    Id: 'section-security',
    Title: 'Security, Privacy, and Compliance',
    Description: 'Understand Azure security features and compliance offerings',
    Order: 3,
    ContentMarkdownUrl: '/assets/test-content/azure-fundamentals/security.md',
    QuestionIds: ['q3'],
    SkillIds: ['skill-security'],
    EstimatedTimeMinutes: 3,
    Weight: 25
  },
  {
    Id: 'section-pricing',
    Title: 'Pricing and Support',
    Description: 'Learn about Azure pricing models and support options',
    Order: 4,
    ContentMarkdownUrl: '/assets/test-content/azure-fundamentals/pricing.md',
    QuestionIds: ['q4', 'q5'],
    SkillIds: ['skill-pricing'],
    EstimatedTimeMinutes: 3,
    Weight: 25
  }
];

export const azureFundamentalsTest: TestDto = {
  Id: 'az-900-sample',
  Title: 'Azure Fundamentals (AZ-900) - Sample Test',
  Description: 'A sample certification test for Microsoft Azure Fundamentals covering cloud concepts, Azure services, security, privacy, compliance, and pricing.',
  Duration: 15,
  PassingScore: 70,
  Category: 'Azure',
  HasTimer: true,
  Skills: azureFundamentalsSkills,
  Version: '1.0',
  VersionId: 'az-900-v1.0',
  TotalPoints: 5,
  AllowPause: true,
  AllowReview: true,
  RandomizeQuestions: false,
  RandomizeOptions: false,
  ShowResultsImmediately: true,
  CertificationLevel: 'Fundamentals',
  Prerequisites: [],
  Tags: ['Azure', 'Cloud', 'Fundamentals', 'Microsoft', 'Certification'],
  IsFree: true, // Free test
  Price: 0,
  Currency: 'USD',
  Outline: azureFundamentalsOutline,
  QuestionOrdering: {
    Type: 'Outline' // Order questions by outline sections
  },
  Questions: [
    {
      Id: 'q1',
      Question: 'What type of cloud model provides services over the public internet and is available to anyone who wants to purchase them?',
      Options: [
        'Private cloud',
        'Public cloud',
        'Hybrid cloud',
        'Community cloud'
      ],
      CorrectAnswer: 1,
      AllowMultipleSelection: false,
      Explanation: 'Public cloud services are owned and operated by third-party cloud service providers and delivered over the public internet. They are available to anyone who wants to purchase them.',
      Category: 'Cloud Concepts',
      Hint: 'Think about cloud services that are openly available to any organization or individual, like Azure, AWS, or Google Cloud.',
      SkillIds: ['skill-cloud-concepts'],
      DifficultyLevel: 'Easy',
      EstimatedTimeSeconds: 60,
      Points: 1
    },
    {
      Id: 'q1b',
      Question: 'Which of the following are characteristics of cloud computing? (Select all that apply)',
      Options: [
        'On-demand self-service',
        'Broad network access',
        'Resource pooling',
        'Measured service'
      ],
      CorrectAnswer: [0, 1, 2, 3],
      AllowMultipleSelection: true,
      Explanation: 'All of these are key characteristics of cloud computing as defined by NIST: on-demand self-service, broad network access, resource pooling, and measured service.',
      Category: 'Cloud Concepts',
      Hint: 'These are the five essential characteristics of cloud computing according to NIST.',
      SkillIds: ['skill-cloud-concepts'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 2
    },
    {
      Id: 'q2',
      Question: 'Which Azure service provides a fully managed relational database with built-in intelligence?',
      Options: [
        'Azure Cosmos DB',
        'Azure SQL Database',
        'Azure Table Storage',
        'Azure Blob Storage'
      ],
      CorrectAnswer: 1,
      Explanation: 'Azure SQL Database is a fully managed relational database service with built-in intelligence that learns app patterns and adapts to maximize performance, reliability, and data protection.',
      Category: 'Azure Services',
      Hint: 'Look for the service name that includes "SQL" - it\'s designed for relational data with automatic tuning.',
      SkillIds: ['skill-azure-services', 'skill-database'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },
    {
      Id: 'q3',
      Question: 'What is the Azure service that provides DDoS protection for Azure applications?',
      Options: [
        'Azure Firewall',
        'Azure DDoS Protection',
        'Azure Security Center',
        'Azure Sentinel'
      ],
      CorrectAnswer: 1,
      Explanation: 'Azure DDoS Protection provides enhanced DDoS mitigation features to defend against DDoS attacks. It is tuned to protect your Azure resources in a virtual network.',
      Category: 'Security',
      Hint: 'The service name directly indicates its purpose - protecting against Distributed Denial of Service attacks.',
      SkillIds: ['skill-security'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 75,
      Points: 1
    },
    {
      Id: 'q4',
      Question: 'Which pricing model allows you to pay for Azure services only when you use them?',
      Options: [
        'Capital Expenditure (CapEx)',
        'Pay-as-you-go',
        'Reserved Instances',
        'Enterprise Agreement'
      ],
      CorrectAnswer: 1,
      Explanation: 'Pay-as-you-go is a pricing model where you pay only for the Azure services you use. There is no upfront cost or long-term commitment.',
      Category: 'Pricing and Support',
      Hint: 'This model is like a utility bill - you only pay for what you consume, with no upfront commitment.',
      SkillIds: ['skill-pricing'],
      DifficultyLevel: 'Easy',
      EstimatedTimeSeconds: 60,
      Points: 1
    },
    {
      Id: 'q5',
      Question: 'What Azure tool can be used to estimate the cost of Azure services before deploying them?',
      Options: [
        'Azure Cost Management',
        'Azure Advisor',
        'Azure Pricing Calculator',
        'Azure Monitor'
      ],
      CorrectAnswer: 2,
      Explanation: 'The Azure Pricing Calculator helps you estimate the cost of Azure products. You can configure and estimate the costs for Azure services without actually deploying them.',
      Category: 'Pricing and Support',
      Hint: 'This tool helps you "calculate" estimated costs before you deploy - it\'s right in the name!',
      SkillIds: ['skill-pricing'],
      DifficultyLevel: 'Easy',
      EstimatedTimeSeconds: 60,
      Points: 1
    }
  ]
};

// Sample paid test (for demonstration)
export const azureAdministratorTest: TestDto = {
  Id: 'az-104-sample',
  Title: 'Azure Administrator (AZ-104) - Practice Test',
  Description: 'Advanced practice test for Azure Administrator certification',
  Duration: 60,
  PassingScore: 70,
  Category: 'Azure',
  HasTimer: true,
  Skills: [],
  Version: '1.0',
  VersionId: 'az-104-v1.0',
  TotalPoints: 0,
  AllowPause: true,
  AllowReview: true,
  RandomizeQuestions: false,
  RandomizeOptions: false,
  ShowResultsImmediately: true,
  CertificationLevel: 'Associate',
  Prerequisites: ['az-900-sample'],
  Tags: ['Azure', 'Administrator', 'Associate', 'Certification'],
  IsFree: false, // Paid test
  Price: 29.99,
  Currency: 'USD',
  Outline: [],
  QuestionOrdering: {
    Type: 'Outline'
  },
  Questions: []
};
