// backend/controllers/fergieController.js

// Simple rule-based AI logic
exports.matchCoachToClubs = async (coachProfile) => {
    const clubs = [
      {
        name: 'Chelsea FC',
        location: 'London',
        roles: ['Youth Coach', 'Tactical Analyst'],
      },
      {
        name: 'FC Barcelona',
        location: 'Spain',
        roles: ['Head Coach', 'Technical Director'],
      },
      {
        name: 'Bayern Munich',
        location: 'Germany',
        roles: ['Goalkeeping Coach', 'Fitness Coach'],
      },
      {
        name: 'Ajax FC',
        location: 'Netherlands',
        roles: ['Youth Developer', 'Scouting Coordinator'],
      },
    ];
  
    // Match clubs whose role includes one of coach's skills
    const matches = clubs.filter(club =>
      club.roles.some(role =>
        coachProfile.skills?.some(skill =>
          role.toLowerCase().includes(skill.toLowerCase())
        )
      )
    );
  
    return matches;
  };
  