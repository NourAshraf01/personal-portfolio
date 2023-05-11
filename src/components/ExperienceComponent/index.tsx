import './index.css';

type ExperienceComponentProps = {
    jobTitle: string;
    companyName: string;
    location: string;
    type: 'Part Time' | 'Internship' | 'Masters' | 'Bachelor';
    fromDate: string;
    toDate: string;

}

const ExperienceComponent = ({jobTitle,companyName,location,type,fromDate,toDate}:ExperienceComponentProps)=>{
    return(<>
        <div className="flex-container">
            <div className="title-type-row">
                <span style={{fontSize:'22px'}}>{jobTitle}</span>
                <div className="type">
                    <span>
                    {type}
                    </span>
                </div>
            </div>
            <div className='extras-row'>
                <span style={{flex:1}}>{companyName}</span>
                <span style={{flexGrow:1}}>{location}</span>
                <span style={{alignSelf:'flex-end'}}>{fromDate} - {toDate}</span>
            </div>
        </div>
    </>)
}

export default ExperienceComponent;