import { TestDto, SkillDto, TestOutlineSectionDto } from '../models/test.model';

// Define skills for Angular 20
export const angular20Skills: SkillDto[] = [
  {
    Id: 'skill-angular-fundamentals',
    Name: 'Angular Fundamentals',
    Description: 'Core Angular concepts including components, modules, services, and dependency injection',
    Category: 'Fundamentals',
    Weight: 10
  },
  {
    Id: 'skill-angular-signals',
    Name: 'Angular Signals',
    Description: 'Understanding of Angular signals, computed values, and reactive programming',
    Category: 'Advanced',
    Weight: 9
  },
  {
    Id: 'skill-angular-control-flow',
    Name: 'Control Flow',
    Description: 'New Angular control flow syntax including @if, @for, and @switch',
    Category: 'Advanced',
    Weight: 8
  },
  {
    Id: 'skill-angular-standalone',
    Name: 'Standalone Components',
    Description: 'Standalone components, bootstrap functions, and modern Angular architecture',
    Category: 'Advanced',
    Weight: 8
  },
  {
    Id: 'skill-angular-routing',
    Name: 'Angular Routing',
    Description: 'Router configuration, guards, resolvers, and lazy loading',
    Category: 'Core',
    Weight: 7
  },
  {
    Id: 'skill-angular-forms',
    Name: 'Angular Forms',
    Description: 'Template-driven and reactive forms, validation, and form controls',
    Category: 'Core',
    Weight: 7
  },
  {
    Id: 'skill-angular-http',
    Name: 'HTTP Client',
    Description: 'HTTP client, interceptors, error handling, and API integration',
    Category: 'Core',
    Weight: 6
  },
  {
    Id: 'skill-angular-testing',
    Name: 'Angular Testing',
    Description: 'Unit testing, integration testing, and testing utilities',
    Category: 'Testing',
    Weight: 6
  },
  {
    Id: 'skill-angular-performance',
    Name: 'Performance Optimization',
    Description: 'Change detection, OnPush strategy, and performance best practices',
    Category: 'Advanced',
    Weight: 5
  },
  {
    Id: 'skill-angular-ssr',
    Name: 'Server-Side Rendering',
    Description: 'Angular Universal, SSR, and hydration',
    Category: 'Advanced',
    Weight: 4
  }
];

// Define test outline
export const angular20Outline: TestOutlineSectionDto[] = [
  {
    Id: 'section-fundamentals',
    Title: 'Angular Fundamentals',
    Description: 'Core Angular concepts and architecture',
    Order: 1,
    QuestionIds: ['q1', 'q2', 'q3', 'q4', 'q5'],
    SkillIds: ['skill-angular-fundamentals'],
    EstimatedTimeMinutes: 10,
    Weight: 20
  },
  {
    Id: 'section-signals',
    Title: 'Angular Signals',
    Description: 'Understanding signals and reactive programming',
    Order: 2,
    QuestionIds: ['q6', 'q7', 'q8', 'q9', 'q10'],
    SkillIds: ['skill-angular-signals'],
    EstimatedTimeMinutes: 10,
    Weight: 20
  },
  {
    Id: 'section-control-flow',
    Title: 'Control Flow',
    Description: 'New control flow syntax and directives',
    Order: 3,
    QuestionIds: ['q11', 'q12', 'q13', 'q14', 'q15'],
    SkillIds: ['skill-angular-control-flow'],
    EstimatedTimeMinutes: 10,
    Weight: 20
  },
  {
    Id: 'section-standalone',
    Title: 'Standalone Components',
    Description: 'Standalone components and modern architecture',
    Order: 4,
    QuestionIds: ['q16', 'q17', 'q18', 'q19', 'q20'],
    SkillIds: ['skill-angular-standalone'],
    EstimatedTimeMinutes: 10,
    Weight: 20
  },
  {
    Id: 'section-routing',
    Title: 'Angular Routing',
    Description: 'Router configuration and navigation',
    Order: 5,
    QuestionIds: ['q21', 'q22', 'q23', 'q24', 'q25'],
    SkillIds: ['skill-angular-routing'],
    EstimatedTimeMinutes: 10,
    Weight: 20
  },
  {
    Id: 'section-forms',
    Title: 'Angular Forms',
    Description: 'Form handling and validation',
    Order: 6,
    QuestionIds: ['q26', 'q27', 'q28', 'q29', 'q30'],
    SkillIds: ['skill-angular-forms'],
    EstimatedTimeMinutes: 10,
    Weight: 20
  },
  {
    Id: 'section-http',
    Title: 'HTTP Client',
    Description: 'API integration and data fetching',
    Order: 7,
    QuestionIds: ['q31', 'q32', 'q33', 'q34', 'q35'],
    SkillIds: ['skill-angular-http'],
    EstimatedTimeMinutes: 10,
    Weight: 20
  },
  {
    Id: 'section-testing',
    Title: 'Angular Testing',
    Description: 'Testing strategies and utilities',
    Order: 8,
    QuestionIds: ['q36', 'q37', 'q38', 'q39', 'q40'],
    SkillIds: ['skill-angular-testing'],
    EstimatedTimeMinutes: 10,
    Weight: 20
  },
  {
    Id: 'section-performance',
    Title: 'Performance Optimization',
    Description: 'Performance best practices and optimization',
    Order: 9,
    QuestionIds: ['q41', 'q42', 'q43', 'q44', 'q45'],
    SkillIds: ['skill-angular-performance'],
    EstimatedTimeMinutes: 10,
    Weight: 20
  },
  {
    Id: 'section-ssr',
    Title: 'Server-Side Rendering',
    Description: 'SSR and Angular Universal',
    Order: 10,
    QuestionIds: ['q46', 'q47', 'q48', 'q49', 'q50'],
    SkillIds: ['skill-angular-ssr'],
    EstimatedTimeMinutes: 10,
    Weight: 20
  }
];

