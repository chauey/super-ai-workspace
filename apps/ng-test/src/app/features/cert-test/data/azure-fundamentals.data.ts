import { TestDto, SkillDto, TestOutlineSectionDto } from '../models/test.model';

// Define skills for Azure Fundamentals
export const azureFundamentalsSkills: SkillDto[] = [
  {
    id: 'skill-cloud-concepts',
    name: 'Cloud Computing Concepts',
    description: 'Understanding of core cloud computing principles, deployment models, and service types',
    category: 'Fundamentals',
    weight: 10
  },
  {
    id: 'skill-azure-services',
    name: 'Azure Core Services',
    description: 'Knowledge of essential Azure services including compute, storage, and databases',
    category: 'Core Services',
    weight: 9
  },
  {
    id: 'skill-security',
    name: 'Security and Compliance',
    description: 'Understanding of Azure security features, identity management, and compliance',
    category: 'Security',
    weight: 8
  },
  {
    id: 'skill-pricing',
    name: 'Pricing and Support',
    description: 'Knowledge of Azure pricing models, cost management, and support options',
    category: 'Management',
    weight: 7
  },
  {
    id: 'skill-database',
    name: 'Database Services',
    description: 'Understanding of Azure database offerings and when to use each',
    category: 'Core Services',
    weight: 7
  }
];

// Define test outline
export const azureFundamentalsOutline: TestOutlineSectionDto[] = [
  {
    id: 'section-cloud-concepts',
    title: 'Cloud Concepts',
    description: 'Understand cloud computing principles and deployment models',
    order: 1,
    contentMarkdownUrl: '/assets/test-content/azure-fundamentals/cloud-concepts.md',
    questionIds: ['q1'],
    skillIds: ['skill-cloud-concepts'],
    estimatedTimeMinutes: 2,
    weight: 20
  },
  {
    id: 'section-azure-services',
    title: 'Azure Core Services',
    description: 'Learn about fundamental Azure services and their use cases',
    order: 2,
    contentMarkdownUrl: '/assets/test-content/azure-fundamentals/azure-services.md',
    questionIds: ['q2'],
    skillIds: ['skill-azure-services', 'skill-database'],
    estimatedTimeMinutes: 3,
    weight: 30
  },
  {
    id: 'section-security',
    title: 'Security, Privacy, and Compliance',
    description: 'Understand Azure security features and compliance offerings',
    order: 3,
    contentMarkdownUrl: '/assets/test-content/azure-fundamentals/security.md',
    questionIds: ['q3'],
    skillIds: ['skill-security'],
    estimatedTimeMinutes: 3,
    weight: 25
  },
  {
    id: 'section-pricing',
    title: 'Pricing and Support',
    description: 'Learn about Azure pricing models and support options',
    order: 4,
    contentMarkdownUrl: '/assets/test-content/azure-fundamentals/pricing.md',
    questionIds: ['q4', 'q5'],
    skillIds: ['skill-pricing'],
    estimatedTimeMinutes: 3,
    weight: 25
  }
];

