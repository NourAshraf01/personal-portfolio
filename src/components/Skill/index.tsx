import { Tooltip } from "@mui/material";
import { useEffect, useState } from "react";

type SkillProps = {
    name: string;
    dims: number;
}
const Skill = ({ name, dims }: SkillProps) => {
    const [profile, setProfile] = useState('');
    const [tooltipIsOpen, setTooltipIsOpen] = useState(false);

    function capitalizeSentence(str: string) {
        return str.split(' ').map((str) => str[0].toUpperCase() + str.substring(1)).join(' ')
    }

    useEffect(() => {
        import(`../../assets/skills/${name.replaceAll(' ', '')}.svg`).then(obj => setProfile(obj.default)).catch(err => console.log(err))

    }, []);
    return (<>

        <Tooltip title={capitalizeSentence(name).replaceAll(' ', '')} followCursor={true} open={tooltipIsOpen}
                                onOpen={() => setTooltipIsOpen(true)}
                                onClose={() => setTooltipIsOpen(false)}>
            <div className="skill" onClick={(e) => { e.stopPropagation(); e.preventDefault(); setTooltipIsOpen(tooltip => !tooltip) }}>
                <img width={dims} height={dims} src={profile} alt="" />
            </div>
        </Tooltip>
    </>)

}

export default Skill;