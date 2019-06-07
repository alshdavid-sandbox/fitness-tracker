import { h } from "preact";
import { useMemo } from "preact/hooks";
import { NavbarAction, FabAction } from "~/gui/shared/components";

export const Weights = (navbar: NavbarAction, fab: FabAction) => () => {
    useMemo(() => navbar.clear())
    useMemo(() => fab.clear())

    return <div>
        Weights
    </div>
}