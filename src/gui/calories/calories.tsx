import { h } from "preact";
import { useMemo } from "preact/hooks";
import { NavbarAction, FabAction } from "../shared/components";

export const Calories = (navbar: NavbarAction, fab: FabAction) => () => {
    useMemo(() => navbar.clear())
    useMemo(() => fab.clear())

    return <div>
        Calories
    </div>
}