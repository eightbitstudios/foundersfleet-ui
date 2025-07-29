// Squad data
const squadData = {
    'alpha': {
        name: 'Squad Alpha',
        icon: 'fa-rocket',
        tagline: 'B2B SaaS • Build Stage',
        status: 'Active',
        statusColor: 'green',
        founded: '2 months ago',
        description: 'Weekly check-ins for B2B SaaS founders grinding toward MVP launch. No drift, just drops. We focus on rapid iteration, customer feedback, and getting to revenue as fast as possible.',
        schedule: 'Every Thursday, 2:00 PM EST',
        nextMeeting: 'In 3 days',
        members: [
            { initials: 'AR', name: 'Aisha Robinson', role: 'Squad Captain • AI Infrastructure', id: 'aisha-robinson' },
            { initials: 'SC', name: 'Sarah Chen', role: 'E-commerce Analytics', id: 'sarah-chen' },
            { initials: 'JK', name: 'James Kim', role: 'Dev Tools Platform', id: 'james-kim' },
            { initials: 'MP', name: 'Maya Patel', role: 'HR Tech Solution', id: 'maya-patel' }
        ],
        activity: [
            { initials: 'AR', name: 'Aisha Robinson', time: '2 hours ago', message: 'Shared insights from customer interviews - seeing strong demand for our API solution!' },
            { initials: 'SC', name: 'Sarah Chen', time: '5 hours ago', message: 'Hit 1000 users on the waitlist! 🎉 Time to accelerate the MVP timeline.' },
            { initials: 'JK', name: 'James Kim', time: '1 day ago', message: 'Completed the pricing model analysis. Shared the deck in our squad drive.' }
        ],
        goals: [
            { completed: false, text: 'Launch MVP by end of Q1' },
            { completed: false, text: 'Reach 100 paying customers' },
            { completed: true, text: 'Complete customer discovery' }
        ]
    },
    'beta': {
        name: 'Squad Beta',
        icon: 'fa-chart-line',
        tagline: 'E-commerce • Growth Stage',
        status: 'Active',
        statusColor: 'green',
        founded: '4 months ago',
        description: 'Scaling e-commerce to 7-figures through shared tactics and relentless accountability. We share conversion strategies, supply chain hacks, and growth experiments.',
        schedule: 'Every Tuesday, 3:00 PM EST',
        nextMeeting: 'Tomorrow',
        members: [
            { initials: 'MP', name: 'Marcus Park', role: 'Squad Captain • DTC Fashion', id: 'marcus-park' },
            { initials: 'CR', name: 'Claire Rodriguez', role: 'Home Goods Brand', id: 'claire-rodriguez' },
            { initials: 'TS', name: 'Tom Sanders', role: 'Sports Equipment', id: 'tom-sanders' },
            { initials: 'LW', name: 'Lisa Wang', role: 'Beauty Products', id: 'lisa-wang' }
        ],
        activity: [
            { initials: 'MP', name: 'Marcus Park', time: '1 hour ago', message: 'Just cracked the code on TikTok ads - 3.2x ROAS on our latest campaign!' },
            { initials: 'CR', name: 'Claire Rodriguez', time: '6 hours ago', message: 'Launched our subscription model. First 24 hours: 127 signups!' },
            { initials: 'TS', name: 'Tom Sanders', time: '2 days ago', message: 'Supply chain update: Found a new 3PL that cut our shipping costs by 22%' }
        ],
        goals: [
            { completed: false, text: 'Hit $1M monthly revenue' },
            { completed: true, text: 'Launch subscription offering' },
            { completed: false, text: 'Expand to 3 new markets' }
        ]
    },
    'charlie': {
        name: 'Squad Charlie',
        icon: 'fa-brain',
        tagline: 'AI/ML • Seed Stage',
        status: 'Pending',
        statusColor: 'yellow',
        founded: '3 weeks ago',
        description: 'Deep tech founders building intelligent systems. Technical depth meets business velocity. We dive deep into model architecture, data pipelines, and go-to-market for AI products.',
        schedule: 'Every Monday, 4:00 PM EST',
        nextMeeting: 'In 6 days',
        members: [
            { initials: 'RK', name: 'Raj Kumar', role: 'Squad Captain • Computer Vision', id: 'raj-kumar' },
            { initials: 'AM', name: 'Anna Mitchell', role: 'NLP Platform', id: 'anna-mitchell' },
            { initials: 'DL', name: 'David Liu', role: 'ML Infrastructure', id: 'david-liu' }
        ],
        activity: [
            { initials: 'RK', name: 'Raj Kumar', time: '4 hours ago', message: 'Model accuracy jumped to 94.3% with the new training approach!' },
            { initials: 'AM', name: 'Anna Mitchell', time: '1 day ago', message: 'Closed our first enterprise pilot with a Fortune 500' },
            { initials: 'DL', name: 'David Liu', time: '3 days ago', message: 'Open-sourced our data pipeline tool - already 200 stars on GitHub' }
        ],
        goals: [
            { completed: false, text: 'Close seed round' },
            { completed: true, text: 'Ship v1.0' },
            { completed: false, text: 'Land 10 pilot customers' }
        ]
    }
};

