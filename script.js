// Sample data (Replace with actual backend data)
const clubs = [
    {
        id: 1,
        name: "GeeksforGeeks Club",
        category: "tech",
        description: "Join the largest student coding community. Practice DSA, participate in contests, and enhance your coding skills.",
        members: 75,
        maxMembers: 100,
        image: "images/GeekforGeeks.webp",
        founded: "January 15, 2023",
        meetingSchedule: "Every Monday and Wednesday, 5:00 PM - 7:00 PM",
        location: "Computer Science Building, Lab 301",
        president: "Rahul Sharma",
        vicePresident: "Ananya Patel",
        secretary: "Dev Kumar",
        faculty_advisor: "Dr. Priya Patel",
        email: "gfg.club@college.edu",
        requirements: [
            "Basic programming knowledge",
            "Commitment to attend weekly sessions",
            "Enthusiasm to learn and collaborate"
        ],
        activities: [
            "Weekly DSA practice sessions",
            "Competitive programming contests",
            "Interview preparation workshops",
            "Technical paper presentations",
            "Industry expert talks"
        ],
        achievements: [
            "Highest participation in GFG college contests 2023",
            "100+ students placed through GFG practice",
            "Best coding club award 2023"
        ],
        openPositions: [
            {
                role: "Web Development Lead",
                seats: 2,
                requirements: "Experience with React/Node.js"
            },
            {
                role: "Competitive Programming Mentor",
                seats: 3,
                requirements: "Good contest rating on coding platforms"
            }
        ],
        upcomingEvents: [
            {
                name: "Code Sprint 2024",
                date: "March 15, 2024",
                type: "Competition"
            },
            {
                name: "Web Dev Workshop",
                date: "March 20, 2024",
                type: "Workshop"
            }
        ]
    },
    {
        id: 2,
        name: "Swift Coding Club",
        category: "tech",
        description: "Learn iOS app development, Swift programming, and build amazing mobile applications.",
        members: 40,
        maxMembers: 60,
        image: "images/swift coding.png",
        founded: "March 10, 2023",
        meetingSchedule: "Every Tuesday, 4:00 PM - 6:00 PM",
        location: "Innovation Lab, Room 202",
        president: "Aisha Khan",
        vicePresident: "John Smith",
        secretary: "Priya Verma",
        faculty_advisor: "Prof. James Wilson",
        email: "swift.club@college.edu",
        requirements: [
            "Interest in mobile app development",
            "Basic programming knowledge",
            "Own a laptop for development"
        ],
        activities: [
            "iOS app development workshops",
            "Swift programming basics",
            "UI/UX design sessions",
            "App Store deployment training",
            "Apple WWDC watch parties"
        ],
        achievements: [
            "5 student apps published on App Store",
            "Winner of Apple Student Challenge 2023",
            "Best Mobile App Award at Tech Fest 2023"
        ],
        openPositions: [
            {
                role: "iOS Development Lead",
                seats: 1,
                requirements: "Experience with Swift and iOS development"
            },
            {
                role: "UI/UX Designer",
                seats: 2,
                requirements: "Knowledge of design principles and tools"
            }
        ],
        upcomingEvents: [
            {
                name: "iOS App Workshop",
                date: "March 25, 2024",
                type: "Workshop"
            },
            {
                name: "App Design Sprint",
                date: "April 5, 2024",
                type: "Competition"
            }
        ]
    },
    {
        id: 3,
        name: "IEEE Student Branch",
        category: "tech",
        description: "Be part of the world's largest technical professional organization. Access global resources and networking opportunities.",
        members: 90,
        maxMembers: 120,
        image: "images/ieee.webp",
        founded: "February 1, 2022",
        meetingSchedule: "Every Friday, 3:00 PM - 5:00 PM",
        location: "Engineering Block, Conference Room",
        president: "Maya Desai",
        vicePresident: "Alex Thompson",
        secretary: "Raj Kumar",
        faculty_advisor: "Dr. Robert Chen",
        email: "ieee.branch@college.edu",
        requirements: [
            "Interest in technology and research",
            "Willingness to participate in events",
            "Academic excellence"
        ],
        activities: [
            "Technical paper writing workshops",
            "IEEE conference participations",
            "Research project mentoring",
            "Industry visits",
            "Technical symposiums"
        ],
        achievements: [
            "Best Student Branch Award 2023",
            "Published 15 research papers",
            "Hosted International Technical Conference"
        ],
        openPositions: [
            {
                role: "Research Coordinator",
                seats: 2,
                requirements: "Strong research background"
            },
            {
                role: "Event Manager",
                seats: 1,
                requirements: "Good organizational skills"
            }
        ],
        upcomingEvents: [
            {
                name: "Technical Paper Workshop",
                date: "March 30, 2024",
                type: "Workshop"
            },
            {
                name: "IEEE Conference",
                date: "April 15, 2024",
                type: "Conference"
            }
        ]
    },
    {
        id: 4,
        name: "CodeChef Campus Chapter",
        category: "tech",
        description: "Master competitive programming, solve challenging problems, and compete in global contests.",
        members: 60,
        maxMembers: 80,
        image: "images/codechef.jpg",
        founded: "April 5, 2023",
        meetingSchedule: "Every Thursday, 5:00 PM - 7:00 PM",
        location: "Computer Center, Lab 401",
        president: "Arjun Reddy",
        vicePresident: "Sarah Wilson",
        secretary: "Neha Gupta",
        faculty_advisor: "Prof. Lisa Zhang",
        email: "codechef.chapter@college.edu",
        requirements: [
            "Basic knowledge of algorithms",
            "Problem-solving skills",
            "Commitment to practice"
        ],
        activities: [
            "Weekly coding contests",
            "Algorithm workshops",
            "Contest problem solving sessions",
            "Mock interviews",
            "Code review meetups"
        ],
        achievements: [
            "Top 10 in CodeChef College Rankings",
            "3 students qualified for ACM ICPC",
            "Best Competitive Programming Club 2023"
        ],
        openPositions: [
            {
                role: "Contest Coordinator",
                seats: 2,
                requirements: "Experience in competitive programming"
            },
            {
                role: "Training Lead",
                seats: 1,
                requirements: "Strong teaching and coding skills"
            }
        ],
        upcomingEvents: [
            {
                name: "Monthly Contest",
                date: "March 20, 2024",
                type: "Competition"
            },
            {
                name: "DSA Workshop",
                date: "April 1, 2024",
                type: "Workshop"
            }
        ]
    },
    {
        id: 5,
        name: "Photography Club",
        description: "Capture moments and learn photography techniques. Regular photo walks and equipment workshops.",
        members: 30,
        image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        founded: "March 3, 2019",
        meetingSchedule: "Every Wednesday, 3:00 PM - 5:00 PM",
        location: "Arts Building, Studio 2",
        president: "Emma Davis",
        faculty_advisor: "Prof. Michael Chen",
        activities: [
            "Weekly photo critiques",
            "Monthly photo walks",
            "Equipment workshops",
            "Photography exhibitions",
            "Guest photographer sessions"
        ],
        achievements: [
            "Best College Photography Club Award 2023",
            "Published photography book featuring student work",
            "Annual exhibition at City Art Gallery"
        ]
    },
    {
        id: 6,
        name: "Debate Club",
        description: "Enhance your public speaking and argumentation skills. Participate in inter-college debate competitions.",
        members: 25,
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 7,
        name: "Music Club",
        description: "Express yourself through music. Regular jam sessions, concerts, and music theory workshops.",
        members: 40,
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 8,
        name: "Sports Club",
        description: "Stay active and healthy. Multiple sports teams and regular tournaments.",
        members: 60,
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
        id: 9,
        name: "Art & Design Club",
        description: "Explore your creativity through various art forms. Regular exhibitions and workshops.",
        members: 35,
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
];

const events = [
    {
        id: 1,
        name: "Code Hackathon 2024",
        date: "2024-04-15",
        time: "09:00 AM - 09:00 PM",
        club: "Programming Club",
        description: "24-hour coding competition to solve real-world problems. Great prizes to be won!",
        location: "Computer Science Building, Lab 401",
        image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        seats: 50,
        registeredCount: 32
    },
    {
        id: 2,
        name: "Photography Workshop",
        date: "2024-04-20",
        time: "02:00 PM - 06:00 PM",
        club: "Photography Club",
        description: "Learn professional photography techniques with hands-on experience. Bring your own camera.",
        location: "Arts Center, Room 201",
        image: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        seats: 30,
        registeredCount: 18
    },
    {
        id: 3,
        name: "Annual Music Festival",
        date: "2024-05-01",
        time: "05:00 PM - 10:00 PM",
        club: "Music Club",
        description: "A night of live performances featuring talented musicians from our college. All genres welcome!",
        location: "College Auditorium",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        seats: 200,
        registeredCount: 145
    },
    {
        id: 4,
        name: "Debate Championship",
        date: "2024-05-10",
        time: "10:00 AM - 04:00 PM",
        club: "Debate Club",
        description: "Inter-college debate competition on contemporary social issues. Show your oratory skills!",
        location: "Main Conference Hall",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        seats: 40,
        registeredCount: 28
    },
    {
        id: 5,
        name: "Art Exhibition",
        date: "2024-05-15",
        time: "11:00 AM - 07:00 PM",
        club: "Art & Design Club",
        description: "Annual art exhibition showcasing student artwork. Various mediums including paintings, sculptures, and digital art.",
        location: "College Art Gallery",
        image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        seats: 100,
        registeredCount: 65
    },
    {
        id: 6,
        name: "Sports Tournament",
        date: "2024-05-20",
        time: "09:00 AM - 06:00 PM",
        club: "Sports Club",
        description: "Inter-department sports tournament featuring football, basketball, and volleyball competitions.",
        location: "College Sports Complex",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        seats: 150,
        registeredCount: 98
    }
];

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const clubsGrid = document.querySelector('.clubs-grid');
const eventsGrid = document.querySelector('.events-grid');
const notificationsList = document.querySelector('.notifications-list');

// Mobile Navigation
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Authentication State Management
let currentUser = null;

// Check if user is already logged in on page load
document.addEventListener('DOMContentLoaded', () => {
    checkLoginState();
});

// Function to check login state
function checkLoginState() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        updateUIForLoggedInUser(currentUser);
    }
}

