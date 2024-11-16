import React from 'react'
const FacilitiesUi = ({icon, facilityName}:{icon:never, facilityName:string}) => {
    return (
      <div className="flex items-center gap-[0.375rem]">
        <img src={icon} className="w-[1.25rem] h-[1.25rem]" />
        <span className="font-medium text-lg text-greyAsh">{facilityName}</span>
      </div>
    );
}
export default React.memo(FacilitiesUi)