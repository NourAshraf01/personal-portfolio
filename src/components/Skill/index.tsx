import { Tooltip } from "@mui/material";
import { ReactElement, ReactNode } from "react";

type SkillProps = {
    name: string;
    children: ReactElement
}

const Skill = ({name,children}:SkillProps)=>{
    return(<>
    
            <Tooltip title={name} followCursor={true}>
                {children}
            </Tooltip>
    </>)

}

export default Skill;