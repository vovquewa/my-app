import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cdn.mos.cms.futurecdn.net/PBimmGT4P5ndQLruoEX5ZF-1920-80.jpg.webp' alt='forest' className={s.image} />
                <div className={s.descriptionBlock}>
                    AVA + Profile
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;