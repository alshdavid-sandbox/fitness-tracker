import { h } from "preact";
import './workouts-add.scss'
import { Button } from "~/gui/shared/components";
import { Router } from "crayon";

const makeClassName = (className: string, shouldAdd: boolean) => shouldAdd ? className : ''

export const Block = ({ placeholder, children, text, isTitle, hasAction, onClick }: any) => {
    return <div 
        onClick={onClick}
        className={`
            component-workouts-add-block 
            ${makeClassName('has-action', hasAction)}
            ${makeClassName('is-title', isTitle)}
        `}>
        { (!children && !text) && placeholder && <div className="placeholder">{ placeholder }</div> }
        { text && <div className="text">{ text }</div> }
        { children && <div className="text">{ children }</div>  }
    </div>
}

export const WorkoutsAdd = (app: Router) => () => {
    return <div className="component-workouts-add">
        <Block
            onClick={() => app.back()}
            isTitle={true}
            text="Cancel" />
        <Block
            placeholder="Enter Date" 
            hasAction={true}>
            <strong>Tuesday</strong> 23 April 2019
        </Block>
        <Block
            placeholder="Select Movement" 
            hasAction={true} />
        <Block
            placeholder="Add Tags" 
            hasAction={true} />
        <Block
            placeholder="Add Notes" 
            hasAction={true} />
        <Block
            placeholder="Add Sets" 
            hasAction={true} />
        <Button 
            className="submit"
            theme="primary">
            Add Workout
        </Button>
    </div>
}