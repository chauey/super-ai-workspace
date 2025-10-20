import { TestDto, SkillDto, TestOutlineSectionDto } from '../models/test.model';

// Define skills for Angular 20
export const angular20Skills: SkillDto[] = [
  {
    id: 'skill-angular-fundamentals',
    name: 'Angular Fundamentals',
    description: 'Core Angular concepts including components, modules, services, and dependency injection',
    category: 'Fundamentals',
    weight: 10
  },
  {
    id: 'skill-angular-signals',
    name: 'Angular Signals',
    description: 'Understanding of Angular signals, computed values, and reactive programming',
    category: 'Advanced',
    weight: 9
  },
  {
    id: 'skill-angular-control-flow',
    name: 'Control Flow',
    description: 'New Angular control flow syntax including @if, @for, and @switch',
    category: 'Advanced',
    weight: 8
  },
  {
    id: 'skill-angular-standalone',
    name: 'Standalone Components',
    description: 'Standalone components, bootstrap functions, and modern Angular architecture',
    category: 'Advanced',
    weight: 8
  },
  {
    id: 'skill-angular-routing',
    name: 'Angular Routing',
    description: 'Router configuration, guards, resolvers, and lazy loading',
    category: 'Core',
    weight: 7
  },
  {
    id: 'skill-angular-forms',
    name: 'Angular Forms',
    description: 'Template-driven and reactive forms, validation, and form controls',
    category: 'Core',
    weight: 7
  },
  {
    id: 'skill-angular-http',
    name: 'HTTP Client',
    description: 'HTTP client, interceptors, error handling, and API integration',
    category: 'Core',
    weight: 6
  },
  {
    id: 'skill-angular-testing',
    name: 'Angular Testing',
    description: 'Unit testing, integration testing, and testing utilities',
    category: 'Testing',
    weight: 6
  },
  {
    id: 'skill-angular-performance',
    name: 'Performance Optimization',
    description: 'Change detection, OnPush strategy, and performance best practices',
    category: 'Advanced',
    weight: 5
  },
  {
    id: 'skill-angular-ssr',
    name: 'Server-Side Rendering',
    description: 'Angular Universal, SSR, and hydration',
    category: 'Advanced',
    weight: 4
  }
];

// Define test outline
export const angular20Outline: TestOutlineSectionDto[] = [
  {
    id: 'section-fundamentals',
    title: 'Angular Fundamentals',
    description: 'Core Angular concepts and architecture',
    order: 1,
    questionIds: ['q1', 'q2', 'q3', 'q4', 'q5'],
    skillIds: ['skill-angular-fundamentals'],
    estimatedTimeMinutes: 10,
    weight: 20
  },
  {
    id: 'section-signals',
    title: 'Angular Signals',
    description: 'Understanding signals and reactive programming',
    order: 2,
    questionIds: ['q6', 'q7', 'q8', 'q9', 'q10'],
    skillIds: ['skill-angular-signals'],
    estimatedTimeMinutes: 10,
    weight: 20
  },
  {
    id: 'section-control-flow',
    title: 'Control Flow',
    description: 'New control flow syntax and directives',
    order: 3,
    questionIds: ['q11', 'q12', 'q13', 'q14', 'q15'],
    skillIds: ['skill-angular-control-flow'],
    estimatedTimeMinutes: 10,
    weight: 20
  },
  {
    id: 'section-standalone',
    title: 'Standalone Components',
    description: 'Standalone components and modern architecture',
    order: 4,
    questionIds: ['q16', 'q17', 'q18', 'q19', 'q20'],
    skillIds: ['skill-angular-standalone'],
    estimatedTimeMinutes: 10,
    weight: 20
  },
  {
    id: 'section-routing',
    title: 'Angular Routing',
    description: 'Router configuration and navigation',
    order: 5,
    questionIds: ['q21', 'q22', 'q23', 'q24', 'q25'],
    skillIds: ['skill-angular-routing'],
    estimatedTimeMinutes: 10,
    weight: 20
  },
  {
    id: 'section-forms',
    title: 'Angular Forms',
    description: 'Form handling and validation',
    order: 6,
    questionIds: ['q26', 'q27', 'q28', 'q29', 'q30'],
    skillIds: ['skill-angular-forms'],
    estimatedTimeMinutes: 10,
    weight: 20
  },
  {
    id: 'section-http',
    title: 'HTTP Client',
    description: 'API integration and data fetching',
    order: 7,
    questionIds: ['q31', 'q32', 'q33', 'q34', 'q35'],
    skillIds: ['skill-angular-http'],
    estimatedTimeMinutes: 10,
    weight: 20
  },
  {
    id: 'section-testing',
    title: 'Angular Testing',
    description: 'Testing strategies and utilities',
    order: 8,
    questionIds: ['q36', 'q37', 'q38', 'q39', 'q40'],
    skillIds: ['skill-angular-testing'],
    estimatedTimeMinutes: 10,
    weight: 20
  },
  {
    id: 'section-performance',
    title: 'Performance Optimization',
    description: 'Performance best practices and optimization',
    order: 9,
    questionIds: ['q41', 'q42', 'q43', 'q44', 'q45'],
    skillIds: ['skill-angular-performance'],
    estimatedTimeMinutes: 10,
    weight: 20
  },
  {
    id: 'section-ssr',
    title: 'Server-Side Rendering',
    description: 'SSR and Angular Universal',
    order: 10,
    questionIds: ['q46', 'q47', 'q48', 'q49', 'q50'],
    skillIds: ['skill-angular-ssr'],
    estimatedTimeMinutes: 10,
    weight: 20
  }
];

