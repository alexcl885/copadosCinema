import { Rating } from "@mui/material";
import "./About.css";
import YouTube from "./YouTube/Youtube";

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">🎬 Welcome to Copados Cinema 🍿</h1>
            <p className="about-description">
                Copados Cinema is the ultimate hub for movie lovers. Search for films, read reviews, 
                and dive into a world of cinematic wonders like never before!
            </p>
            <p className="about-description">
                Built by Alejandro Copado López, a passionate programmer with a vision to revolutionize 
                web experiences through React. This platform is just the beginning of an incredible journey 
                into cutting-edge technology and entertainment.
            </p>
            <p className="about-description">
                Whether you're a casual viewer or a die-hard cinephile, Copados Cinema is here to provide 
                you with top-tier recommendations, trending films, and an ever-growing database of masterpieces.
            </p>
            <button className="about-button">✨ Explore Movies ✨</button>
            <br />
            <p className="about-rating">Rate your experience:</p>
            <Rating name="user-rating" defaultValue={4.5} precision={0.5} />

            <YouTube></YouTube>
        </div>
    );
}

export default About;
