import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className="Widgets_article">
            <div className="Widgets_article_left">
                <FiberManualRecordIcon />
            </div>
            <div className="Widgets_article_right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <>
            <div className="Widgets">
                <div className="Widgets_header">
                    <h2>LinkedIN news</h2>
                    <InfoIcon />
                </div>
                {newsArticle("Recession Hits 2023", "Top news - 27899 readers")}
                {newsArticle("ChatGPT creates an havoc in the IT industry", "Top news - 13468 readers")}
                {newsArticle("Indian Tech on the rise", "Top news - 12076 readers")}
                {newsArticle("China's One Policy system leaves the nation on the brink of collapse", "Top news - 9714 readers")}

            </div>
        </>
    )
}

export default Widgets;