// Function to update UI based on login state
function updateUIForLoggedInUser(user) {
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.textContent = 'Logout';
        loginBtn.onclick = function(e) {
            e.preventDefault();
            handleLogout();
        };
    }

    // Add user's name to navbar if it exists
    const navLinks = document.querySelector('.nav-links');
    if (!document.querySelector('.user-welcome')) {
        const welcomeText = document.createElement('li');
        welcomeText.className = 'user-welcome';
        welcomeText.textContent = `Welcome, ${user.name}`;
        navLinks.insertBefore(welcomeText, loginBtn.parentElement);
    }
}

// Function to handle login
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.querySelector('#loginForm input[type="email"]').value;
    const password = document.querySelector('#loginForm input[type="password"]').value;

    // Basic validation
    if (!email || !password) {
        showError('Please fill in all fields');
        return;
    }

    // Create user object
    const user = {
        email: email,
        name: email.split('@')[0], // Using email username as display name
        timestamp: new Date().toISOString()
    };

    // Store in localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
    currentUser = user;

    // Update UI
    updateUIForLoggedInUser(user);
    
    // Close modal
    toggleModal('loginModal');
    
    // Clear form
    document.getElementById('loginForm').reset();

    // Show success message
    showSuccess('Successfully logged in!');
}

// Function to handle logout
function handleLogout() {
    // Clear localStorage
    localStorage.removeItem('currentUser');
    currentUser = null;

    // Update UI
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.textContent = 'Login';
        loginBtn.onclick = function(e) {
            e.preventDefault();
            toggleModal('loginModal');
        };
    }

    // Remove welcome message
    const welcomeText = document.querySelector('.user-welcome');
    if (welcomeText) {
        welcomeText.remove();
    }

    showSuccess('Successfully logged out!');
}

