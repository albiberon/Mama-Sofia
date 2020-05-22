import React from "react";
import InnerPageHeader from "./InnerPageHeader";


function MissionPage() {

    var marginArea = {
        marginTop: '50px',
        marginLeft: '30%',
        marginRight: '30%'
    }

    return <div>
    <InnerPageHeader
imgURL = "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2560x1707/ce250dcce490a07197157b19f207993e/photo-1533777857889-4be7c70b33f7"
name = "Our mission"/>
<div loading="lazy" className = "container-fluid login-section nopadding-container">
    <div style={marginArea}>
    By developing this application we are willing to promote a plant based diet by showing the generic public the the ease of shifting from animal based food sources without losing any taste and comfort. In this way making it easy for the user to make the right choice when it comes to diet for both personal health and decreasing the negative impact on the environment. Hereby the project hopes to help the 13th sustainable development goal of the United Nations (https://www.un.org/sustainabledevelopment/climate-change/). Reducing consumption of animal based products will contribute to the efforts against global warming. In addition, by sharing information such as water consumption, we intent to create awareness on the topic of responsible consumption which is clearly inline with the 12th goal of United Nations.

    </div>

</div>
</div>

};

export default MissionPage;