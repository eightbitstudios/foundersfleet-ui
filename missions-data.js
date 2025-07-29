// Mission data structure with prerequisites and dependencies
const missionData = {
    // Mission definitions
    missions: {
        'validate-idea': {
            id: 'validate-idea',
            title: 'Validate Your Idea',
            description: 'Talk to 20 potential customers in 5 days',
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
            title: 'Form Delaware C-Corp',
            description: 'Set up proper legal structure for fundraising',
            epic: 'fundraise',
            category: 'legal',
            difficulty: 'medium',
            timeEstimate: '1 week',
            cost: 500,
            icon: 'fa-shield-alt',
            prerequisites: [],
            unlocks: ['apple-dev-account', 'stripe-setup', 'bank-account'],
            steps: [
                {
                    title: 'Choose business structure',
                    description: 'C-Corp vs LLC - understand the implications'
                },
                {
                    title: 'File with Delaware',
                    description: 'Submit incorporation documents'
                },
                {
                    title: 'Get EIN from IRS',
                    description: 'Apply for Employer Identification Number'
                },
                {
                    title: 'Draft bylaws and agreements',
                    description: 'Set up corporate governance documents'
                },
                {
                    title: 'Issue founder stock',
                    description: 'Properly allocate equity with vesting'
                }
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
            title: 'The Mom Test',
            description: 'Learn how to talk to customers and get honest feedback',
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
            title: 'Customer Discovery Workshop',
            description: '90-minute workshop on effective customer interviews',
            epic: 'idea-validation',
            category: 'business',
            difficulty: 'easy',
            timeEstimate: '90 minutes',
            cost: 0,
            icon: 'fa-video',
            prerequisites: [],
            unlocks: ['customer-interviews'],
            steps: [
                {
                    title: 'Register for workshop',
                    description: 'Sign up for the next available session'
                },
                {
                    title: 'Prepare your hypothesis',
                    description: 'Come with a clear problem statement'
                },
                {
                    title: 'Attend live session',
                    description: 'Participate in the interactive workshop'
                },
                {
                    title: 'Complete exercises',
                    description: 'Practice with other founders in breakout rooms'
                },
                {
                    title: 'Get feedback',
                    description: 'Receive personalized advice on your approach'
                }
            ]
        },
        
        'landing-page': {
            id: 'landing-page',
            title: 'Create Landing Page',
            description: 'Build a high-converting landing page',
            epic: 'starting-out',
            category: 'marketing',
            difficulty: 'medium',
            timeEstimate: '1 day',
            cost: 0,
            icon: 'fa-globe',
            prerequisites: ['validate-idea'],
            unlocks: ['analytics-setup', 'email-list', 'launch-product-hunt'],
            steps: [
                {
                    title: 'Write compelling copy',
                    description: 'Hero, benefits, social proof, CTA'
                },
                {
                    title: 'Design or use template',
                    description: 'Mobile-first, fast-loading design'
                },
                {
                    title: 'Set up hosting',
                    description: 'Deploy on Vercel, Netlify, or similar'
                },
                {
                    title: 'Add email capture',
                    description: 'Integrate with email service provider'
                },
                {
                    title: 'Optimize for SEO',
                    description: 'Meta tags, structured data, sitemap'
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