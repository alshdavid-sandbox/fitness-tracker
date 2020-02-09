import { DateItem, WorkoutItem } from './components';
import { useExercises } from './hooks/use-exercises';
import { Fragment, h } from 'preact';
import './workouts.scss';
import { For, Navbar, Fab, Toolbar, ToolbarItem } from '~/gui/components'
import { useService } from '~/gui/services'
import workout from "~/platform/workout"

export const WorkoutsPage = () => {
  const { router } = useService()
  const { exercises } = useExercises()

  return <div className="page-workouts">
    <Navbar
      title="Workouts"
      icon="search"
      onClick={() => alert('search')} />

    <div className="workouts">
      <For items={exercises}>{item => <Fragment>
        <DateItem dateString={item.date} />
        <For items={item.exercises}>{e => 
          <WorkoutItem
            title={e.movement}
            subtitle={workout.exerciseSummary(e)}
            liftdex={workout.calculateLiftdex(e)} />
        }</For>
      </Fragment>}</For>
    </div>

    <Fab 
      icon="plus" 
      onClick={() => router.navigate('/workouts/add')} />

    <Toolbar>
      <ToolbarItem
        icon="dumbbell"
        text="Workouts"
        isActive={window.location.pathname === "/workouts"}
        onClick={() => router.navigate("/workouts")} />
      <ToolbarItem
        icon="weight"
        text="Measure"
        isActive={window.location.pathname === "/measure"}
        onClick={() => router.navigate("/measure")} />
      <ToolbarItem
        icon="cookie-bite"
        text="Calories"
        isActive={window.location.pathname === "/calories"}
        onClick={() => router.navigate("/calories")} />
    </Toolbar>
  </div>
}