export const angular20Test: TestDto = {
  id: 'angular-20-practice',
  title: 'Angular 20 Practice Test',
  description: 'Comprehensive practice test covering Angular 20 features including signals, control flow, standalone components, and modern Angular development practices.',
  duration: 90,
  passingScore: 70,
  category: 'Angular',
  hasTimer: true,
  skills: angular20Skills,
  version: '1.0',
  versionId: 'angular-20-v1.0',
  totalPoints: 50,
  allowPause: true,
  allowReview: true,
  randomizeQuestions: false,
  randomizeOptions: false,
  showResultsImmediately: true,
  certificationLevel: 'Advanced',
  prerequisites: [],
  tags: ['Angular', 'Angular 20', 'Frontend', 'JavaScript', 'TypeScript', 'Practice Test'],
  isFree: true,
  price: 0,
  currency: 'USD',
  outline: angular20Outline,
  questionOrdering: {
    type: 'Outline'
  },
  questions: [
    // Angular Fundamentals (Questions 1-5)
    {
      id: 'q1',
      question: 'What is the primary purpose of Angular components?',
      options: [
        'To manage application state',
        'To define reusable UI elements with associated logic',
        'To handle HTTP requests',
        'To configure routing'
      ],
      correctAnswer: 1,
      allowMultipleSelection: false,
      explanation: 'Angular components are the building blocks of Angular applications. They define reusable UI elements with associated logic, templates, and styling.',
      category: 'Angular Fundamentals',
      hint: 'Think about what makes up the user interface in Angular applications.',
      skillIds: ['skill-angular-fundamentals'],
      difficultyLevel: 'Easy',
      estimatedTimeSeconds: 60,
      points: 1
    },
    {
      id: 'q2',
      question: 'Which decorator is used to define a component in Angular?',
      options: [
        '@Injectable',
        '@Component',
        '@Directive',
        '@Pipe'
      ],
      correctAnswer: 1,
      allowMultipleSelection: false,
      explanation: 'The @Component decorator is used to define Angular components. It provides metadata about the component including its selector, template, and styles.',
      category: 'Angular Fundamentals',
      hint: 'Look for the decorator that specifically handles component metadata.',
      skillIds: ['skill-angular-fundamentals'],
      difficultyLevel: 'Easy',
      estimatedTimeSeconds: 45,
      points: 1
    },
    {
      id: 'q2b',
      question: 'Which of the following are valid Angular lifecycle hooks? (Select all that apply)',
      options: [
        'ngOnInit',
        'ngOnDestroy',
        'ngOnChanges',
        'ngOnMount'
      ],
      correctAnswer: [0, 1, 2],
      allowMultipleSelection: true,
      explanation: 'ngOnInit, ngOnDestroy, and ngOnChanges are valid Angular lifecycle hooks. ngOnMount is not a valid Angular lifecycle hook.',
      category: 'Angular Fundamentals',
      hint: 'Think about the common lifecycle hooks you use in Angular components.',
      skillIds: ['skill-angular-fundamentals'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 2
    },
    {
      id: 'q3',
      question: 'What is dependency injection in Angular?',
      options: [
        'A way to inject HTML into templates',
        'A design pattern that provides dependencies to a class',
        'A method to inject CSS styles',
        'A way to inject JavaScript into components'
      ],
      correctAnswer: 1,
      explanation: 'Dependency injection is a design pattern where dependencies are provided to a class rather than the class creating them itself. Angular has a built-in DI system.',
      category: 'Angular Fundamentals',
      hint: 'Think about how services and other dependencies are provided to components.',
      skillIds: ['skill-angular-fundamentals'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 75,
      points: 1
    },
    {
      id: 'q4',
      question: 'What is the purpose of Angular modules?',
      options: [
        'To define component templates',
        'To organize related functionality into cohesive blocks',
        'To handle form validation',
        'To manage HTTP requests'
      ],
      correctAnswer: 1,
      explanation: 'Angular modules (NgModules) organize related functionality into cohesive blocks. They help organize the application into feature areas and provide compilation boundaries.',
      category: 'Angular Fundamentals',
      hint: 'Modules help organize and structure Angular applications.',
      skillIds: ['skill-angular-fundamentals'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },
    {
      id: 'q5',
      question: 'Which lifecycle hook is called after Angular initializes the component?',
      options: [
        'ngOnInit',
        'ngOnChanges',
        'ngOnDestroy',
        'ngAfterViewInit'
      ],
      correctAnswer: 0,
      explanation: 'ngOnInit is called after Angular initializes the component. It\'s the best place to perform initialization logic.',
      category: 'Angular Fundamentals',
      hint: 'This hook is called once after the component is initialized.',
      skillIds: ['skill-angular-fundamentals'],
      difficultyLevel: 'Easy',
      estimatedTimeSeconds: 60,
      points: 1
    },

    // Angular Signals (Questions 6-10)
    {
      id: 'q6',
      question: 'What is an Angular signal?',
      options: [
        'A function that returns a value',
        'A reactive primitive that can hold a value and notify consumers when it changes',
        'A component lifecycle hook',
        'A service method'
      ],
      correctAnswer: 1,
      allowMultipleSelection: false,
      explanation: 'Angular signals are reactive primitives that can hold a value and notify consumers when it changes. They provide fine-grained reactivity.',
      category: 'Angular Signals',
      hint: 'Signals are reactive primitives that notify when values change.',
      skillIds: ['skill-angular-signals'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },
    {
      id: 'q6b',
      question: 'Which of the following are benefits of using Angular signals? (Select all that apply)',
      options: [
        'Fine-grained reactivity',
        'Better performance with OnPush change detection',
        'Simpler state management',
        'Automatic dependency tracking'
      ],
      correctAnswer: [0, 1, 2, 3],
      allowMultipleSelection: true,
      explanation: 'All of these are benefits of Angular signals: fine-grained reactivity, better performance with OnPush change detection, simpler state management, and automatic dependency tracking.',
      category: 'Angular Signals',
      hint: 'Signals provide many advantages over traditional change detection.',
      skillIds: ['skill-angular-signals'],
      difficultyLevel: 'Hard',
      estimatedTimeSeconds: 120,
      points: 3
    },
    {
      id: 'q7',
      question: 'How do you create a signal in Angular?',
      options: [
        'new Signal()',
        'signal()',
        'createSignal()',
        'Signal.create()'
      ],
      correctAnswer: 1,
      explanation: 'You create a signal using the signal() function from @angular/core. For example: const count = signal(0);',
      category: 'Angular Signals',
      hint: 'The function name is the same as the concept.',
      skillIds: ['skill-angular-signals'],
      difficultyLevel: 'Easy',
      estimatedTimeSeconds: 60,
      points: 1
    },
    {
      id: 'q8',
      question: 'What is a computed signal?',
      options: [
        'A signal that can be written to',
        'A signal that derives its value from other signals',
        'A signal that never changes',
        'A signal that only works in components'
      ],
      correctAnswer: 1,
      explanation: 'A computed signal derives its value from other signals. It automatically updates when its dependencies change.',
      category: 'Angular Signals',
      hint: 'Computed signals derive their values from other signals.',
      skillIds: ['skill-angular-signals'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 75,
      points: 1
    },
    {
      id: 'q9',
      question: 'How do you update a signal value?',
      options: [
        'signal.value = newValue',
        'signal.set(newValue)',
        'signal.update(newValue)',
        'Both B and C'
      ],
      correctAnswer: 3,
      explanation: 'You can update a signal using either signal.set(newValue) for direct assignment or signal.update(fn) for updating based on current value.',
      category: 'Angular Signals',
      hint: 'There are two main ways to update signal values.',
      skillIds: ['skill-angular-signals'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },
    {
      id: 'q10',
      question: 'What happens when a signal value changes?',
      options: [
        'Nothing',
        'All components using the signal re-render',
        'Only the signal itself is updated',
        'All computed signals that depend on it are recalculated'
      ],
      correctAnswer: 3,
      explanation: 'When a signal value changes, all computed signals that depend on it are automatically recalculated, providing fine-grained reactivity.',
      category: 'Angular Signals',
      hint: 'Signals provide fine-grained reactivity by updating only what depends on them.',
      skillIds: ['skill-angular-signals'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 75,
      points: 1
    },

    // Control Flow (Questions 11-15)
    {
      id: 'q11',
      question: 'What is the new control flow syntax in Angular 17+?',
      options: [
        '@if, @for, @switch',
        'ngIf, ngFor, ngSwitch',
        'if, for, switch',
        'v-if, v-for, v-switch'
      ],
      correctAnswer: 0,
      explanation: 'Angular 17+ introduced new control flow syntax using @if, @for, and @switch directives, which are more performant and easier to use.',
      category: 'Control Flow',
      hint: 'The new syntax uses @ symbols instead of ng- prefixes.',
      skillIds: ['skill-angular-control-flow'],
      difficultyLevel: 'Easy',
      estimatedTimeSeconds: 60,
      points: 1
    },
    {
      id: 'q12',
      question: 'How do you write a conditional block with the new @if syntax?',
      options: [
        '@if (condition) { content }',
        '@if condition { content }',
        'if (condition) { content }',
        '@if condition then content'
      ],
      correctAnswer: 0,
      explanation: 'The new @if syntax uses @if (condition) { content } format, which is more readable and performant than the old *ngIf.',
      category: 'Control Flow',
      hint: 'The syntax includes parentheses around the condition and curly braces around the content.',
      skillIds: ['skill-angular-control-flow'],
      difficultyLevel: 'Easy',
      estimatedTimeSeconds: 60,
      points: 1
    },
    {
      id: 'q13',
      question: 'What is the syntax for iterating over a collection with @for?',
      options: [
        '@for (item of items) { content }',
        '@for item in items { content }',
        '@for (item; track item.id) of items { content }',
        'Both A and C'
      ],
      correctAnswer: 3,
      explanation: 'The @for syntax can be written as @for (item of items) { content } or with tracking as @for (item; track item.id) of items { content }.',
      category: 'Control Flow',
      hint: 'The @for syntax supports both simple iteration and tracking for performance.',
      skillIds: ['skill-angular-control-flow'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },
    {
      id: 'q14',
      question: 'What is the purpose of the track expression in @for?',
      options: [
        'To filter items',
        'To sort items',
        'To help Angular track items for efficient DOM updates',
        'To validate items'
      ],
      correctAnswer: 2,
      explanation: 'The track expression helps Angular efficiently track items in the list for optimal DOM updates, similar to trackBy in *ngFor.',
      category: 'Control Flow',
      hint: 'Tracking helps with performance by identifying unique items.',
      skillIds: ['skill-angular-control-flow'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 75,
      points: 1
    },
    {
      id: 'q15',
      question: 'How do you handle empty collections with @for?',
      options: [
        '@for (item of items) { content } @empty { empty content }',
        '@for (item of items) { content } else { empty content }',
        '@for (item of items) { content } @if (!items.length) { empty content }',
        'You cannot handle empty collections with @for'
      ],
      correctAnswer: 0,
      explanation: 'The @for directive supports an @empty block that renders when the collection is empty: @for (item of items) { content } @empty { empty content }',
      category: 'Control Flow',
      hint: 'The @empty block is specifically designed for this purpose.',
      skillIds: ['skill-angular-control-flow'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },

    // Standalone Components (Questions 16-20)
    {
      id: 'q16',
      question: 'What are standalone components in Angular?',
      options: [
        'Components that work without modules',
        'Components that can be used independently',
        'Components that don\'t need imports',
        'Components that are self-contained and don\'t require NgModules'
      ],
      correctAnswer: 3,
      explanation: 'Standalone components are self-contained components that don\'t require NgModules. They can import their own dependencies directly.',
      category: 'Standalone Components',
      hint: 'Standalone components are independent of the module system.',
      skillIds: ['skill-angular-standalone'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },
    {
      id: 'q17',
      question: 'How do you make a component standalone?',
      options: [
        'Add standalone: true to the component decorator',
        'Add @Standalone() decorator',
        'Remove it from any module',
        'Add standalone: true to the @Component decorator'
      ],
      correctAnswer: 3,
      explanation: 'You make a component standalone by adding standalone: true to the @Component decorator metadata.',
      category: 'Standalone Components',
      hint: 'The property is added to the component decorator metadata.',
      skillIds: ['skill-angular-standalone'],
      difficultyLevel: 'Easy',
      estimatedTimeSeconds: 60,
      points: 1
    },
    {
      id: 'q18',
      question: 'How do standalone components import dependencies?',
      options: [
        'Through the imports array in the component decorator',
        'Through the providers array',
        'Through the declarations array',
        'Through the module system'
      ],
      correctAnswer: 0,
      explanation: 'Standalone components import dependencies through the imports array in the @Component decorator, not through modules.',
      category: 'Standalone Components',
      hint: 'Standalone components have their own imports array.',
      skillIds: ['skill-angular-standalone'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 75,
      points: 1
    },
    {
      id: 'q19',
      question: 'What is the bootstrapApplication function used for?',
      options: [
        'To start Angular applications with standalone components',
        'To bootstrap regular Angular applications',
        'To configure routing in standalone apps',
        'To set up dependency injection'
      ],
      correctAnswer: 0,
      explanation: 'bootstrapApplication is used to start Angular applications that use standalone components as the root component.',
      category: 'Standalone Components',
      hint: 'This function is specifically for applications using standalone components.',
      skillIds: ['skill-angular-standalone'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },
    {
      id: 'q20',
      question: 'Can standalone components be used in regular Angular modules?',
      options: [
        'No, they are completely separate',
        'Yes, they can be imported into modules',
        'Only if they are declared in the module',
        'Only in standalone applications'
      ],
      correctAnswer: 1,
      explanation: 'Yes, standalone components can be imported into regular Angular modules using the imports array.',
      category: 'Standalone Components',
      hint: 'Standalone components are designed to be interoperable with the module system.',
      skillIds: ['skill-angular-standalone'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 75,
      points: 1
    },

    // Angular Routing (Questions 21-25)
    {
      id: 'q21',
      question: 'What is the purpose of Angular Router?',
      options: [
        'To manage component lifecycle',
        'To handle navigation between different views in a single-page application',
        'To manage HTTP requests',
        'To handle form validation'
      ],
      correctAnswer: 1,
      explanation: 'Angular Router enables navigation between different views in a single-page application by mapping URLs to components.',
      category: 'Angular Routing',
      hint: 'Router handles navigation and URL mapping in SPAs.',
      skillIds: ['skill-angular-routing'],
      difficultyLevel: 'Easy',
      estimatedTimeSeconds: 60,
      points: 1
    },
    {
      id: 'q22',
      question: 'Which directive is used to create navigation links?',
      options: [
        'routerLink',
        'router-link',
        'navigate',
        'link'
      ],
      correctAnswer: 0,
      explanation: 'The routerLink directive is used to create navigation links in Angular templates. It navigates to the specified route.',
      category: 'Angular Routing',
      hint: 'The directive name combines "router" and "link".',
      skillIds: ['skill-angular-routing'],
      difficultyLevel: 'Easy',
      estimatedTimeSeconds: 45,
      points: 1
    },
    {
      id: 'q23',
      question: 'What is a route guard in Angular?',
      options: [
        'A component that protects routes',
        'A service that controls access to routes',
        'A directive that validates routes',
        'A pipe that transforms route data'
      ],
      correctAnswer: 1,
      explanation: 'Route guards are services that control access to routes. They can prevent navigation, resolve data, or perform other route-related tasks.',
      category: 'Angular Routing',
      hint: 'Guards control access and behavior around route navigation.',
      skillIds: ['skill-angular-routing'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },
    {
      id: 'q24',
      question: 'How do you implement lazy loading in Angular routing?',
      options: [
        'Using loadChildren with a function that returns a module',
        'Using loadComponent with a function that returns a component',
        'Using loadModule in the route configuration',
        'Using lazy: true in the route configuration'
      ],
      correctAnswer: 0,
      explanation: 'Lazy loading is implemented using loadChildren with a function that returns a module. This loads the module only when the route is accessed.',
      category: 'Angular Routing',
      hint: 'Lazy loading uses loadChildren with a function that returns a module.',
      skillIds: ['skill-angular-routing'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },
    {
      id: 'q25',
      question: 'What is the purpose of route resolvers?',
      options: [
        'To validate route parameters',
        'To pre-fetch data before navigating to a route',
        'To protect routes from unauthorized access',
        'To transform route data'
      ],
      correctAnswer: 1,
      explanation: 'Route resolvers pre-fetch data before navigating to a route. They ensure data is available when the component loads.',
      category: 'Angular Routing',
      hint: 'Resolvers prepare data before route activation.',
      skillIds: ['skill-angular-routing'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 75,
      points: 1
    },

    // Angular Forms (Questions 26-30)
    {
      id: 'q26',
      question: 'What are the two types of forms in Angular?',
      options: [
        'Template-driven and reactive forms',
        'Simple and complex forms',
        'Basic and advanced forms',
        'Static and dynamic forms'
      ],
      correctAnswer: 0,
      explanation: 'Angular supports two types of forms: template-driven forms (using directives in templates) and reactive forms (using FormControl, FormGroup, etc.).',
      category: 'Angular Forms',
      hint: 'One type is template-based, the other is programmatic.',
      skillIds: ['skill-angular-forms'],
      difficultyLevel: 'Easy',
      estimatedTimeSeconds: 60,
      points: 1
    },
    {
      id: 'q27',
      question: 'Which directive is used for two-way data binding in forms?',
      options: [
        'ngModel',
        'ngBind',
        'ngValue',
        'ngControl'
      ],
      correctAnswer: 0,
      explanation: 'ngModel is used for two-way data binding in template-driven forms. It creates a FormControl and binds it to the form element.',
      category: 'Angular Forms',
      hint: 'This directive enables two-way binding in forms.',
      skillIds: ['skill-angular-forms'],
      difficultyLevel: 'Easy',
      estimatedTimeSeconds: 45,
      points: 1
    },
    {
      id: 'q28',
      question: 'What is FormGroup in reactive forms?',
      options: [
        'A single form control',
        'A collection of form controls',
        'A form validation rule',
        'A form submission handler'
      ],
      correctAnswer: 1,
      explanation: 'FormGroup is a collection of form controls that can be managed together. It represents a group of related form fields.',
      category: 'Angular Forms',
      hint: 'FormGroup manages multiple form controls as a group.',
      skillIds: ['skill-angular-forms'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 75,
      points: 1
    },
    {
      id: 'q29',
      question: 'How do you add validation to a reactive form control?',
      options: [
        'Using validators in the FormControl constructor',
        'Using validation directives in the template',
        'Using custom validation functions',
        'All of the above'
      ],
      correctAnswer: 3,
      explanation: 'You can add validation to reactive form controls using validators in the FormControl constructor, validation directives, or custom validation functions.',
      category: 'Angular Forms',
      hint: 'Reactive forms offer multiple ways to add validation.',
      skillIds: ['skill-angular-forms'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },
    {
      id: 'q30',
      question: 'What is the purpose of FormBuilder?',
      options: [
        'To create form controls',
        'To provide a convenient way to create form groups and controls',
        'To validate forms',
        'To submit forms'
      ],
      correctAnswer: 1,
      explanation: 'FormBuilder provides a convenient way to create form groups and controls. It reduces boilerplate code when creating complex forms.',
      category: 'Angular Forms',
      hint: 'FormBuilder simplifies the creation of form structures.',
      skillIds: ['skill-angular-forms'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 75,
      points: 1
    },

    // HTTP Client (Questions 31-35)
    {
      id: 'q31',
      question: 'What is Angular HttpClient used for?',
      options: [
        'To handle form submissions',
        'To make HTTP requests to web services',
        'To manage component state',
        'To handle routing'
      ],
      correctAnswer: 1,
      explanation: 'Angular HttpClient is used to make HTTP requests to web services. It provides a powerful API for handling HTTP operations.',
      category: 'HTTP Client',
      hint: 'HttpClient handles communication with external services.',
      skillIds: ['skill-angular-http'],
      difficultyLevel: 'Easy',
      estimatedTimeSeconds: 60,
      points: 1
    },
    {
      id: 'q32',
      question: 'How do you inject HttpClient into a service?',
      options: [
        'Using @Injectable decorator',
        'Using constructor injection',
        'Using provideHttpClient()',
        'Both B and C'
      ],
      correctAnswer: 3,
      explanation: 'You inject HttpClient using constructor injection and ensure it\'s provided using provideHttpClient() in the application configuration.',
      category: 'HTTP Client',
      hint: 'HttpClient needs to be both injected and provided.',
      skillIds: ['skill-angular-http'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 75,
      points: 1
    },
    {
      id: 'q33',
      question: 'What is an HTTP interceptor?',
      options: [
        'A component that handles HTTP requests',
        'A service that intercepts and transforms HTTP requests and responses',
        'A directive that validates HTTP requests',
        'A pipe that transforms HTTP data'
      ],
      correctAnswer: 1,
      explanation: 'HTTP interceptors are services that intercept and transform HTTP requests and responses. They can add headers, handle errors, or modify data.',
      category: 'HTTP Client',
      hint: 'Interceptors sit between the application and HTTP requests.',
      skillIds: ['skill-angular-http'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },
    {
      id: 'q34',
      question: 'How do you handle errors in HTTP requests?',
      options: [
        'Using try-catch blocks',
        'Using the catchError operator from RxJS',
        'Using error handling in the subscribe method',
        'Both B and C'
      ],
      correctAnswer: 3,
      explanation: 'You can handle HTTP errors using the catchError operator from RxJS or by handling errors in the subscribe method\'s error callback.',
      category: 'HTTP Client',
      hint: 'RxJS provides operators for error handling in HTTP requests.',
      skillIds: ['skill-angular-http'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },
    {
      id: 'q35',
      question: 'What is the purpose of the retry operator in HTTP requests?',
      options: [
        'To validate HTTP responses',
        'To automatically retry failed HTTP requests',
        'To transform HTTP responses',
        'To cancel HTTP requests'
      ],
      correctAnswer: 1,
      explanation: 'The retry operator automatically retries failed HTTP requests a specified number of times, which is useful for handling temporary network issues.',
      category: 'HTTP Client',
      hint: 'Retry helps handle temporary failures in HTTP requests.',
      skillIds: ['skill-angular-http'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 75,
      points: 1
    },

    // Angular Testing (Questions 36-40)
    {
      id: 'q36',
      question: 'What is the primary testing framework used in Angular?',
      options: [
        'Jest',
        'Jasmine',
        'Mocha',
        'Karma'
      ],
      correctAnswer: 1,
      explanation: 'Angular primarily uses Jasmine as the testing framework, along with Karma as the test runner. Jest is also supported.',
      category: 'Angular Testing',
      hint: 'Angular uses Jasmine for the testing framework.',
      skillIds: ['skill-angular-testing'],
      difficultyLevel: 'Easy',
      estimatedTimeSeconds: 60,
      points: 1
    },
    {
      id: 'q37',
      question: 'What is TestBed in Angular testing?',
      options: [
        'A testing utility for creating test modules',
        'A component for testing',
        'A service for testing',
        'A directive for testing'
      ],
      correctAnswer: 0,
      explanation: 'TestBed is a testing utility that creates a test module and provides methods for configuring and creating components for testing.',
      category: 'Angular Testing',
      hint: 'TestBed helps set up the testing environment.',
      skillIds: ['skill-angular-testing'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 75,
      points: 1
    },
    {
      id: 'q38',
      question: 'How do you test a component in Angular?',
      options: [
        'Using TestBed.createComponent()',
        'Using new Component()',
        'Using Component.create()',
        'Using TestBed.configureTestingModule()'
      ],
      correctAnswer: 0,
      explanation: 'You test a component using TestBed.createComponent() which creates a component instance for testing.',
      category: 'Angular Testing',
      hint: 'TestBed provides the method to create components for testing.',
      skillIds: ['skill-angular-testing'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 75,
      points: 1
    },
    {
      id: 'q39',
      question: 'What is the purpose of ComponentFixture in testing?',
      options: [
        'To create test data',
        'To provide access to the component instance and debug element',
        'To mock services',
        'To configure test modules'
      ],
      correctAnswer: 1,
      explanation: 'ComponentFixture provides access to the component instance and debug element, allowing you to interact with and test the component.',
      category: 'Angular Testing',
      hint: 'Fixture provides access to the component and its DOM element.',
      skillIds: ['skill-angular-testing'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },
    {
      id: 'q40',
      question: 'How do you test HTTP requests in Angular?',
      options: [
        'Using HttpClientTestingModule',
        'Using HttpTestingController',
        'Using mock services',
        'All of the above'
      ],
      correctAnswer: 3,
      explanation: 'You can test HTTP requests using HttpClientTestingModule, HttpTestingController, or by creating mock services. All approaches are valid.',
      category: 'Angular Testing',
      hint: 'Angular provides multiple ways to test HTTP functionality.',
      skillIds: ['skill-angular-testing'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },

    // Performance Optimization (Questions 41-45)
    {
      id: 'q41',
      question: 'What is OnPush change detection strategy?',
      options: [
        'A strategy that always checks for changes',
        'A strategy that only checks for changes when inputs change or events occur',
        'A strategy that never checks for changes',
        'A strategy that checks changes randomly'
      ],
      correctAnswer: 1,
      explanation: 'OnPush change detection strategy only checks for changes when inputs change, events occur, or observables emit. It improves performance by reducing unnecessary checks.',
      category: 'Performance Optimization',
      hint: 'OnPush reduces change detection frequency for better performance.',
      skillIds: ['skill-angular-performance'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },
    {
      id: 'q42',
      question: 'What is the purpose of trackBy function in *ngFor?',
      options: [
        'To filter items in the list',
        'To sort items in the list',
        'To help Angular track items for efficient DOM updates',
        'To validate items in the list'
      ],
      correctAnswer: 2,
      explanation: 'The trackBy function helps Angular track items in the list for efficient DOM updates. It prevents unnecessary re-rendering of list items.',
      category: 'Performance Optimization',
      hint: 'trackBy helps Angular identify which items have changed.',
      skillIds: ['skill-angular-performance'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 75,
      points: 1
    },
    {
      id: 'q43',
      question: 'What is lazy loading in Angular?',
      options: [
        'Loading components on demand',
        'Loading modules on demand',
        'Loading services on demand',
        'Loading templates on demand'
      ],
      correctAnswer: 1,
      explanation: 'Lazy loading loads modules on demand, reducing the initial bundle size and improving application startup time.',
      category: 'Performance Optimization',
      hint: 'Lazy loading defers loading until needed.',
      skillIds: ['skill-angular-performance'],
      difficultyLevel: 'Easy',
      estimatedTimeSeconds: 60,
      points: 1
    },
    {
      id: 'q44',
      question: 'What is the purpose of Angular Universal?',
      options: [
        'To create universal components',
        'To enable server-side rendering',
        'To create universal services',
        'To enable universal routing'
      ],
      correctAnswer: 1,
      explanation: 'Angular Universal enables server-side rendering (SSR) of Angular applications, improving initial load performance and SEO.',
      category: 'Performance Optimization',
      hint: 'Universal enables server-side rendering for better performance.',
      skillIds: ['skill-angular-performance'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },
    {
      id: 'q45',
      question: 'What is the purpose of the async pipe?',
      options: [
        'To handle asynchronous operations',
        'To automatically subscribe and unsubscribe from observables',
        'To create asynchronous components',
        'To handle asynchronous routing'
      ],
      correctAnswer: 1,
      explanation: 'The async pipe automatically subscribes to observables and unsubscribes when the component is destroyed, preventing memory leaks.',
      category: 'Performance Optimization',
      hint: 'The async pipe manages subscriptions automatically.',
      skillIds: ['skill-angular-performance'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 75,
      points: 1
    },

    // Server-Side Rendering (Questions 46-50)
    {
      id: 'q46',
      question: 'What is server-side rendering (SSR) in Angular?',
      options: [
        'Rendering components on the client',
        'Rendering components on the server before sending to the client',
        'Rendering components in a service worker',
        'Rendering components in a web worker'
      ],
      correctAnswer: 1,
      explanation: 'SSR renders Angular components on the server before sending the HTML to the client, improving initial load performance and SEO.',
      category: 'Server-Side Rendering',
      hint: 'SSR happens on the server before the page reaches the client.',
      skillIds: ['skill-angular-ssr'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },
    {
      id: 'q47',
      question: 'What is hydration in Angular SSR?',
      options: [
        'The process of adding water to components',
        'The process of making server-rendered content interactive',
        'The process of removing server-rendered content',
        'The process of validating server-rendered content'
      ],
      correctAnswer: 1,
      explanation: 'Hydration is the process of making server-rendered content interactive by attaching event listeners and enabling client-side functionality.',
      category: 'Server-Side Rendering',
      hint: 'Hydration makes static content interactive.',
      skillIds: ['skill-angular-ssr'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    },
    {
      id: 'q48',
      question: 'What is the purpose of Angular Universal?',
      options: [
        'To create universal components',
        'To enable server-side rendering and pre-rendering',
        'To create universal services',
        'To enable universal routing'
      ],
      correctAnswer: 1,
      explanation: 'Angular Universal enables server-side rendering and pre-rendering of Angular applications, improving performance and SEO.',
      category: 'Server-Side Rendering',
      hint: 'Universal provides SSR and pre-rendering capabilities.',
      skillIds: ['skill-angular-ssr'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 75,
      points: 1
    },
    {
      id: 'q49',
      question: 'What is the difference between SSR and pre-rendering?',
      options: [
        'SSR renders on demand, pre-rendering renders at build time',
        'SSR renders at build time, pre-rendering renders on demand',
        'There is no difference',
        'SSR is faster than pre-rendering'
      ],
      correctAnswer: 0,
      explanation: 'SSR renders pages on demand when requested, while pre-rendering generates static HTML files at build time for all routes.',
      category: 'Server-Side Rendering',
      hint: 'SSR is dynamic, pre-rendering is static.',
      skillIds: ['skill-angular-ssr'],
      difficultyLevel: 'Hard',
      estimatedTimeSeconds: 120,
      points: 1
    },
    {
      id: 'q50',
      question: 'What are the benefits of using Angular Universal?',
      options: [
        'Better SEO and faster initial load',
        'Better performance and reduced bundle size',
        'Better accessibility and user experience',
        'All of the above'
      ],
      correctAnswer: 3,
      explanation: 'Angular Universal provides better SEO, faster initial load, better performance, reduced bundle size, better accessibility, and improved user experience.',
      category: 'Server-Side Rendering',
      hint: 'Universal provides multiple benefits for web applications.',
      skillIds: ['skill-angular-ssr'],
      difficultyLevel: 'Medium',
      estimatedTimeSeconds: 90,
      points: 1
    }
  ]
};