// Function to handle registration
function handleRegister(event) {
    event.preventDefault();
    
    const name = document.querySelector('#registerForm input[type="text"]').value;
    const email = document.querySelector('#registerForm input[type="email"]').value;
    const password = document.querySelector('#registerForm input[type="password"]').value;
    const confirmPassword = document.querySelector('#registerForm input[placeholder="Confirm Password"]').value;

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
        showError('Please fill in all fields');
        return;
    }

    if (password !== confirmPassword) {
        showError('Passwords do not match');
        return;
    }

    // Store user data
    const user = {
        name: name,
        email: email,
        timestamp: new Date().toISOString()
    };

    // Store in localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
    currentUser = user;

    // Update UI
    updateUIForLoggedInUser(user);
    
    // Close modal
    toggleModal('registerModal');
    
    // Clear form
    document.getElementById('registerForm').reset();

    // Show success message
    showSuccess('Successfully registered and logged in!');
}

// Function to show error messages
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-error';
    errorDiv.textContent = message;
    
    // Remove any existing alerts
    removeAlerts();
    
    // Add new alert
    document.body.insertBefore(errorDiv, document.body.firstChild);
    
    // Remove after 3 seconds
    setTimeout(() => errorDiv.remove(), 3000);
}

// Function to show success messages
function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success';
    successDiv.textContent = message;
    
    // Remove any existing alerts
    removeAlerts();
    
    // Add new alert
    document.body.insertBefore(successDiv, document.body.firstChild);
    
    // Remove after 3 seconds
    setTimeout(() => successDiv.remove(), 3000);
}

