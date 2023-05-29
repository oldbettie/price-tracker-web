'use client'

import React from "react";
import {PageContent} from "@/Components/page/PageContent";

export default function About(): JSX.Element {
    return (
        <PageContent>
            <h2>- Contact Us -</h2>
            <p>
                Once I am closer to releasing the first version of the site I will add a contact form here.
                Right now I am focused on getting the site up and running. If you have any questions or
                would like to get in touch please <a href="mailto:jayleaton@gmail.com">email</a> me at jayleaton@gmail.com.
            </p>
        </PageContent>
    );
}