export const angular20Test: TestDto = {
  Id: 'angular-20-practice',
  Title: 'Angular 20 Practice Test',
  Description: 'Comprehensive practice test covering Angular 20 features including signals, control flow, standalone components, and modern Angular development practices.',
  Duration: 90,
  PassingScore: 70,
  Category: 'Angular',
  HasTimer: true,
  Skills: angular20Skills,
  Version: '1.0',
  VersionId: 'angular-20-v1.0',
  TotalPoints: 50,
  AllowPause: true,
  AllowReview: true,
  RandomizeQuestions: false,
  RandomizeOptions: false,
  ShowResultsImmediately: true,
  CertificationLevel: 'Advanced',
  Prerequisites: [],
  Tags: ['Angular', 'Angular 20', 'Frontend', 'JavaScript', 'TypeScript', 'Practice Test'],
  IsFree: true,
  Price: 0,
  Currency: 'USD',
  Outline: angular20Outline,
  QuestionOrdering: {
    Type: 'Outline'
  },
  Questions: [
    // Angular Fundamentals (Questions 1-5)
    {
      Id: 'q1',
      Question: 'What is the primary purpose of Angular components?',
      Options: [
        'To manage application state',
        'To define reusable UI elements with associated logic',
        'To handle HTTP requests',
        'To configure routing'
      ],
      CorrectAnswer: 1,
      AllowMultipleSelection: false,
      Explanation: 'Angular components are the building blocks of Angular applications. They define reusable UI elements with associated logic, templates, and styling.',
      Category: 'Angular Fundamentals',
      Hint: 'Think about what makes up the user interface in Angular applications.',
      SkillIds: ['skill-angular-fundamentals'],
      DifficultyLevel: 'Easy',
      EstimatedTimeSeconds: 60,
      Points: 1
    },
    {
      Id: 'q2',
      Question: 'Which decorator is used to define a component in Angular?',
      Options: [
        '@Injectable',
        '@Component',
        '@Directive',
        '@Pipe'
      ],
      CorrectAnswer: 1,
      AllowMultipleSelection: false,
      Explanation: 'The @Component decorator is used to define Angular components. It provides metadata about the component including its selector, template, and styles.',
      Category: 'Angular Fundamentals',
      Hint: 'Look for the decorator that specifically handles component metadata.',
      SkillIds: ['skill-angular-fundamentals'],
      DifficultyLevel: 'Easy',
      EstimatedTimeSeconds: 45,
      Points: 1
    },
    {
      Id: 'q2b',
      Question: 'Which of the following are valid Angular lifecycle hooks? (Select all that apply)',
      Options: [
        'ngOnInit',
        'ngOnDestroy',
        'ngOnChanges',
        'ngOnMount'
      ],
      CorrectAnswer: [0, 1, 2],
      AllowMultipleSelection: true,
      Explanation: 'ngOnInit, ngOnDestroy, and ngOnChanges are valid Angular lifecycle hooks. ngOnMount is not a valid Angular lifecycle hook.',
      Category: 'Angular Fundamentals',
      Hint: 'Think about the common lifecycle hooks you use in Angular components.',
      SkillIds: ['skill-angular-fundamentals'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 2
    },
    {
      Id: 'q3',
      Question: 'What is dependency injection in Angular?',
      Options: [
        'A way to inject HTML into templates',
        'A design pattern that provides dependencies to a class',
        'A method to inject CSS styles',
        'A way to inject JavaScript into components'
      ],
      CorrectAnswer: 1,
      Explanation: 'Dependency injection is a design pattern where dependencies are provided to a class rather than the class creating them itself. Angular has a built-in DI system.',
      Category: 'Angular Fundamentals',
      Hint: 'Think about how services and other dependencies are provided to components.',
      SkillIds: ['skill-angular-fundamentals'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 75,
      Points: 1
    },
    {
      Id: 'q4',
      Question: 'What is the purpose of Angular modules?',
      Options: [
        'To define component templates',
        'To organize related functionality into cohesive blocks',
        'To handle form validation',
        'To manage HTTP requests'
      ],
      CorrectAnswer: 1,
      Explanation: 'Angular modules (NgModules) organize related functionality into cohesive blocks. They help organize the application into feature areas and provide compilation boundaries.',
      Category: 'Angular Fundamentals',
      Hint: 'Modules help organize and structure Angular applications.',
      SkillIds: ['skill-angular-fundamentals'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },
    {
      Id: 'q5',
      Question: 'Which lifecycle hook is called after Angular initializes the component?',
      Options: [
        'ngOnInit',
        'ngOnChanges',
        'ngOnDestroy',
        'ngAfterViewInit'
      ],
      CorrectAnswer: 0,
      Explanation: 'ngOnInit is called after Angular initializes the component. It\'s the best place to perform initialization logic.',
      Category: 'Angular Fundamentals',
      Hint: 'This hook is called once after the component is initialized.',
      SkillIds: ['skill-angular-fundamentals'],
      DifficultyLevel: 'Easy',
      EstimatedTimeSeconds: 60,
      Points: 1
    },

    // Angular Signals (Questions 6-10)
    {
      Id: 'q6',
      Question: 'What is an Angular signal?',
      Options: [
        'A function that returns a value',
        'A reactive primitive that can hold a value and notify consumers when it changes',
        'A component lifecycle hook',
        'A service method'
      ],
      CorrectAnswer: 1,
      AllowMultipleSelection: false,
      Explanation: 'Angular signals are reactive primitives that can hold a value and notify consumers when it changes. They provide fine-grained reactivity.',
      Category: 'Angular Signals',
      Hint: 'Signals are reactive primitives that notify when values change.',
      SkillIds: ['skill-angular-signals'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },
    {
      Id: 'q6b',
      Question: 'Which of the following are benefits of using Angular signals? (Select all that apply)',
      Options: [
        'Fine-grained reactivity',
        'Better performance with OnPush change detection',
        'Simpler state management',
        'Automatic dependency tracking'
      ],
      CorrectAnswer: [0, 1, 2, 3],
      AllowMultipleSelection: true,
      Explanation: 'All of these are benefits of Angular signals: fine-grained reactivity, better performance with OnPush change detection, simpler state management, and automatic dependency tracking.',
      Category: 'Angular Signals',
      Hint: 'Signals provide many advantages over traditional change detection.',
      SkillIds: ['skill-angular-signals'],
      DifficultyLevel: 'Hard',
      EstimatedTimeSeconds: 120,
      Points: 3
    },
    {
      Id: 'q7',
      Question: 'How do you create a signal in Angular?',
      Options: [
        'new Signal()',
        'signal()',
        'createSignal()',
        'Signal.create()'
      ],
      CorrectAnswer: 1,
      Explanation: 'You create a signal using the signal() function from @angular/core. For example: const count = signal(0);',
      Category: 'Angular Signals',
      Hint: 'The function name is the same as the concept.',
      SkillIds: ['skill-angular-signals'],
      DifficultyLevel: 'Easy',
      EstimatedTimeSeconds: 60,
      Points: 1
    },
    {
      Id: 'q8',
      Question: 'What is a computed signal?',
      Options: [
        'A signal that can be written to',
        'A signal that derives its value from other signals',
        'A signal that never changes',
        'A signal that only works in components'
      ],
      CorrectAnswer: 1,
      Explanation: 'A computed signal derives its value from other signals. It automatically updates when its dependencies change.',
      Category: 'Angular Signals',
      Hint: 'Computed signals derive their values from other signals.',
      SkillIds: ['skill-angular-signals'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 75,
      Points: 1
    },
    {
      Id: 'q9',
      Question: 'How do you update a signal value?',
      Options: [
        'signal.value = newValue',
        'signal.set(newValue)',
        'signal.update(newValue)',
        'Both B and C'
      ],
      CorrectAnswer: 3,
      Explanation: 'You can update a signal using either signal.set(newValue) for direct assignment or signal.update(fn) for updating based on current value.',
      Category: 'Angular Signals',
      Hint: 'There are two main ways to update signal values.',
      SkillIds: ['skill-angular-signals'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },
    {
      Id: 'q10',
      Question: 'What happens when a signal value changes?',
      Options: [
        'Nothing',
        'All components using the signal re-render',
        'Only the signal itself is updated',
        'All computed signals that depend on it are recalculated'
      ],
      CorrectAnswer: 3,
      Explanation: 'When a signal value changes, all computed signals that depend on it are automatically recalculated, providing fine-grained reactivity.',
      Category: 'Angular Signals',
      Hint: 'Signals provide fine-grained reactivity by updating only what depends on them.',
      SkillIds: ['skill-angular-signals'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 75,
      Points: 1
    },

    // Control Flow (Questions 11-15)
    {
      Id: 'q11',
      Question: 'What is the new control flow syntax in Angular 17+?',
      Options: [
        '@if, @for, @switch',
        'ngIf, ngFor, ngSwitch',
        'if, for, switch',
        'v-if, v-for, v-switch'
      ],
      CorrectAnswer: 0,
      Explanation: 'Angular 17+ introduced new control flow syntax using @if, @for, and @switch directives, which are more performant and easier to use.',
      Category: 'Control Flow',
      Hint: 'The new syntax uses @ symbols instead of ng- prefixes.',
      SkillIds: ['skill-angular-control-flow'],
      DifficultyLevel: 'Easy',
      EstimatedTimeSeconds: 60,
      Points: 1
    },
    {
      Id: 'q12',
      Question: 'How do you write a conditional block with the new @if syntax?',
      Options: [
        '@if (condition) { content }',
        '@if condition { content }',
        'if (condition) { content }',
        '@if condition then content'
      ],
      CorrectAnswer: 0,
      Explanation: 'The new @if syntax uses @if (condition) { content } format, which is more readable and performant than the old *ngIf.',
      Category: 'Control Flow',
      Hint: 'The syntax includes parentheses around the condition and curly braces around the content.',
      SkillIds: ['skill-angular-control-flow'],
      DifficultyLevel: 'Easy',
      EstimatedTimeSeconds: 60,
      Points: 1
    },
    {
      Id: 'q13',
      Question: 'What is the syntax for iterating over a collection with @for?',
      Options: [
        '@for (item of items) { content }',
        '@for item in items { content }',
        '@for (item; track item.id) of items { content }',
        'Both A and C'
      ],
      CorrectAnswer: 3,
      Explanation: 'The @for syntax can be written as @for (item of items) { content } or with tracking as @for (item; track item.id) of items { content }.',
      Category: 'Control Flow',
      Hint: 'The @for syntax supports both simple iteration and tracking for performance.',
      SkillIds: ['skill-angular-control-flow'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },
    {
      Id: 'q14',
      Question: 'What is the purpose of the track expression in @for?',
      Options: [
        'To filter items',
        'To sort items',
        'To help Angular track items for efficient DOM updates',
        'To validate items'
      ],
      CorrectAnswer: 2,
      Explanation: 'The track expression helps Angular efficiently track items in the list for optimal DOM updates, similar to trackBy in *ngFor.',
      Category: 'Control Flow',
      Hint: 'Tracking helps with performance by identifying unique items.',
      SkillIds: ['skill-angular-control-flow'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 75,
      Points: 1
    },
    {
      Id: 'q15',
      Question: 'How do you handle empty collections with @for?',
      Options: [
        '@for (item of items) { content } @empty { empty content }',
        '@for (item of items) { content } else { empty content }',
        '@for (item of items) { content } @if (!items.length) { empty content }',
        'You cannot handle empty collections with @for'
      ],
      CorrectAnswer: 0,
      Explanation: 'The @for directive supports an @empty block that renders when the collection is empty: @for (item of items) { content } @empty { empty content }',
      Category: 'Control Flow',
      Hint: 'The @empty block is specifically designed for this purpose.',
      SkillIds: ['skill-angular-control-flow'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },

    // Standalone Components (Questions 16-20)
    {
      Id: 'q16',
      Question: 'What are standalone components in Angular?',
      Options: [
        'Components that work without modules',
        'Components that can be used independently',
        'Components that don\'t need imports',
        'Components that are self-contained and don\'t require NgModules'
      ],
      CorrectAnswer: 3,
      Explanation: 'Standalone components are self-contained components that don\'t require NgModules. They can import their own dependencies directly.',
      Category: 'Standalone Components',
      Hint: 'Standalone components are independent of the module system.',
      SkillIds: ['skill-angular-standalone'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },
    {
      Id: 'q17',
      Question: 'How do you make a component standalone?',
      Options: [
        'Add standalone: true to the component decorator',
        'Add @Standalone() decorator',
        'Remove it from any module',
        'Add standalone: true to the @Component decorator'
      ],
      CorrectAnswer: 3,
      Explanation: 'You make a component standalone by adding standalone: true to the @Component decorator metadata.',
      Category: 'Standalone Components',
      Hint: 'The property is added to the component decorator metadata.',
      SkillIds: ['skill-angular-standalone'],
      DifficultyLevel: 'Easy',
      EstimatedTimeSeconds: 60,
      Points: 1
    },
    {
      Id: 'q18',
      Question: 'How do standalone components import dependencies?',
      Options: [
        'Through the imports array in the component decorator',
        'Through the providers array',
        'Through the declarations array',
        'Through the module system'
      ],
      CorrectAnswer: 0,
      Explanation: 'Standalone components import dependencies through the imports array in the @Component decorator, not through modules.',
      Category: 'Standalone Components',
      Hint: 'Standalone components have their own imports array.',
      SkillIds: ['skill-angular-standalone'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 75,
      Points: 1
    },
    {
      Id: 'q19',
      Question: 'What is the bootstrapApplication function used for?',
      Options: [
        'To start Angular applications with standalone components',
        'To bootstrap regular Angular applications',
        'To configure routing in standalone apps',
        'To set up dependency injection'
      ],
      CorrectAnswer: 0,
      Explanation: 'bootstrapApplication is used to start Angular applications that use standalone components as the root component.',
      Category: 'Standalone Components',
      Hint: 'This function is specifically for applications using standalone components.',
      SkillIds: ['skill-angular-standalone'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },
    {
      Id: 'q20',
      Question: 'Can standalone components be used in regular Angular modules?',
      Options: [
        'No, they are completely separate',
        'Yes, they can be imported into modules',
        'Only if they are declared in the module',
        'Only in standalone applications'
      ],
      CorrectAnswer: 1,
      Explanation: 'Yes, standalone components can be imported into regular Angular modules using the imports array.',
      Category: 'Standalone Components',
      Hint: 'Standalone components are designed to be interoperable with the module system.',
      SkillIds: ['skill-angular-standalone'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 75,
      Points: 1
    },

    // Angular Routing (Questions 21-25)
    {
      Id: 'q21',
      Question: 'What is the purpose of Angular Router?',
      Options: [
        'To manage component lifecycle',
        'To handle navigation between different views in a single-page application',
        'To manage HTTP requests',
        'To handle form validation'
      ],
      CorrectAnswer: 1,
      Explanation: 'Angular Router enables navigation between different views in a single-page application by mapping URLs to components.',
      Category: 'Angular Routing',
      Hint: 'Router handles navigation and URL mapping in SPAs.',
      SkillIds: ['skill-angular-routing'],
      DifficultyLevel: 'Easy',
      EstimatedTimeSeconds: 60,
      Points: 1
    },
    {
      Id: 'q22',
      Question: 'Which directive is used to create navigation links?',
      Options: [
        'routerLink',
        'router-link',
        'navigate',
        'link'
      ],
      CorrectAnswer: 0,
      Explanation: 'The routerLink directive is used to create navigation links in Angular templates. It navigates to the specified route.',
      Category: 'Angular Routing',
      Hint: 'The directive name combines "router" and "link".',
      SkillIds: ['skill-angular-routing'],
      DifficultyLevel: 'Easy',
      EstimatedTimeSeconds: 45,
      Points: 1
    },
    {
      Id: 'q23',
      Question: 'What is a route guard in Angular?',
      Options: [
        'A component that protects routes',
        'A service that controls access to routes',
        'A directive that validates routes',
        'A pipe that transforms route data'
      ],
      CorrectAnswer: 1,
      Explanation: 'Route guards are services that control access to routes. They can prevent navigation, resolve data, or perform other route-related tasks.',
      Category: 'Angular Routing',
      Hint: 'Guards control access and behavior around route navigation.',
      SkillIds: ['skill-angular-routing'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },
    {
      Id: 'q24',
      Question: 'How do you implement lazy loading in Angular routing?',
      Options: [
        'Using loadChildren with a function that returns a module',
        'Using loadComponent with a function that returns a component',
        'Using loadModule in the route configuration',
        'Using lazy: true in the route configuration'
      ],
      CorrectAnswer: 0,
      Explanation: 'Lazy loading is implemented using loadChildren with a function that returns a module. This loads the module only when the route is accessed.',
      Category: 'Angular Routing',
      Hint: 'Lazy loading uses loadChildren with a function that returns a module.',
      SkillIds: ['skill-angular-routing'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },
    {
      Id: 'q25',
      Question: 'What is the purpose of route resolvers?',
      Options: [
        'To validate route parameters',
        'To pre-fetch data before navigating to a route',
        'To protect routes from unauthorized access',
        'To transform route data'
      ],
      CorrectAnswer: 1,
      Explanation: 'Route resolvers pre-fetch data before navigating to a route. They ensure data is available when the component loads.',
      Category: 'Angular Routing',
      Hint: 'Resolvers prepare data before route activation.',
      SkillIds: ['skill-angular-routing'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 75,
      Points: 1
    },

    // Angular Forms (Questions 26-30)
    {
      Id: 'q26',
      Question: 'What are the two types of forms in Angular?',
      Options: [
        'Template-driven and reactive forms',
        'Simple and complex forms',
        'Basic and advanced forms',
        'Static and dynamic forms'
      ],
      CorrectAnswer: 0,
      Explanation: 'Angular supports two types of forms: template-driven forms (using directives in templates) and reactive forms (using FormControl, FormGroup, etc.).',
      Category: 'Angular Forms',
      Hint: 'One type is template-based, the other is programmatic.',
      SkillIds: ['skill-angular-forms'],
      DifficultyLevel: 'Easy',
      EstimatedTimeSeconds: 60,
      Points: 1
    },
    {
      Id: 'q27',
      Question: 'Which directive is used for two-way data binding in forms?',
      Options: [
        'ngModel',
        'ngBind',
        'ngValue',
        'ngControl'
      ],
      CorrectAnswer: 0,
      Explanation: 'ngModel is used for two-way data binding in template-driven forms. It creates a FormControl and binds it to the form element.',
      Category: 'Angular Forms',
      Hint: 'This directive enables two-way binding in forms.',
      SkillIds: ['skill-angular-forms'],
      DifficultyLevel: 'Easy',
      EstimatedTimeSeconds: 45,
      Points: 1
    },
    {
      Id: 'q28',
      Question: 'What is FormGroup in reactive forms?',
      Options: [
        'A single form control',
        'A collection of form controls',
        'A form validation rule',
        'A form submission handler'
      ],
      CorrectAnswer: 1,
      Explanation: 'FormGroup is a collection of form controls that can be managed together. It represents a group of related form fields.',
      Category: 'Angular Forms',
      Hint: 'FormGroup manages multiple form controls as a group.',
      SkillIds: ['skill-angular-forms'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 75,
      Points: 1
    },
    {
      Id: 'q29',
      Question: 'How do you add validation to a reactive form control?',
      Options: [
        'Using validators in the FormControl constructor',
        'Using validation directives in the template',
        'Using custom validation functions',
        'All of the above'
      ],
      CorrectAnswer: 3,
      Explanation: 'You can add validation to reactive form controls using validators in the FormControl constructor, validation directives, or custom validation functions.',
      Category: 'Angular Forms',
      Hint: 'Reactive forms offer multiple ways to add validation.',
      SkillIds: ['skill-angular-forms'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },
    {
      Id: 'q30',
      Question: 'What is the purpose of FormBuilder?',
      Options: [
        'To create form controls',
        'To provide a convenient way to create form groups and controls',
        'To validate forms',
        'To submit forms'
      ],
      CorrectAnswer: 1,
      Explanation: 'FormBuilder provides a convenient way to create form groups and controls. It reduces boilerplate code when creating complex forms.',
      Category: 'Angular Forms',
      Hint: 'FormBuilder simplifies the creation of form structures.',
      SkillIds: ['skill-angular-forms'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 75,
      Points: 1
    },

    // HTTP Client (Questions 31-35)
    {
      Id: 'q31',
      Question: 'What is Angular HttpClient used for?',
      Options: [
        'To handle form submissions',
        'To make HTTP requests to web services',
        'To manage component state',
        'To handle routing'
      ],
      CorrectAnswer: 1,
      Explanation: 'Angular HttpClient is used to make HTTP requests to web services. It provides a powerful API for handling HTTP operations.',
      Category: 'HTTP Client',
      Hint: 'HttpClient handles communication with external services.',
      SkillIds: ['skill-angular-http'],
      DifficultyLevel: 'Easy',
      EstimatedTimeSeconds: 60,
      Points: 1
    },
    {
      Id: 'q32',
      Question: 'How do you inject HttpClient into a service?',
      Options: [
        'Using @Injectable decorator',
        'Using constructor injection',
        'Using provideHttpClient()',
        'Both B and C'
      ],
      CorrectAnswer: 3,
      Explanation: 'You inject HttpClient using constructor injection and ensure it\'s provided using provideHttpClient() in the application configuration.',
      Category: 'HTTP Client',
      Hint: 'HttpClient needs to be both injected and provided.',
      SkillIds: ['skill-angular-http'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 75,
      Points: 1
    },
    {
      Id: 'q33',
      Question: 'What is an HTTP interceptor?',
      Options: [
        'A component that handles HTTP requests',
        'A service that intercepts and transforms HTTP requests and responses',
        'A directive that validates HTTP requests',
        'A pipe that transforms HTTP data'
      ],
      CorrectAnswer: 1,
      Explanation: 'HTTP interceptors are services that intercept and transform HTTP requests and responses. They can add headers, handle errors, or modify data.',
      Category: 'HTTP Client',
      Hint: 'Interceptors sit between the application and HTTP requests.',
      SkillIds: ['skill-angular-http'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },
    {
      Id: 'q34',
      Question: 'How do you handle errors in HTTP requests?',
      Options: [
        'Using try-catch blocks',
        'Using the catchError operator from RxJS',
        'Using error handling in the subscribe method',
        'Both B and C'
      ],
      CorrectAnswer: 3,
      Explanation: 'You can handle HTTP errors using the catchError operator from RxJS or by handling errors in the subscribe method\'s error callback.',
      Category: 'HTTP Client',
      Hint: 'RxJS provides operators for error handling in HTTP requests.',
      SkillIds: ['skill-angular-http'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },
    {
      Id: 'q35',
      Question: 'What is the purpose of the retry operator in HTTP requests?',
      Options: [
        'To validate HTTP responses',
        'To automatically retry failed HTTP requests',
        'To transform HTTP responses',
        'To cancel HTTP requests'
      ],
      CorrectAnswer: 1,
      Explanation: 'The retry operator automatically retries failed HTTP requests a specified number of times, which is useful for handling temporary network issues.',
      Category: 'HTTP Client',
      Hint: 'Retry helps handle temporary failures in HTTP requests.',
      SkillIds: ['skill-angular-http'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 75,
      Points: 1
    },

    // Angular Testing (Questions 36-40)
    {
      Id: 'q36',
      Question: 'What is the primary testing framework used in Angular?',
      Options: [
        'Jest',
        'Jasmine',
        'Mocha',
        'Karma'
      ],
      CorrectAnswer: 1,
      Explanation: 'Angular primarily uses Jasmine as the testing framework, along with Karma as the test runner. Jest is also supported.',
      Category: 'Angular Testing',
      Hint: 'Angular uses Jasmine for the testing framework.',
      SkillIds: ['skill-angular-testing'],
      DifficultyLevel: 'Easy',
      EstimatedTimeSeconds: 60,
      Points: 1
    },
    {
      Id: 'q37',
      Question: 'What is TestBed in Angular testing?',
      Options: [
        'A testing utility for creating test modules',
        'A component for testing',
        'A service for testing',
        'A directive for testing'
      ],
      CorrectAnswer: 0,
      Explanation: 'TestBed is a testing utility that creates a test module and provides methods for configuring and creating components for testing.',
      Category: 'Angular Testing',
      Hint: 'TestBed helps set up the testing environment.',
      SkillIds: ['skill-angular-testing'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 75,
      Points: 1
    },
    {
      Id: 'q38',
      Question: 'How do you test a component in Angular?',
      Options: [
        'Using TestBed.createComponent()',
        'Using new Component()',
        'Using Component.create()',
        'Using TestBed.configureTestingModule()'
      ],
      CorrectAnswer: 0,
      Explanation: 'You test a component using TestBed.createComponent() which creates a component instance for testing.',
      Category: 'Angular Testing',
      Hint: 'TestBed provides the method to create components for testing.',
      SkillIds: ['skill-angular-testing'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 75,
      Points: 1
    },
    {
      Id: 'q39',
      Question: 'What is the purpose of ComponentFixture in testing?',
      Options: [
        'To create test data',
        'To provide access to the component instance and debug element',
        'To mock services',
        'To configure test modules'
      ],
      CorrectAnswer: 1,
      Explanation: 'ComponentFixture provides access to the component instance and debug element, allowing you to interact with and test the component.',
      Category: 'Angular Testing',
      Hint: 'Fixture provides access to the component and its DOM element.',
      SkillIds: ['skill-angular-testing'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },
    {
      Id: 'q40',
      Question: 'How do you test HTTP requests in Angular?',
      Options: [
        'Using HttpClientTestingModule',
        'Using HttpTestingController',
        'Using mock services',
        'All of the above'
      ],
      CorrectAnswer: 3,
      Explanation: 'You can test HTTP requests using HttpClientTestingModule, HttpTestingController, or by creating mock services. All approaches are valid.',
      Category: 'Angular Testing',
      Hint: 'Angular provides multiple ways to test HTTP functionality.',
      SkillIds: ['skill-angular-testing'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },

    // Performance Optimization (Questions 41-45)
    {
      Id: 'q41',
      Question: 'What is OnPush change detection strategy?',
      Options: [
        'A strategy that always checks for changes',
        'A strategy that only checks for changes when inputs change or events occur',
        'A strategy that never checks for changes',
        'A strategy that checks changes randomly'
      ],
      CorrectAnswer: 1,
      Explanation: 'OnPush change detection strategy only checks for changes when inputs change, events occur, or observables emit. It improves performance by reducing unnecessary checks.',
      Category: 'Performance Optimization',
      Hint: 'OnPush reduces change detection frequency for better performance.',
      SkillIds: ['skill-angular-performance'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },
    {
      Id: 'q42',
      Question: 'What is the purpose of trackBy function in *ngFor?',
      Options: [
        'To filter items in the list',
        'To sort items in the list',
        'To help Angular track items for efficient DOM updates',
        'To validate items in the list'
      ],
      CorrectAnswer: 2,
      Explanation: 'The trackBy function helps Angular track items in the list for efficient DOM updates. It prevents unnecessary re-rendering of list items.',
      Category: 'Performance Optimization',
      Hint: 'trackBy helps Angular identify which items have changed.',
      SkillIds: ['skill-angular-performance'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 75,
      Points: 1
    },
    {
      Id: 'q43',
      Question: 'What is lazy loading in Angular?',
      Options: [
        'Loading components on demand',
        'Loading modules on demand',
        'Loading services on demand',
        'Loading templates on demand'
      ],
      CorrectAnswer: 1,
      Explanation: 'Lazy loading loads modules on demand, reducing the initial bundle size and improving application startup time.',
      Category: 'Performance Optimization',
      Hint: 'Lazy loading defers loading until needed.',
      SkillIds: ['skill-angular-performance'],
      DifficultyLevel: 'Easy',
      EstimatedTimeSeconds: 60,
      Points: 1
    },
    {
      Id: 'q44',
      Question: 'What is the purpose of Angular Universal?',
      Options: [
        'To create universal components',
        'To enable server-side rendering',
        'To create universal services',
        'To enable universal routing'
      ],
      CorrectAnswer: 1,
      Explanation: 'Angular Universal enables server-side rendering (SSR) of Angular applications, improving initial load performance and SEO.',
      Category: 'Performance Optimization',
      Hint: 'Universal enables server-side rendering for better performance.',
      SkillIds: ['skill-angular-performance'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },
    {
      Id: 'q45',
      Question: 'What is the purpose of the async pipe?',
      Options: [
        'To handle asynchronous operations',
        'To automatically subscribe and unsubscribe from observables',
        'To create asynchronous components',
        'To handle asynchronous routing'
      ],
      CorrectAnswer: 1,
      Explanation: 'The async pipe automatically subscribes to observables and unsubscribes when the component is destroyed, preventing memory leaks.',
      Category: 'Performance Optimization',
      Hint: 'The async pipe manages subscriptions automatically.',
      SkillIds: ['skill-angular-performance'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 75,
      Points: 1
    },

    // Server-Side Rendering (Questions 46-50)
    {
      Id: 'q46',
      Question: 'What is server-side rendering (SSR) in Angular?',
      Options: [
        'Rendering components on the client',
        'Rendering components on the server before sending to the client',
        'Rendering components in a service worker',
        'Rendering components in a web worker'
      ],
      CorrectAnswer: 1,
      Explanation: 'SSR renders Angular components on the server before sending the HTML to the client, improving initial load performance and SEO.',
      Category: 'Server-Side Rendering',
      Hint: 'SSR happens on the server before the page reaches the client.',
      SkillIds: ['skill-angular-ssr'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },
    {
      Id: 'q47',
      Question: 'What is hydration in Angular SSR?',
      Options: [
        'The process of adding water to components',
        'The process of making server-rendered content interactive',
        'The process of removing server-rendered content',
        'The process of validating server-rendered content'
      ],
      CorrectAnswer: 1,
      Explanation: 'Hydration is the process of making server-rendered content interactive by attaching event listeners and enabling client-side functionality.',
      Category: 'Server-Side Rendering',
      Hint: 'Hydration makes static content interactive.',
      SkillIds: ['skill-angular-ssr'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    },
    {
      Id: 'q48',
      Question: 'What is the purpose of Angular Universal?',
      Options: [
        'To create universal components',
        'To enable server-side rendering and pre-rendering',
        'To create universal services',
        'To enable universal routing'
      ],
      CorrectAnswer: 1,
      Explanation: 'Angular Universal enables server-side rendering and pre-rendering of Angular applications, improving performance and SEO.',
      Category: 'Server-Side Rendering',
      Hint: 'Universal provides SSR and pre-rendering capabilities.',
      SkillIds: ['skill-angular-ssr'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 75,
      Points: 1
    },
    {
      Id: 'q49',
      Question: 'What is the difference between SSR and pre-rendering?',
      Options: [
        'SSR renders on demand, pre-rendering renders at build time',
        'SSR renders at build time, pre-rendering renders on demand',
        'There is no difference',
        'SSR is faster than pre-rendering'
      ],
      CorrectAnswer: 0,
      Explanation: 'SSR renders pages on demand when requested, while pre-rendering generates static HTML files at build time for all routes.',
      Category: 'Server-Side Rendering',
      Hint: 'SSR is dynamic, pre-rendering is static.',
      SkillIds: ['skill-angular-ssr'],
      DifficultyLevel: 'Hard',
      EstimatedTimeSeconds: 120,
      Points: 1
    },
    {
      Id: 'q50',
      Question: 'What are the benefits of using Angular Universal?',
      Options: [
        'Better SEO and faster initial load',
        'Better performance and reduced bundle size',
        'Better accessibility and user experience',
        'All of the above'
      ],
      CorrectAnswer: 3,
      Explanation: 'Angular Universal provides better SEO, faster initial load, better performance, reduced bundle size, better accessibility, and improved user experience.',
      Category: 'Server-Side Rendering',
      Hint: 'Universal provides multiple benefits for web applications.',
      SkillIds: ['skill-angular-ssr'],
      DifficultyLevel: 'Medium',
      EstimatedTimeSeconds: 90,
      Points: 1
    }
  ]
};