// Function to remove existing alerts
function removeAlerts() {
    const existingAlerts = document.querySelectorAll('.alert');
    existingAlerts.forEach(alert => alert.remove());
}

// Add event listeners to forms
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});

// Modal toggle function
function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Scroll to Clubs Section
function scrollToClubs() {
    document.getElementById('clubs').scrollIntoView({ behavior: 'smooth' });
}

// Scroll to Departments Section
function scrollToDepartments() {
    document.getElementById('departments').scrollIntoView({ behavior: 'smooth' });
}

// Show Club Details Function
function showClubDetails(clubId) {
    const club = clubs.find(c => c.id === clubId);
    if (!club) return;

    const activitiesList = club.activities.map(activity => `<li>${activity}</li>`).join('');
    const achievementsList = club.achievements.map(achievement => `<li>${achievement}</li>`).join('');
    const requirementsList = club.requirements.map(req => `<li>${req}</li>`).join('');
    const openPositionsList = club.openPositions.map(position => `
        <div class="position-card">
            <h4>${position.role}</h4>
            <p><strong>Seats:</strong> ${position.seats}</p>
            <p><strong>Requirements:</strong> ${position.requirements}</p>
        </div>
    `).join('');
    const upcomingEventsList = club.upcomingEvents.map(event => `
        <div class="event-item">
            <span class="event-name">${event.name}</span>
            <span class="event-date">${event.date}</span>
            <span class="event-type">${event.type}</span>
        </div>
    `).join('');

    const modalContent = `
        <div class="club-details-header">
            <img src="${club.image}" alt="${club.name}">
            <h2>${club.name}</h2>
        </div>
        <div class="club-details-content">
            <div class="club-info-section">
                <h3>About the Club</h3>
                <p>${club.description}</p>
                <div class="club-meta">
                    <p><strong>Founded:</strong> ${club.founded}</p>
                    <p><strong>Members:</strong> ${club.members}/${club.maxMembers}</p>
                    <p><strong>Meeting Schedule:</strong> ${club.meetingSchedule}</p>
                    <p><strong>Location:</strong> ${club.location}</p>
                    <p><strong>Email:</strong> ${club.email}</p>
                </div>
            </div>
            
            <div class="club-leadership">
                <h3>Leadership</h3>
                <div class="leadership-grid">
                    <div class="leader-card">
                        <i class="fas fa-user-tie"></i>
                        <h4>President</h4>
                        <p>${club.president}</p>
                    </div>
                    <div class="leader-card">
                        <i class="fas fa-user"></i>
                        <h4>Vice President</h4>
                        <p>${club.vicePresident}</p>
                    </div>
                    <div class="leader-card">
                        <i class="fas fa-user"></i>
                        <h4>Secretary</h4>
                        <p>${club.secretary}</p>
                    </div>
                    <div class="leader-card">
                        <i class="fas fa-chalkboard-teacher"></i>
                        <h4>Faculty Advisor</h4>
                        <p>${club.faculty_advisor}</p>
                    </div>
                </div>
            </div>

            <div class="club-requirements">
                <h3>Membership Requirements</h3>
                <ul>${requirementsList}</ul>
            </div>

            <div class="club-activities">
                <h3>Activities</h3>
                <ul>${activitiesList}</ul>
            </div>

            <div class="club-achievements">
                <h3>Achievements</h3>
                <ul>${achievementsList}</ul>
            </div>

            <div class="open-positions">
                <h3>Open Positions</h3>
                <div class="positions-grid">
                    ${openPositionsList}
                </div>
            </div>

            <div class="upcoming-events">
                <h3>Upcoming Events</h3>
                <div class="events-list">
                    ${upcomingEventsList}
                </div>
            </div>

            ${!isLoggedIn() ? 
                `<p class="join-prompt">Please <a href="#" onclick="toggleModal('loginModal')">login</a> to join this club.</p>` :
                `<button onclick="joinClub(${club.id})" class="join-btn full-width">Join Club</button>`
            }
        </div>
    `;

    document.querySelector('#clubDetailsModal .modal-content').innerHTML = modalContent;
    toggleModal('clubDetailsModal');
}

