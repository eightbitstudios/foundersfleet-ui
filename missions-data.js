// Mission data structure with prerequisites and dependencies
const missionData = {
    // Mission definitions
    missions: {
        'validate-idea': {
            id: 'validate-idea',
            title: '20 Customer Problem Interviews',
            description: 'Talk to 20 potential customers about their problems in 5 days',
            epic: 'starting-out',
            category: 'business',
            difficulty: 'easy',
            timeEstimate: '5 days',
            cost: 0,
            icon: 'fa-lightbulb',
            prerequisites: [],
            unlocks: ['customer-interviews', 'landing-page', 'build-mvp'],
            steps: [
                {
                    title: 'Define your hypothesis',
                    description: 'Write down what problem you solve and for whom'
                },
                {
                    title: 'Find 20 potential customers',
                    description: 'Use LinkedIn, Twitter, and communities to find your target audience'
                },
                {
                    title: 'Create interview script',
                    description: 'Prepare open-ended questions about their problems'
                },
                {
                    title: 'Conduct interviews',
                    description: 'Talk to at least 20 people and take detailed notes'
                },
                {
                    title: 'Analyze feedback',
                    description: 'Look for patterns and validate your assumptions'
                }
            ],
            resources: [
                { type: 'template', title: 'Customer Interview Template', url: '#' },
                { type: 'guide', title: 'The Mom Test Book', url: '#' },
                { type: 'video', title: 'How to Validate Ideas', url: '#' }
            ]
        },
        
        'competitor-analysis': {
            id: 'competitor-analysis',
            title: 'Competitive Landscape Analysis',
            description: 'Research 10 competitors and identify your unique angle',
            epic: 'idea-validation',
            category: 'business',
            difficulty: 'easy',
            timeEstimate: '1 week',
            cost: 0,
            icon: 'fa-search',
            prerequisites: [],
            unlocks: ['positioning-strategy', 'pricing-strategy'],
            steps: [
                {
                    title: 'List direct competitors',
                    description: 'Find 5-7 companies solving the same problem'
                },
                {
                    title: 'Analyze indirect competitors',
                    description: 'Identify 3-5 alternative solutions customers use'
                },
                {
                    title: 'Create comparison matrix',
                    description: 'Compare features, pricing, and target markets'
                },
                {
                    title: 'Identify gaps and opportunities',
                    description: 'Find underserved segments or missing features'
                },
                {
                    title: 'Define your differentiation',
                    description: 'Articulate your unique value proposition'
                }
            ],
            resources: [
                { type: 'template', title: 'Competitive Analysis Template', url: '#' },
                { type: 'tool', title: 'SimilarWeb for traffic analysis', url: '#' },
                { type: 'guide', title: 'Blue Ocean Strategy', url: '#' }
            ]
        },
        
        'market-research': {
            id: 'market-research',
            title: 'TAM/SAM/SOM Market Analysis',
            description: 'Calculate your total addressable market and growth potential',
            epic: 'idea-validation',
            category: 'business',
            difficulty: 'medium',
            timeEstimate: '3-4 days',
            cost: 0,
            icon: 'fa-chart-pie',
            prerequisites: [],
            unlocks: ['pitch-deck', 'financial-model'],
            steps: [
                {
                    title: 'Calculate Total Addressable Market',
                    description: 'Estimate the total market size for your solution'
                },
                {
                    title: 'Define Serviceable Addressable Market',
                    description: 'Narrow down to your reachable market segment'
                },
                {
                    title: 'Project Serviceable Obtainable Market',
                    description: 'Estimate realistic market share in 3-5 years'
                },
                {
                    title: 'Research industry growth rates',
                    description: 'Find data on market trends and projections'
                },
                {
                    title: 'Create market opportunity slide',
                    description: 'Visualize your market analysis for pitches'
                }
            ],
            resources: [
                { type: 'template', title: 'TAM SAM SOM Calculator', url: '#' },
                { type: 'database', title: 'Statista Industry Reports', url: '#' },
                { type: 'guide', title: 'Market Sizing Best Practices', url: '#' }
            ]
        },
        
        'problem-survey': {
            id: 'problem-survey',
            title: 'Problem Validation Survey',
            description: 'Survey 50+ people about their problems using free tools',
            epic: 'idea-validation',
            category: 'business',
            difficulty: 'easy',
            timeEstimate: '3-4 days',
            cost: 0,
            icon: 'fa-poll',
            prerequisites: [],
            unlocks: ['customer-interviews', 'solution-design'],
            steps: [
                {
                    title: 'Create survey in Google Forms',
                    description: 'Free tool with unlimited responses and basic analytics'
                },
                {
                    title: 'Focus on problem questions',
                    description: 'How do they currently solve this? How painful is it? How often?'
                },
                {
                    title: 'Add ranking questions',
                    description: 'Have them rank problem severity and willingness to pay'
                },
                {
                    title: 'Distribute to target audience',
                    description: 'Share in relevant Slack groups, Reddit, LinkedIn, Facebook groups'
                },
                {
                    title: 'Analyze 50+ responses',
                    description: 'Look for patterns in pain points and current solutions'
                }
            ],
            resources: [
                { type: 'template', title: 'Problem Survey Template', url: '#' },
                { type: 'tool', title: 'Google Forms', url: '#' },
                { type: 'tool', title: 'Tally (alternative)', url: '#' }
            ]
        },
        
        'no-code-prototype': {
            id: 'no-code-prototype',
            title: 'Build No-Code MVP',
            description: 'Create a functional prototype without writing code',
            epic: 'idea-validation',
            category: 'technical',
            difficulty: 'medium',
            timeEstimate: '1 week',
            cost: 0,
            icon: 'fa-puzzle-piece',
            prerequisites: ['validate-idea'],
            unlocks: ['user-testing', 'iterate-mvp'],
            steps: [
                {
                    title: 'Choose no-code platform',
                    description: 'Bubble for web apps, Adalo for mobile, Glide for data apps'
                },
                {
                    title: 'Map core user flow',
                    description: 'Focus on ONE main action users need to complete'
                },
                {
                    title: 'Build minimal version',
                    description: 'Just enough to test the core value proposition'
                },
                {
                    title: 'Add basic analytics',
                    description: 'Track user actions to understand behavior'
                },
                {
                    title: 'Test with 10 users',
                    description: 'Watch them use it and gather feedback'
                }
            ],
            resources: [
                { type: 'tool', title: 'Bubble.io', url: '#' },
                { type: 'tool', title: 'Adalo', url: '#' },
                { type: 'video', title: 'No-Code MVP Tutorial', url: '#' }
            ]
        },
        
        'social-media-test': {
            id: 'social-media-test',
            title: 'Social Media Interest Test',
            description: 'Test your idea with low-cost social media experiments',
            epic: 'idea-validation',
            category: 'marketing',
            difficulty: 'easy',
            timeEstimate: '2-3 days',
            cost: 50,
            icon: 'fa-share-alt',
            prerequisites: [],
            unlocks: ['content-strategy', 'community-building'],
            steps: [
                {
                    title: 'Create problem-focused posts',
                    description: 'Write 3 posts about the problem (not your solution)'
                },
                {
                    title: 'Post in relevant groups',
                    description: 'Share in LinkedIn groups, Reddit, Facebook groups'
                },
                {
                    title: 'Run $50 Facebook/Instagram test',
                    description: 'Target your exact audience with interest-based ads'
                },
                {
                    title: 'Track engagement metrics',
                    description: 'Comments, shares, and click-through rates'
                },
                {
                    title: 'DM engaged users',
                    description: 'Reach out to commenters for deeper conversations'
                }
            ],
            resources: [
                { type: 'guide', title: 'Facebook Ads for Validation', url: '#' },
                { type: 'template', title: 'Social Post Templates', url: '#' },
                { type: 'tool', title: 'Canva for graphics', url: '#' }
            ]
        },
        
        'customer-interviews': {
            id: 'customer-interviews',
            title: 'Customer Interview Sprint',
            description: 'Deep dive conversations with 10 target customers',
            epic: 'first-customers',
            category: 'business',
            difficulty: 'medium',
            timeEstimate: '2 weeks',
            cost: 0,
            icon: 'fa-comments',
            prerequisites: ['validate-idea'],
            unlocks: ['build-mvp', 'email-list'],
            steps: [
                {
                    title: 'Refine target customer profile',
                    description: 'Based on initial validation, narrow your focus'
                },
                {
                    title: 'Schedule 10 interviews',
                    description: 'Aim for 30-45 minute conversations'
                },
                {
                    title: 'Prepare deep-dive questions',
                    description: 'Focus on understanding their workflow and pain points'
                },
                {
                    title: 'Conduct and record interviews',
                    description: 'Get permission to record for later analysis'
                },
                {
                    title: 'Synthesize insights',
                    description: 'Create a customer insights document'
                }
            ]
        },
        
        'apple-dev-account': {
            id: 'apple-dev-account',
            title: 'Set up Apple Developer Account',
            description: 'Get approved for iOS app distribution',
            epic: 'launch-product',
            category: 'technical',
            difficulty: 'high',
            timeEstimate: '2-3 weeks',
            cost: 99,
            icon: 'fa-mobile-alt',
            prerequisites: ['business-entity'],
            unlocks: ['app-store-listing', 'push-notifications'],
            steps: [
                {
                    title: 'Get a DUNS Number',
                    description: 'Register with Dun & Bradstreet for business verification'
                },
                {
                    title: 'Create Apple ID for Business',
                    description: 'Set up a dedicated Apple ID using your business email'
                },
                {
                    title: 'Submit Verification Documents',
                    description: 'Upload business registration and identification'
                },
                {
                    title: 'Wait for Verification',
                    description: 'Apple reviews your application (5-7 business days)'
                },
                {
                    title: 'Complete Payment & Setup',
                    description: 'Pay annual fee and configure account settings'
                }
            ]
        },
        
        'launch-product-hunt': {
            id: 'launch-product-hunt',
            title: 'Launch on Product Hunt',
            description: 'Complete playbook for a successful Product Hunt launch',
            epic: 'first-customers',
            category: 'marketing',
            difficulty: 'medium',
            timeEstimate: '2 weeks prep',
            cost: 0,
            icon: 'fa-rocket',
            prerequisites: ['landing-page', 'build-mvp'],
            unlocks: ['pr-outreach', 'content-marketing'],
            steps: [
                {
                    title: 'Build your hunter network',
                    description: 'Connect with 50+ active hunters 2 weeks before'
                },
                {
                    title: 'Prepare assets',
                    description: 'Create gallery images, GIF, and compelling tagline'
                },
                {
                    title: 'Line up supporters',
                    description: 'Get 20-30 people committed to upvote at launch'
                },
                {
                    title: 'Launch at 12:01 AM PST',
                    description: 'Time your launch perfectly for maximum exposure'
                },
                {
                    title: 'Engage all day',
                    description: 'Respond to every comment and keep momentum'
                }
            ]
        },
        
        'analytics-setup': {
            id: 'analytics-setup',
            title: 'Set up Analytics Dashboard',
            description: 'Implement comprehensive analytics to track user behavior',
            epic: 'first-customers',
            category: 'technical',
            difficulty: 'easy',
            timeEstimate: '3 hours',
            cost: 0,
            icon: 'fa-chart-line',
            prerequisites: ['landing-page'],
            unlocks: ['conversion-optimization', 'ab-testing'],
            steps: [
                {
                    title: 'Set up Google Analytics 4',
                    description: 'Create property and install tracking code'
                },
                {
                    title: 'Configure conversion events',
                    description: 'Track signups, purchases, and key actions'
                },
                {
                    title: 'Implement Mixpanel or Amplitude',
                    description: 'Add product analytics for user behavior'
                },
                {
                    title: 'Set up dashboards',
                    description: 'Create custom reports for key metrics'
                },
                {
                    title: 'Test and verify',
                    description: 'Ensure all events are tracking correctly'
                }
            ]
        },
        
        'business-entity': {
            id: 'business-entity',
            title: 'Form a Corporate Entity',
            description: 'Set up the right legal structure for your business',
            epic: 'operations-legal',
            category: 'legal',
            difficulty: 'medium',
            timeEstimate: '1 week',
            cost: 500,
            icon: 'fa-shield-alt',
            prerequisites: [],
            unlocks: ['apple-dev-account', 'stripe-setup', 'bank-account'],
            steps: [
                {
                    title: 'Research entity types',
                    description: 'Compare LLC, C-Corp, S-Corp for your situation'
                },
                {
                    title: 'Choose jurisdiction',
                    description: 'Delaware, home state, or other considerations'
                },
                {
                    title: 'File formation documents',
                    description: 'Submit articles of incorporation/organization'
                },
                {
                    title: 'Get EIN from IRS',
                    description: 'Apply for Employer Identification Number'
                },
                {
                    title: 'Create operating agreement',
                    description: 'Define ownership, roles, and decision-making'
                }
            ]
        },
        
        'product-requirements-doc': {
            id: 'product-requirements-doc',
            title: 'Create Product Requirements Doc',
            description: 'Define what you\'re building with clear specifications',
            epic: 'mvp-development',
            category: 'business',
            difficulty: 'medium',
            timeEstimate: '2-3 days',
            cost: 0,
            icon: 'fa-file-alt',
            prerequisites: ['validate-idea'],
            unlocks: ['choose-tech-stack', 'design-mockups'],
            steps: [
                {
                    title: 'Define user personas',
                    description: 'Document your target users and their needs'
                },
                {
                    title: 'List core features',
                    description: 'Prioritize must-have vs nice-to-have features'
                },
                {
                    title: 'Create user stories',
                    description: 'Write "As a user, I want to..." scenarios'
                },
                {
                    title: 'Define success metrics',
                    description: 'How will you measure if the MVP works?'
                },
                {
                    title: 'Set scope and timeline',
                    description: 'What\'s in v1.0 and what comes later'
                }
            ],
            resources: [
                { type: 'template', title: 'PRD Template', url: '#' },
                { type: 'guide', title: 'Writing Effective User Stories', url: '#' },
                { type: 'example', title: 'Sample PRD from Airbnb', url: '#' }
            ]
        },
        
        'choose-tech-stack': {
            id: 'choose-tech-stack',
            title: 'Choose Your Tech Stack',
            description: 'Select the right technologies for your MVP',
            epic: 'mvp-development',
            category: 'technical',
            difficulty: 'medium',
            timeEstimate: '1-2 days',
            cost: 0,
            icon: 'fa-layer-group',
            prerequisites: ['product-requirements-doc'],
            unlocks: ['dev-environment-setup', 'github-setup'],
            steps: [
                {
                    title: 'Assess technical requirements',
                    description: 'Mobile vs web, real-time needs, scale expectations'
                },
                {
                    title: 'Evaluate team skills',
                    description: 'What does your team already know?'
                },
                {
                    title: 'Research popular stacks',
                    description: 'MEAN, MERN, JAMstack, Rails, Django, etc.'
                },
                {
                    title: 'Consider time-to-market',
                    description: 'Balance ideal tech with speed of development'
                },
                {
                    title: 'Document decision',
                    description: 'Record choices and reasoning for future team'
                }
            ],
            resources: [
                { type: 'guide', title: 'Tech Stack Decision Matrix', url: '#' },
                { type: 'tool', title: 'StackShare - See what others use', url: '#' },
                { type: 'article', title: 'MVP Tech Stack Guide', url: '#' }
            ]
        },
        
        'design-mockups': {
            id: 'design-mockups',
            title: 'Design UI/UX Mockups',
            description: 'Create visual designs for your MVP',
            epic: 'mvp-development',
            category: 'design',
            difficulty: 'medium',
            timeEstimate: '1 week',
            cost: 0,
            icon: 'fa-paint-brush',
            prerequisites: ['product-requirements-doc'],
            unlocks: ['build-mvp', 'user-testing'],
            steps: [
                {
                    title: 'Create wireframes',
                    description: 'Sketch basic layouts for each screen'
                },
                {
                    title: 'Design user flows',
                    description: 'Map how users navigate through tasks'
                },
                {
                    title: 'Build interactive prototype',
                    description: 'Use Figma or similar to make clickable mockups'
                },
                {
                    title: 'Test with 5 users',
                    description: 'Get feedback before writing any code'
                },
                {
                    title: 'Create design system',
                    description: 'Document colors, fonts, and components'
                }
            ],
            resources: [
                { type: 'tool', title: 'Figma (free)', url: '#' },
                { type: 'template', title: 'Mobile UI Kit', url: '#' },
                { type: 'guide', title: 'Design Sprint Process', url: '#' }
            ]
        },
        
        'dev-environment-setup': {
            id: 'dev-environment-setup',
            title: 'Set Up Development Environment',
            description: 'Configure your local dev setup and tools',
            epic: 'mvp-development',
            category: 'technical',
            difficulty: 'easy',
            timeEstimate: '4-6 hours',
            cost: 0,
            icon: 'fa-laptop-code',
            prerequisites: ['choose-tech-stack'],
            unlocks: ['github-setup', 'build-mvp'],
            steps: [
                {
                    title: 'Install required software',
                    description: 'IDE, runtime environments, package managers'
                },
                {
                    title: 'Configure development tools',
                    description: 'Set up linting, formatting, debugging'
                },
                {
                    title: 'Set up local database',
                    description: 'Install and configure your database system'
                },
                {
                    title: 'Create project structure',
                    description: 'Initialize project with proper folder organization'
                },
                {
                    title: 'Test hello world',
                    description: 'Ensure everything runs locally'
                }
            ],
            resources: [
                { type: 'guide', title: 'Dev Environment Best Practices', url: '#' },
                { type: 'tool', title: 'VS Code', url: '#' },
                { type: 'checklist', title: 'Setup Checklist', url: '#' }
            ]
        },
        
        'build-mvp': {
            id: 'build-mvp',
            title: 'Build Your MVP',
            description: 'Code and launch your minimum viable product',
            epic: 'mvp-development',
            category: 'technical',
            difficulty: 'high',
            timeEstimate: '2-4 weeks',
            cost: 0,
            icon: 'fa-hammer',
            prerequisites: ['dev-environment-setup', 'design-mockups'],
            unlocks: ['user-testing', 'launch-product-hunt', 'analytics-setup'],
            steps: [
                {
                    title: 'Build core feature only',
                    description: 'Focus on the ONE thing that validates your idea'
                },
                {
                    title: 'Implement basic auth',
                    description: 'User signup and login functionality'
                },
                {
                    title: 'Create data models',
                    description: 'Database schema for core functionality'
                },
                {
                    title: 'Build responsive UI',
                    description: 'Works on mobile and desktop'
                },
                {
                    title: 'Deploy to production',
                    description: 'Get it live on real servers'
                }
            ],
            resources: [
                { type: 'guide', title: 'MVP Development Guide', url: '#' },
                { type: 'tool', title: 'Deployment Platforms', url: '#' },
                { type: 'checklist', title: 'Launch Checklist', url: '#' }
            ]
        },
        
        'stripe-setup': {
            id: 'stripe-setup',
            title: 'Set up Stripe Payments',
            description: 'Accept payments and manage subscriptions',
            epic: 'first-customers',
            category: 'technical',
            difficulty: 'medium',
            timeEstimate: '2-3 hours',
            cost: 0,
            icon: 'fa-credit-card',
            prerequisites: ['business-entity', 'bank-account'],
            unlocks: ['subscription-model', 'payment-analytics'],
            steps: [
                {
                    title: 'Create Stripe account',
                    description: 'Sign up with business details'
                },
                {
                    title: 'Verify business',
                    description: 'Submit required KYC documents'
                },
                {
                    title: 'Integrate Stripe SDK',
                    description: 'Add Stripe to your application'
                },
                {
                    title: 'Set up products and pricing',
                    description: 'Configure your payment options'
                },
                {
                    title: 'Test payment flows',
                    description: 'Use test cards to verify everything works'
                }
            ]
        },
        
        'github-setup': {
            id: 'github-setup',
            title: 'Set up GitHub Repository',
            description: 'Configure professional development workflow',
            epic: 'starting-out',
            category: 'technical',
            difficulty: 'easy',
            timeEstimate: '2 hours',
            cost: 0,
            icon: 'fa-code-branch',
            prerequisites: [],
            unlocks: ['ci-cd-setup', 'code-review-process'],
            steps: [
                {
                    title: 'Create organization',
                    description: 'Set up a GitHub organization for your startup'
                },
                {
                    title: 'Initialize repository',
                    description: 'Create main repo with proper .gitignore and README'
                },
                {
                    title: 'Set up branch protection',
                    description: 'Require PR reviews for main branch'
                },
                {
                    title: 'Configure GitHub Actions',
                    description: 'Add basic CI/CD workflows'
                },
                {
                    title: 'Document contribution guidelines',
                    description: 'Create CONTRIBUTING.md for future team members'
                }
            ]
        },
        
        'security-audit': {
            id: 'security-audit',
            title: 'Security Audit Sprint',
            description: 'Review code and infrastructure for vulnerabilities',
            epic: 'launch-product',
            category: 'technical',
            difficulty: 'high',
            timeEstimate: '1 week',
            cost: 0,
            icon: 'fa-shield-alt',
            isSquadMission: true,
            prerequisites: ['github-setup', 'build-mvp'],
            unlocks: ['soc2-prep', 'bug-bounty'],
            steps: [
                {
                    title: 'Run automated scans',
                    description: 'Use tools like Snyk, OWASP ZAP'
                },
                {
                    title: 'Review authentication',
                    description: 'Check password policies, 2FA, session management'
                },
                {
                    title: 'Audit data handling',
                    description: 'Ensure proper encryption and privacy'
                },
                {
                    title: 'Penetration testing',
                    description: 'Squad members test each other\'s apps'
                },
                {
                    title: 'Create security checklist',
                    description: 'Document findings and fixes'
                }
            ]
        },
        
        'mom-test': {
            id: 'mom-test',
            title: 'Master Customer Interview Techniques',
            description: 'Learn how to ask the right questions and avoid biased feedback',
            epic: 'idea-validation',
            category: 'business',
            difficulty: 'easy',
            timeEstimate: '2-3 hours',
            cost: 15,
            icon: 'fa-book',
            prerequisites: [],
            unlocks: ['customer-interviews'],
            steps: [
                {
                    title: 'Get the book',
                    description: 'Purchase "The Mom Test" by Rob Fitzpatrick'
                },
                {
                    title: 'Read key chapters',
                    description: 'Focus on chapters 1-3 for core concepts'
                },
                {
                    title: 'Create question bank',
                    description: 'Draft 20 questions following Mom Test principles'
                },
                {
                    title: 'Practice with friends',
                    description: 'Test your questions on non-customers first'
                },
                {
                    title: 'Apply to real interviews',
                    description: 'Use the framework in actual customer conversations'
                }
            ]
        },
        
        'customer-discovery-workshop': {
            id: 'customer-discovery-workshop',
            title: 'Customer Discovery Sprint',
            description: 'Intensive 5-day process to validate your assumptions with real customers',
            epic: 'idea-validation',
            category: 'business',
            difficulty: 'medium',
            timeEstimate: '5 days',
            cost: 0,
            icon: 'fa-video',
            prerequisites: [],
            unlocks: ['customer-interviews'],
            steps: [
                {
                    title: 'Day 1: Map your assumptions',
                    description: 'List all assumptions about your customers and their problems'
                },
                {
                    title: 'Day 2: Create interview guide',
                    description: 'Design questions to test your riskiest assumptions'
                },
                {
                    title: 'Day 3-4: Conduct 10 interviews',
                    description: 'Talk to potential customers and take detailed notes'
                },
                {
                    title: 'Day 5: Synthesize learnings',
                    description: 'Identify patterns and decide to pivot or persevere'
                },
                {
                    title: 'Share insights',
                    description: 'Post key learnings for other founders to learn from'
                }
            ]
        },
        
        'landing-page': {
            id: 'landing-page',
            title: 'Landing Page Smoke Test',
            description: 'Create a simple landing page to test market interest',
            epic: 'starting-out',
            category: 'marketing',
            difficulty: 'easy',
            timeEstimate: '4-6 hours',
            cost: 0,
            icon: 'fa-globe',
            prerequisites: [],
            unlocks: ['email-list', 'paid-ads-test'],
            steps: [
                {
                    title: 'Choose no-code builder',
                    description: 'Sign up for Carrd, Strikingly, or Tilda (free tier)'
                },
                {
                    title: 'Write problem-focused copy',
                    description: 'Headline addressing the problem, 3 key benefits, clear CTA'
                },
                {
                    title: 'Add waitlist signup',
                    description: 'Simple email capture with "Join Waitlist" button'
                },
                {
                    title: 'Set success metrics',
                    description: 'Define what conversion rate validates interest (e.g., 20%+)'
                },
                {
                    title: 'Share with 100 people',
                    description: 'Post in relevant communities, social media, and forums'
                },
                {
                    title: 'Optimize for SEO',
                    description: 'Meta tags, structured data, sitemap'
                }
            ]
        },
        
        'go-to-market-strategy': {
            id: 'go-to-market-strategy',
            title: 'Create Go-To-Market Strategy',
            description: 'Build a comprehensive plan to launch and scale your product',
            epic: 'launch-product',
            category: 'business',
            difficulty: 'hard',
            timeEstimate: '1-2 weeks',
            cost: 0,
            icon: 'fa-strategy',
            prerequisites: ['validate-idea', 'customer-interviews'],
            unlocks: ['launch-product-hunt', 'content-marketing', 'paid-advertising'],
            steps: [
                {
                    title: 'Define target segments',
                    description: 'Identify and prioritize your ideal customer profiles'
                },
                {
                    title: 'Analyze competitive landscape',
                    description: 'Map competitors and identify differentiation'
                },
                {
                    title: 'Choose distribution channels',
                    description: 'Select primary and secondary channels to reach customers'
                },
                {
                    title: 'Set pricing strategy',
                    description: 'Define pricing model and tiers based on value'
                },
                {
                    title: 'Create launch timeline',
                    description: 'Plan phased rollout with clear milestones'
                }
            ]
        }
    },
    
    // Epic definitions
    epics: {
        'starting-out': {
            id: 'starting-out',
            title: "I'm just starting out",
            description: 'Validate your idea and build foundation',
            icon: 'fa-rocket',
            color: 'info'
        },
        'first-customers': {
            id: 'first-customers',
            title: 'I need my first customers',
            description: 'Launch and get traction',
            icon: 'fa-users',
            color: 'success'
        },
        'fundraise': {
            id: 'fundraise',
            title: "I'm ready to fundraise",
            description: 'Prepare for investment',
            icon: 'fa-hand-holding-usd',
            color: 'warning'
        },
        'launch-product': {
            id: 'launch-product',
            title: 'Launch Your Product',
            description: 'Ship to production',
            icon: 'fa-ship',
            color: 'primary'
        }
    },
    
    // Helper functions
    getMissionsByEpic(epicId) {
        return Object.values(this.missions).filter(m => m.epic === epicId);
    },
    
    getMissionsByCategory(category) {
        return Object.values(this.missions).filter(m => m.category === category);
    },
    
    getAvailableMissions(completedMissions = []) {
        return Object.values(this.missions).filter(mission => {
            // Check if all prerequisites are completed
            return mission.prerequisites.every(prereq => completedMissions.includes(prereq));
        });
    },
    
    getSquadMissions() {
        return Object.values(this.missions).filter(m => m.isSquadMission);
    },
    
    getMissionPath(targetMissionId, completedMissions = []) {
        const targetMission = this.missions[targetMissionId];
        if (!targetMission) return [];
        
        const path = [];
        const visited = new Set();
        
        const buildPath = (missionId) => {
            if (visited.has(missionId) || completedMissions.includes(missionId)) return;
            visited.add(missionId);
            
            const mission = this.missions[missionId];
            if (!mission) return;
            
            // First, add prerequisites
            mission.prerequisites.forEach(prereq => buildPath(prereq));
            
            // Then add this mission
            path.push(mission);
        };
        
        buildPath(targetMissionId);
        return path;
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = missionData;
}