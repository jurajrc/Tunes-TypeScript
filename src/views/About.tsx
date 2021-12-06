import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// style
import './About.css'


const About: React.FC = () => {
    return (
        
        <TransitionGroup component="article" className="about">
            <h1>This is an about page.</h1>

            <CSSTransition timeout={1000} classNames="fade">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus soluta labore aliquam ad, dolorem atque nihil, eaque officiis ex beatae consequatur et nostrum consequuntur officia laudantium. Exercitationem, rerum. Ipsa, explicabo cupiditate? Quod adipisci natus, libero exercitationem ullam sit temporibus molestiae dolorum tempore eos assumenda nihil cupiditate beatae commodi obcaecati autem dolore animi nobis reiciendis officiis. Nisi iusto at dicta libero molestias quam, magni eius eligendi nulla placeat natus provident consequatur ab quasi mollitia voluptatum rem, voluptatem quisquam illo ipsa enim nostrum repellat alias doloribus? Nostrum quae blanditiis quos enim voluptatibus dolor, in iure laudantium nesciunt tenetur dolorum illo, fuga molestias, consequatur ducimus quis nam neque perspiciatis accusamus veritatis vel dignissimos praesentium facilis. Suscipit voluptates, quo voluptatum ratione delectus quis error iste quae adipisci, tempore explicabo aut magni illo quibusdam, porro repellat recusandae accusantium sapiente! Harum temporibus, earum minus sequi recusandae voluptates nisi sit, aliquam ex nostrum perferendis assumenda aut possimus?
                </p>
            </CSSTransition>

             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus soluta labore aliquam ad, dolorem atque nihil, eaque officiis ex beatae consequatur et nostrum consequuntur officia laudantium. Exercitationem, rerum. Ipsa, explicabo cupiditate? Quod adipisci natus, libero exercitationem ullam sit temporibus molestiae dolorum tempore eos assumenda nihil cupiditate beatae commodi obcaecati autem dolore animi nobis reiciendis officiis. Nisi iusto at dicta libero molestias quam, magni eius eligendi nulla placeat natus provident consequatur ab quasi mollitia voluptatum rem, voluptatem quisquam illo ipsa enim nostrum repellat alias doloribus? Nostrum quae blanditiis quos enim voluptatibus dolor, in iure laudantium nesciunt tenetur dolorum illo, fuga molestias, consequatur ducimus quis nam neque perspiciatis accusamus veritatis vel dignissimos praesentium facilis. Suscipit voluptates, quo voluptatum ratione delectus quis error iste quae adipisci, tempore explicabo aut magni illo quibusdam, porro repellat recusandae accusantium sapiente! Harum temporibus, earum minus sequi recusandae voluptates nisi sit, aliquam ex nostrum perferendis assumenda aut possimus?
             </p>

             <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus soluta labore aliquam ad, dolorem atque nihil, eaque officiis ex beatae consequatur et nostrum consequuntur officia laudantium. Exercitationem, rerum. Ipsa, explicabo cupiditate? Quod adipisci natus, libero exercitationem ullam sit temporibus molestiae dolorum tempore eos assumenda nihil cupiditate beatae commodi obcaecati autem dolore animi nobis reiciendis officiis. Nisi iusto at dicta libero molestias quam, magni eius eligendi nulla placeat natus provident consequatur ab quasi mollitia voluptatum rem, voluptatem quisquam illo ipsa enim nostrum repellat alias doloribus? Nostrum quae blanditiis quos enim voluptatibus dolor, in iure laudantium nesciunt tenetur dolorum illo, fuga molestias, consequatur ducimus quis nam neque perspiciatis accusamus veritatis vel dignissimos praesentium facilis. Suscipit voluptates, quo voluptatum ratione delectus quis error iste quae adipisci, tempore explicabo aut magni illo quibusdam, porro repellat recusandae accusantium sapiente! Harum temporibus, earum minus sequi recusandae voluptates nisi sit, aliquam ex nostrum perferendis assumenda aut possimus?
             </p>


        </TransitionGroup>
    )
}

export default About