// Update the renderClubs function to add click event
function renderClubs() {
    clubsGrid.innerHTML = clubs.map(club => `
        <div class="club-card fade-in" data-club-id="${club.id}" onclick="showClubDetails(${club.id})">
            <img src="${club.image}" alt="${club.name}">
            <h3>${club.name}</h3>
            <p>${club.description}</p>
            <div class="club-stats">
                <span>${club.members} members</span>
                <button onclick="event.stopPropagation(); joinClub(${club.id})" class="join-btn">Join Club</button>
            </div>
        </div>
    `).join('');
}

// Render Events
function renderEvents() {
    eventsGrid.innerHTML = events.map(event => `
        <div class="event-card fade-in">
            <div class="event-image">
                <img src="${event.image}" alt="${event.name}">
                <div class="event-date">
                    <span class="date">${new Date(event.date).getDate()}</span>
                    <span class="month">${new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                </div>
            </div>
            <div class="event-content">
                <h3>${event.name}</h3>
                <p class="event-description">${event.description}</p>
                <div class="event-details">
                    <span><i class="fas fa-clock"></i> ${event.time}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${event.location}</span>
                    <span><i class="fas fa-users"></i> ${event.club}</span>
                </div>
                <div class="event-stats">
                    <div class="seats-progress">
                        <div class="progress-bar">
                            <div class="progress" style="width: ${(event.registeredCount / event.seats) * 100}%"></div>
                        </div>
                        <span class="seats-text">${event.seats - event.registeredCount} seats left</span>
                    </div>
                    <button onclick="registerForEvent(${event.id})" class="register-btn">Register Now</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Format date
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Update joinClub function
function joinClub(clubId) {
    if (!isLoggedIn()) {
        toggleModal('loginModal');
        return;
    }
    
    // Store the current club ID for the application
    localStorage.setItem('currentClubApplication', clubId);
    
    // Show application form
    toggleModal('clubApplicationModal');
}

// Handle file upload
const fileInput = document.getElementById('cv');
const fileLabel = document.querySelector('.file-name');
const dropZone = document.querySelector('.file-upload');

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        updateFileName(file);
    }
});

// Drag and drop functionality
dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    
    const file = e.dataTransfer.files[0];
    if (file && file.type === 'application/pdf') {
        fileInput.files = e.dataTransfer.files;
        updateFileName(file);
    } else {
        alert('Please upload a PDF file');
    }
});

function updateFileName(file) {
    fileLabel.textContent = file.name;
}

// Handle form submission
document.getElementById('clubApplicationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const clubId = localStorage.getItem('currentClubApplication');
    const club = clubs.find(c => c.id === parseInt(clubId));
    
    const formData = new FormData(e.target);
    const applicationData = {
        id: Date.now().toString(), // Unique ID for the application
        name: formData.get('fullName'),
        email: formData.get('email'),
        studentId: formData.get('studentId'),
        phoneNumber: formData.get('phoneNumber'),
        yearOfStudy: formData.get('yearOfStudy'),
        interests: formData.get('interests'),
        whyJoin: formData.get('whyJoin'),
        experience: formData.get('experience'),
        clubId: clubId,
        clubName: club.name,
        timestamp: new Date().toISOString(),
        status: 'pending'
    };

    // Get existing applications or initialize empty array
    const existingApplications = JSON.parse(localStorage.getItem('clubApplications')) || [];
    
    // Add new application
    existingApplications.push(applicationData);
    
    // Save back to localStorage
    localStorage.setItem('clubApplications', JSON.stringify(existingApplications));
    
    // Show success message
    showSuccess(`Application submitted successfully for ${club.name}!`);
    
    // Add notification
    addNotification(`Your application for ${club.name} has been submitted and is under review.`);
    
    // Close the modal and reset form
    toggleModal('clubApplicationModal');
    e.target.reset();
    const fileLabel = document.querySelector('.file-name');
    if (fileLabel) {
        fileLabel.textContent = '';
    }
});

// Register for Event Function
function registerForEvent(eventId) {
    if (!isLoggedIn()) {
        toggleModal('loginModal');
        return;
    }
    
    const event = events.find(e => e.id === eventId);
    if (!event) {
        showError('Event not found!');
        return;
    }

    // Get current user
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) {
        showError('User information not found. Please log in again.');
        return;
    }

    // Check if user is already registered
    const existingRegistrations = JSON.parse(localStorage.getItem('eventRegistrations')) || [];
    const alreadyRegistered = existingRegistrations.some(reg => 
        reg.eventId === eventId && reg.email === user.email
    );

    if (alreadyRegistered) {
        showError('You are already registered for this event!');
        return;
    }

    // Create registration object
    const registration = {
        id: Date.now().toString(),
        eventId: eventId,
        eventName: event.name,
        name: user.name,
        email: user.email,
        timestamp: new Date().toISOString(),
        status: 'registered'
    };

    // Add to localStorage
    existingRegistrations.push(registration);
    localStorage.setItem('eventRegistrations', JSON.stringify(existingRegistrations));

    // Update event's registered count
    event.registeredCount++;
    
    // Show success message
    showSuccess('Successfully registered for the event!');
    addNotification(`You have registered for ${event.name}`);

    // Refresh events display
    renderEvents();
}

// Check Login Status
function isLoggedIn() {
    return localStorage.getItem('currentUser') !== null;
}

// Add Notification
function addNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification fade-in';
    notification.innerHTML = `
        <p>${message}</p>
        <span class="notification-time">${new Date().toLocaleTimeString()}</span>
    `;
    notificationsList.prepend(notification);
}

// Club Categories Tab Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const clubCategories = document.querySelectorAll('.club-category');

    // Show all clubs initially
    showCategory('all');

    // Add click event listeners to tab buttons
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            // Show selected category
            showCategory(btn.dataset.category);
        });
    });

    // Add click event listeners to all club cards
    document.querySelectorAll('.club-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent click if the join button was clicked
            if (!e.target.classList.contains('join-btn')) {
                const clubId = parseInt(card.dataset.clubId);
                if (clubId) {
                    showClubDetails(clubId);
                }
            }
        });
    });

    function showCategory(category) {
        clubCategories.forEach(cat => {
            if (category === 'all') {
                cat.style.display = 'grid';
            } else {
                if (cat.id === `${category}-clubs`) {
                    cat.style.display = 'grid';
                } else {
                    cat.style.display = 'none';
                }
            }
        });
    }
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderClubs();
    renderEvents();
}); 