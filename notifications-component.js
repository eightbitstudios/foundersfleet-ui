// Notifications component for FoundersFleet
let notificationsOpen = false;

function toggleNotifications() {
    notificationsOpen = !notificationsOpen;
    
    if (notificationsOpen) {
        showNotificationsDropdown();
    } else {
        hideNotificationsDropdown();
    }
}

function showNotificationsDropdown() {
    // Check if dropdown already exists
    let dropdown = document.getElementById('notifications-dropdown');
    if (dropdown) {
        dropdown.remove();
    }
    
    // Create dropdown
    dropdown = document.createElement('div');
    dropdown.id = 'notifications-dropdown';
    dropdown.className = 'fixed left-24 bottom-20 w-96 bg-white rounded-lg shadow-xl border border-border z-50';
    dropdown.innerHTML = `
        <div class="p-4 border-b border-border">
            <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-text-primary">Notifications</h3>
                <button onclick="markAllRead()" class="text-sm text-primary hover:text-primary-hover transition-all">
                    Mark all read
                </button>
            </div>
        </div>
        
        <div class="max-h-96 overflow-y-auto">
            <!-- Notification Items -->
            <div class="notification-item border-b border-border p-4 hover:bg-gray-50 transition-all cursor-pointer" onclick="handleNotificationClick('squad-detail.html?squad=alpha')">
                <div class="flex gap-3">
                    <div class="flex-shrink-0">
                        <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <i class="fas fa-users text-white text-sm"></i>
                        </div>
                    </div>
                    <div class="flex-1">
                        <p class="text-sm text-text-primary font-medium">Squad Alpha meeting in 30 minutes</p>
                        <p class="text-xs text-text-secondary mt-1">Don't forget to prepare your weekly update</p>
                        <p class="text-xs text-text-muted mt-2">30 minutes ago</p>
                    </div>
                    <div class="flex-shrink-0">
                        <div class="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                </div>
            </div>
            
            <div class="notification-item border-b border-border p-4 hover:bg-gray-50 transition-all cursor-pointer" onclick="handleNotificationClick('founder-profile.html?founder=sarah-chen')">
                <div class="flex gap-3">
                    <div class="flex-shrink-0">
                        <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                            <span class="text-green-700 font-semibold">SC</span>
                        </div>
                    </div>
                    <div class="flex-1">
                        <p class="text-sm text-text-primary font-medium">Sarah Chen completed a mission</p>
                        <p class="text-xs text-text-secondary mt-1">Customer Discovery Sprint ✓</p>
                        <p class="text-xs text-text-muted mt-2">2 hours ago</p>
                    </div>
                    <div class="flex-shrink-0">
                        <div class="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                </div>
            </div>
            
            <div class="notification-item border-b border-border p-4 hover:bg-gray-50 transition-all cursor-pointer bg-gray-50" onclick="handleNotificationClick('messages.html')">
                <div class="flex gap-3">
                    <div class="flex-shrink-0">
                        <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <i class="fas fa-comment text-blue-600 text-sm"></i>
                        </div>
                    </div>
                    <div class="flex-1">
                        <p class="text-sm text-text-primary font-medium">New message from Marcus Park</p>
                        <p class="text-xs text-text-secondary mt-1">"Hey, great insights on the pricing strategy!"</p>
                        <p class="text-xs text-text-muted mt-2">Yesterday</p>
                    </div>
                </div>
            </div>
            
            <div class="notification-item border-b border-border p-4 hover:bg-gray-50 transition-all cursor-pointer bg-gray-50" onclick="handleNotificationClick('objective-detail.html?objective=mvp-development')">
                <div class="flex gap-3">
                    <div class="flex-shrink-0">
                        <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                            <i class="fas fa-flag text-purple-600 text-sm"></i>
                        </div>
                    </div>
                    <div class="flex-1">
                        <p class="text-sm text-text-primary font-medium">New mission unlocked!</p>
                        <p class="text-xs text-text-secondary mt-1">You can now start "Build Your MVP"</p>
                        <p class="text-xs text-text-muted mt-2">2 days ago</p>
                    </div>
                </div>
            </div>
            
            <div class="notification-item p-4 hover:bg-gray-50 transition-all cursor-pointer bg-gray-50" onclick="handleNotificationClick('squad-detail.html?squad=alpha')">
                <div class="flex gap-3">
                    <div class="flex-shrink-0">
                        <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                            <i class="fas fa-calendar text-orange-600 text-sm"></i>
                        </div>
                    </div>
                    <div class="flex-1">
                        <p class="text-sm text-text-primary font-medium">Weekly squad check-in scheduled</p>
                        <p class="text-xs text-text-secondary mt-1">Thursday at 2:00 PM EST</p>
                        <p class="text-xs text-text-muted mt-2">3 days ago</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="p-3 border-t border-border">
            <a href="notifications.html" class="block text-center text-sm text-primary hover:text-primary-hover transition-all">
                View all notifications
            </a>
        </div>
    `;
    
    document.body.appendChild(dropdown);
    
    // Add click outside handler
    setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
    }, 100);
}

function hideNotificationsDropdown() {
    const dropdown = document.getElementById('notifications-dropdown');
    if (dropdown) {
        dropdown.remove();
    }
    document.removeEventListener('click', handleClickOutside);
}

function handleClickOutside(event) {
    const dropdown = document.getElementById('notifications-dropdown');
    const notificationButton = event.target.closest('button[onclick="toggleNotifications()"]');
    
    if (dropdown && !dropdown.contains(event.target) && !notificationButton) {
        notificationsOpen = false;
        hideNotificationsDropdown();
    }
}

function handleNotificationClick(url) {
    window.location.href = url;
}

function markAllRead() {
    // Remove all unread indicators
    const unreadDots = document.querySelectorAll('.notification-item .bg-primary.rounded-full');
    unreadDots.forEach(dot => dot.style.display = 'none');
    
    // Remove badge from bell icon
    const badge = document.getElementById('notification-badge');
    if (badge) {
        badge.style.display = 'none';
    }
    
    // Change background of unread items
    const unreadItems = document.querySelectorAll('.notification-item:not(.bg-gray-50)');
    unreadItems.forEach(item => item.classList.add('bg-gray-50'));
}

// Initialize notification badge visibility based on unread count
function updateNotificationBadge() {
    const badge = document.getElementById('notification-badge');
    // In a real app, this would check actual unread count
    // For now, we'll show it by default
    if (badge) {
        badge.style.display = 'block';
    }
}

// Call this when the page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateNotificationBadge);
} else {
    updateNotificationBadge();
}