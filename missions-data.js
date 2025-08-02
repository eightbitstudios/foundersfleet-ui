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
        },
        
        // Scale & Optimize missions
        'process-automation': {
            id: 'process-automation',
            title: 'Automate Core Business Processes',
            description: 'Streamline operations by automating repetitive tasks and workflows',
            epic: 'scale-optimize',
            category: 'technical',
            difficulty: 'medium',
            cost: 200,
            icon: 'fa-robot',
            prerequisites: ['build-mvp'],
            unlocks: ['monitoring-setup', 'cost-optimization'],
            steps: [
                {
                    title: 'Map current workflows',
                    description: 'Document all manual processes that consume significant time'
                },
                {
                    title: 'Identify automation opportunities',
                    description: 'Prioritize processes by impact and ease of automation'
                },
                {
                    title: 'Choose automation tools',
                    description: 'Select tools like Zapier, Make, or custom scripts'
                },
                {
                    title: 'Implement key automations',
                    description: 'Start with highest-impact processes first'
                },
                {
                    title: 'Monitor and optimize',
                    description: 'Track time savings and adjust workflows'
                }
            ],
            resources: [
                { type: 'tool', title: 'Zapier Automation Platform', url: '#' },
                { type: 'guide', title: 'Business Process Automation Guide', url: '#' },
                { type: 'template', title: 'Process Mapping Template', url: '#' }
            ]
        },
        
        'performance-optimization': {
            id: 'performance-optimization',
            title: 'Optimize Application Performance',
            description: 'Improve app speed, scalability, and user experience',
            epic: 'scale-optimize',
            category: 'technical',
            difficulty: 'hard',
            cost: 0,
            icon: 'fa-tachometer-alt',
            prerequisites: ['build-mvp', 'analytics-setup'],
            unlocks: ['infrastructure-scaling', 'monitoring-setup'],
            steps: [
                {
                    title: 'Audit current performance',
                    description: 'Use tools like Lighthouse, GTMetrix, and APM tools'
                },
                {
                    title: 'Identify bottlenecks',
                    description: 'Analyze database queries, API calls, and frontend assets'
                },
                {
                    title: 'Optimize database performance',
                    description: 'Add indexes, optimize queries, implement caching'
                },
                {
                    title: 'Improve frontend speed',
                    description: 'Compress assets, lazy load, implement CDN'
                },
                {
                    title: 'Test and monitor results',
                    description: 'Measure improvements and set up ongoing monitoring'
                }
            ],
            resources: [
                { type: 'tool', title: 'Google Lighthouse', url: '#' },
                { type: 'guide', title: 'Web Performance Optimization', url: '#' },
                { type: 'tool', title: 'New Relic APM', url: '#' }
            ]
        },
        
        'cost-optimization': {
            id: 'cost-optimization',
            title: 'Optimize Infrastructure Costs',
            description: 'Reduce cloud and operational expenses while maintaining performance',
            epic: 'scale-optimize',
            category: 'business',
            difficulty: 'medium',
            cost: 0,
            icon: 'fa-dollar-sign',
            prerequisites: ['infrastructure-scaling'],
            unlocks: ['monitoring-setup'],
            steps: [
                {
                    title: 'Audit current spending',
                    description: 'Review all cloud services, tools, and subscriptions'
                },
                {
                    title: 'Identify unused resources',
                    description: 'Find idle servers, unused storage, and redundant services'
                },
                {
                    title: 'Right-size infrastructure',
                    description: 'Match resource allocation to actual usage patterns'
                },
                {
                    title: 'Negotiate better rates',
                    description: 'Contact vendors for volume discounts and reserved pricing'
                },
                {
                    title: 'Set up cost monitoring',
                    description: 'Implement alerts for unexpected spending spikes'
                }
            ],
            resources: [
                { type: 'tool', title: 'AWS Cost Explorer', url: '#' },
                { type: 'guide', title: 'Cloud Cost Optimization Guide', url: '#' },
                { type: 'tool', title: 'CloudHealth Cost Management', url: '#' }
            ]
        },
        
        'infrastructure-scaling': {
            id: 'infrastructure-scaling',
            title: 'Scale Infrastructure for Growth',
            description: 'Prepare your systems to handle increased traffic and data',
            epic: 'scale-optimize',
            category: 'technical',
            difficulty: 'hard',
            cost: 500,
            icon: 'fa-server',
            prerequisites: ['build-mvp', 'performance-optimization'],
            unlocks: ['cost-optimization', 'monitoring-setup'],
            steps: [
                {
                    title: 'Assess current capacity',
                    description: 'Understand current limits and growth projections'
                },
                {
                    title: 'Design scalable architecture',
                    description: 'Plan for horizontal scaling, microservices if needed'
                },
                {
                    title: 'Implement load balancing',
                    description: 'Distribute traffic across multiple servers'
                },
                {
                    title: 'Set up auto-scaling',
                    description: 'Configure automatic resource scaling based on demand'
                },
                {
                    title: 'Test under load',
                    description: 'Simulate high traffic to validate scaling works'
                }
            ],
            resources: [
                { type: 'guide', title: 'Scalable Architecture Patterns', url: '#' },
                { type: 'tool', title: 'AWS Auto Scaling', url: '#' },
                { type: 'service', title: 'Load Testing with Loader.io', url: '#' }
            ]
        },
        
        'monitoring-setup': {
            id: 'monitoring-setup',
            title: 'Set Up Comprehensive Monitoring',
            description: 'Monitor application health, performance, and business metrics',
            epic: 'scale-optimize',
            category: 'technical',
            difficulty: 'medium',
            cost: 100,
            icon: 'fa-chart-line',
            prerequisites: ['performance-optimization'],
            unlocks: ['ab-testing-framework'],
            steps: [
                {
                    title: 'Set up application monitoring',
                    description: 'Monitor uptime, response times, and errors'
                },
                {
                    title: 'Implement infrastructure monitoring',
                    description: 'Track server resources, database performance'
                },
                {
                    title: 'Create business dashboards',
                    description: 'Monitor key metrics like signups, revenue, retention'
                },
                {
                    title: 'Configure alert system',
                    description: 'Set up notifications for critical issues'
                },
                {
                    title: 'Document monitoring playbook',
                    description: 'Create runbooks for common issues and responses'
                }
            ],
            resources: [
                { type: 'tool', title: 'DataDog Monitoring', url: '#' },
                { type: 'tool', title: 'Grafana Dashboards', url: '#' },
                { type: 'guide', title: 'Monitoring Best Practices', url: '#' }
            ]
        },
        
        // Customer Success missions
        'customer-onboarding': {
            id: 'customer-onboarding',
            title: 'Design Customer Onboarding Flow',
            description: 'Create a smooth process to help new users find value quickly',
            epic: 'customer-success',
            category: 'business',
            difficulty: 'medium',
            cost: 0,
            icon: 'fa-user-plus',
            prerequisites: ['build-mvp'],
            unlocks: ['customer-health-tracking', 'support-system'],
            steps: [
                {
                    title: 'Map user journey',
                    description: 'Document steps from signup to first value achievement'
                },
                {
                    title: 'Identify friction points',
                    description: 'Find where users get stuck or drop off'
                },
                {
                    title: 'Create onboarding sequence',
                    description: 'Design guided tutorials, tooltips, and progressive disclosure'
                },
                {
                    title: 'Build welcome email series',
                    description: 'Send helpful content during first week of usage'
                },
                {
                    title: 'Measure and optimize',
                    description: 'Track completion rates and iterate based on data'
                }
            ],
            resources: [
                { type: 'tool', title: 'Intercom for onboarding', url: '#' },
                { type: 'guide', title: 'User Onboarding Best Practices', url: '#' },
                { type: 'template', title: 'Onboarding Email Templates', url: '#' }
            ]
        },
        
        'support-system': {
            id: 'support-system',
            title: 'Build Customer Support System',
            description: 'Set up efficient system to help customers and resolve issues',
            epic: 'customer-success',
            category: 'business',
            difficulty: 'medium',
            cost: 50,
            icon: 'fa-headset',
            prerequisites: ['customer-onboarding'],
            unlocks: ['feedback-loops', 'community-building'],
            steps: [
                {
                    title: 'Choose support platform',
                    description: 'Set up Intercom, Zendesk, or Help Scout'
                },
                {
                    title: 'Create knowledge base',
                    description: 'Document common questions and how-to guides'
                },
                {
                    title: 'Set up help widget',
                    description: 'Add in-app support chat or help center'
                },
                {
                    title: 'Define response standards',
                    description: 'Set SLAs for different types of support requests'
                },
                {
                    title: 'Train support processes',
                    description: 'Create scripts and escalation procedures'
                }
            ],
            resources: [
                { type: 'tool', title: 'Intercom Customer Support', url: '#' },
                { type: 'template', title: 'Support Response Templates', url: '#' },
                { type: 'guide', title: 'Customer Support Best Practices', url: '#' }
            ]
        },
        
        'feedback-loops': {
            id: 'feedback-loops',
            title: 'Create Customer Feedback Loops',
            description: 'Systematically collect and act on customer feedback',
            epic: 'customer-success',
            category: 'business',
            difficulty: 'easy',
            cost: 0,
            icon: 'fa-comments',
            prerequisites: ['support-system'],
            unlocks: ['retention-strategies'],
            steps: [
                {
                    title: 'Set up feedback collection',
                    description: 'Add surveys, feedback forms, and review requests'
                },
                {
                    title: 'Create feedback tracking',
                    description: 'Use tools like Airtable or Notion to organize feedback'
                },
                {
                    title: 'Establish review process',
                    description: 'Weekly review of feedback and prioritization'
                },
                {
                    title: 'Close feedback loop',
                    description: 'Follow up with customers when you implement their ideas'
                },
                {
                    title: 'Share learnings publicly',
                    description: 'Blog about changes made based on customer feedback'
                }
            ],
            resources: [
                { type: 'tool', title: 'Typeform for surveys', url: '#' },
                { type: 'tool', title: 'ProductBoard for feedback', url: '#' },
                { type: 'template', title: 'Feedback Collection Templates', url: '#' }
            ]
        },
        
        'customer-health-tracking': {
            id: 'customer-health-tracking',
            title: 'Track Customer Health Metrics',
            description: 'Monitor customer engagement to predict churn and expansion',
            epic: 'customer-success',
            category: 'business',
            difficulty: 'medium',
            cost: 100,
            icon: 'fa-heartbeat',
            prerequisites: ['customer-onboarding', 'analytics-setup'],
            unlocks: ['retention-strategies'],
            steps: [
                {
                    title: 'Define health score metrics',
                    description: 'Identify usage patterns that indicate healthy customers'
                },
                {
                    title: 'Set up tracking system',
                    description: 'Use tools like Mixpanel, Amplitude, or custom dashboard'
                },
                {
                    title: 'Create customer segments',
                    description: 'Group customers by health score and behavior patterns'
                },
                {
                    title: 'Build alert system',
                    description: 'Get notified when customers show signs of churn risk'
                },
                {
                    title: 'Create intervention playbooks',
                    description: 'Define actions to take for different health score changes'
                }
            ],
            resources: [
                { type: 'tool', title: 'Mixpanel Customer Analytics', url: '#' },
                { type: 'guide', title: 'Customer Health Score Guide', url: '#' },
                { type: 'template', title: 'Health Score Calculator', url: '#' }
            ]
        },
        
        'retention-strategies': {
            id: 'retention-strategies',
            title: 'Implement Customer Retention Strategies',
            description: 'Reduce churn and increase customer lifetime value',
            epic: 'customer-success',
            category: 'business',
            difficulty: 'medium',
            cost: 0,
            icon: 'fa-user-check',
            prerequisites: ['customer-health-tracking', 'feedback-loops'],
            unlocks: ['community-building'],
            steps: [
                {
                    title: 'Analyze churn patterns',
                    description: 'Identify when and why customers typically leave'
                },
                {
                    title: 'Create retention campaigns',
                    description: 'Build email sequences for at-risk customers'
                },
                {
                    title: 'Implement win-back offers',
                    description: 'Design incentives to re-engage churned customers'
                },
                {
                    title: 'Build loyalty program',
                    description: 'Reward long-term customers with perks and recognition'
                },
                {
                    title: 'Measure retention impact',
                    description: 'Track cohort retention and lifetime value improvements'
                }
            ],
            resources: [
                { type: 'guide', title: 'Customer Retention Playbook', url: '#' },
                { type: 'tool', title: 'Customer.io for retention', url: '#' },
                { type: 'template', title: 'Retention Email Templates', url: '#' }
            ]
        },
        
        'community-building': {
            id: 'community-building',
            title: 'Build Customer Community',
            description: 'Create a space for customers to connect and support each other',
            epic: 'customer-success',
            category: 'marketing',
            difficulty: 'medium',
            cost: 100,
            icon: 'fa-users',
            prerequisites: ['support-system', 'retention-strategies'],
            unlocks: ['brand-identity'],
            steps: [
                {
                    title: 'Choose community platform',
                    description: 'Set up Discord, Slack, Circle, or Facebook Group'
                },
                {
                    title: 'Define community guidelines',
                    description: 'Create rules and moderation policies'
                },
                {
                    title: 'Seed initial content',
                    description: 'Post valuable content and facilitate discussions'
                },
                {
                    title: 'Recruit power users',
                    description: 'Invite your most engaged customers to be community leaders'
                },
                {
                    title: 'Create regular programming',
                    description: 'Host weekly events, Q&As, or feature spotlights'
                }
            ],
            resources: [
                { type: 'tool', title: 'Discord Community Platform', url: '#' },
                { type: 'guide', title: 'Community Building Handbook', url: '#' },
                { type: 'template', title: 'Community Guidelines Template', url: '#' }
            ]
        },
        
        // Marketing & Branding missions
        'brand-identity': {
            id: 'brand-identity',
            title: 'Develop Brand Identity',
            description: 'Create consistent visual and messaging identity for your brand',
            epic: 'marketing-branding',
            category: 'marketing',
            difficulty: 'medium',
            cost: 300,
            icon: 'fa-palette',
            prerequisites: ['validate-idea'],
            unlocks: ['content-strategy', 'social-media-setup'],
            steps: [
                {
                    title: 'Define brand personality',
                    description: 'Establish brand voice, values, and positioning'
                },
                {
                    title: 'Create visual identity',
                    description: 'Design logo, color palette, and typography system'
                },
                {
                    title: 'Develop brand guidelines',
                    description: 'Document how to use brand elements consistently'
                },
                {
                    title: 'Create brand assets',
                    description: 'Business cards, letterhead, social media templates'
                },
                {
                    title: 'Apply across touchpoints',
                    description: 'Update website, app, and marketing materials'
                }
            ],
            resources: [
                { type: 'tool', title: 'Canva Brand Kit', url: '#' },
                { type: 'service', title: 'Fiverr Logo Design', url: '#' },
                { type: 'template', title: 'Brand Guidelines Template', url: '#' }
            ]
        },
        
        'content-strategy': {
            id: 'content-strategy',
            title: 'Create Content Strategy',
            description: 'Plan and create valuable content to attract and engage your audience',
            epic: 'marketing-branding',
            category: 'marketing',
            difficulty: 'medium',
            cost: 0,
            icon: 'fa-file-alt',
            prerequisites: ['brand-identity'],
            unlocks: ['seo-optimization', 'email-marketing'],
            steps: [
                {
                    title: 'Research audience interests',
                    description: 'Identify topics your target customers care about'
                },
                {
                    title: 'Audit competitor content',
                    description: 'Analyze what content works in your space'
                },
                {
                    title: 'Plan content calendar',
                    description: 'Create 30-day content schedule across channels'
                },
                {
                    title: 'Create content templates',
                    description: 'Design reusable formats for blogs, social, emails'
                },
                {
                    title: 'Establish creation workflow',
                    description: 'Set up process for ideation, creation, and approval'
                }
            ],
            resources: [
                { type: 'tool', title: 'Airtable Content Calendar', url: '#' },
                { type: 'tool', title: 'BuzzSumo for research', url: '#' },
                { type: 'template', title: 'Content Strategy Template', url: '#' }
            ]
        },
        
        'social-media-setup': {
            id: 'social-media-setup',
            title: 'Set Up Social Media Presence',
            description: 'Establish professional presence on key social platforms',
            epic: 'marketing-branding',
            category: 'marketing',
            difficulty: 'easy',
            cost: 0,
            icon: 'fa-share-alt',
            prerequisites: ['brand-identity'],
            unlocks: ['influencer-outreach', 'paid-advertising'],
            steps: [
                {
                    title: 'Choose relevant platforms',
                    description: 'Focus on 2-3 platforms where your audience is active'
                },
                {
                    title: 'Create business profiles',
                    description: 'Set up professional accounts with consistent branding'
                },
                {
                    title: 'Optimize profiles',
                    description: 'Add compelling bios, links, and contact information'
                },
                {
                    title: 'Create posting schedule',
                    description: 'Plan content frequency and optimal posting times'
                },
                {
                    title: 'Set up social media tools',
                    description: 'Use Buffer, Hootsuite, or Later for scheduling'
                }
            ],
            resources: [
                { type: 'tool', title: 'Buffer Social Scheduler', url: '#' },
                { type: 'guide', title: 'Social Media Setup Guide', url: '#' },
                { type: 'template', title: 'Social Media Templates', url: '#' }
            ]
        },
        
        'email-marketing': {
            id: 'email-marketing',
            title: 'Launch Email Marketing',
            description: 'Build and nurture your email list with valuable content',
            epic: 'marketing-branding',
            category: 'marketing',
            difficulty: 'medium',
            cost: 50,
            icon: 'fa-envelope',
            prerequisites: ['content-strategy', 'landing-page'],
            unlocks: ['pr-strategy'],
            steps: [
                {
                    title: 'Choose email platform',
                    description: 'Set up Mailchimp, ConvertKit, or similar service'
                },
                {
                    title: 'Create lead magnets',
                    description: 'Develop valuable resources to capture email addresses'
                },
                {
                    title: 'Build welcome sequence',
                    description: 'Create 5-7 email series for new subscribers'
                },
                {
                    title: 'Design email templates',
                    description: 'Create branded templates for newsletters and campaigns'
                },
                {
                    title: 'Set up automated campaigns',
                    description: 'Create drip campaigns based on user behavior'
                }
            ],
            resources: [
                { type: 'tool', title: 'ConvertKit Email Marketing', url: '#' },
                { type: 'template', title: 'Email Template Library', url: '#' },
                { type: 'guide', title: 'Email Marketing Best Practices', url: '#' }
            ]
        },
        
        'seo-optimization': {
            id: 'seo-optimization',
            title: 'Optimize for Search Engines',
            description: 'Improve organic search rankings and drive traffic',
            epic: 'marketing-branding',
            category: 'marketing',
            difficulty: 'medium',
            cost: 100,
            icon: 'fa-search',
            prerequisites: ['content-strategy', 'landing-page'],
            unlocks: ['paid-advertising'],
            steps: [
                {
                    title: 'Keyword research',
                    description: 'Find relevant keywords with good search volume'
                },
                {
                    title: 'Optimize on-page SEO',
                    description: 'Update titles, meta descriptions, headers, and content'
                },
                {
                    title: 'Improve technical SEO',
                    description: 'Fix site speed, mobile responsiveness, and crawlability'
                },
                {
                    title: 'Create SEO content',
                    description: 'Write blog posts targeting your key keywords'
                },
                {
                    title: 'Build backlinks',
                    description: 'Reach out for guest posts and directory listings'
                }
            ],
            resources: [
                { type: 'tool', title: 'Google Keyword Planner', url: '#' },
                { type: 'tool', title: 'Ahrefs SEO Tools', url: '#' },
                { type: 'guide', title: 'SEO Beginner Guide', url: '#' }
            ]
        },
        
        'paid-advertising': {
            id: 'paid-advertising',
            title: 'Launch Paid Advertising Campaigns',
            description: 'Run profitable ads on Google, Facebook, and other platforms',
            epic: 'marketing-branding',
            category: 'marketing',
            difficulty: 'hard',
            cost: 1000,
            icon: 'fa-bullhorn',
            prerequisites: ['social-media-setup', 'seo-optimization'],
            unlocks: ['influencer-outreach'],
            steps: [
                {
                    title: 'Set campaign objectives',
                    description: 'Define goals, budget, and target metrics'
                },
                {
                    title: 'Research target audience',
                    description: 'Create detailed customer personas and targeting'
                },
                {
                    title: 'Create ad creatives',
                    description: 'Design compelling images, videos, and copy'
                },
                {
                    title: 'Launch test campaigns',
                    description: 'Start with small budgets and multiple variations'
                },
                {
                    title: 'Optimize and scale',
                    description: 'Analyze performance and increase spending on winners'
                }
            ],
            resources: [
                { type: 'tool', title: 'Facebook Ads Manager', url: '#' },
                { type: 'guide', title: 'Google Ads Getting Started', url: '#' },
                { type: 'course', title: 'Paid Advertising Masterclass', url: '#' }
            ]
        },
        
        'influencer-outreach': {
            id: 'influencer-outreach',
            title: 'Partner with Influencers',
            description: 'Build relationships with industry influencers and creators',
            epic: 'marketing-branding',
            category: 'marketing',
            difficulty: 'medium',
            cost: 500,
            icon: 'fa-star',
            prerequisites: ['social-media-setup', 'paid-advertising'],
            unlocks: ['pr-strategy'],
            steps: [
                {
                    title: 'Identify relevant influencers',
                    description: 'Find creators who match your target audience'
                },
                {
                    title: 'Research engagement rates',
                    description: 'Analyze follower quality and engagement metrics'
                },
                {
                    title: 'Create outreach strategy',
                    description: 'Develop personalized pitches and collaboration ideas'
                },
                {
                    title: 'Launch partnership campaigns',
                    description: 'Start with micro-influencers and test different formats'
                },
                {
                    title: 'Track and measure ROI',
                    description: 'Monitor campaign performance and relationship value'
                }
            ],
            resources: [
                { type: 'tool', title: 'Upfluence Influencer Platform', url: '#' },
                { type: 'template', title: 'Influencer Outreach Templates', url: '#' },
                { type: 'guide', title: 'Influencer Marketing Guide', url: '#' }
            ]
        },
        
        'pr-strategy': {
            id: 'pr-strategy',
            title: 'Develop PR Strategy',
            description: 'Get media coverage and build brand awareness through PR',
            epic: 'marketing-branding',
            category: 'marketing',
            difficulty: 'hard',
            cost: 200,
            icon: 'fa-newspaper',
            prerequisites: ['email-marketing', 'influencer-outreach'],
            unlocks: ['market-research-international'],
            steps: [
                {
                    title: 'Develop key messages',
                    description: 'Create compelling story angles and press-worthy news'
                },
                {
                    title: 'Build media list',
                    description: 'Research journalists and publications in your industry'
                },
                {
                    title: 'Create press materials',
                    description: 'Write press releases, media kit, and founder bio'
                },
                {
                    title: 'Execute outreach campaign',
                    description: 'Pitch stories to relevant journalists and bloggers'
                },
                {
                    title: 'Measure coverage impact',
                    description: 'Track mentions, traffic, and brand awareness lift'
                }
            ],
            resources: [
                { type: 'tool', title: 'HARO for media requests', url: '#' },
                { type: 'template', title: 'Press Release Template', url: '#' },
                { type: 'guide', title: 'DIY PR Guide', url: '#' }
            ]
        },
        
        // Sales Process missions
        'sales-playbook': {
            id: 'sales-playbook',
            title: 'Create Sales Playbook',
            description: 'Document your sales process and best practices',
            epic: 'sales-process',
            category: 'business',
            difficulty: 'medium',
            cost: 0,
            icon: 'fa-book',
            prerequisites: ['customer-interviews'],
            unlocks: ['crm-setup', 'lead-qualification'],
            steps: [
                {
                    title: 'Map customer journey',
                    description: 'Document stages from awareness to purchase'
                },
                {
                    title: 'Define sales process',
                    description: 'Create step-by-step sales methodology'
                },
                {
                    title: 'Create objection handling',
                    description: 'Prepare responses to common customer concerns'
                },
                {
                    title: 'Build sales scripts',
                    description: 'Write templates for calls, emails, and demos'
                },
                {
                    title: 'Document best practices',
                    description: 'Record what works and train new team members'
                }
            ],
            resources: [
                { type: 'template', title: 'Sales Playbook Template', url: '#' },
                { type: 'guide', title: 'Building a Sales Process', url: '#' },
                { type: 'book', title: 'The Sales Acceleration Formula', url: '#' }
            ]
        },
        
        'crm-setup': {
            id: 'crm-setup',
            title: 'Set Up CRM System',
            description: 'Organize and track your sales pipeline and customer data',
            epic: 'sales-process',
            category: 'business',
            difficulty: 'medium',
            cost: 100,
            icon: 'fa-database',
            prerequisites: ['sales-playbook'],
            unlocks: ['pipeline-management', 'demo-process'],
            steps: [
                {
                    title: 'Choose CRM platform',
                    description: 'Select HubSpot, Pipedrive, or Salesforce based on needs'
                },
                {
                    title: 'Set up data structure',
                    description: 'Configure fields, stages, and deal properties'
                },
                {
                    title: 'Import existing data',
                    description: 'Clean and import contacts and deal history'
                },
                {
                    title: 'Configure automation',
                    description: 'Set up email sequences and task reminders'
                },
                {
                    title: 'Train team on usage',
                    description: 'Ensure consistent data entry and process adoption'
                }
            ],
            resources: [
                { type: 'tool', title: 'HubSpot CRM (free)', url: '#' },
                { type: 'guide', title: 'CRM Setup Best Practices', url: '#' },
                { type: 'template', title: 'CRM Configuration Guide', url: '#' }
            ]
        },
        
        'lead-qualification': {
            id: 'lead-qualification',
            title: 'Implement Lead Qualification',
            description: 'Create system to identify and prioritize high-quality prospects',
            epic: 'sales-process',
            category: 'business',
            difficulty: 'medium',
            cost: 0,
            icon: 'fa-filter',
            prerequisites: ['sales-playbook', 'crm-setup'],
            unlocks: ['demo-process', 'sales-collateral'],
            steps: [
                {
                    title: 'Define ideal customer profile',
                    description: 'Document characteristics of your best customers'
                },
                {
                    title: 'Create qualification framework',
                    description: 'Use BANT, MEDDIC, or similar methodology'
                },
                {
                    title: 'Build lead scoring system',
                    description: 'Assign points based on demographics and behavior'
                },
                {
                    title: 'Set up qualification questions',
                    description: 'Create discovery questions to assess fit'
                },
                {
                    title: 'Implement routing rules',
                    description: 'Direct qualified leads to appropriate sales reps'
                }
            ],
            resources: [
                { type: 'template', title: 'Lead Qualification Framework', url: '#' },
                { type: 'guide', title: 'BANT Qualification Guide', url: '#' },
                { type: 'tool', title: 'Lead Scoring with HubSpot', url: '#' }
            ]
        },
        
        'demo-process': {
            id: 'demo-process',
            title: 'Perfect Your Demo Process',
            description: 'Create compelling product demonstrations that convert',
            epic: 'sales-process',
            category: 'business',
            difficulty: 'medium',
            cost: 0,
            icon: 'fa-desktop',
            prerequisites: ['crm-setup', 'lead-qualification'],
            unlocks: ['pricing-strategy', 'sales-collateral'],
            steps: [
                {
                    title: 'Structure demo flow',
                    description: 'Create consistent demo agenda and timeline'
                },
                {
                    title: 'Prepare demo environment',
                    description: 'Set up demo data and scenarios that resonate'
                },
                {
                    title: 'Practice discovery questions',
                    description: 'Learn prospect needs before showing features'
                },
                {
                    title: 'Create interactive elements',
                    description: 'Let prospects use the product during demo'
                },
                {
                    title: 'Plan follow-up sequence',
                    description: 'Define next steps and materials to send'
                }
            ],
            resources: [
                { type: 'guide', title: 'Perfect Sales Demo Guide', url: '#' },
                { type: 'tool', title: 'Demo recording with Loom', url: '#' },
                { type: 'template', title: 'Demo Follow-up Templates', url: '#' }
            ]
        },
        
        'pricing-strategy': {
            id: 'pricing-strategy',
            title: 'Develop Pricing Strategy',
            description: 'Set optimal pricing based on value and market research',
            epic: 'sales-process',
            category: 'business',
            difficulty: 'hard',
            cost: 0,
            icon: 'fa-tags',
            prerequisites: ['demo-process', 'customer-interviews'],
            unlocks: ['sales-collateral'],
            steps: [
                {
                    title: 'Research competitor pricing',
                    description: 'Analyze pricing models in your market'
                },
                {
                    title: 'Calculate value delivered',
                    description: 'Quantify ROI and benefits for customers'
                },
                {
                    title: 'Test pricing with prospects',
                    description: 'Use Van Westendorp or similar pricing research'
                },
                {
                    title: 'Create pricing tiers',
                    description: 'Design good-better-best options'
                },
                {
                    title: 'Plan pricing experiments',
                    description: 'A/B test different prices and packages'
                }
            ],
            resources: [
                { type: 'guide', title: 'SaaS Pricing Strategy Guide', url: '#' },
                { type: 'tool', title: 'Price Intelligently', url: '#' },
                { type: 'template', title: 'Pricing Research Template', url: '#' }
            ]
        },
        
        'sales-collateral': {
            id: 'sales-collateral',
            title: 'Create Sales Collateral',
            description: 'Build materials to support and accelerate sales process',
            epic: 'sales-process',
            category: 'marketing',
            difficulty: 'medium',
            cost: 0,
            icon: 'fa-file-powerpoint',
            prerequisites: ['lead-qualification', 'demo-process', 'pricing-strategy'],
            unlocks: ['pipeline-management'],
            steps: [
                {
                    title: 'Create pitch deck',
                    description: 'Build compelling presentation for sales meetings'
                },
                {
                    title: 'Design case studies',
                    description: 'Document customer success stories and results'
                },
                {
                    title: 'Build ROI calculator',
                    description: 'Help prospects quantify value of your solution'
                },
                {
                    title: 'Create comparison sheets',
                    description: 'Show how you compare to competitors'
                },
                {
                    title: 'Develop proposal templates',
                    description: 'Standardize contracts and pricing proposals'
                }
            ],
            resources: [
                { type: 'template', title: 'Sales Deck Template', url: '#' },
                { type: 'tool', title: 'Canva for design', url: '#' },
                { type: 'guide', title: 'Sales Collateral Best Practices', url: '#' }
            ]
        },
        
        'pipeline-management': {
            id: 'pipeline-management',
            title: 'Master Pipeline Management',
            description: 'Track and optimize your sales pipeline for predictable revenue',
            epic: 'sales-process',
            category: 'business',
            difficulty: 'medium',
            cost: 0,
            icon: 'fa-chart-line',
            prerequisites: ['crm-setup', 'sales-collateral'],
            unlocks: ['kpi-dashboard'],
            steps: [
                {
                    title: 'Define pipeline stages',
                    description: 'Create clear criteria for each stage progression'
                },
                {
                    title: 'Set up pipeline reporting',
                    description: 'Track conversion rates, velocity, and deal size'
                },
                {
                    title: 'Implement regular reviews',
                    description: 'Weekly pipeline reviews and deal coaching'
                },
                {
                    title: 'Create forecasting model',
                    description: 'Predict monthly and quarterly revenue'
                },
                {
                    title: 'Optimize bottlenecks',
                    description: 'Identify and fix stages with low conversion'
                }
            ],
            resources: [
                { type: 'template', title: 'Pipeline Review Template', url: '#' },
                { type: 'guide', title: 'Sales Pipeline Management', url: '#' },
                { type: 'tool', title: 'Pipeline reporting in CRM', url: '#' }
            ]
        },
        
        // Data & Analytics missions
        'kpi-dashboard': {
            id: 'kpi-dashboard',
            title: 'Build KPI Dashboard',
            description: 'Create executive dashboard to track key business metrics',
            epic: 'data-analytics',
            category: 'business',
            difficulty: 'medium',
            cost: 100,
            icon: 'fa-tachometer-alt',
            prerequisites: ['analytics-setup', 'pipeline-management'],
            unlocks: ['data-warehouse', 'reporting-automation'],
            steps: [
                {
                    title: 'Define key metrics',
                    description: 'Identify 10-15 most important business metrics'
                },
                {
                    title: 'Choose dashboard platform',
                    description: 'Set up Google Data Studio, Tableau, or Mixpanel'
                },
                {
                    title: 'Connect data sources',
                    description: 'Integrate analytics, CRM, and financial data'
                },
                {
                    title: 'Design executive view',
                    description: 'Create high-level dashboard for leadership'
                },
                {
                    title: 'Set up automated alerts',
                    description: 'Get notified when metrics hit thresholds'
                }
            ],
            resources: [
                { type: 'tool', title: 'Google Data Studio', url: '#' },
                { type: 'template', title: 'KPI Dashboard Template', url: '#' },
                { type: 'guide', title: 'Business Metrics Guide', url: '#' }
            ]
        },
        
        'data-warehouse': {
            id: 'data-warehouse',
            title: 'Set Up Data Warehouse',
            description: 'Centralize all business data for analysis and reporting',
            epic: 'data-analytics',
            category: 'technical',
            difficulty: 'hard',
            cost: 200,
            icon: 'fa-database',
            prerequisites: ['kpi-dashboard'],
            unlocks: ['reporting-automation', 'ab-testing-framework'],
            steps: [
                {
                    title: 'Choose warehouse platform',
                    description: 'Set up Snowflake, BigQuery, or Redshift'
                },
                {
                    title: 'Design data model',
                    description: 'Plan schema for all business data sources'
                },
                {
                    title: 'Set up ETL pipelines',
                    description: 'Extract data from apps and load into warehouse'
                },
                {
                    title: 'Implement data governance',
                    description: 'Set up access controls and data quality checks'
                },
                {
                    title: 'Create data documentation',
                    description: 'Document data sources, transformations, and usage'
                }
            ],
            resources: [
                { type: 'tool', title: 'Snowflake Data Warehouse', url: '#' },
                { type: 'guide', title: 'Data Warehouse Design', url: '#' },
                { type: 'tool', title: 'Fivetran for ETL', url: '#' }
            ]
        },
        
        'reporting-automation': {
            id: 'reporting-automation',
            title: 'Automate Business Reporting',
            description: 'Create automated reports for stakeholders and team',
            epic: 'data-analytics',
            category: 'technical',
            difficulty: 'medium',
            cost: 50,
            icon: 'fa-file-export',
            prerequisites: ['kpi-dashboard', 'data-warehouse'],
            unlocks: ['ab-testing-framework'],
            steps: [
                {
                    title: 'Identify reporting needs',
                    description: 'Survey team for what reports they need and when'
                },
                {
                    title: 'Build report templates',
                    description: 'Create standardized formats for different audiences'
                },
                {
                    title: 'Set up automation',
                    description: 'Schedule reports to be generated and sent automatically'
                },
                {
                    title: 'Create self-service tools',
                    description: 'Enable team to create ad-hoc reports'
                },
                {
                    title: 'Monitor and optimize',
                    description: 'Track report usage and improve based on feedback'
                }
            ],
            resources: [
                { type: 'tool', title: 'Zapier for automation', url: '#' },
                { type: 'guide', title: 'Business Reporting Best Practices', url: '#' },
                { type: 'template', title: 'Report Template Library', url: '#' }
            ]
        },
        
        'ab-testing-framework': {
            id: 'ab-testing-framework',
            title: 'Build A/B Testing Framework',
            description: 'Set up systematic testing to optimize product and marketing',
            epic: 'data-analytics',
            category: 'technical',
            difficulty: 'medium',
            cost: 100,
            icon: 'fa-flask',
            prerequisites: ['data-warehouse', 'reporting-automation'],
            unlocks: ['market-research-international'],
            steps: [
                {
                    title: 'Choose testing platform',
                    description: 'Set up Optimizely, Google Optimize, or custom solution'
                },
                {
                    title: 'Define testing process',
                    description: 'Create hypothesis template and statistical guidelines'
                },
                {
                    title: 'Set up experiment tracking',
                    description: 'Ensure proper data collection and analysis'
                },
                {
                    title: 'Train team on testing',
                    description: 'Educate on statistical significance and best practices'
                },
                {
                    title: 'Run first experiments',
                    description: 'Start with high-impact tests like signup flow'
                }
            ],
            resources: [
                { type: 'tool', title: 'Google Optimize', url: '#' },
                { type: 'guide', title: 'A/B Testing Guide', url: '#' },
                { type: 'calculator', title: 'Statistical Significance Calculator', url: '#' }
            ]
        },
        
        // International Expansion missions
        'market-research-international': {
            id: 'market-research-international',
            title: 'International Market Research',
            description: 'Research and validate opportunities in target international markets',
            epic: 'international-expansion',
            category: 'business',
            difficulty: 'medium',
            cost: 500,
            icon: 'fa-globe',
            prerequisites: ['pr-strategy', 'ab-testing-framework'],
            unlocks: ['localization-strategy', 'international-legal'],
            steps: [
                {
                    title: 'Identify target markets',
                    description: 'Research markets with highest opportunity and lowest barriers'
                },
                {
                    title: 'Analyze market size',
                    description: 'Estimate TAM/SAM/SOM for each target market'
                },
                {
                    title: 'Study local competition',
                    description: 'Research existing players and their market positioning'
                },
                {
                    title: 'Understand regulations',
                    description: 'Research legal, tax, and compliance requirements'
                },
                {
                    title: 'Validate demand',
                    description: 'Survey potential customers and test messaging'
                }
            ],
            resources: [
                { type: 'database', title: 'Statista Global Market Data', url: '#' },
                { type: 'tool', title: 'Google Trends for market validation', url: '#' },
                { type: 'service', title: 'Market research consultants', url: '#' }
            ]
        },
        
        'localization-strategy': {
            id: 'localization-strategy',
            title: 'Develop Localization Strategy',
            description: 'Adapt your product and content for international markets',
            epic: 'international-expansion',
            category: 'business',
            difficulty: 'hard',
            cost: 2000,
            icon: 'fa-language',
            prerequisites: ['market-research-international'],
            unlocks: ['cultural-adaptation', 'international-marketing'],
            steps: [
                {
                    title: 'Audit content for localization',
                    description: 'Identify all text, images, and UX that need adaptation'
                },
                {
                    title: 'Choose localization approach',
                    description: 'Decide between full localization vs internationalization'
                },
                {
                    title: 'Select target languages',
                    description: 'Prioritize languages based on market opportunity'
                },
                {
                    title: 'Build translation workflow',
                    description: 'Set up processes for translation and quality assurance'
                },
                {
                    title: 'Implement localization tools',
                    description: 'Use platforms like Lokalise or Phrase for management'
                }
            ],
            resources: [
                { type: 'tool', title: 'Lokalise Translation Platform', url: '#' },
                { type: 'service', title: 'Professional translation services', url: '#' },
                { type: 'guide', title: 'Software Localization Guide', url: '#' }
            ]
        },
        
        'international-legal': {
            id: 'international-legal',
            title: 'Handle International Legal Setup',
            description: 'Establish legal presence and compliance in target markets',
            epic: 'international-expansion',
            category: 'legal',
            difficulty: 'hard',
            cost: 5000,
            icon: 'fa-gavel',
            prerequisites: ['market-research-international'],
            unlocks: ['currency-payment-setup', 'international-shipping'],
            steps: [
                {
                    title: 'Research legal requirements',
                    description: 'Understand business registration and tax obligations'
                },
                {
                    title: 'Choose market entry strategy',
                    description: 'Decide on subsidiary, representative office, or partnership'
                },
                {
                    title: 'Engage local legal counsel',
                    description: 'Find qualified lawyers in each target market'
                },
                {
                    title: 'Handle business registration',
                    description: 'Register business entities and obtain necessary licenses'
                },
                {
                    title: 'Set up tax compliance',
                    description: 'Establish tax reporting and payment processes'
                }
            ],
            resources: [
                { type: 'service', title: 'International law firms', url: '#' },
                { type: 'platform', title: 'Stripe Atlas for incorporation', url: '#' },
                { type: 'guide', title: 'International Business Setup Guide', url: '#' }
            ]
        },
        
        'currency-payment-setup': {
            id: 'currency-payment-setup',
            title: 'Set Up Multi-Currency Payments',
            description: 'Enable payments in local currencies for international customers',
            epic: 'international-expansion',
            category: 'technical',
            difficulty: 'medium',
            cost: 200,
            icon: 'fa-coins',
            prerequisites: ['international-legal'],
            unlocks: ['international-shipping', 'local-partnerships'],
            steps: [
                {
                    title: 'Research payment preferences',
                    description: 'Understand preferred payment methods in each market'
                },
                {
                    title: 'Set up multi-currency processing',
                    description: 'Configure Stripe, PayPal, or local payment providers'
                },
                {
                    title: 'Implement currency conversion',
                    description: 'Add real-time exchange rates and pricing display'
                },
                {
                    title: 'Handle tax calculations',
                    description: 'Automatically calculate and display local taxes'
                },
                {
                    title: 'Test payment flows',
                    description: 'Verify all payment methods work in target markets'
                }
            ],
            resources: [
                { type: 'tool', title: 'Stripe Global Payments', url: '#' },
                { type: 'service', title: 'Wise for currency conversion', url: '#' },
                { type: 'guide', title: 'International Payment Processing', url: '#' }
            ]
        },
        
        'international-shipping': {
            id: 'international-shipping',
            title: 'Set Up International Shipping',
            description: 'Enable global delivery for physical products',
            epic: 'international-expansion',
            category: 'business',
            difficulty: 'medium',
            cost: 1000,
            icon: 'fa-shipping-fast',
            prerequisites: ['international-legal', 'currency-payment-setup'],
            unlocks: ['local-partnerships'],
            steps: [
                {
                    title: 'Research shipping options',
                    description: 'Compare international carriers and fulfillment services'
                },
                {
                    title: 'Set up customs documentation',
                    description: 'Understand customs forms and restricted items'
                },
                {
                    title: 'Calculate shipping costs',
                    description: 'Build pricing calculator for international shipping'
                },
                {
                    title: 'Implement tracking system',
                    description: 'Provide customers with shipment tracking'
                },
                {
                    title: 'Handle returns process',
                    description: 'Set up international returns and customer service'
                }
            ],
            resources: [
                { type: 'service', title: 'ShipStation for shipping', url: '#' },
                { type: 'guide', title: 'International Shipping Guide', url: '#' },
                { type: 'tool', title: 'Customs documentation tools', url: '#' }
            ]
        },
        
        'local-partnerships': {
            id: 'local-partnerships',
            title: 'Build Local Partnerships',
            description: 'Establish strategic partnerships in international markets',
            epic: 'international-expansion',
            category: 'business',
            difficulty: 'hard',
            cost: 1000,
            icon: 'fa-handshake',
            prerequisites: ['currency-payment-setup', 'international-shipping'],
            unlocks: ['cultural-adaptation', 'global-support'],
            steps: [
                {
                    title: 'Identify potential partners',
                    description: 'Research distributors, resellers, and strategic partners'
                },
                {
                    title: 'Develop partnership strategy',
                    description: 'Define partnership models and value propositions'
                },
                {
                    title: 'Create partner materials',
                    description: 'Build decks, agreements, and onboarding processes'
                },
                {
                    title: 'Negotiate agreements',
                    description: 'Structure deals that benefit both parties'
                },
                {
                    title: 'Launch pilot partnerships',
                    description: 'Start with 1-2 partners and iterate based on results'
                }
            ],
            resources: [
                { type: 'platform', title: 'PartnerFleet for partner management', url: '#' },
                { type: 'template', title: 'Partnership Agreement Template', url: '#' },
                { type: 'guide', title: 'International Partnership Guide', url: '#' }
            ]
        },
        
        'cultural-adaptation': {
            id: 'cultural-adaptation',
            title: 'Adapt to Local Cultures',
            description: 'Modify your approach to fit local cultural norms and preferences',
            epic: 'international-expansion',
            category: 'business',
            difficulty: 'medium',
            cost: 500,
            icon: 'fa-users-cog',
            prerequisites: ['localization-strategy', 'local-partnerships'],
            unlocks: ['international-marketing'],
            steps: [
                {
                    title: 'Research cultural norms',
                    description: 'Study business practices, communication styles, and values'
                },
                {
                    title: 'Adapt marketing messages',
                    description: 'Modify positioning and messaging for local sensibilities'
                },
                {
                    title: 'Adjust product features',
                    description: 'Modify product to match local preferences and needs'
                },
                {
                    title: 'Train international team',
                    description: 'Educate team on cultural differences and best practices'
                },
                {
                    title: 'Test and iterate',
                    description: 'Gather feedback and continuously improve cultural fit'
                }
            ],
            resources: [
                { type: 'guide', title: 'Cultural Intelligence Guide', url: '#' },
                { type: 'service', title: 'Cultural consulting services', url: '#' },
                { type: 'book', title: 'The Culture Map by Erin Meyer', url: '#' }
            ]
        },
        
        'international-marketing': {
            id: 'international-marketing',
            title: 'Launch International Marketing',
            description: 'Execute marketing campaigns tailored for international markets',
            epic: 'international-expansion',
            category: 'marketing',
            difficulty: 'hard',
            cost: 2000,
            icon: 'fa-bullhorn',
            prerequisites: ['localization-strategy', 'cultural-adaptation'],
            unlocks: ['global-support'],
            steps: [
                {
                    title: 'Adapt marketing channels',
                    description: 'Research popular platforms and channels in each market'
                },
                {
                    title: 'Create localized content',
                    description: 'Develop culturally appropriate marketing materials'
                },
                {
                    title: 'Launch local campaigns',
                    description: 'Run targeted campaigns in each market'
                },
                {
                    title: 'Build local SEO presence',
                    description: 'Optimize for local search engines and keywords'
                },
                {
                    title: 'Measure and optimize',
                    description: 'Track performance and adjust strategies by market'
                }
            ],
            resources: [
                { type: 'tool', title: 'Facebook Ads for international markets', url: '#' },
                { type: 'guide', title: 'International Digital Marketing', url: '#' },
                { type: 'service', title: 'Local marketing agencies', url: '#' }
            ]
        },
        
        'global-support': {
            id: 'global-support',
            title: 'Set Up Global Customer Support',
            description: 'Provide customer support across multiple time zones and languages',
            epic: 'international-expansion',
            category: 'business',
            difficulty: 'hard',
            cost: 1500,
            icon: 'fa-globe',
            prerequisites: ['local-partnerships', 'international-marketing'],
            unlocks: [],
            steps: [
                {
                    title: 'Plan support coverage',
                    description: 'Determine hours and languages needed for each market'
                },
                {
                    title: 'Hire multilingual staff',
                    description: 'Recruit support team members for target languages'
                },
                {
                    title: 'Localize support content',
                    description: 'Translate help docs and FAQ into local languages'
                },
                {
                    title: 'Set up routing system',
                    description: 'Direct customers to appropriate language/region support'
                },
                {
                    title: 'Train global support team',
                    description: 'Ensure consistent service quality across all markets'
                }
            ],
            resources: [
                { type: 'tool', title: 'Zendesk Global Support', url: '#' },
                { type: 'service', title: 'Multilingual support outsourcing', url: '#' },
                { type: 'guide', title: 'Global Customer Support Guide', url: '#' }
            ]
        },

        'define-cofounder-needs': {
            id: 'define-cofounder-needs',
            title: 'Define Co-founder Requirements',
            description: 'Clearly define what skills, experience, and qualities you need in co-founders',
            epic: 'finding-cofounders',
            category: 'business',
            difficulty: 'easy',
            cost: 0,
            icon: 'fa-list-alt',
            prerequisites: [],
            unlocks: ['cofounder-outreach'],
            steps: [
                {
                    title: 'Assess your skill gaps',
                    description: 'List what skills you lack for building and scaling your business'
                },
                {
                    title: 'Define role responsibilities',
                    description: 'Write clear job descriptions for each co-founder position'
                },
                {
                    title: 'Set experience requirements',
                    description: 'Define minimum experience and track record needed'
                },
                {
                    title: 'Identify cultural fit criteria',
                    description: 'Define values, work style, and personality traits that match'
                },
                {
                    title: 'Create co-founder profile',
                    description: 'Compile ideal co-founder profiles for each role'
                }
            ],
            resources: [
                { type: 'template', title: 'Co-founder Requirements Template', url: '#' },
                { type: 'guide', title: 'How to Choose Co-founders', url: '#' },
                { type: 'tool', title: 'Skills Assessment Framework', url: '#' }
            ]
        },

        'cofounder-outreach': {
            id: 'cofounder-outreach',
            title: 'Co-founder Outreach Strategy',
            description: 'Systematically find and connect with potential co-founders',
            epic: 'finding-cofounders',
            category: 'business',
            difficulty: 'medium',
            cost: 0,
            icon: 'fa-search',
            prerequisites: ['define-cofounder-needs'],
            unlocks: ['cofounder-interviews'],
            steps: [
                {
                    title: 'Map your network',
                    description: 'List contacts from work, school, industry events, and communities'
                },
                {
                    title: 'Join startup communities',
                    description: 'Participate in founder groups, accelerators, and networking events'
                },
                {
                    title: 'Use co-founder platforms',
                    description: 'Create profiles on CoFoundersLab, AngelList, and FounderDating'
                },
                {
                    title: 'Attend industry events',
                    description: 'Go to hackathons, meetups, and conferences in your space'
                },
                {
                    title: 'Create outreach messages',
                    description: 'Craft personalized messages explaining your vision and needs'
                }
            ],
            resources: [
                { type: 'platform', title: 'CoFoundersLab', url: '#' },
                { type: 'platform', title: 'FounderDating', url: '#' },
                { type: 'template', title: 'Co-founder Outreach Email Templates', url: '#' }
            ]
        },

        'cofounder-interviews': {
            id: 'cofounder-interviews',
            title: 'Co-founder Interview Process',
            description: 'Structured process to evaluate potential co-founders thoroughly',
            epic: 'finding-cofounders',
            category: 'business',
            difficulty: 'medium',
            cost: 0,
            icon: 'fa-comments',
            prerequisites: ['cofounder-outreach'],
            unlocks: ['equity-agreement'],
            steps: [
                {
                    title: 'Initial screening calls',
                    description: 'Conduct 30-minute calls to assess basic fit and interest'
                },
                {
                    title: 'Work together on project',
                    description: 'Collaborate on a small project to test working relationship'
                },
                {
                    title: 'Reference checks',
                    description: 'Speak with previous colleagues, employers, or co-founders'
                },
                {
                    title: 'Values alignment discussion',
                    description: 'Deep dive into work style, goals, and company vision'
                },
                {
                    title: 'Make final selection',
                    description: 'Choose co-founders based on skills, fit, and commitment level'
                }
            ],
            resources: [
                { type: 'template', title: 'Co-founder Interview Questions', url: '#' },
                { type: 'guide', title: 'Red Flags to Watch For', url: '#' },
                { type: 'tool', title: 'Reference Check Framework', url: '#' }
            ]
        },

        'equity-agreement': {
            id: 'equity-agreement',
            title: 'Structure Equity Agreement',
            description: 'Create fair equity split and vesting agreements with co-founders',
            epic: 'finding-cofounders',
            category: 'legal',
            difficulty: 'hard',
            cost: 1500,
            icon: 'fa-balance-scale',
            prerequisites: ['cofounder-interviews'],
            unlocks: ['cofounder-onboarding'],
            steps: [
                {
                    title: 'Research equity frameworks',
                    description: 'Study common equity split methodologies and best practices'
                },
                {
                    title: 'Negotiate equity percentages',
                    description: 'Discuss and agree on initial equity distribution'
                },
                {
                    title: 'Set up vesting schedules',
                    description: 'Create 4-year vesting with 1-year cliff for all co-founders'
                },
                {
                    title: 'Draft founders agreement',
                    description: 'Include IP assignment, non-compete, and exit provisions'
                },
                {
                    title: 'Get legal review',
                    description: 'Have startup lawyer review and finalize all agreements'
                }
            ],
            resources: [
                { type: 'calculator', title: 'Equity Split Calculator', url: '#' },
                { type: 'template', title: 'Founders Agreement Template', url: '#' },
                { type: 'service', title: 'Startup Legal Services', url: '#' }
            ]
        },

        'cofounder-onboarding': {
            id: 'cofounder-onboarding',
            title: 'Onboard New Co-founders',
            description: 'Successfully integrate co-founders into the team and business',
            epic: 'finding-cofounders',
            category: 'business',
            difficulty: 'medium',
            cost: 0,
            icon: 'fa-user-check',
            prerequisites: ['equity-agreement'],
            unlocks: [],
            steps: [
                {
                    title: 'Set up access and accounts',
                    description: 'Provide access to all tools, platforms, and bank accounts'
                },
                {
                    title: 'Share business knowledge',
                    description: 'Transfer all business docs, financials, and strategic plans'
                },
                {
                    title: 'Define roles and responsibilities',
                    description: 'Clarify who owns what areas and decision-making authority'
                },
                {
                    title: 'Establish communication rhythms',
                    description: 'Set up regular meetings, reporting, and collaboration processes'
                },
                {
                    title: 'Align on short-term goals',
                    description: 'Create 90-day plan with clear objectives for each co-founder'
                }
            ],
            resources: [
                { type: 'template', title: 'Co-founder Onboarding Checklist', url: '#' },
                { type: 'tool', title: 'Team Communication Tools', url: '#' },
                { type: 'guide', title: 'Building a Strong Founding Team', url: '#' }
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
        'finding-cofounders': {
            id: 'finding-cofounders',
            title: 'Finding Co-founders',
            description: 'Find, evaluate, and onboard the right co-founders',
            icon: 'fa-user-plus',
            color: 'success'
        },
        'idea-validation': {
            id: 'idea-validation',
            title: 'Validate Your Idea',
            description: 'Test and refine your business concept',
            icon: 'fa-lightbulb',
            color: 'warning'
        },
        'mvp-development': {
            id: 'mvp-development',
            title: 'Build MVP',
            description: 'Create your minimum viable product',
            icon: 'fa-hammer',
            color: 'primary'
        },
        'first-customers': {
            id: 'first-customers',
            title: 'I need my first customers',
            description: 'Launch and get traction',
            icon: 'fa-users',
            color: 'success'
        },
        'operations-legal': {
            id: 'operations-legal',
            title: 'Operations & Legal',
            description: 'Set up business structure and compliance',
            icon: 'fa-shield-alt',
            color: 'secondary'
        },
        'scale-optimize': {
            id: 'scale-optimize',
            title: 'Scale & Optimize',
            description: 'Improve performance and prepare for growth',
            icon: 'fa-chart-line',
            color: 'info'
        },
        'customer-success': {
            id: 'customer-success',
            title: 'Customer Success',
            description: 'Retain and grow your customer base',
            icon: 'fa-heart',
            color: 'danger'
        },
        'marketing-branding': {
            id: 'marketing-branding',
            title: 'Marketing & Branding',
            description: 'Build brand awareness and attract customers',
            icon: 'fa-bullhorn',
            color: 'warning'
        },
        'sales-process': {
            id: 'sales-process',
            title: 'Sales Process',
            description: 'Build systematic approach to closing deals',
            icon: 'fa-handshake',
            color: 'primary'
        },
        'data-analytics': {
            id: 'data-analytics',
            title: 'Data & Analytics',
            description: 'Make data-driven decisions and track performance',
            icon: 'fa-chart-bar',
            color: 'info'
        },
        'international-expansion': {
            id: 'international-expansion',
            title: 'International Expansion',
            description: 'Expand your business to global markets',
            icon: 'fa-globe',
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