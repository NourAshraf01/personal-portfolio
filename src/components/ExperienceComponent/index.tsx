import { Box, Button, IconButton, Paper, Tooltip, Typography } from '@mui/material';
import './index.css';
import { useEffect, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';

type ExperienceComponentProps = {
    jobTitle: string;
    companyName: string;
    location: string;
    type: 'Part Time' | 'Internship' | 'Masters' | 'Bachelor';
    fromDate: string;
    toDate: string;
    img: string;
    description: string;
}

const ExperienceComponent = ({ jobTitle, companyName, location, type, fromDate, toDate, img ,description}: ExperienceComponentProps) => {
    const [profile, setProfile] = useState('');
    const [clicked, setClicked] = useState(false);
    const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
    useEffect(() => {
        import(`../../assets/${img}`).then(obj => { console.log(obj); setProfile(obj.default) }).catch(err => console.log(err))
    }, [])

    return (<>
        <Paper elevation={3} sx={{ height: '350px', width: '300px', perspective: '1000px', background: 'transparent', cursor: 'pointer' }} className="card" onClick={() => { setClicked(clicked => !clicked) }}>
            {/* <Box className="view-more">
                <Button>View more</Button>
            </Box> */}
            <Paper sx={{ position: 'relative', borderRadius: '10px' }} className={`inner-card ${clicked ? 'flipped' : ''}`} elevation={3}>
                {/* <div className="go-corner">
                    <div className="go-arrow">
                        →
                    </div>
                </div> */}
                <Box className='card-front' sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                    <Box className="card-img" sx={{ width: '100%', position:'relative',height: '140px', padding: '30px', borderBottom: 'solid 1px #6666662e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img width={'100%'} src={profile} alt="" />
                        <Box className="overlay" color={'white'}>
                            {/* <div className="overlay-content">
                                <a className="hover" href="#!">View Project</a>
                            </div> */}
                            <Button className='view-btn' color={'inherit'} sx={{borderRadius:'20px'}} variant='outlined'>View details</Button>
                        </Box>
                    </Box>

                    <div className="flex-container card-content">
                        <div className="title-type-row" style={{ gap: '2px' }}>
                            <Typography sx={{ fontSize: '18px', textAlign: 'left' }}>{jobTitle}</Typography>
                            <div className="type">
                                <Typography sx={{ fontSize: '14px', whiteSpace: 'nowrap' }}>
                                    {type}
                                </Typography>
                            </div>
                        </div>
                        <div className='extras-row'>
                            {/* <Typography sx={{ flex: 1, fontSize: '10px' }}>{companyName}</Typography> */}
                            <Tooltip sx={{zIndex:9999}} followCursor={true} title={fromDate + ' - ' + toDate} open={tooltipIsOpen}
                                onOpen={() => setTooltipIsOpen(true)}
                                onClose={() => setTooltipIsOpen(false)}>
                                <IconButton color='primary' onClick={(e) => { e.stopPropagation(); e.preventDefault(); setTooltipIsOpen(tooltip => !tooltip) }} sx={{ fontSize: '24px' }}>
                                    <DateRangeIcon fontSize='inherit' />
                                </IconButton>
                            </Tooltip>
                            {/* <Typography sx={{ alignSelf: 'flex-end', fontSize: '10px' }}>{fromDate} - {toDate}</Typography> */}
                            <Box color={'primary'} sx={{ display: 'flex', alignItems: 'center', fontSize: '20px', gap: '2px' }} >
                                <LocationOnIcon fontSize='inherit' color='primary' />
                                <Typography sx={{ flexGrow: 1, fontSize: '12px' }}>{location}</Typography>
                            </Box>
                        </div>
                    </div>
                </Box>
                <Box className='card-back'>
                    <Typography sx={{fontSize:'1.8rem',padding:'10px'}}>{description}</Typography>
                </Box>
            </Paper>
        </Paper>
    </>)
}

export default ExperienceComponent;