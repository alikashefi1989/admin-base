import React from "react";
import ValidLayout from "../components/ui-layout/ValidLayout"

function ValidationGate(component: any) {
    return <ValidLayout>{component}</ValidLayout>
}

export default ValidationGate