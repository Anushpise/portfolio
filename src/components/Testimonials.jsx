import React from 'react';
import './Testimonials.css';
import test1 from '../img/test1.jpeg';
import test2 from '../img/test2.jpeg';
import test3 from '../img/test3.jpeg';
import test4 from '../img/test4.jpeg';
import test5 from '../img/test5.jpeg';
import test6 from '../img/test6.jpeg';
const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            quote: "Your determination and helpful attitude during our Mega Project truly define your great personality and professional drive. Your ability to organize engaging team events and embrace new challenges has been a vital part of my learning journey-thank you for being an inspiring colleague and friend.",
            author: "Mr. Amol Kurkute",
            role: "Working @Infosys",
            image: test1
        },
        {
            id: 2,
            quote: "My journey commenced in 2020, marked by a profound discovery of science through the immersive and intuitive teaching of Ms. Anjali. Her unique ability to simplify complex concepts, combined with her unwavering dedication, transformed a daunting subject into a clear career path. I remain deeply grateful for her visionary mentorship, which serves as a strategic blueprint for achieving professional excellence.",
            author: "Mr. Tejas Bhedre",
            role: "Student @ NACSC",
            image: test2
        },
        {
            id: 3,
            quote: "To describe you as the finest lecturer I have encountered would be an understatement; the profound insights gained under your tutelage are already the cornerstone of my professional transition. You transcended the traditional academic role by fostering a mentorship built on genuine connection rather than rigid authority. I carry your guidance forward with immense gratitude, confident that your influence will be the catalyst for my future success.",
            author: "Ms. Rohini Chaudhary ",
            role: "Student @ GSCOC",
            image: test3
        },
        {
            id: 4,
            quote: "your pedagogy was exceptional, seamlessly blending an engaging instructional style with the patience required for individual student mastery. Your contagious enthusiasm for the subject, combined with a willingness to provide tailored guidance, consistently transformed complex material into intuitive learning experiences. Any future student would be fortunate to experience your mentorship; your commitment to academic excellence is truly inspiring.",
            author: "Gunshree Mujewar",
            role: " @ DMIHER As a lecturer",
            image: test4
        },
        {
            id: 5,
            quote: "Her pedagogical approach is a masterclass in clarity, seamlessly distilling complex technical theories into intuitive, actionable insights. With a rare blend of visionary leadership and empathetic mentorship, she crafts an immersive learning environment that inspires both intellectual rigor and professional confidence",
            author: "Mr. Pranay Bhedre ",
            role: "Student @NEJC ",
            image: test5
        },
        {
            id: 6,
            quote: "Participating in this academic cohort has been a transformative journey, defined by a seamless integration of conceptual mastery and a vibrant, supportive learning culture. Our mentor transcended traditional instruction by fostering both intellectual rigor and the personal resilience necessary for life-long success. The discipline and visionary guidance we received have been instrumental in refining our professional confidence and foundational knowledge.",
            author: "Mr. Deepak Chaudhary",
            role: "Student @ NEJC",
            image: test6
        }
    ];

    return (
        <section className="testimonials-section">
            <h2 className="testimonials-title">Testimonials</h2>

            <div className="testimonials-grid">
                {testimonials.map((testimonial) => (
                    <div className="testimonial-card" key={testimonial.id}>
                        <div className="quote-icon">"</div>
                        <p className="testimonial-quote">{testimonial.quote}</p>
                        <div className="testimonial-author">
                            {testimonial.image && (
                                <img src={testimonial.image} alt={testimonial.author} className="author-avatar" />
                            )}
                            <h4 className="author-name">{testimonial.author}</h4>
                            <p className="author-role">{testimonial.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
