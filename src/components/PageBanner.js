import React from 'react'
import './css/PageBanner.css'

export default function PageBanner({ title, description }) {
    return (
        <div id="PageBannerCtr">
            <div id="PageBannerTitle">{title}</div>
            <div id="PageBannerDescription">{description}</div>
        </div>
    )
}
