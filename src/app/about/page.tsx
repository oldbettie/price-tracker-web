import React from "react";
import {PageContent} from "@/Components/page/PageContent";

export const metadata = {
    title: "About - Price Mates",
    description: "find and compare prices on camping and 4wd equipment"
}

export default function About(): JSX.Element {
  return (
      <PageContent>
                  <h2>- About Us -</h2>
                  <p>
                      I started to realise with the increased cost of living there were more and more people online
                      looking for a good deal on 4wd parts and camping equipment. When I was looking for parts I used to
                      have two thought patterns. The first was to look for the parts second hand really cheap and not really worry
                      about a warranty or anything like that. The second was to buy brand new and pay a premium for the
                      warranty and the peace of mind that comes with it.
                  </p>
                  <p>
                      With the increased cost of living I found second hand parts not as cheap as they used to be and sometimes are the same or more then the parts
                      at brand new prices. So I started to wait patiently for a good sale to come along before making
                      the purchase.
                  </p>
                  <p>
                      This site will allow you to track the price of the parts you need and notify you when the
                      price drops below a certain threshold. This will allow you to get the best deal on the parts you need
                      without having to guess when the best time to buy is. The long term goal once I have collected enough data
                      is to be able to predict when the best time to buy is and notify you when the price is at its lowest.
                  </p>
                  <br/>
                  <hr/>
                  <br/>
                  <p>
                      V1 - will just track a handful of highly requested parts and send an alert when the price drops below
                      a certain threshold.
                  </p>
                  <p>
                      V2 -  will allow you to track any part you want and send an alert when the price drops
                      to the value you are happy to pay you will be able to pick and choose the parts you want to be alerted for,
                      I will also have incorporated many more resellers to ensure the best prices.
                  </p>
                  <p>
                      V3 - will have a large range of sellers and once the data is big set is big enough for each product I want to use AI
                      to predict when we might get a really good deal on the items and let you know it's time to start saving those dollars!
                  </p>
                  <br/>
                  <hr/>
                  <br/>
                  <p>
                      I believe in full context from the start this will be a paid subscription, I don't know when the paid subscription will be introduced.
                      I will offer some sort of deal to those that sign up before the model is introduced. And it will be limited to the first 100 users.
                  </p>
      </PageContent>
  );
}
