import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Landing Page/Navbar";
import Post from "../../components/Landing Page/Blog/Post";

import detail1 from "../../assets/images/blog/detail/detail-1.png";
import detail2 from "../../assets/images/blog/detail/detail-2.png";
import detail3 from "../../assets/images/blog/detail/detail-3.png";
import detail4 from "../../assets/images/blog/detail/detail-4.png";

export default function BlogDetail() {
    return (
        <div className="font-body text-center mx-auto bg-light text-white">
            <Navbar />
            <div className="pt-10 pl-28 pr-20 text-left">
                <div className="text-lg flex">
                    <Link to="/">Home</Link>
                    &nbsp;/&nbsp;
                    <Link to="/blog">Blog</Link>
                    &nbsp;/&nbsp;
                    <div className="text-primary">Cookies</div>
                </div>
                <div className="flex space-x-9">
                    <div className="basis-9/12 ">
                        <div className="pt-11 text-4xl font-light leading-[3.5rem]">
                            SMOKEY BOURBON TOFFEE CHOCOLATE OAT COOKIES
                        </div>
                        <div className="pt-12 text-lg underline underline-offset-[18px] text-lightText decoration-lightText decoration-1">
                            July 25, 2021 &ensp;/&ensp; by&nbsp;
                            <span className="text-primary">Jenna</span>
                        </div>
                        <div
                            className="pt-20 text-lg pr-16 mb-14"
                            style={{ borderRight: "1px solid white" }}
                        >
                            <p>
                                I can guarantee you’ve never had a cookie like
                                this! These chewy chocolate oat cookies are
                                baked with bourbon soaked oats and topped with a
                                smokey bourbon toffee. They’re rich with a deep
                                woodsy flavor that’s perfect for any bourbon
                                lover!
                            </p>
                            <img
                                className="pt-12 pb-12"
                                src={detail1}
                                alt="detail 1"
                            />
                            <p>HOW TO INFUSE BOURBON INTO CHOCOLATE COOKIES</p>
                            <p className="pt-8">
                                Alcohol and desserts can be tricky because it’s
                                very easy to use way too much or way too little.
                                With these chocolate cookies, they give off a
                                hint of bourbon flavor without overwhelming the
                                cookies. They especially don’t have that tangy
                                alcohol flavor either.
                            </p>
                            <p className="pt-5">
                                The key to infusing the bourbon into these
                                cookies is through the oats. Before prepping the
                                dough, oats are lightly blitzed in a food
                                processor just to break them up a bit. This also
                                leaves them open to receiving the bourbon which
                                is tossed with the oats. Just two tablespoons is
                                enough to incorporate the bourbon flavor.
                            </p>
                            <p className="pt-5">
                                The oats soak in the bourbon for about 30
                                minutes. They are then ready to be mixed into
                                the chocolate dough along with the rest of the
                                dry ingredients.
                            </p>
                            <div className="pt-12 pb-12 flex space-x-3">
                                <img src={detail2} alt="detail 2" />
                                <img src={detail3} alt="detail 3" />
                            </div>
                            <p>HOW TO MAKE SMOKEY BOURBON TOFFEE</p>
                            <p className="pt-8">
                                The star of this recipe is the homemade smokey
                                bourbon toffee. It’s rich and sweet with a deep
                                mature flavor. The toffee gets this unique
                                flavor from three ingredients:
                            </p>
                            <p className="pt-5">
                                1. Bourbon – Not only is the bourbon in the
                                cookie dough, but it’s also incorporated into
                                the toffee. It’s added at the very beginning to
                                ensure the toffee is able to harden once cooled.
                                If the bourbon is added AFTER, the toffee has a
                                more soft and buttery texture which isn’t ideal
                                for this recipe.
                                <br />
                                2. Liquid Smoke – This is an ingredient often
                                used in vegan cookie as it mimics the smokiness
                                you would get from smoked BBQ. It’s essentially
                                exactly as it says – liquid that has a smokey
                                flavor. This is also added to the toffee but in
                                a very small amount. It’s super strong so a
                                little bit goes a long way.
                                <br />
                                3. Smokey Salt – To top it off, the toffee is
                                sprinkled with smoked salt. This is made by
                                combining flaky sea salt with a few drops of the
                                liquid smoke. Some of the liquid smoke flavor is
                                cooked out when the toffee is heated, so adding
                                it back in with the salt insures these cookies
                                have a delicious smokiness.
                            </p>
                            <p className="pt-5">
                                The toffee itself is also very easy to make.
                                Just heat all of the ingredients together until
                                it reaches 290F. Then just pour onto a baking
                                sheet and chill until set.
                            </p>
                            <img
                                className="pt-12 pb-12"
                                src={detail4}
                                alt="detail 4"
                            />
                            <p>WHY IS THE TOFFEE NOT BAKED INTO THE COOKIES?</p>
                            <p className="pt-5">
                                I knew that I wanted these cookies to be topped
                                with a pile of the smokey toffee, but I also
                                intended for the toffee to be baked into the
                                cookies as well. Clearly that didn’t go as
                                planned!
                            </p>
                            <p className="pt-5">
                                For starters, the toffee basically disappears
                                when baked into the cookies. The sugars melt
                                straight into the cookie and vanish. The toffee
                                also caused the cookies to spread uneven. If
                                some cookies had a bit more toffee than others,
                                they would bake into blob shapes that just were
                                not ideal.
                            </p>
                            <p className="pt-5">
                                So, in the end the toffee is left on top and I
                                prefer it that way! The delicious crunch is much
                                more prominent when sprinkled on top, and the
                                flavor is also stronger. I do recommend that you
                                chop up the toffee as fine as possible as this
                                will give the best eating experience. If the
                                toffee is too big, it very easily gets stuck in
                                your teeth!
                            </p>
                        </div>
                    </div>
                    <div className="basis-3/12">
                        <div className="pt-[14.15rem]">
                            <div className="text-xl">Popular</div>
                            <div className="pt-9">
                                <Post />
                                <Post />
                                <Post />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
