import './workouts.scss'
import { h, Fragment } from 'preact';

const DateItem = ({ weekday, date }: any) => <div className="component-date-item">
    <strong>{ weekday }</strong>{ date }
</div>

const WorkoutItem = () => <div className="component-workout-item">
    <div className="score">
        <i className="fas fa-star"></i>
        <p>1,216</p>
    </div>
    <div className="details">
        <p className="title">Flat Barbell Bench Press</p>
        <p className="subtitle">4 Reps x 4 Sets x 76kg</p>
    </div>
</div>

const Navbar = () => <nav className="component-workouts-navbar">
    <div className="active">Recent</div>
    <div>Overview</div>
</nav>

const ScrollView = ({ children, bottom, name }: any) => {
    return <div
        className={name || ''}>
        { children }
    </div>
}

export const Workouts = () => () => {
    return <div className="component-workouts">
        <Navbar />
        <ScrollView name="exercise-list">
            <DateItem weekday="Tuesday" date="23 April 2019" />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <DateItem weekday="Monday" date="22 April 2019" />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <DateItem weekday="Sunday" date="21 April 2019" />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
            <WorkoutItem />
        </ScrollView>
    </div>
}