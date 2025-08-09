import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-content text-center">
        <img 
          src="/octofitapp-small.png" 
          alt="OctoFit Logo" 
          className="welcome-logo mb-4"
        />
        <h1 className="display-4 mb-4">Welcome to OctoFit</h1>
        <p className="lead mb-4">
          Track your fitness journey with Mergington High School's premier fitness application.
          Stay active, compete with friends, and achieve your fitness goals!
        </p>
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="feature-card">
              <h3>Track Activities</h3>
              <p>Log your daily workouts and activities</p>
              <Link to="/activities" className="btn btn-primary">Get Started</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <h3>Join Teams</h3>
              <p>Participate in group activities and challenges</p>
              <Link to="/teams" className="btn btn-primary">Find Teams</Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card">
              <h3>Compete</h3>
              <p>Check the leaderboard and compete with peers</p>
              <Link to="/leaderboard" className="btn btn-primary">View Rankings</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
