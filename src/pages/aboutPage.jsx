import React from 'react';
import { NEW_POST_PAGE } from '..';
import Content from '../components/Marketing/Content';
import Cta from '../components/Marketing/Cta';
import Hero from '../components/Marketing/Hero';
import Stats from '../components/Marketing/Stats';

export default function AboutPage() {
    return (
        <section className="max-w-screen-lg mx-auto">
            <Hero
                title="One persons trash is anothers treasure!"
                text="Just because you might not have use for material does not mean someine else can't. Lets work together to build a circular economy and minmise waste to landfill."
            />
            <Stats
                statOne="100"
                textOne="Transactions every 24 hours"
                statTwo="40"
                textTwo="Posts per hour"
                statThree="50"
                textThree="New businesses daily"
            />
            <Content
                imgSrc="https://mdbootstrap.com/img/new/ecommerce/vertical/088.jpg"
                imgAlt="Descriptive text"
                title="What are the benefits?"
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
                maxime voluptas ipsam aliquam itaque cupiditate provident architecto
                expedita harum culpa odit, inventore rem molestias laborum
                repudiandae corporis pariatur quo eius iste! Quaerat, assumenda
                voluptates! Molestias, recusandae? Maxime fuga omnis ducimus."
            />
            <Cta
                title="Help bring businesses together."
                text="Smart Source helps you connect with local businesses and communities of people
                        who can share resources."
                href={NEW_POST_PAGE}
            />
        </section>
    );
}
