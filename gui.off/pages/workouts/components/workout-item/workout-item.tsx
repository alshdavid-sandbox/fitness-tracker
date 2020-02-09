import './workout-item.scss'
import { h } from "preact";

type WorkoutItemProps = {
  title: string
  subtitle: string
  liftdex: number
}

export const WorkoutItem = ({
  title = 'No Movement',
  subtitle = 'No Set Data',
  liftdex,
}: WorkoutItemProps) => (
  <div className="component-workout-item">
    <div className="score">
      <i className="fas fa-star"></i>
      <p>{liftdex}</p>
    </div>
    <div className="details">
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
    </div>
  </div>
)