// Load squad detail based on URL parameter
function loadSquadDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const squadId = urlParams.get('squad') || 'alpha';
    const squad = squadData[squadId];
    
    if (!squad) {
        window.location.href = 'squads.html';
        return;
    }
    
    // Update header
    document.getElementById('squad-icon').className = `fas ${squad.icon} text-white text-2xl`;
    document.getElementById('squad-name').textContent = squad.name;
    document.getElementById('squad-tagline').textContent = squad.tagline;
    
    // Update status
    const statusElement = document.getElementById('squad-status');
    statusElement.textContent = squad.status;
    statusElement.className = `px-3 py-1 bg-${squad.statusColor}-100 text-${squad.statusColor}-700 text-sm rounded`;
    
    // Update description
    document.getElementById('squad-description').textContent = squad.description;
    
    // Update schedule info
    document.querySelector('.grid-cols-2 .text-text-primary').textContent = squad.schedule;
    document.querySelectorAll('.grid-cols-2 .text-text-primary')[1].textContent = squad.nextMeeting;
    
    // Update members
    const membersContainer = document.querySelector('.space-y-3');
    membersContainer.innerHTML = squad.members.map(member => `
        <div class="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 -m-2 rounded transition-all" onclick="viewFounderProfile('${member.id}')">
            <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">${member.initials}</div>
            <div class="flex-1">
                <h4 class="font-medium text-text-primary">${member.name}</h4>
                <p class="text-xs text-text-muted">${member.role}</p>
            </div>
        </div>
    `).join('');
    
    // Update member count
    const memberCountElement = membersContainer.nextElementSibling.querySelector('p');
    memberCountElement.textContent = `${squad.members.length}/5 seats filled`;
    
    // Update activity feed
    const activityContainer = document.querySelector('.bg-card-bg .space-y-4');
    activityContainer.innerHTML = squad.activity.map((activity, index) => `
        <div class="flex items-start gap-3 ${index < squad.activity.length - 1 ? 'pb-4 border-b border-border' : ''}">
            <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">${activity.initials}</div>
            <div class="flex-1">
                <div class="flex items-center justify-between">
                    <h4 class="font-medium text-text-primary">${activity.name}</h4>
                    <span class="text-xs text-text-muted">${activity.time}</span>
                </div>
                <p class="text-sm text-text-secondary mt-1">${activity.message}</p>
            </div>
        </div>
    `).join('');
    
    // Update goals
    const goalsContainer = document.querySelector('.bg-card-bg:last-child .space-y-3');
    goalsContainer.innerHTML = squad.goals.map(goal => `
        <div class="flex items-start gap-3">
            ${goal.completed 
                ? '<div class="w-5 h-5 rounded bg-primary mt-0.5 flex items-center justify-center"><i class="fas fa-check text-white text-xs"></i></div>'
                : '<div class="w-5 h-5 rounded border-2 border-primary mt-0.5"></div>'
            }
            <div class="flex-1">
                <p class="text-sm text-text-primary ${goal.completed ? 'line-through text-text-muted' : ''}">${goal.text}</p>
            </div>
        </div>
    `).join('');
}