export const azureFundamentalsTest: TestDto = {
  id: 'az-900-sample',
  title: 'Azure Fundamentals (AZ-900) - Sample Test',
  description: 'A sample certification test for Microsoft Azure Fundamentals covering cloud concepts, Azure services, security, privacy, compliance, and pricing.',
  duration: 15,
  passingScore: 70,
  category: 'Azure',
  hasTimer: true,
  skills: azureFundamentalsSkills,
  version: '1.0',
  versionId: 'az-900-v1.0',
  totalPoints: 5,
  allowPause: true,
  allowReview: true,
  randomizeQuestions: false,
  randomizeOptions: false,
  showResultsImmediately: true,
  certificationLevel: 'Fundamentals',
  prerequisites: [],
  tags: ['Azure', 'Cloud', 'Fundamentals', 'Microsoft', 'Certification'],
  isFree: true, // Free test
  price: 0,
  currency: 'USD',
  outline: azureFundamentalsOutline,
  questionOrdering: {
    type: 'Outline' // Order questions by outline sections
  },
  questions: [
    {
      id: 'q1',
      question: 'What type of cloud model provides services over the public internet and is available to anyone who wants to purchase them?',
      options: [
        'Private cloud',
        'Public cloud',
        'Hybrid cloud',
        'Community cloud'
      ],
      correctAnswer: 1,
      allowMultipleSelection: false,
      explanation: 'Public cloud services are owned and operated by third-party cloud service providers and delivered over the public internet. They are available to anyone who wants to purchase them.',
      category: 'Cloud Concepts',
      hint: 'Think about cloud services that are openly available to any organization or individual, like Azure, AWS, or Google Cloud.',
      skillIds: ['skill-cloud-concepts'],
      difficultyLevel: 'Easy',
      estimatedTimeSeconds: 60,
      points: 1
    },
    {
      id: 'q1b',
      question: 'Which of the following are characteristics of cloud computing? (Select all that apply)',
      options: [
        'On-demand self-service',
        'Broad network access',
        'Resource pooling',
        'Measured service'
      ],
      correctAnswer: [0, 1, 2, 3],
      allowMultipleSelection: true,
      explanation: 'All of these are key characteristics of cloud computing as defined by NIST: on-demand self-service, broad network access, resource pooling, and measured service.',
      category: 'Cloud Concepts',
      hint: 'These are the five essential characteristics of cloud computing according to NIST.',
      skillIds: ['skill-cloud-concepts'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 2
    },
    {
      id: 'q2',
      question: 'Which Azure service provides a fully managed relational database with built-in intelligence?',
      options: [
        'Azure Cosmos DB',
        'Azure SQL Database',
        'Azure Table Storage',
        'Azure Blob Storage'
      ],
      correctAnswer: 1,
      explanation: 'Azure SQL Database is a fully managed relational database service with built-in intelligence that learns app patterns and adapts to maximize performance, reliability, and data protection.',
      category: 'Azure Services',
      hint: 'Look for the service name that includes "SQL" - it\'s designed for relational data with automatic tuning.',
      skillIds: ['skill-azure-services', 'skill-database'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },
    {
      id: 'q3',
      question: 'What is the Azure service that provides DDoS protection for Azure applications?',
      options: [
        'Azure Firewall',
        'Azure DDoS Protection',
        'Azure Security Center',
        'Azure Sentinel'
      ],
      correctAnswer: 1,
      explanation: 'Azure DDoS Protection provides enhanced DDoS mitigation features to defend against DDoS attacks. It is tuned to protect your Azure resources in a virtual network.',
      category: 'Security',
      hint: 'The service name directly indicates its purpose - protecting against Distributed Denial of Service attacks.',
      skillIds: ['skill-security'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 75,
      points: 1
    },
    {
      id: 'q4',
      question: 'Which pricing model allows you to pay for Azure services only when you use them?',
      options: [
        'Capital Expenditure (CapEx)',
        'Pay-as-you-go',
        'Reserved Instances',
        'Enterprise Agreement'
      ],
      correctAnswer: 1,
      explanation: 'Pay-as-you-go is a pricing model where you pay only for the Azure services you use. There is no upfront cost or long-term commitment.',
      category: 'Pricing and Support',
      hint: 'This model is like a utility bill - you only pay for what you consume, with no upfront commitment.',
      skillIds: ['skill-pricing'],
      difficultyLevel: 'Easy',
      estimatedTimeSeconds: 60,
      points: 1
    },
    {
      id: 'q5',
      question: 'What Azure tool can be used to estimate the cost of Azure services before deploying them?',
      options: [
        'Azure Cost Management',
        'Azure Advisor',
        'Azure Pricing Calculator',
        'Azure Monitor'
      ],
      correctAnswer: 2,
      explanation: 'The Azure Pricing Calculator helps you estimate the cost of Azure products. You can configure and estimate the costs for Azure services without actually deploying them.',
      category: 'Pricing and Support',
      hint: 'This tool helps you "calculate" estimated costs before you deploy - it\'s right in the name!',
      skillIds: ['skill-pricing'],
      difficultyLevel: 'Easy',
      estimatedTimeSeconds: 60,
      points: 1
    }
  ]
};

// Sample paid test (for demonstration)
export const azureAdministratorTest: TestDto = {
  id: 'az-104-sample',
  title: 'Azure Administrator (AZ-104) - Practice Test',
  description: 'Advanced practice test for Azure Administrator certification',
  duration: 60,
  passingScore: 70,
  category: 'Azure',
  hasTimer: true,
  skills: [],
  version: '1.0',
  versionId: 'az-104-v1.0',
  totalPoints: 0,
  allowPause: true,
  allowReview: true,
  randomizeQuestions: false,
  randomizeOptions: false,
  showResultsImmediately: true,
  certificationLevel: 'Associate',
  prerequisites: ['az-900-sample'],
  tags: ['Azure', 'Administrator', 'Associate', 'Certification'],
  isFree: false, // Paid test
  price: 29.99,
  currency: 'USD',
  outline: [],
  questionOrdering: {
    type: 'Outline'
  },
  questions: []
};
